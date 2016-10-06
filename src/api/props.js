/**
 * @author https://github.com/acvetkov
 * @overview Props cache
 */

import noop from 'lodash/noop';
import BaseCache from './cache';

export default class PropsCache extends BaseCache {

    constructor() {
        super();
        this.props = {};
    }

    /**
     * @param {String} prop
     * @param {String} namespace
     * @param {*} defaultValue
     * @returns {*}
     */
    get(prop, namespace, defaultValue) {
        const key = this.getKey(prop, namespace);
        if (key in this.props) {
            return this.props[key];
        }
        const property = this.create(defaultValue);
        this.props[key] = property;
        return property;
    }

    /**
     * @param {*} defaultValue
     * @returns {{default: *, current: *, flush: (function())}}
     */
    create(defaultValue) {
        return {
            default: defaultValue,
            current: defaultValue,
            flush() {
                this.current = defaultValue;
            }
        };
    }

    /**
     * Reset property to default state
     */
    reset() {
        noop();
    }

    /**
     * Flush property
     */
    flush() {
        Object.keys(this.props).forEach(key => this.props[key].flush());
    }
}
