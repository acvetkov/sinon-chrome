/**
 * @author https://github.com/acvetkov
 * @overview types#StubbedType
 */

export default class StubbedType {

    /**
     * @param {Object} names
     * @param {StubsCache} stubs
     * @param {EventsCache} events
     * @param {PropsCache} props
     * @param {String} namespace
     */
    constructor({ methodsNames = [], eventsNames = [] }, stubs, events, props, namespace) {
        this.stub = stubs;
        this.events = events;
        this.namespace = namespace;

        const result = {};
        methodsNames.forEach(methodName =>
            this.stub.defineMethod(result, methodName, this.namespace)
        );
        eventsNames.forEach(onEvent =>
            Object.assign(result, { [onEvent]: this.events.get(onEvent, this.namespace) })
        );
        this._private = result;
    }

    get() {
        return this._private;
    }
}
