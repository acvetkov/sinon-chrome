#sinon-chrome
## What is it?
Library for mocking [chrome.* extension API](https://developer.chrome.com/extensions) via [SinonJS](http://sinonjs.org) stubs.

## Why this is needed?
To run chrome extension unit-tests under [nodejs](http://nodejs.org).

## How to install?
````
npm i sinon-chrome
````

## How to use?
Assume you have chrome extension background page that makes some chrome.* API calls.
Let's write unit-test for it.
First good step is to split your files onto **src** and **test** directories (if not yet).   
Then, install some testing stuff: [mocha](http://visionmedia.github.io/mocha), [chai](http://chaijs.com) and [jsdom](https://github.com/tmpvar/jsdom)
````
npm i mocha chai jsdom
npm i sinon-chrome
````

Now create **test/test.js** file with test scenarios. The code is documented:
````js
var fs = require('fs');
var sinon = require('sinon');
var chrome = require('sinon-chrome');
var jsdom = require('jsdom'); // jsdom is used for creating sandbox window
var assert = require('chai').assert; 

// variable to store sandbox window
var window;

describe('background page', function() {

    beforeEach(function(done) {
        jsdom.env({
            // fake background page
            html: '<html></html>',
            // js source
            src: [fs.readFileSync('src/background.js', 'utf-8')],
            created: function (errors, wnd) {
              // attach `chrome` to sandbox window
              wnd.chrome = chrome;
              wnd.console = console;
            },
            done: function (errors, wnd) {
                if (errors) {
                    console.log(errors);
                    done(true);
                } else {
                    window = wnd;
                    done();
                }
            }
        });
    });

    afterEach(function() {
        // clean up all spies and stubs
        chrome._reset();
        // close sandbox window and free memory
        window.close();
    });

    it('should update badge on startup', function() {
        sinon.assert.calledOnce(chrome.tabs.query);
        sinon.assert.calledOnce(chrome.browserAction.setBadgeText);
        sinon.assert.calledWithMatch(chrome.browserAction.setBadgeText, {
            text: '4'
        });
    });

    // more tests ...
});
````

And finally run tests from console:
````
mocha
````
````
~/projects/sinon-chrome/sample $ mocha


  background page
    ✓ should update badge on startup


  1 passing (98ms)
````

Please have a look on [sample directory](/sample) for fully tested extension example.

## Links


