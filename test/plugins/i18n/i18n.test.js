import I18nPlugin from '../../../src/plugins/i18n';
import createChromeApi from '../../../src/chrome-api';
import * as is from '../../helpers/is';
import mockTranslations from './translations.json';

describe('plugins/i18n', function () {
    const chrome = createChromeApi();

    before(function () {
        this.plugin = new I18nPlugin(mockTranslations);
        chrome.registerPlugin(this.plugin);
    });
    after(function () {
        delete this.plugin;
        delete this.translations;
    });

    describe('install', function () {
        it('should be defined', function () {
            assert.isFunction(this.plugin.install);
        });

        it('should set i18n methods', function () {
            assert.isFunction(chrome.i18n.install);
            assert.isFunction(chrome.i18n.getMessage);
            assert.isFunction(chrome.i18n.getAcceptLanguages);
            assert.isFunction(chrome.i18n.getUILanguage);
            assert.isFunction(chrome.i18n.detectLanguage);

            assert.notOk(is.sinonStub(chrome.i18n.getMessage));
            assert.notOk(is.sinonStub(chrome.i18n.getAcceptLanguages));
            assert.notOk(is.sinonStub(chrome.i18n.getUILanguage));
            assert.notOk(is.sinonStub(chrome.i18n.detectLanguage));
        });
    });

    describe('getMessage', function () {
        it('returns "undefined" for unknown messages', function () {
            assert.equal(chrome.i18n.getMessage('unknown'), 'undefined');
        });

        it('returns the predefined message text', function () {
            assert.equal(chrome.i18n.getMessage('one'), 'Hi!');
        });

        it('replaces message placeholders', function () {
            assert.equal(chrome.i18n.getMessage('two', 'John', 'Doe'), 'Hi John Doe!');
        });

        it('replace unknown message placeholders with "undefined', function () {
            assert.equal(chrome.i18n.getMessage('two', 'John'), 'Hi John undefined!');
        });
    });

    describe('getAcceptLanguages', function () {
        it('passes a mock array of accepted languages to callback', function () {
            const spy = sinon.spy();
            chrome.i18n.getAcceptLanguages(spy);
            assert.ok(spy.calledWith(['en-US', 'en', 'el', 'fr', 'it']));
        });
    });

    describe('getUILanguage', function () {
        it('returns "en-US"', function () {
            assert.equal(chrome.i18n.getUILanguage(), 'en-US');
        });
    });

    describe('detectLanguage', function () {
        it('passes "en-US" to callback', function () {
            const spy = sinon.spy();
            chrome.i18n.detectLanguage('test', spy);
            assert.ok(spy.calledWith('en-US'));
        });
    });
});
