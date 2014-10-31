/*
 * Tests for popup page
 * Using phantomjs to render page and execute scripts
 */

var fs = require('fs');

var filename = 'src/popup.html';
var page;
var injectFn;

describe('popup page', function() {

  beforeEach(function() {
    page = require('webpage').create();

    page.onConsoleMessage = function(msg) {
      console.log(msg);
    };

    //console.log('page.onError', page.onError);
    page.onError = function(msg, trace) {
      //console.log('page.onError', msg);
      var msgStack = [msg];
      if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function(t) {
          msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
        });
      }
      // we need try..catch here as mocha throws error that catched by phantom.onError
      try {
        //mocha.throwError({msg: msg, trace: trace});
        mocha.throwError(msgStack.join('\n'));
      } catch(e) { }
    };

    page.onInitialized = function() {
      page.injectJs(node_modules + 'chai/chai.js');
      page.injectJs(node_modules + 'sinon/pkg/sinon-1.11.1.js');
      page.injectJs(node_modules + 'sinon-chrome/src/chrome-event.js');
      page.injectJs(node_modules + 'sinon-chrome/src/chrome.js');
      page.injectJs(node_modules + 'sinon-chrome/src/phantom-tweaks.js');
      page.evaluate(function() {
        expect = chai.expect;
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

  it('should request IP and show it on start', function(done) {
    // having
    injectFn = function() {
      page.evaluate(function() {
        chrome.runtime.sendMessage.yields('1.2.3.4');
      });
    };

    // when
    page.open(filename, function(status) {
      var ip = page.evaluate(function() {
        expect(document.querySelector('#ip').innerText).to.equal('1.2.3.4');
      });
      done();
    });

  });

  it('should display opened tabs on start ', function(done) {
    // having
    injectFn = function() {
      page.evaluate(function(tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/tabs.query.json'));
    };

    // when
    page.open(filename, function(status) {
      var count = page.evaluate(function() {
        expect(document.querySelector('#tabs').children.length).to.equal(2);
      });
      done();
    });
  });
});


