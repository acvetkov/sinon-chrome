import sinon from 'sinon';
import ChromeEvent from '../events/index';

export default {

    events: [],
    sandbox: sinon.sandbox.create(),

    /**
     * @returns {ChromeEvent}
     */
    get: function () {
        const event = createEvent(this.sandbox);
        this.events.push(event);
        return event;
    },

    /**
     * Remove all listeners
     */
    reset: function () {
        this.sandbox.reset();
        this.events.forEach(event => {
            event.removeListeners();
        });
    },

    /**
     * Drop listeners
     */
    flush: function () {
        this.reset();
    }
};

/**
 * Create event
 * @param {sinon} sandbox
 */
function createEvent(sandbox) {
    const event = new ChromeEvent();
    sandbox.spy(event, 'addListener');
    sandbox.spy(event, 'hasListener');
    sandbox.spy(event, 'removeListener');
    sandbox.spy(event, 'removeListeners');
    return event;
}
