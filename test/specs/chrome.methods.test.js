/**
 * @author https://github.com/acvetkovk
 * @overview Entry point
 */

import _ from 'lodash';
import * as is from '../helpers/is';
import {assert} from 'chai';

/**
 * Generate methods suite
 * @param {Object} chrome
 * @param {Array<String>} methods
 * @param {String} namespace
 * @param {String} prefix
 */
export default function generateMethodsSuite(chrome, methods, namespace, prefix) {
    _.forEach(methods, method => {
        generateMethodSuite(chrome, method, namespace, prefix);
    });
}

/**
 * Generate method suite
 * @param {Object} chrome
 * @param {String} method
 * @param {String} namespace
 * @param {String} prefix
 */
function generateMethodSuite(chrome, method, namespace, prefix) {

    describe(`${prefix}.${namespace}.${method}`, () => {

        it('should be defined', function () {
            const stub = _.get(chrome, `${namespace}.${method}`);
            assert.ok(is.sinonStub(stub));
        });

        it('should have stub sync behaviour', function () {
            const stub = _.get(chrome, `${namespace}.${method}`);
            const a = 'a';
            stub.resetHistory();
            stub.resetBehavior();
            stub.returns(a);
            assert.equal(stub(), a);
        });

        it('should have stub async behaviour', function () {
            const stub = _.get(chrome, `${namespace}.${method}`);
            const spy = sinon.spy();
            assert.notCalled(spy);

            stub.resetHistory();
            stub.resetBehavior();
            stub.yields(spy);
            stub(spy);
            assert.calledOnce(spy);
        });

        it('should flush stub', function () {
            let stub = _.get(chrome, `${namespace}.${method}`);
            stub.resetHistory();
            stub.resetBehavior();
            stub.yields([1, 2]);
            const spy1 = sinon.spy();
            const spy2 = sinon.spy();
            stub(spy1);
            assert.calledOnce(spy1.withArgs([1, 2]));
            stub.flush();
            stub = _.get(chrome, `${namespace}.${method}`);
            stub(spy2);
            assert.notCalled(spy2);
        });
    });
}
