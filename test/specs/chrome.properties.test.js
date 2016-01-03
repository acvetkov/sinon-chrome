import _ from 'lodash';
import {assert} from 'chai';

/**
 * Generate properties suites
 * @param {Object} chrome
 * @param {Array<String>} properties
 * @param {String} namespace
 */
export default function generatePropertiesSuite(chrome, properties, namespace) {
    _.forEach(properties, prop => {
        generatePropSuite(chrome, prop, namespace);
    });
}

/**
 * Generate property suite
 * @param {Object} chrome
 * @param {String} prop
 * @param {String} namespace
 */
function generatePropSuite(chrome, prop, namespace) {

    describe(`chrome.${namespace}.${prop}`, function () {

        function getProp() {
            return _.get(chrome, `${namespace}.${prop}`);
        }

        function setProp(value) {
            return _.set(chrome, `${namespace}.${prop}`, value);
        }

        it('should return specified value', function () {
            const a = 'a';
            assert.notEqual(getProp(), a);
            setProp(a);
            assert.equal(getProp(), a);
        });
    });
}
