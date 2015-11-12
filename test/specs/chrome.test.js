/**
 * @author acvetkov@yandex-team.ru
 * @overview
 * Generate tests for chrome api
 */

import _ from 'lodash';

import apiConfig from '../../src/api/config.js';
import chrome from '../../src/index';

import generateMethodsSuite from './chrome.methods.test';
import generateEventsSuite from './chrome.events.test';
import generatePropertiesSuite from './chrome.properties.test';

/**
 * Root suite
 */
describe('chrome', function () {
    checkChromeObject();
});

/**
 * Check chrome object
 */
function checkChromeObject() {
    _.forEach(apiConfig, (data, namespace) => {
        checkNamespace(data, namespace);
    });
}

/**
 * Check namespace
 * @param {Array<String>} methods
 * @param {Array<String>} properties
 * @param {Array<String>} events
 * @param {String} namespace
 */
function checkNamespace({methods, properties, events}, namespace) {
    describe(`chrome.${namespace}`, function () {
        generateMethodsSuite(chrome, methods, namespace);
        generateEventsSuite(chrome, events, namespace);
        generatePropertiesSuite(chrome, properties, namespace);
    });
}
