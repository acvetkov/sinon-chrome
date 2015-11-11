/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

var _ = require('lodash');
var chrome = require('../../src');
var apiConfig = require('../../src/api/config.json');
var helper = require('../helpers');

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
        checkMethods(methods, namespace);
        // checkEvents(events, namespace);
        checkProps(properties, namespace);
    });
}

function checkMethods(methods, namespace) {
    _.forEach(methods, method => {
        generateMethodSuite(method, namespace);
    });
}

function generateMethodSuite(method, namespace) {

    describe(`chrome.${namespace}.${method}`, function () {

        before(function () {
            this.stub = _.get(chrome, `${namespace}.${method}`);
        });

        it('should be defined', function () {
            assert.ok(helper.isSinonStub(this.stub));
        });

        it('should have stub sync behaviour', function () {
            var a = 'a';
            this.stub.reset();
            this.stub.resetBehavior();
            this.stub.returns(a);
            assert.equal(this.stub(), a);
        });

        it('should have stub async behaviour', function () {
            var a = 'a';
            var spy = sinon.spy();
            assert.notCalled(spy);

            this.stub.reset();
            this.stub.resetBehavior();
            this.stub.yields(spy);
            this.stub(spy);
            assert.calledOnce(spy);
        });

        it('should reset by chrome.reset', function () {
            this.stub.reset();
            this.stub.resetBehavior();
            this.stub();
            assert.calledOnce(this.stub);
            chrome.reset();
            assert.notCalled(this.stub);
        });

        it('should reset behaviour by chrome.flush', function () {
            this.stub.reset();
            this.stub.resetBehavior();
            this.stub.returns(true);

            assert.ok(this.stub());
            chrome.flush();
            assert.notOk(this.stub());
        });
    });
}

function checkEvents(events, namespace) {
    _.forEach(events, event => {
        generateEventSuite(event, namespace);
    });
}

function generateEventSuite(event, namespace) {
    describe(`chrome.${namespace}.${event}`, function () {
        it('should be defined', function () {
            assert.isObject(_.get(chrome, `${namespace}.${event}`));
        });
    });
}

function checkProps(properties, namespace) {
    _.forEach(properties, prop => {
        generatePropSuite(prop, namespace);
    });
}

function generatePropSuite(prop, namespace) {

    describe(`chrome.${namespace}.${prop}`, function () {

        function getProp() {
            return _.get(chrome, `${namespace}.${prop}`);
        }

        function setProp(value) {
            return _.set(chrome, `${namespace}.${prop}`, value);
        }

        it('should return specified value', function () {
            var a = 'a';
            assert.notEqual(getProp(), a);
            setProp(a);
            assert.equal(getProp(), a);
        });

        it('should reset value by chrome.flush', function () {
            var b = 'b';
            setProp(b);
            assert.equal(getProp(), b);
            chrome.flush();
            assert.notEqual(getProp(), b);
        });
    });
}