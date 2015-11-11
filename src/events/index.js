/**
 * @author acvetkov@yandex-team.ru
 * @overview
 * Chrome event class (Signal)
 */

'use strict';

var _ = require('lodash');

export default class ChromeEvent {

    /**
     * @constructor
     */
    constructor() {
        this._listeners = [];
    }

    /**
     * Call all subscribed handlers
     * @param {*} args
     */
    trigger(...args) {
        this._listeners.forEach(handler => {
            handler.apply(null, args);
        });
    }

    /**
     * Async call all subscribed handlers
     * @param {*} args
     */
    triggerAsync(...args) {
        process.nextTick(() => {
            this.trigger(args);
        });
    }

    /**
     * Call all subscribed handlers, pass arguments ass array
     * @param {Array} args
     */
    applyTrigger(args) {
        this.trigger.apply(null, args);
    }

    /**
     * Async call all subscribed handlers, pass arguments ass array
     * @param {Array} args
     */
    applyTriggerAsync(args) {
        this.triggerAsync.apply(null, args);
    }

    /**
     * Add event listener
     * @param {Function} handler
     */
    addListener(handler) {
        if (_.isFunction(handler)) {
            this._listeners.push(handler);
        }
    }

    /**
     * Remove event listener
     * @param {Function} handler
     */
    removeListener(handler) {
        _.remove(this._listeners, listener => {
            return listener === handler;
        });
    }

    /**
     * Check event listener exists
     * @param {Function} handler
     */
    hasListener(handler) {
        return _.findIndex(this._listeners, handler) >= 0;
    }

    /**
     * Remove all listeners
     */
    removeListeners() {
        this._listeners.length = 0;
    }
};
