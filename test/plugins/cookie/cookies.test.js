import CookiesPlugin from '../../../src/plugins/cookies';
import * as chromeApi from '../../../src/chrome-api';
import * as is from '../../helpers/is';

describe('plugins/cookies', function () {

    describe('install', function () {

        const chrome = chromeApi.create();

        before(function () {
            this.plugin = new CookiesPlugin();
            chrome.requirePlugin(new CookiesPlugin());
        });

        it('should be defined', function () {
            assert.isFunction(this.plugin.install);
        });

        it('should replace cookie methods', function () {
            assert.isFunction(chrome.cookies.install);
            assert.isFunction(chrome.cookies.set);
            assert.isFunction(chrome.cookies.get);
            assert.isFunction(chrome.cookies.getAll);
            assert.isFunction(chrome.cookies.remove);

            assert.notOk(is.sinonStub(chrome.cookies.set));
            assert.notOk(is.sinonStub(chrome.cookies.get));
            assert.notOk(is.sinonStub(chrome.cookies.getAll));
            assert.notOk(is.sinonStub(chrome.cookies.remove));
        });
    });
});
