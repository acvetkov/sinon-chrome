import sinon from 'sinon';
import _ from 'lodash';

import CookiesPlugin from '../../../src/plugins/cookies';
import state from '../data/cookie-state.json';
import createChromeApi from '../../../src/chrome-api';

describe('plugins/cookies/set', function () {

    const chrome = createChromeApi();

    before(function () {
        chrome.registerPlugin(new CookiesPlugin());
        chrome.cookies.state = _.cloneDeep(state);
    });

    beforeEach(function () {
        chrome.cookies.onChanged.removeListeners();
    });

    it('should set new cookie', function (done) {
        const length = chrome.cookies.state.length;
        chrome.cookies.set({url: 'http://mega-domain.com', name: 'data'}, function (cookie) {
            assert.lengthOf(chrome.cookies.state, length + 1);
            assert.equal(cookie.name, 'data');
            done();
        });
    });

    it('should replace cookie by new', function (done) {
        const length = chrome.cookies.state.length;
        chrome.cookies.set({url: 'http://.kraken.ru', name: '_cookie-sd', value: '123'}, function (cookie) {
            assert.lengthOf(chrome.cookies.state, length);
            assert.equal(cookie.name, '_cookie-sd');
            assert.equal(cookie.value, '123');
            done();
        });
    });

    it('should trigger change event', function (done) {
        chrome.cookies.onChanged.addListener(function (changeInfo) {
            assert.notOk(changeInfo.removed);
            assert.equal(changeInfo.cause, 'explicit');
            assert.equal(changeInfo.cookie.name, 'custom-name');
            assert.equal(changeInfo.cookie.value, '');
            done();
        });
        chrome.cookies.set({url: 'http://custom-url', name: 'custom-name'});
    });

    it('should trigger change event on replace', function (done) {
        const changeSpy = sinon.spy();
        const length = chrome.cookies.state.length;
        chrome.cookies.onChanged.addListener(changeSpy);
        chrome.cookies.set({url: 'http://.kraken.ru', name: 'LKSJDS', value: '123'}, function (cookie) {
            assert.lengthOf(chrome.cookies.state, length);
            assert.equal(cookie.name, 'LKSJDS');
            assert.equal(cookie.value, '123');

            assert.calledTwice(changeSpy);
            assert.calledOnce(changeSpy.withArgs({removed: true, cause: 'overwrite', cookie: cookie}));
            assert.calledOnce(changeSpy.withArgs({removed: false, cause: 'explicit', cookie: cookie}));

            done();
        });
    });
});
