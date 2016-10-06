/**
 * @author https://github.com/acvetkov
 * @overview Events cache
 */

import {forEach} from 'lodash';
import sinon from 'sinon';
import ChromeEvent from '../events/index';
import BaseCache from './cache';

export default class EventsCache extends BaseCache {

    constructor() {
        super();
        this.events = Object.create(null);
        this.sandbox = sinon.sandbox.create();
    }

    /**
     * @param {String} type
     * @param {String} namespace
     * @returns {ChromeEvent}
     */
    get(type, namespace) {
        const key = this.getKey(type, namespace);
        if (key in this.events) {
            return this.events[key];
        }
        const event = this.createEvent();
        this.events[key] = event;
        return event;
    }

    /**
     * Remove all listeners
     */
    reset() {
        this.sandbox.reset();
        forEach(this.events, event => {
            event.removeListeners();
        });
    }

    /**
     * Drop listeners
     */
    flush() {
        this.reset();
    }

    /**
     * Create event
     * @returns {ChromeEvent}
     */
    createEvent() {
        const event = new ChromeEvent();
        this.sandbox.spy(event, 'addListener');
        this.sandbox.spy(event, 'hasListener');
        this.sandbox.spy(event, 'removeListener');
        this.sandbox.spy(event, 'removeListeners');
        return event;
    }
}
