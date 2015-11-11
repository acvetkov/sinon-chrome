/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

import sinon from 'sinon';
import ChromeEvent from '../events/index';

export default {

    events: [],
    sandbox: sinon.sandbox.create(),

    /**
     * @returns {ChromeEvent}
     */
    get: function () {
        return createEvent(this.sandbox);
    },

    /**
     * Remove all listeners
     */
    reset: function () {
        this.events.forEach(event => {
            event.removeListeners();
        });
        this.sandbox.reset();
    },

    /**
     * Drop listeners
     */
    flush: function () {
        this.reset();
        this.events.length = 0;
    }
};

/**
 * Create event
 * @param {sinon} sandbox
 */
function createEvent(sandbox) {
    var event = new ChromeEvent();
    sandbox.spy(event, 'addListener');
    sandbox.spy(event, 'hasListener');
    sandbox.spy(event, 'removeListener');
    sandbox.spy(event, 'removeListeners');
    return event;
}