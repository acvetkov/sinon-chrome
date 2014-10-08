var fs = require('fs');
var sinon = require('sinon');
var chrome = require('sinon-chrome');
var jsdom = require('jsdom');
var expect = require('chai').expect;

var window;

describe('background page', function() {

    beforeEach(function(done) {
        jsdom.env({
            // generated background page
            html: '<html></html>',
            // js source
            src: [fs.readFileSync('src/background.js', 'utf-8')],
            created: function (errors, wnd) {
              // attach `chrome` to window
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
        chrome._reset();
        window.close();
    });

    it('should attach listeners on startup', function() {
        sinon.assert.calledOnce(chrome.runtime.onMessage.addListener);
        sinon.assert.calledOnce(chrome.tabs.onCreated.addListener);
        sinon.assert.calledOnce(chrome.tabs.onRemoved.addListener);
    });

    it('should update badge on startup', function() {
        sinon.assert.calledOnce(chrome.tabs.query);
        sinon.assert.calledOnce(chrome.browserAction.setBadgeText);
        sinon.assert.calledWithMatch(chrome.browserAction.setBadgeText, {
            text: '4'
        });
    });

    it('should return tabs by request from popup', function() {
        chrome.tabs.query.reset();
        var sendResponse = sinon.spy();
        chrome.runtime.onMessage.trigger('get-tabs', {}, sendResponse);
        sinon.assert.calledOnce(chrome.tabs.query);
        sinon.assert.calledOnce(sendResponse);
        sinon.assert.calledWith(sendResponse, sinon.match.array);
        sinon.assert.calledWith(sendResponse, sinon.match(function (value) {
            return value.length === 4;
        }));
    });
});
