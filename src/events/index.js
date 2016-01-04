import _ from 'lodash';

export default class ChromeEvent {

    /**
     * @constructor
     */
    constructor () {
        this._listeners = [];
    }

    /**
     * Manual dispatch
     */
    dispatch () {
        this.trigger.apply(this, arguments);
    }

    /**
     * Call all subscribed handlers
     */
    trigger (...args) {
        this._listeners.forEach(handler => {
            handler.apply(null, args);
        });
    }

    /**
     * Async call all subscribed handlers
     */
    triggerAsync (...args) {
        setTimeout(() => {
            this.trigger.apply(this, args);
        }, 0);
    }

    /**
     * Call all subscribed handlers, pass arguments ass array
     * @param {Array} args
     */
    applyTrigger (args) {
        this.trigger.apply(this, args);
    }

    /**
     * Async call all subscribed handlers, pass arguments ass array
     * @param {Array} args
     */
    applyTriggerAsync (args) {
        this.triggerAsync.apply(this, args);
    }

    /**
     * Add event listener
     * @param {Function} handler
     */
    addListener (handler) {
        if (_.isFunction(handler)) {
            this._listeners.push(handler);
        }
    }

    /**
     * Remove event listener
     * @param {Function} handler
     */
    removeListener (handler) {
        const index = this._listeners.indexOf(handler);
        if (index >= 0) {
            this._listeners.splice(index, 1);
        }
    }

    /**
     * Check event listener exists
     * @param {Function} handler
     */
    hasListener (handler) {
        return this._listeners.indexOf(handler) >= 0;
    }

    /**
     * Remove all listeners
     */
    removeListeners () {
        this._listeners = [];
    }
}
