/*
 * Tests for popup page
 * Using phantomjs to render page and execute scripts
 */

describe('popup page', function() {

  // sometimes it takes time to start phantomjs
  this.timeout(4000);

  var FILENAME = 'src/popup.html';

  it('should request and display IP on start', function(done) {
    // stub `chrome.runtime.sendMessage` to call callback with '1.2.3.4' as argument
    beforeLoadFn = function() {
      page.evaluate(function() {
        chrome.runtime.sendMessage.yields('1.2.3.4');
      });
    };
    page.open(FILENAME, function() {
      // assert
      page.evaluate(function() {
        assert.equal(document.querySelector('#ip').innerText, '1.2.3.4');
      });
      done();
    });
  });

  it('should display opened tabs on start', function(done) {
    // stub `chrome.runtime.sendMessage` to yield with json from file
    beforeLoadFn = function() {
      page.evaluate(function(tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/tabs.query.json'));
    };
    page.open(FILENAME, function() {
      // assert
      page.evaluate(function() {
        assert.equal(document.querySelector('#tabs').children.length, 2);
      });
      done();
    });
  });

  it('should activate tab by click', function(done) {
    // stub `chrome.runtime.sendMessage` to yield with json from file
    beforeLoadFn = function() {
      page.evaluate(function(tabs) {
        chrome.tabs.query.yields(JSON.parse(tabs));
      }, fs.read('test/data/tabs.query.json'));
    };
    page.open(FILENAME, function() {
      page.evaluate(function() {
        // emulate click on first link
        document.querySelector('#tabs a').dispatchEvent(clickEvent);
        // check that chrome.tabs.update was called with correct arguments
        sinon.assert.calledOnce(chrome.tabs.update);
        assert.equal(chrome.tabs.update.firstCall.args[0], 42);
        assert.deepEqual(chrome.tabs.update.firstCall.args[1], {active: true});
      });
      done();
    });
  });

});


