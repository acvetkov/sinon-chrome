import _ from 'lodash';
import Cache from '../factory/cache';
import PropsCache from '../factory/property';

/**
 * Returns stubbed chrome api
 * @param {Object} config
 * @returns {Object}
 */
export default function generateApi(config) {
    return _.reduce(config, (result, {methods, properties, events}, namespace) => {
        appendNamespace(result, namespace);
        wrapEvents(result, namespace, events);
        wrapMethods(result, namespace, methods);
        wrapProperties(result, namespace, properties);
        return result;
    }, {});
}

/**
 * append namespace to chrome object
 * @param {Object} object
 * @param {String} namespace
 */
function appendNamespace(object, namespace) {
    _.set(object, namespace, {});
}

/**
 * Append stub methods
 * @param {Object} object
 * @param {String} namespace
 * @param {Array<String>} methods
 */
function wrapMethods(object, namespace, methods) {
    methods.forEach(method => {
        Object.defineProperty(_.get(object, namespace), method, {
            get: function () {
                return Cache.getStub(namespace, method);
            }
        });
    });
}

/**
 * Append stub getters/setters
 * @param {Object} object
 * @param {String} namespace
 * @param {Array<String>} properties
 */
function wrapProperties(object, namespace, properties) {
    _.forEach(properties, property => {
        appendProperty(object, namespace, property);
    });
}

/**
 * Append property stub
 * @param {Object} object
 * @param {String} namespace
 * @param {String} property
 */
function appendProperty(object, namespace, property) {
    _.set(object, `${namespace}.${property}`, null);
    PropsCache.cache(object, namespace, property);
}

/**
 * Append chrome events
 * @param {Object} object
 * @param {String} namespace
 * @param {Array<String>} events
 */
function wrapEvents(object, namespace, events) {
    events.forEach(event => {
        Object.defineProperty(_.get(object, namespace), event, {
            get: function () {
                return Cache.getEvent(namespace, event);
            }
        });
    });
}
