
var sinon = require('sinon');
var assert = require('chai').assert;
var ChromeEvent = require('../src/chrome-event');
var event;

describe("Chrome event", function() {

  beforeEach(function() {
    event = new ChromeEvent();
  });

  it("should define required methods", function() {
    assert.isFunction(event.addListener);
    assert.isFunction(event.removeListener);
    assert.isFunction(event.hasListener);
    assert.isFunction(event.removeListeners);

    assert.isFunction(event.trigger);
    assert.isFunction(event.triggerAsync);
    assert.isFunction(event.applyTrigger);
    assert.isFunction(event.applyTriggerAsync);
  });

  it("should add listener if it is not added", function() {
    assert.equal(event._listeners.length, 0);
    event.addListener(sinon.spy());
    assert.equal(event._listeners.length, 1);
  });

  it("should not add listener, if it was already added", function() {
    var spy = sinon.spy();
    event.addListener(spy);
    event.addListener(spy);
    assert.equal(event._listeners.length, 1);
  });

  it("should remove listener", function() {
    var spy = sinon.spy();
    event.addListener(spy);
    event.removeListener(spy);
    assert.equal(event._listeners.length, 0);
  });

  it("should check listener existance", function() {
    var spy = sinon.spy();
    event.addListener(spy);
    assert.ok(event.hasListener(spy));
    event.removeListener(spy);
    assert.notOk(event.hasListener(spy));
  });

  it("should remove all listeners", function() {
    event.addListener(sinon.spy());
    event.addListener(sinon.spy());
    assert.equal(event._listeners.length, 2);
    event.removeListeners();
    assert.equal(event._listeners.length, 0);
  });

  it("should trigger listeners with correct args", function() {
    var spy1 = sinon.spy();
    var spy2 = sinon.spy();
    event.addListener(spy1);
    event.addListener(spy2);
    event.trigger(1, {a: 1});
    [spy1, spy2].forEach(function(spy) {
      sinon.assert.calledOnce(spy);
      sinon.assert.calledWithMatch(spy, 1, {a: 1});
    });
  });

  it("should triggerAsync listeners with correct args", function(done) {
    var spy1 = sinon.spy();
    var spy2 = sinon.spy();
    event.addListener(spy1);
    event.addListener(spy2);
    event.triggerAsync(1, {a: 1});
    [spy1, spy2].forEach(function(spy) {
      sinon.assert.notCalled(spy);
    });
    setTimeout(function() {
      [spy1, spy2].forEach(function(spy) {
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWithMatch(spy, 1, {a: 1});
      });
      done();
    }, 10);
  });

  it("should apply trigger to listeners with correct args", function() {
    var spy1 = sinon.spy();
    var spy2 = sinon.spy();
    event.addListener(spy1);
    event.addListener(spy2);
    event.applyTrigger([1, {a: 1}]);
    [spy1, spy2].forEach(function(spy) {
      sinon.assert.calledOnce(spy);
      sinon.assert.calledWithMatch(spy, 1, {a: 1});
    });
  });

  it("should apply triggerAsync to listeners with correct args", function(done) {
    var spy1 = sinon.spy();
    var spy2 = sinon.spy();
    event.addListener(spy1);
    event.addListener(spy2);
    event.applyTriggerAsync([1, {a: 1}]);
    [spy1, spy2].forEach(function(spy) {
      sinon.assert.notCalled(spy);
    });
    setTimeout(function() {
      [spy1, spy2].forEach(function(spy) {
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWithMatch(spy, 1, {a: 1});
      });
      done();
    }, 10);
  });

});