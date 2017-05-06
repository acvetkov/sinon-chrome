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

        const result = {
            onChange: this.events.get('onChange', this.namespace),
        };
        ['get', 'set', 'clear'].forEach(methodName =>
            this.stub.defineMethod(result, methodName, this.namespace)
        );
        this._private = result;
    }

    get() {
        return this._private;
    }
}
