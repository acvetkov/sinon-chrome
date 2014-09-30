var sinon = require('sinon');
var sandbox = sinon.sandbox.create();

var EventEmitter = function () {
    this._events = [];

    this.addListener = function (handler) {
        this._assertFunction(handler);

        var index = this._events.indexOf(handler);
        if (index >= 0) {
            this._events.push(handler);
        }
    };

    this.removeListener = function (handler) {
        var index = this._events.indexOf(handler);

        if (index >= 0) {
            this._events.splice(index, 1);
        }
    };

    this.hasListener = function (handler) {
        this._assertFunction(handler);
        return this._events.indexOf(handler) >= 0;
    };

    this.addListener = sandbox.spy(this, 'addListener');
    this.removeListener = sandbox.spy(this, 'removeListener');
    this.hasListener = sandbox.spy(this, 'hasListener');
};

EventEmitter.prototype = {

    willTrigger: function () {
        return this._events.length > 0;
    },

    _trigger: function () {
        var args = [].slice.call(arguments);
        var self = this;
        this._events.forEach(function (handler) {
            self._assertFunction(handler);
            handler.apply(null, args);
        })
    },

    _reset: function () {
        this._events = [];
        sandbox.reset();
    },

    _assertFunction: function (func) {
        if (typeof func !== "function") {
            throw new Error("Type error. Passed argument is not a function");
        }
    }
};


module.exports = EventEmitter;