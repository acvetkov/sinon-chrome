/**
 * Tests for background page
 * Using node's VM module to execute scripts
 *
 * Example: mocha test/bg
 */

// this required for sinon's fake XMLHttpRequest
global.self = global;
global.XMLHttpRequest = function() {};

var vm = require('vm');
var fs = require('fs');
var sinon = require('sinon');
var chrome = require('sinon-chrome');
var assert = require('chai').assert;

var sandbox;

// sources
var code = fs.readFileSync('src/background.js');
var context;

describe('background page', function() {

    beforeEach(function() {
        sandbox = sinon.sandbox.create();
        sandbox.useFakeXMLHttpRequest();
        sandbox.useFakeServer();

        context = {
            chrome: chrome,
            console: console,
            XMLHttpRequest: global.XMLHttpRequest
        };
    });

    afterEach(function() {
        chrome.reset();
        sandbox.restore();
    });

    it('should display opened tabs in button badge', function() {
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

    it('should retrieve IP when `get-ip` message comes', function() {
        // fake response
        sandbox.server.respondWith("http://httpbin.org/ip", [
            200,
            { "Content-Type": "application/json" },
            fs.readFileSync('test/data/ip-ok.json', 'utf-8')
        ]);
        var sendResponse = sandbox.spy();
        // when
        vm.runInNewContext(code, context);
        chrome.runtime.onMessage.trigger('get-ip', {}, sendResponse);
        sandbox.server.respond();
        // then
        sinon.assert.calledOnce(sendResponse);
        sinon.assert.calledWith(sendResponse, '1.2.3.4');
    });

});
