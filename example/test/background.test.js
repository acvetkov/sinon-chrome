/**
 * Tests for background page
 * Using node's VM module to execute scripts
 */
var vm = require('vm');
var fs = require('fs');
var sinon = require('sinon');
var chrome = require('sinon-chrome');

// sources
var code = fs.readFileSync('src/background.js');
var context;

describe('background page', function() {

    beforeEach(function() {
        context = {
            chrome: chrome,
            console: console
        };
    });

    afterEach(function() {
        chrome.reset();
    });

    it('should update badge on startup', function() {
        // having
        chrome.tabs.query.yields(require('./data/tabs.query.json'));
        // when
        vm.runInNewContext(code, context);
        // then
        sinon.assert.calledOnce(chrome.tabs.query);
        sinon.assert.calledOnce(chrome.browserAction.setBadgeText);
        sinon.assert.calledWith(chrome.browserAction.setBadgeText, {
            text: '2'
        });
    });

    it('should return tabs by request from popup', function() {
        // having
        chrome.tabs.query.yields(require('./data/tabs.query.json'));
        var sendResponse = sinon.spy();
        // when
        vm.runInNewContext(code, context);
        chrome.tabs.query.reset();
        chrome.runtime.onMessage.trigger('get-tabs', {}, sendResponse);
        // then
        sinon.assert.calledOnce(chrome.tabs.query);
        sinon.assert.calledOnce(sendResponse);
        sinon.assert.calledWith(sendResponse, require('./data/tabs.query.json'));
    });
});
