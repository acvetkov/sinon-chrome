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
exports.isSinonStub = stub => {
    return _.isFunction(stub) && Boolean(_.get(stub, 'isSinonProxy')) && Boolean(_.get(stub, 'returns'));
};

/**
 * @param {Object} spy
 * @returns {boolean}
 */
exports.isSinonSpy = spy => {
    return _.isFunction(spy) && Boolean(_.get(spy, 'restore.sinon')) && !Boolean(_.get(spy, 'returns'));
};

/**
 * @param {Object} object
 * @returns {boolean}
 */
exports.isChromeEvent = object => {
    return (object instanceof ChromeEvent) &&
            exports.isSinonSpy(_.get(object, 'addListener')) &&
            exports.isSinonSpy(_.get(object, 'hasListener')) &&
            exports.isSinonSpy(_.get(object, 'removeListener')) &&
            exports.isSinonSpy(_.get(object, 'removeListeners'));
};
