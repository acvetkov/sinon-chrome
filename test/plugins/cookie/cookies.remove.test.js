import sinon from 'sinon';
import _ from 'lodash';

import CookiesPlugin from '../../../src/plugins/cookies';
import state from '../data/cookie-state.json';
import createChromeApi from '../../../src/chrome-api';

describe('plugins/cookies/remove', function () {

    const chrome = createChromeApi();

    before(function () {
        chrome.registerPlugin(new CookiesPlugin());
    });

    beforeEach(function () {
        chrome.cookies.onChanged.removeListeners();
        chrome.cookies.state = _.cloneDeep(state);
    });

    it('should remove cookie', function (done) {
        const params = {
            name: 'MEGA_COOKIE_NAME',
            url: 'http://www.kraken.ru'
        };
        const findParams = {
            name: 'MEGA_COOKIE_NAME',
            domain: 'www.kraken.ru'
        };
        assert.isObject(_.findWhere(chrome.cookies.state, findParams));
        chrome.cookies.remove(params, function (details) {
            assert.isUndefined(_.findWhere(chrome.cookies.state, findParams));
            assert.equal(details.url, params.url);
            assert.equal(details.name, params.name);
            done();
        });
    });

    it('should trigger change event', function (done) {
        var spy = sinon.spy();
        const params = {
            name: 'MEGA_COOKIE_NAME',
            url: 'http://www.kraken.ru'
        };
        chrome.cookies.onChanged.addListener(spy);
        chrome.cookies.remove(params, function () {
            assert.calledOnce(spy.withArgs({
                cookie: state[0],
                removed: true,
                cause: 'explicit'
            }));
            done();
        });
    });

    it('should not trigger change event', function (done) {
        var spy = sinon.spy();
        const params = {
            name: 'MEGA_COOKIE_NAME_123',
            url: 'http://www.kraken.ru'
        };
        chrome.cookies.onChanged.addListener(spy);
        chrome.cookies.remove(params, function () {
            assert.notCalled(spy);
            done();
        });
    });
});
