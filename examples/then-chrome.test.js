/**
 * @author https://github.com/acvetkov
 * @overview Test then-chrome.js
 */

import chrome from '../src'; // from 'sinon-chrome'
import chai from 'chai';
import {api} from './then-chrome';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const assert = chai.assert;

describe('then-chrome.js', function () {

    before(function () {
        global.chrome = chrome;
    });

    beforeEach(function () {
        chrome.flush();
    });

    it('should reject promise', function () {
        chrome.tabs.query.yields([1, 2]);
        chrome.runtime.lastError = {message: 'Error'};
        return assert.isRejected(api.tabs.query({}));
    });

    it('should resolve promise', function () {
        chrome.runtime.lastError = null;
        chrome.tabs.query.yields([1, 2]);
        return assert.eventually.deepEqual(api.tabs.query({}), [1, 2]);
    });

    after(function () {
        chrome.flush();
        delete global.chrome;
    });
});
