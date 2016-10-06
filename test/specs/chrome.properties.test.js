/**
 * @author https://github.com/acvetkovk
 * @overview Entry point
 */

import _ from 'lodash';
import {assert} from 'chai';

/**
 * Generate properties suites
 * @param {Object} chrome
 * @param {Array<String>} properties
 * @param {String} namespace
 * @param {String} prefix
 */
export default function generatePropertiesSuite(chrome, properties, namespace, prefix) {
    _.forEach(properties, prop => {
        generatePropSuite(chrome, prop, namespace, prefix);
    });
}

/**
 * Generate property suite
 * @param {Object} chrome
 * @param {String} prop
 * @param {String} namespace
 * @param {String} prefix
 */
function generatePropSuite(chrome, prop, namespace, prefix) {

    describe(`${prefix} chrome.${namespace}.${prop}`, function () {

        function getProp() {
            return _.get(chrome, `${namespace}.${prop}`);
        }

        function setProp(value) {
            return _.set(chrome, `${namespace}.${prop}`, value);
        }

        beforeEach(function () {
            chrome.flush();
        });

        it('should return specified value', function () {
            const a = 'a';
            assert.notEqual(getProp(), a);
            setProp(a);
            assert.equal(getProp(), a);
        });

        it('should return default value on flush', function () {
            const defaultValue = getProp();
            const val = 'value';
            assert.notEqual(getProp(), val);
            setProp(val);
            assert.equal(getProp(), val);
            chrome.flush();
            assert.equal(getProp(), defaultValue);
        });
    });
}
