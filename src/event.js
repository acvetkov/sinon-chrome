var EventEmitter = function () {
    this._events = [];
};

EventEmitter.prototype = {

    /**
     * @param {Function} handler
     */
    addListener: function (handler) {
        this._assertFunction(handler);

        var index = this._events.indexOf(handler);
        if (index >= 0) {
            this._events.push(handler);
        }
    },

    /**
     * @param {Function} handler
     */
    removeListener: function (handler) {
        this._assertFunction(handler);
    },

    /**
     * @param {Function} handler
     */
    hasListener: function (handler) {
        this._assertFunction(handler);
        return this._events.indexOf(handler) >= 0;
    },

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
    },

    _assertFunction: function (func) {
        if (typeof func !== "function") {
            throw new Error("Type error. Passed argument is not a function");
        }
    }
};


module.exports = EventEmitter;