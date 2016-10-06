/**
 * @author https://github.com/acvetkov
 * @overview types#ChromeSettings
 */

export default class ChromeSettings {

    /**
     * @param {StubsCache} stubs
     * @param {EventsCache} events
     * @param {PropsCache} props
     * @param {String} namespace
     */
    constructor(stubs, events, props, namespace) {
        this.stub = stubs;
        this.events = events;
        this.namespace = namespace;
    }

    get() {
        return {
            get: this.stub.get('get', this.namespace),
            set: this.stub.get('set', this.namespace),
            clear: this.stub.get('clear', this.namespace),
            onChange: this.events.get('onChange', this.namespace)
        };
    }
}
