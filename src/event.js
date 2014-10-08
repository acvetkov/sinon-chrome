function assertFunction(func) {
    if (typeof func !== "function") {
        throw new Error("Type error. Passed argument is not a function");
    }
}

var EventEmitter = function () {
    this._events = [];
    this.isAsync = false;

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
     * Similar to sinon's yields: store data to pass to handler when event triggered
     */
    yields: function() {
        this.isAsync = false;
        this.data = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
            this.data[i] = arguments[i];
        }
    },
    /**
     * Same as yields. Actually sync OR async depends on trigger OR triggerAsync
     */
    yieldsAsync: function() {
        this.yields.apply(this, arguments);
        this.isAsync = true;
    },

    trigger: function () {
        var args = arguments.length ? [].slice.call(arguments) : this.data;
        if (this.isAsync) {
            process.nextTick(this.executeListeners.bind(this, args));
        } else {
            this.executeListeners.call(this, args);
        }
    },

    executeListeners: function(args) {
        this._events.forEach(function (handler) {
            assertFunction(handler);
            handler.apply(null, args);
        });
    },

    removeListeners: function() {
       this._events = [];
    }
};

module.exports = EventEmitter;
