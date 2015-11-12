/**
 * @author acvetkov@yandex-team.ru
 * @overview
 * Generate tests for chrome api
 */

import _ from 'lodash';

import apiConfig from '../../src/api/config.json';
import chrome from '../../src/index';

import generateMethodsSuite from './chrome.methods.test';
import generateEventsSuite from './chrome.events.test';
import generatePropertiesSuite from './chrome.properties.test';

describe('chrome', function () {
    checkChromeObject();
});

function checkChromeObject() {
    _.forEach(apiConfig, (data, namespace) => {
        checkNamespace(data, namespace);
    });
}

function checkNamespace({methods, properties, events}, namespace) {
    describe(`chrome.${namespace}`, function () {
        generateMethodsSuite(chrome, methods, namespace);
        generateEventsSuite(chrome, events, namespace);
        generatePropertiesSuite(chrome, properties, namespace);
    });
}
