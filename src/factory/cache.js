import EventsFactory from './events';
import StubsFactory from './stubs';

export default {

    stubCache: {},
    eventsCache: {},

    /**
     * Get stub value
     * @param {String} namespace
     * @param {String} method
     * @returns {sinon.stub}
     */
    getStub(namespace, method) {
        const key = `${namespace}.${method}`;
        if (!(key in this.stubCache)) {
            this.stubCache[key] = StubsFactory.stub;
        }
        return this.stubCache[key];
    },

    /**
     * Get chrome event
     * @param {String} namespace
     * @param {String} event
     * @returns {*}
     */
    getEvent(namespace, event) {
        const key = `${namespace}.${event}`;
        if (!(key in this.eventsCache)) {
            this.eventsCache[key] = EventsFactory.get();
        }
        return this.eventsCache[key];
    },

    /**
     * Flush cached data
     */
    flush() {
        this.stubCache = {};
    }
};
