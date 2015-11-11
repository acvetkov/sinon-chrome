/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

import _ from 'lodash';
import EventsFactory from '../factory/events';
import StubsFactory from '../factory/stubs';
import PropsCache from '../factory/property';

/**
 * Returns stubbed chrome api
 * @param {Object} config
 * @returns {Object}
 */
exports.generateApi = (config) => {
    return _.reduce(config, (result, {methods, properties, events}, namespace) => {
        wrapEvents(result, namespace, events);
        wrapMethods(result, namespace, methods);
        wrapProperties(result, namespace, properties);
        return result;
    }, {});
};

/**
 * Append stub methods
 * @param {Object} object
 * @param {String} namespace
 * @param {Array<String>} methods
 */
function wrapMethods(object, namespace, methods) {
    _.forEach(methods, method => {
        _.set(object, `${namespace}.${method}`, StubsFactory.stub);
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
    _.forEach(events, event => {
        _.set(object, `${namespace}.${event}`, EventsFactory.get());
    });
}
