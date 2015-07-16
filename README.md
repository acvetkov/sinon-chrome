# sinon-chrome
## What is it?
Mocks of [chrome.* extensions API](https://developer.chrome.com/extensions) via [SinonJS stubs](http://sinonjs.org/docs/#stubs).

## Why this is needed?
To run unit-tests of chrome extensions.
**Features:**
 - global `chrome` object with lazy methods initialization
 - support of `chrome.alarms` via `setTimeout`
 - support of chrome events manual triggering

## How to install?
````
npm i sinon-chrome
````

## How to use?
To start writing unit-tests you should re-arrange a bit your extension sources:
````js
|--src      // extension sources
|  |--manifest.json
|  |-- ...
|
|--test
   |--data  // fake json results of chrome.* api calls
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
1. inject our fake chrome.* api into phantomjs
2. mock `chrome.tabs.query` to return pre-defined response, e.g. [2 tabs](/example/test/data/tabs.query.json)
3. run our background page in phantomjs / nodejs
4. assert that button badge equals to '2'

The code snippet with comments (phantomjs):
**beforeEach**
````js
var node_modules = '../../node_modules/';
// load mocha
phantom.injectJs(node_modules + 'mocha/mocha.js');
phantom.injectJs(node_modules + 'sinon-chrome/src/phantom-tweaks.js');
mocha.setup({ui: 'bdd', reporter: 'spec'});

var fs = require('fs');
var page;
var beforeLoadFn;

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
    page.injectJs(node_modules + 'sinon-chrome/chrome.js');
    page.injectJs(node_modules + 'sinon-chrome/src/phantom-tweaks.js');
    page.evaluate(function() {
      assert = chai.assert;
    });
    // run additional functions before page load
    if (beforeLoadFn) {
      beforeLoadFn();
    }
  };
});

afterEach(function() {
  page.close();
  beforeLoadFn = null;
});
````

**tests**
````js
// tests
describe('background page', function() {

  // sometimes it takes time to start phantomjs
  this.timeout(4000);

  it('should display opened tabs in button badge', function(done) {
    // #1. open empty page and inject chrome.* api mocks
    page.open('test/empty.html', function() {
      // #2. stub `chrome.tabs.query` to return pre-defined response
      page.evaluate(function(tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/tabs.query.json'));

      // #3. run background js
      page.injectJs('src/background.js');

      // #4. assert that button badge equals to '2'
      page.evaluate(function() {
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
Please see full [example here](/example)

## How to trigger chrome event manually?
You can call `trigger` method on any mocked chrome event:
````js
chrome.tab.onCreated.trigger({url: 'http://google.com'});
// OR (pass data as array)
chrome.tab.onUpdated.applyTrigger([1, {status: "complete"}, {id: 1, url: 'http://google.com'}]);
````

## More questions?
Feel free to [open issue](https://github.com/vitalets/sinon-chrome/issues).
