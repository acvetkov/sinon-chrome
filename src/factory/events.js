import sinon from 'sinon';
import ChromeEvent from '../events/index';

export default {

    events: [],
    sandbox: sinon.sandbox.create(),

    /**
     * @returns {ChromeEvent}
     */
    get() {
        const event = createEvent(this.sandbox);
        this.events.push(event);
        return event;
    },

    /**
     * Remove all listeners
     */
    reset() {
        this.sandbox.reset();
        this.events.forEach(event => {
            event.removeListeners();
        });
    },

    /**
     * Drop listeners
     */
    flush() {
        this.reset();
    }
};

/**
 * Create event
 * @param {sinon} sandbox
 * @returns {ChromeEvent}
 */
function createEvent(sandbox) {
    const event = new ChromeEvent();
    sandbox.spy(event, 'addListener');
    sandbox.spy(event, 'hasListener');
    sandbox.spy(event, 'removeListener');
    sandbox.spy(event, 'removeListeners');
    return event;
}
