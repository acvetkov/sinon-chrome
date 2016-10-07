/**
 * @author https://github.com/acvetkovk
 * @overview Chrome apps test
 */

import _ from 'lodash';

import apiConfig from '../ff-config';
import browser from '../../src/webextensions';

import generateMethodsSuite from './chrome.methods.test';
import generateEventsSuite from './chrome.events.test';
import generatePropertiesSuite from './chrome.properties.test';

/**
 * Root suite
 */
describe('webextensions', function () {
    checkChromeObject();
});

/**
 * Check chrome object
 */
function checkChromeObject() {
    _.forEach(apiConfig, (data, namespace) => {
        checkNamespace(data, namespace, 'webextensions browser');
    });
}

/**
 * Check namespace
 * @param {Array<String>} methods
 * @param {Array<String>} properties
 * @param {Array<String>} events
 * @param {String} namespace
 * @param {String} prefix
 */
function checkNamespace({methods, properties, events}, namespace, prefix) {
    describe(`webextensions browser.${namespace}`, function () {
        generateMethodsSuite(browser, methods, namespace, prefix);
        generateEventsSuite(browser, events, namespace, prefix);
        generatePropertiesSuite(browser, properties, namespace, prefix);
    });
}
