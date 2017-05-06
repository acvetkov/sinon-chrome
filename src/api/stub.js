/**
 * @author https://github.com/acvetkov
 * @overview Subs cache
 */

import sinon from 'sinon';
import BaseCache from './cache';

export default class StubsCache extends BaseCache {

    constructor() {
        super();
        this.stubs = Object.create(null);
    }

    /**
     * @param {Object} obj
     * @param {String} methodName
     * @param {String} namespace
     * @returns {Object}
     */
    defineMethod(obj, methodName, namespace) {
        return Object.defineProperty(obj, methodName, {
            get: () => {
                return this.get(methodName, namespace);
            },
            set: (newFunc) => {
                return this.set(methodName, namespace, newFunc);
            }
        });
    }

    /**
     * @param {String} method
     * @param {String} namespace
     * @param {String} newFunc
     * @returns {Function}
     */
    set(method, namespace, newFunc) {
        const key = this.getKey(method, namespace);
        const stub = this.create(key, newFunc);
        this.store(key, stub);
        return stub;
    }

    /**
     * @param {String} method
     * @param {String} namespace
     * @returns {Function}
     */
    get(method, namespace) {
        const key = this.getKey(method, namespace);
        if (key in this.stubs) {
            return this.stubs[key];
        }

        const stub = this.create(key);
        this.store(key, stub);
        return stub;
    }

    /**
     * @param {String} key
     * @param {Function} stub
     */
    store(key, stub) {
        this.stubs[key] = stub;
    }

    /**
     * @param {String} key
     * @param {Function} [funcToSpy]
     * @returns {Function}
     */
    create(key, funcToSpy) {
        const stub = funcToSpy ? sinon.spy(funcToSpy) : sinon.stub();
        stub.flush = () => {
            this.deleteStub(key);
        };
        return stub;
    }

    /**
     * @param {String} key
     */
    deleteStub(key) {
        if (key in this.stubs) {
            delete this.stubs[key];
        }
    }

    /**
     * Flush sinon stubs (replace by new)
     */
    flush() {
        this.stubs = Object.create(null);
    }

    /**
     * Reset sinon stubs
     */
    reset() {
        Object.keys(this.stubs).forEach(key => this.stubs[key].reset());
    }
}
