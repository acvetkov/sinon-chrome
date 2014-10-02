#sinon-chrome
## What is it?
Library for mocking [chrome.* extension API](https://developer.chrome.com/extensions) via [SinonJS](http://sinonjs.org) stubs.

## Why this is needed?
To run chrome extension unit-tests under [nodejs](http://nodejs.org).

## How to install?
````
npm i sinon-chrome
````

### How to use?
Assume you have chrome extension /background.js/ retrieving current tab title:
````js
function getTitle(ccallback) {
  chrome.tabs.getCurrent(funciton (tab) {
    callback(tab.title);
  })
}
````

Now lets write unit-test /test.js/ using [mocha](http://visionmedia.github.io/mocha) and [chai](http://chaijs.com):
````js
var vm = require('vm');
var fs = require('fs');
var sinon = require('sinon');
var expect = require('chai').expect;
global.chrome = require('sinon-chrome'); // note `global` to have access in `runInThisContext`

// sources
vm.runInThisContext(fs.readFileSync('background.js'));

// tests
describe('background page test pack', function() {
    it('should retrieve current tab title', function(done) {
        getTitle(function(title) {
            expect(chrome.tabs.getCurrent.calledOnce).to.be.true;
            expect(title).to.equal('Google'); // `Google` is default response located in `data/tabs/getCurrent.json`
            done();
        });
    });
});
````

Run test
````
mocha test.js
````
You can find this sample in [sample directory](/sample)

## Links


