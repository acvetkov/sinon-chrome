var vm = require('vm');
var fs = require('fs');
var expect = require('chai').expect;
var sinon = require('sinon');
var chrome = require('sinon-chrome');

// source
var code = fs.readFileSync('src/background.js');
var context;

// tests
describe('background page', function() {

    beforeEach(function() {
        context = vm.createContext({chrome: chrome, console: console});
    });

    afterEach(function() {
        chrome._reset();
    });

    it('should attach listener and set icon on init', function() {
        vm.runInContext(code, context);
        sinon.assert.calledOnce(chrome.browserAction.onClicked.addListener);
        sinon.assert.calledOnce(chrome.browserAction.setIcon);
        sinon.assert.calledWithMatch(chrome.browserAction.setIcon, {
            path: "icon1.png"
        });
    });

    it('should change icon on every browserAction click', function() {
        vm.runInContext(code, context);

        // first click
        chrome.browserAction.setIcon.reset();
        chrome.browserAction.onClicked.trigger();
        sinon.assert.calledOnce(chrome.browserAction.setIcon);
        sinon.assert.calledWithMatch(chrome.browserAction.setIcon, {
            path: "icon2.png"
        });

        // second click
        chrome.browserAction.setIcon.reset();
        chrome.browserAction.onClicked.trigger();
        sinon.assert.calledOnce(chrome.browserAction.setIcon);
        sinon.assert.calledWithMatch(chrome.browserAction.setIcon, {
            path: "icon3.png"
        });
    });
});