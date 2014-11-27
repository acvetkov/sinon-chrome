
var sinon = require('sinon');
var assert = require('chai').assert;
var chromeAlarms = require('../src/chrome-alarms');

var clock;
var trigger = sinon.spy();
chromeAlarms.onTrigger(trigger)

describe("Chrome alarms", function() {

  beforeEach(function() {
    trigger.reset();
    clock = sinon.useFakeTimers();
  });

  afterEach(function() {
    clock.restore();
  });

  it("should define required methods", function() {
    assert.isFunction(chromeAlarms.create);
    assert.isFunction(chromeAlarms.get);
    assert.isFunction(chromeAlarms.getAll);
    assert.isFunction(chromeAlarms.clear);
    assert.isFunction(chromeAlarms.clearAll);
  });

  it("should create alarm with `when`", function() {
    chromeAlarms.create('alarm', {
      when: 1
    });
    clock.tick(1);
    sinon.assert.calledOnce(trigger);
    assert.deepEqual(trigger.firstCall.args[0], {
      name: 'alarm',
      scheduledTime: 1
    });
  });

  it("should create alarm with `delayInMinutes`", function() {
    chromeAlarms.create('alarm', {
      delayInMinutes: 1
    });
    clock.tick(1);
    sinon.assert.notCalled(trigger);
    clock.tick(60 * 1000);
    sinon.assert.calledOnce(trigger);
    assert.deepEqual(trigger.firstCall.args[0], {
      name: 'alarm',
      scheduledTime: 60 * 1000
    });
  });

  it("should create alarm with `delayInMinutes` and `periodInMinutes`", function() {
    chromeAlarms.create('alarm', {
      delayInMinutes: 1,
      periodInMinutes: 2
    });
    clock.tick(1);
    sinon.assert.notCalled(trigger);
    clock.tick(60 * 1000);
    sinon.assert.calledOnce(trigger);
    assert.deepEqual(trigger.firstCall.args[0], {
      name: 'alarm',
      scheduledTime: 60 * 1000,
      periodInMinutes: 2
    });
    clock.tick(2 * 60 * 1000);
    sinon.assert.calledTwice(trigger);
    assert.deepEqual(trigger.secondCall.args[0], {
      name: 'alarm',
      scheduledTime: 3 * 60 * 1000,
      periodInMinutes: 2
    });
  });

});