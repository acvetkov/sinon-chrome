/**
 * @author https://github.com/acvetkov
 * @overview Test navigate.js
 */

import chrome from '../src'; // from 'sinon-chrome'
import {assert} from 'chai';
import {navigate, navigationTarget} from './navigate';

describe('navigate.js', function () {

    const url = 'http://my-domain.com';

    before(function () {
        global.chrome = chrome;
    });

    beforeEach(function () {
        chrome.flush();
    });

    it('should navigate to new window', function () {
        assert.ok(chrome.windows.create.notCalled, 'windows.create should not be called');
        navigate(url, navigationTarget.NEW_WINDOW);
        assert.ok(chrome.windows.create.calledOnce, 'windows.create should be called');
        assert.ok(
            chrome.windows.create.withArgs({url, focused: true, type: 'normal'}).calledOnce,
            'windows.create should be called with specified args'
        );
    });

    it('should navigate to new tab', function () {
        assert.ok(chrome.tabs.create.notCalled, 'tabs.create should not be called');
        navigate(url, navigationTarget.NEW_TAB);
        assert.ok(chrome.tabs.create.calledOnce, 'tabs.create should be called');
        assert.ok(
            chrome.tabs.create.withArgs({url, active: true}).calledOnce,
            'windows.create should be called with specified args'
        );
    });

    it('should navigate to current tab', function () {
        assert.ok(chrome.tabs.update.notCalled, 'tabs.update should not be called');
        navigate(url, navigationTarget.CURRENT_TAB);
        assert.ok(chrome.tabs.update.calledOnce, 'tabs.update should be called');
        assert.ok(
            chrome.tabs.update.withArgs({url, active: true}).calledOnce,
            'windows.create should be called with specified args'
        );
    });

    after(function () {
        chrome.flush();
        delete global.chrome;
    });
});
