# sinon-chrome
## What is it?
Mock of [chrome.* extensions API](https://developer.chrome.com/extensions) via [SinonJS](http://sinonjs.org) stubs.

## Why this is needed?
To run unit-tests of chrome extensions with [mocha](http://mochajs.org), [nodejs](http://nodejs.org) and [phantomjs](http://phantomjs.org).

## How to install?
````
npm i sinon-chrome
````

## How to use?
**Short answer:** please see [example](/example) in this repo.  
**Long answer:**  
The main point of mocking chrome.* API is to setup mocks before any javascript operations start.  
There are to possible options:

1. execute js via node's [vm.runInNewContext](http://nodejs.org/api/vm.html#vm_vm_runinnewcontext_code_sandbox_filename) method
2. execute js in phantomjs environment

First method is suitable for *background pages* when it does not use any `window` methods or DOM operations.  
Second method is suitable for *popup / options pages*.

To start writing unit-tests you should re-arrange a bit your extension sources:
````js
|--src      // extension sources
|  |--manifest.json
|  |-- ...
|   
|--test
   |--bg    // background page tests
   |  |--bg.test.js
   |
   |--ui    // popup and options pages tests
   |  |--popup.test.js
   |
   |--data  // sample json results of chrome.* api calls
      |--tabs.query.json
      |--tabs.get.json
      |--...
````

Next install all required stuff (if not yet):

1. [nodejs](http://nodejs.org)
2. sinon-chrome (it will automatically install mocha, phantomjs and sinonjs)
3. [chaijs](http://chaijs.com) or any other assertion library (optionally)

**background page**  
We will run background page tests with mocha and nodejs.  
Create simplest test and put in `test/bg/bg.test.js`:
````js
var vm = require('vm');
var fs = require('fs');
var sinon = require('sinon');
var chrome = require('sinon-chrome');
var assert = require('chai').assert;

// sources
var code = fs.readFileSync('src/background.js');
var context;

describe('background page', function() {
    beforeEach(function() {
        context = {
            // inject chrome.* api mock into context
            chrome: chrome,
            console: console
        };
    });
    afterEach(function() {
        chrome.reset();
    });
    it('should display opened tabs count in button badge', function() {
        // stub `tabs.query`
        chrome.tabs.query.yields(require('../data/tabs.query.json'));
        // when
        vm.runInNewContext(code, context);
        // then
        sinon.assert.calledOnce(chrome.browserAction.setBadgeText);
        sinon.assert.calledWithMatch(chrome.browserAction.setBadgeText, {
            text: "2"
        });
    });
});    
````
Now run in terminal:
````
  $ mocha test/bg
  
  background page
    ✓ should display opened tabs count in button badge

  1 passing (98ms)
````

**popup page**  
We will run popup page tests with mocha and phantomjs (because we need webkit to render page).  
Create simplest test and put in `test/ui/popup.test.js`:  

````js
var node_modules = '../../node_modules/';
// load mocha
phantom.injectJs(node_modules + 'mocha/mocha.js');
phantom.injectJs(node_modules + 'sinon-chrome/src/phantom-tweaks.js');
mocha.setup({ui: 'bdd', reporter: 'spec'});

var fs = require('fs');
var page;
var injectFn;

beforeEach(function() {
  page = require('webpage').create();

  page.onConsoleMessage = function(msg) {
    console.log(msg);
  };

  page.onError = function(msg, trace) {
    var msgStack = [msg];
    if (trace && trace.length) {
      msgStack.push('TRACE:');
      trace.forEach(function(t) {
        msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
      });
    }
    // we need try..catch here as mocha throws error that catched by phantom.onError
    try {
      mocha.throwError(msgStack.join('\n'));
    } catch(e) { }
  };
  
  // inject chrome.* api mocks and other stuff into page
  page.onInitialized = function() {
    page.injectJs(node_modules + 'chai/chai.js');
    page.injectJs(node_modules + 'sinon/pkg/sinon-1.11.1.js');
    page.injectJs(node_modules + 'sinon-chrome/src/chrome-event.js');
    page.injectJs(node_modules + 'sinon-chrome/src/chrome.js');
    page.injectJs(node_modules + 'sinon-chrome/src/phantom-tweaks.js');
    page.evaluate(function() {
      assert = chai.assert;

      // for emulating click
      clickEvent = document.createEvent('MouseEvents');
      clickEvent.initMouseEvent('click', true);
    });
    if (injectFn) {
      injectFn();
    }
  };
});

afterEach(function() {
  page.close();
  injectFn = null;
});

// tests
describe('popup page', function() {

  // sometimes it takes time to start phantomjs
  this.timeout(4000);

  var filename = 'src/popup.html';

  it('should request and display IP on start', function(done) {
    // having
    injectFn = function() {
      page.evaluate(function() {
        // stub `chrome.runtime.sendMessage` to call callback with '1.2.3.4' as argument
        chrome.runtime.sendMessage.yields('1.2.3.4');
      });
    };
    // when
    page.open(filename, function(status) {
      page.evaluate(function() {
        assert.equal(document.querySelector('#ip').innerText, '1.2.3.4');
      });
      done();
    });
  });
  
});

mocha.run(function(failures) {
  phantom.exit(failures);
});

````
Now run in terminal:
````
  $ phantomjs test/ui/popup.test.js
  
  popup page
    ✓ should request and display IP on start

  1 passing (98ms)
````
## How to trigger chrome event?
````js
chrome.tab.onCreated.trigger({url: 'http://google.com'});
// OR 
chrome.tab.onUpdated.applyTrigger([1, {status: "complete"}, {id: 1, url: 'http://google.com'}]);
````

## More questions?
Feel free to [open issue](https://github.com/vitalets/sinon-chrome/issues).
