import CookiesPlugin from '../../../src/plugins/cookies';
import { create } from '../../../src/chrome-api';
import { sinonStub } from '../../helpers/is';

describe('plugins/cookies', function () {

    describe('install', function () {

        const chrome = create();

        before(function () {
            this.plugin = new CookiesPlugin();
            chrome.install(new CookiesPlugin());
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

            assert.notOk(sinonStub(chrome.cookies.set));
            assert.notOk(sinonStub(chrome.cookies.get));
            assert.notOk(sinonStub(chrome.cookies.getAl));
            assert.notOk(sinonStub(chrome.cookies.remove));
        });
    });
});
