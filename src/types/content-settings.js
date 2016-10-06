/**
 * @author https://github.com/acvetkov
 * @overview ContentSettings
 */

export default class ContentSettings {

    /**
     * @param {StubsCache} stubs
     * @param {EventsCache} events
     * @param {PropsCache} props
     * @param {String} namespace
     */
    constructor(stubs, events, props, namespace) {
        this.stub = stubs;
        this.namespace = namespace;
    }

    get() {
        return {
            clear: this.stub.get('clear', this.namespace),
            get: this.stub.get('get', this.namespace),
            set: this.stub.get('set', this.namespace),
            getResourceIdentifiers: this.stub.get('getResourceIdentifiers', this.namespace)
        };
    }
}
