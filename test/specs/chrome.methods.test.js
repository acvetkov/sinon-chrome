import _ from 'lodash';
import * as is from '../helpers/is';
import {assert} from 'chai';

/**
 * Generate methods suite
 * @param {Object} chrome
 * @param {Array<String>} methods
 * @param {String} namespace
 */
export default function generateMethodsSuite(chrome, methods, namespace) {
    _.forEach(methods, method => {
        generateMethodSuite(chrome, method, namespace);
    });
}

/**
 * Generate method suite
 * @param {Object} chrome
 * @param {String} method
 * @param {String} namespace
 */
function generateMethodSuite(chrome, method, namespace) {

    describe(`chrome.${namespace}.${method}`, () => {

        before(function () {
            this.stub = _.get(chrome, `${namespace}.${method}`);
        });

        it('should be defined', function () {
            assert.ok(is.sinonStub(this.stub));
        });

        it('should have stub sync behaviour', function () {
            const a = 'a';
            this.stub.reset();
            this.stub.resetBehavior();
            this.stub.returns(a);
            assert.equal(this.stub(), a);
        });

        it('should have stub async behaviour', function () {
            const spy = sinon.spy();
            assert.notCalled(spy);

            this.stub.reset();
            this.stub.resetBehavior();
            this.stub.yields(spy);
            this.stub(spy);
            assert.calledOnce(spy);
        });
    });
}
