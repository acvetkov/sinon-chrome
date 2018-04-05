/**
 * @author https://github.com/acvetkovk
 * @overview Chrome test
 */

import chrome from '../../src/index';

describe('chrome/reset', function () {

    before(function () {
        chrome.runtime.sendMessage.resetHistory();
        chrome.runtime.sendMessage.resetBehavior();
    });

    after(function () {
        chrome.runtime.sendMessage.resetHistory();
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

describe('chrome/flush', function () {

    before(function () {
        chrome.runtime.sendMessage.resetHistory();
        chrome.runtime.sendMessage.resetBehavior();
        chrome.runtime.getURL.resetBehavior();
        chrome.runtime.getURL.resetHistory();
    });

    after(function () {
        chrome.runtime.sendMessage.resetHistory();
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
        assert.isNull(chrome.runtime.id);
    });
});

describe.only('chrome api', function () {

    describe('functions', function () {

        it('should be enumerable', function () {
            const descriptor = Object.getOwnPropertyDescriptor(chrome.tabs, 'create');
            assert(descriptor.enumerable);
        });

        it('should be configurable', function () {
            const descriptor = Object.getOwnPropertyDescriptor(chrome.tabs, 'create');
            assert(descriptor.configurable);
        });
    });

    describe('props', function () {

        it('should be enumerable', function () {
            const descriptor = Object.getOwnPropertyDescriptor(chrome.runtime, 'id');
            assert(descriptor.enumerable);
        });

        it('should be configurable', function () {
            const descriptor = Object.getOwnPropertyDescriptor(chrome.runtime, 'id');
            assert(descriptor.configurable);
        });
    });

    describe('events', function () {

        it('should be enumerable', function () {
            const descriptor = Object.getOwnPropertyDescriptor(chrome.tabs, 'onCreated');
            assert(descriptor.enumerable);
        });

        it('should be configurable', function () {
            const descriptor = Object.getOwnPropertyDescriptor(chrome.tabs, 'onCreated');
            assert(descriptor.configurable);
        });
    });
});
