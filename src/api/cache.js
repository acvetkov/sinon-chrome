/**
 * @author https://github.com/acvetkov
 * @overview Base cache class
 */

export default class BaseCache {

    /**
     * @param {String} prop
     * @param {String} namespace
     * @returns {string}
     */
    getKey(prop, namespace) {
        return `${namespace}.${prop}`;
    }
}
