import _ from 'lodash';

import CookiesPlugin from '../../../src/plugins/cookies';
import state from '../data/cookie-state.json';
import createChromeApi from '../../../src/chrome-api';

describe('plugins/cookies/get', function () {

    const chrome = createChromeApi();

    before(function () {
        chrome.registerPlugin(new CookiesPlugin());
        chrome.cookies.state = state;
    });

    it('should invoke correct cookie', function (done) {
        chrome.cookies.get({name: 'MEGA_COOKIE_NAME', url: 'http://www.kraken.ru'}, function (cookie) {
            assert.equal(cookie.name, 'MEGA_COOKIE_NAME');
            assert.equal(cookie.value, '983274963949238649326487');
            done();
        });
    });

    it('should return cookie', function (done) {
        chrome.cookies.get({name: '_cookie-sd', url: 'http://.kraken.ru'}, function (cookie) {
            assert.equal(cookie.name, '_cookie-sd');
            assert.equal(cookie.value, 'iukkfhakshfakjcna');
            done();
        });
    });

    it('should be null', function (done) {
        chrome.cookies.get({name: 'MEGA_COOKIE_NAME_2', url: 'http://www.kraken.ru'}, function (cookie) {
            assert.isNull(cookie);
            done();
        });
    });

    it('should throws if details.name is not passed', function () {
        function call() {
            chrome.cookies.get({url: 'http://www.kraken.ru'}, _.noop);
        }
        assert.throws(call, 'name required', 'details.name is not passed');
    });

    it('should throws if details.url is not passed', function () {
        function call() {
            chrome.cookies.get({name: 'MEGA_COOKIE_NAME'}, _.noop);
        }
        assert.throws(call, 'url required', 'details.url is not passed');
    });

    it('should throws if callback is not passed', function () {
        function call() {
            chrome.cookies.get({name: 'MEGA_COOKIE_NAME', url: 'http://www.kraken.ru'});
        }
        assert.throws(call, 'callback required', 'callback is not passed');
    });
});
