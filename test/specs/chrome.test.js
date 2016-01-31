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

    describe('chrome.reset', function () {

        before(function () {
            chrome.runtime.sendMessage.reset();
            chrome.runtime.sendMessage.resetBehavior();
        });

        after(function () {
            chrome.runtime.sendMessage.reset();
            chrome.runtime.sendMessage.resetBehavior();
        });

        it('should be defined', function () {
            assert.isFunction(chrome.reset);
        });

        it('should reset methods state', function () {
            assert.notCalled(chrome.runtime.sendMessage);
            chrome.runtime.sendMessage();
            chrome.runtime.sendMessage();
            chrome.runtime.sendMessage();

            assert.calledThrice(chrome.runtime.sendMessage);
            chrome.reset();

            assert.notCalled(chrome.runtime.sendMessage);
        });

        it('should remove all listeners', function () {
            var spy = sinon.spy();
            chrome.cookies.onChanged.addListener(spy);
            assert.notCalled(spy);

            chrome.cookies.onChanged.trigger();
            assert.calledOnce(spy);

            chrome.reset();
            chrome.cookies.onChanged.trigger();
            assert.calledOnce(spy);

            chrome.cookies.onChanged.trigger();
            assert.calledOnce(spy);
        });

        it('should not remove props', function () {
            chrome.runtime.id = 'test';
            assert.equal(chrome.runtime.id, 'test');
            chrome.reset();
            assert.equal(chrome.runtime.id, 'test');
        });
    });

    describe('chrome.flush', function () {

        before(function () {
            chrome.runtime.sendMessage.reset();
            chrome.runtime.sendMessage.resetBehavior();
            chrome.runtime.getURL.resetBehavior();
            chrome.runtime.getURL.reset();
        });

        after(function () {
            chrome.runtime.sendMessage.reset();
            chrome.runtime.sendMessage.resetBehavior();
            chrome.runtime.getURL.resetBehavior();
        });

        it('should be defined', function () {
            assert.isFunction(chrome.flush);
        });

        it('should reset methods state', function () {
            assert.notCalled(chrome.runtime.sendMessage);
            chrome.runtime.sendMessage();
            chrome.runtime.sendMessage();
            chrome.runtime.sendMessage();

            assert.calledThrice(chrome.runtime.sendMessage);
            chrome.flush();

            assert.notCalled(chrome.runtime.sendMessage);
        });

        it('should reset methods behavior', function () {
            chrome.runtime.getURL.returns('http://domain.com');
            assert.equal(chrome.runtime.getURL(), 'http://domain.com');
            chrome.flush();
            assert.notOk(chrome.runtime.getURL());
        });

        it('should reset withArgs methods behavior', function () {
            chrome.runtime.getURL.withArgs('1').returns('http://domain1.com');
            chrome.runtime.getURL.withArgs('2').returns('http://domain2.com');
            chrome.runtime.getURL.withArgs('3').returns('http://domain3.com');
            assert.equal(chrome.runtime.getURL('1'), 'http://domain1.com');
            assert.equal(chrome.runtime.getURL('2'), 'http://domain2.com');
            assert.equal(chrome.runtime.getURL('3'), 'http://domain3.com');
            chrome.flush();
            assert.notOk(chrome.runtime.getURL());
        });

        it('should remove all listeners', function () {
            var spy = sinon.spy();
            chrome.cookies.onChanged.addListener(spy);
            assert.notCalled(spy);

            chrome.cookies.onChanged.trigger();
            assert.calledOnce(spy);

            chrome.flush();
            chrome.cookies.onChanged.trigger();
            assert.calledOnce(spy);

            chrome.cookies.onChanged.trigger();
            assert.calledOnce(spy);
        });

        it('should not remove props', function () {
            chrome.runtime.id = 'test';
            assert.equal(chrome.runtime.id, 'test');
            chrome.flush();
            assert.notOk(chrome.runtime.id);
        });
    });
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
