
var fs = require('fs');
var page;
var injectFn;

beforeEach(function() {
  page = require('webpage').create();

  page.onConsoleMessage = function(msg) {
    console.log(msg);
  };

  // listen page.onError to catch assertions
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

  page.onInitialized = function() {
    // exclude `about:blank`
    var isBlank = page.evaluate(function() {
        return window.location.href === 'about:blank';
    });
    if (isBlank) {
        return;
    }

    page.injectJs(node_modules + 'chai/chai.js');
    page.injectJs(node_modules + 'sinon/pkg/sinon-1.11.1.js');
    page.injectJs(node_modules + 'sinon-chrome/chrome.js');
    page.injectJs(node_modules + 'sinon-chrome/phantom-tweaks.js');
    page.evaluate(function() {
      assert = chai.assert;

      // for emulating click
      clickEvent = document.createEvent('MouseEvents');
      clickEvent.initMouseEvent('click', true);
    });
    // call additional function defined in tests
    if (injectFn) {
      injectFn();
    }
  };
});

afterEach(function() {
  page.close();
  injectFn = null;
});