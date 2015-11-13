/**
 * @author acvetkov@yandex-team.ru
 * @overview
 */

'use strict';

import _ from 'lodash';
import {assert} from 'chai';
import is from '../helpers/is';
import sinon from 'sinon';

/**
 * Generate Suite for namespace events
 * @param {Object} chrome
 * @param {Array<String>} events
 * @param {String} namespace
 */
export default function generateEventsSuite(chrome, events, namespace) {
    _.forEach(events, event => {
        generateEventSuite(chrome, event, namespace);
    });
}

/**
 * generate event suite
 * @param {Object} chrome
 * @param {String} event
 * @param {String} namespace
 */
function generateEventSuite(chrome, event, namespace) {
    describe(`chrome.${namespace}.${event}`, function () {

        before(function () {
            this.event = _.get(chrome, `${namespace}.${event}`);
        });

        beforeEach(function () {
            this.event.removeListeners();
        });

        it('should be defined', function () {
            assert.ok(is.chromeEvent(this.event));
        });

        it('should react on event', function () {
            var spy = sinon.spy();
            var args = [1, 2, 3];
            this.event.addListener(spy);
            assert.notCalled(spy);
            this.event.dispatch(args);
            assert.calledOnce(spy.withArgs(args));
            this.event.trigger(args);
            assert.calledTwice(spy.withArgs(args));
            this.event.applyTrigger(args);
            assert.calledOnce(spy.withArgs(1, 2, 3));
        });

        it('should remove listener', function () {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();
            this.event.addListener(spy1);
            assert.ok(this.event.hasListener(spy1));
            assert.notOk(this.event.hasListener(spy2));
            this.event.addListener(spy2);
            assert.ok(this.event.hasListener(spy1));
            assert.ok(this.event.hasListener(spy2));
            assert.notCalled(spy1);
            assert.notCalled(spy2);
            this.event.trigger();
            assert.calledOnce(spy1);
            assert.calledOnce(spy2);
            this.event.removeListener(spy1);
            this.event.trigger();
            assert.calledOnce(spy1);
            assert.calledTwice(spy2);
        });

        it('should remove all listeners', function () {
            var spy1 = sinon.spy();
            var spy2 = sinon.spy();
            this.event.addListener(spy1);
            this.event.addListener(spy2);
            assert.notCalled(spy1);
            assert.notCalled(spy2);
            this.event.trigger();
            assert.calledOnce(spy1);
            assert.calledOnce(spy2);
            this.event.removeListeners();
            this.event.trigger();
            assert.calledOnce(spy1);
            assert.calledOnce(spy2);
        });
    });
}
