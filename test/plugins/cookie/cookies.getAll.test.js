import CookiesPlugin from '../../../src/plugins/cookies';
import state from '../data/cookie-state.json';
import createChromeApi from '../../../src/chrome-api';

describe('plugins/cookies/getAll', function () {

    const chrome = createChromeApi();

    before(function () {
        chrome.registerPlugin(new CookiesPlugin());
        chrome.cookies.state = state;
    });

    it('should invoke correct cookie list by name', function (done) {
        chrome.cookies.getAll({name: 'MEGA_COOKIE_NAME'}, function (list) {
            assert.deepEqual([state[0], state[9]], list);
            done();
        });
    });

    it('should invoke correct cookie list by name and domain', function (done) {
        chrome.cookies.getAll({name: 'MEGA_COOKIE_NAME', domain: 'www.kraken.ru'}, function (list) {
            assert.deepEqual([state[0]], list);
            done();
        });
    });

    it('should invoke correct cookie list by name and url', function (done) {
        chrome.cookies.getAll({name: 'MEGA_COOKIE_NAME', url: 'http://www.kraken.ru'}, function (list) {
            assert.deepEqual([state[0]], list);
            done();
        });
    });

    it('should invoke correct cookie list by name, domain and url', function (done) {
        const params = {name: 'MEGA_COOKIE_NAME', url: 'http://www.kraken.ru', domain: 'www.kraken.ru'};
        chrome.cookies.getAll(params, function (list) {
            assert.deepEqual([state[0]], list);
            done();
        });
    });

    it('should invoke correct cookie list by path', function (done) {
        chrome.cookies.getAll({path: '/data'}, function (list) {
            assert.deepEqual([state[1]], list);
            done();
        });
    });

    it('should invoke correct cookie list by path and domain', function (done) {
        chrome.cookies.getAll({path: '/', domain: '.service.kraken.ru'}, function (list) {
            assert.deepEqual([state[10]], list);
            done();
        });
    });

    it('should invoke correct cookie list by secure', function (done) {
        chrome.cookies.getAll({secure: true}, function (list) {
            assert.deepEqual([state[6], state[8]], list);
            done();
        });
    });

    it('should invoke correct cookie list by secure and name', function (done) {
        chrome.cookies.getAll({secure: true, name: 'GHD'}, function (list) {
            assert.deepEqual([state[6]], list);
            done();
        });
    });

    it('should invoke correct cookie list by session', function (done) {
        chrome.cookies.getAll({session: true}, function (list) {
            assert.deepEqual([state[2]], list);
            done();
        });
    });

    it('should invoke all cookie list for empty criteria', function (done) {
        chrome.cookies.getAll({}, function (list) {
            assert.deepEqual(state, list);
            done();
        });
    });
});
