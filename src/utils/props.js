/**
 * @author https://github.com/acvetkov
 * @overview props utils
 */

import {reduce, assign, isPlainObject} from 'lodash';

/**
 * Collect all props namespaces
 * @param {Object} props
 * @param {String} namespace
 * @returns {Object}
 */
export function getAll(props, namespace = null) {
    return reduce(props, (result, data, prop) => {
        const ns = namespace ? `${namespace}.${prop}` : `${prop}`;
        if (isPlainObject(data.properties) && isPlainObject(data.value)) {
            return assign({}, result, getAll(data.properties, ns));
        }
        result[`${ns}`] = getValue(data.value, data.$ref);
        return result;
    }, {});
}

/**
 * @param {*} val
 * @param {String} ref
 * @returns {*}
 */
function getValue(val, ref) {
    if (ref) {
        return ref;
    }
    if (!val || typeof val === 'object') {
        return null;
    }
    return val;
}
