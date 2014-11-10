# sinon-chrome
## What is it?
Smart mocks of [chrome.* extensions API](https://developer.chrome.com/extensions) via [SinonJS stubs](http://sinonjs.org/docs/#stubs).

## Why this is needed?
To run tests of chrome extensions with [PhantomJS](http://phantomjs.org).

## How to install?
````
npm i sinon-chrome
````

## How to use?
**Short answer:** please see [example](/example) in this repo.  
**Long answer:**  

To start writing unit-tests you should re-arrange a bit your extension sources:
````js
|--src      // extension sources
|  |--manifest.json
|  |-- ...
|   
|--test
   |--data  // sample json results of chrome.* api calls
   |   |--tabs.query.json
   |   |--tabs.get.json
   |   |--...
   |
   |--bg.test.js    // background page tests
   |--popup.test.js // popup page tests
   |--empty.html    // empty html file used as generated background page
   |--...
````

Next install all required stuff (if not yet):

1. [nodejs](http://nodejs.org)
2. **sinon-chrome** (it will automatically install phantomjs and sinonjs)
3. [mocha](http://mochajs.org) or any other testing framework
4. [chaijs](http://chaijs.com) or any other assertion library

Assume we have simple chrome extension that displays number of opened tabs in button badge.  

*background page:*
````js
chrome.tabs.query({}, function(tabs) {
  chrome.browserAction.setBadgeText({text: String(tabs.length)});
});
````
Test plan:  
1. inject our mocked chrome.* api into phantomjs  
2. mock `chrome.tabs.query` to return pre-defined response, e.g. [2 tabs](/example/test/data/tabs.query.json)  
3. run our background page in phantomjs  
4. assert that button badge equals to '2'  

The code snippet with comments:
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
  
  // #1. inject chrome.* api mocks and other stuff into page
  page.onInitialized = function() {
    page.injectJs(node_modules + 'chai/chai.js');
    page.injectJs(node_modules + 'sinon/pkg/sinon-1.11.1.js');
    page.injectJs(node_modules + 'sinon-chrome/src/chrome-event.js');
    page.injectJs(node_modules + 'sinon-chrome/src/chrome.js');
    page.injectJs(node_modules + 'sinon-chrome/src/phantom-tweaks.js');
    page.evaluate(function() {
      assert = chai.assert;
    });
    // run additional functions defined in tests
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
describe('background page', function() {

  // sometimes it takes time to start phantomjs
  this.timeout(4000);

  // generated background page (or here may be real background page if exists)
  var filename = 'empty.html';

  it('should display opened tabs in button badge', function(done) {
    // having
    injectFn = function() {
      page.evaluate(function(tabs) {
        // #2. stub `chrome.tabs.query` to return pre-defined response
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/tabs.query.json'));

      // #3. run background js
      page.injectJs('src/background.js');
    };
    // when
    page.open(filename, function(status) {
      page.evaluate(function() {
        // #4. assert that button badge equals to '2'
        sinon.assert.calledOnce(chrome.browserAction.setBadgeText);
        sinon.assert.calledWithMatch(chrome.browserAction.setBadgeText, {
            text: "2"
        });
      });
      done();
    });
  });
  
});

// run
mocha.run(function(failures) {
  phantom.exit(failures);
});

````
Now run in terminal:
````
  $ phantomjs test/bg.test.js
  
  background page
    ✓ should display opened tabs in button badge

  1 passing (98ms)
````
Please see more complicated and structured example [here](/example)

## How to trigger chrome event?
````js
chrome.tab.onCreated.trigger({url: 'http://google.com'});
// OR 
chrome.tab.onUpdated.applyTrigger([1, {status: "complete"}, {id: 1, url: 'http://google.com'}]);
````

## More questions?
Feel free to [open issue](https://github.com/vitalets/sinon-chrome/issues).
