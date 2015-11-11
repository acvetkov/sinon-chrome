
var sinon = require('sinon');
var assert = require('chai').assert;
var ChromeEvent = require('../src/chrome-event');
var chrome = require('../src/chrome');

describe("Chrome", function() {

  afterEach(function() {
    chrome.reset();
  });

  it("should define required methods", function() {
    assert.isObject(chrome);
    assert.isFunction(chrome.reset);
    assert.isFunction(chrome.flush);
    assert.ok(Object.keys(chrome).length > 1);
  });

  it("should define chrome events", function() {
    assert.notInstanceOf(chrome.tabs.created, ChromeEvent);
    assert.instanceOf(chrome.tabs.onCreated, ChromeEvent);
    assert.property(chrome.tabs.onCreated.addListener, 'calledOnce');
    assert.property(chrome.tabs.onCreated.removeListener, 'calledOnce');
    assert.property(chrome.tabs.onCreated.hasListener, 'calledOnce');
    assert.property(chrome.tabs.onCreated.removeListeners, 'calledOnce');
  });

  it("should define runtime tweaks", function() {
    assert.ok(chrome.runtime.id);
    assert.isFunction(chrome.runtime.getURL);
    assert.equal(chrome.runtime.getURL('index.html'), 'chrome-extension://abcabcbabcabcabcbabcabcabcbabcab/index.html');
    assert.equal(chrome.runtime.getURL('/index.html'), 'chrome-extension://abcabcbabcabcabcbabcabcabcbabcab/index.html');
  });

  it("should define i18n tweaks", function() {
    assert.isFunction(chrome.i18n.getMessage);
    assert.equal(chrome.i18n.getMessage('abc'), 'abc');
    assert.equal(chrome.i18n.getMessage('@@ui_locale'), 'en');
  });

});