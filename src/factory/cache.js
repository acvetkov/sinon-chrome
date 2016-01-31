import EventsFactory from './events';
import StubsFactory from './stubs';

export default {

    stubCache: {},
    eventsCache: {},

    /**
     * Get stub value
     * @param namespace
     * @param method
     * @returns {sinon.stub}
     */
    getStub: function (namespace, method) {
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
     */
    getEvent: function (namespace, event) {
        const key = `${namespace}.${event}`;
        if (!(key in this.eventsCache)) {
            this.eventsCache[key] = EventsFactory.get();
        }
        return this.eventsCache[key];
    },

    /**
     * Flush cached data
     */
    flush: function () {
        this.stubCache = {};
    }
};
