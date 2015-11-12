/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

var _ = require('lodash');
var ChromeEvent = require('../../src/events');

/**
 * @param {Object} stub
 * @returns {boolean}
 */
exports.sinonStub = stub => {
    return _.isFunction(stub) && Boolean(_.get(stub, 'isSinonProxy')) && Boolean(_.get(stub, 'returns'));
};

/**
 * @param {Object} spy
 * @returns {boolean}
 */
exports.sinonSpy = spy => {
    return _.isFunction(spy) && Boolean(_.get(spy, 'restore.sinon')) && !Boolean(_.get(spy, 'returns'));
};

/**
 * @param {Object} object
 * @returns {boolean}
 */
exports.chromeEvent = object => {
    return (object instanceof ChromeEvent) &&
            exports.sinonSpy(_.get(object, 'addListener')) &&
            exports.sinonSpy(_.get(object, 'hasListener')) &&
            exports.sinonSpy(_.get(object, 'removeListener')) &&
            exports.sinonSpy(_.get(object, 'removeListeners'));
};
