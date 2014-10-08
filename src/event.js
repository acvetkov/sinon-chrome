function assertFunction(func) {
    if (typeof func !== "function") {
        throw new Error("Type error. Passed argument is not a function");
    }
}

var EventEmitter = function () {
    this._events = [];

    this.addListener = function (handler) {
        assertFunction(handler);
        if (!this.hasListener(handler)) {
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
        return this._events.indexOf(handler) >= 0;
    };
};

EventEmitter.prototype = {
    /**
     * Similar to sinon's yieldsAsync: store data to pass to handler when event triggered
     */
    yieldsAsync: function() {
        this.data = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
            this.data[i] = arguments[i];
        }
    },

    trigger: function () {
        var args = arguments.length ? [].slice.call(arguments) : this.data;
        this._events.forEach(function (handler) {
            assertFunction(handler);
            handler.apply(null, args);
        });
    },

    triggerAsync: function () {
        var args = arguments.length ? [].slice.call(arguments) : this.data;
        process.nextTick(function() {
            this.trigger.apply(this, args);
        }.bind(this));
    },

    removeListeners: function() {
       this._events = [];
    }
};

module.exports = EventEmitter;
