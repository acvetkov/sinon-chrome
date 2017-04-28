[![Build Status](https://travis-ci.org/acvetkov/sinon-chrome.svg?branch=master)](https://travis-ci.org/acvetkov/sinon-chrome)
[![npm version](https://badge.fury.io/js/sinon-chrome.svg)](https://www.npmjs.com/package/sinon-chrome)

# Sinon-chrome

Sinon-chrome is helper tool for unit-testing chromium and Firefox extensions and apps. It mocks all extensions api with sinon stubs that allows you to run tests in Node.js without actual browser.

# Schema support
API mocks are generated using official chromium extensions API (Firefox webextensions) schemas that ensures consistency with real API. Actual schemas are taken from Chrome 53 and Firefox 49.

# How it works

Sinon-chrome mocks all chrome api, replaced methods by [sinon stubs](http://sinonjs.org/docs/#stubs) with some sugar.
Chrome events replaced by classes with same behavior, so you can test your event handlers with manual triggering chrome events.
All properties has values from chrome schema files.


# Install

We recommend use `sinon-chrome` on Node.js platform.

```
npm install sinon-chrome --save-dev
```

But, if you want...

You can download `sinon-chrome` bundle from [release](https://github.com/acvetkov/sinon-chrome/releases) page and include it on your page

```html
<script src="/path/to/sinon-chrome.min.js">
```

or

```html
<script src="/path/to/sinon-chrome-apps.min.js">
```

# Usage

For mock extensions Api

```js
const chrome = require('sinon-chrome');

// or

const chrome = require('sinon-chrome/extensions');
```

For mock apps Api

```js
const chrome = require('sinon-chrome/apps'); // stable apps api
```

# Examples

Let's write small navigation helper, which use chrome api methods.

```js
export const navigationTarget = {
    NEW_WINDOW: 'new-window',
    NEW_TAB: 'new-tab',
    CURRENT_TAB: 'current-tab',
};

/**
 * Navigate user
 * @param {String} url
 * @param {String} [target]
 * @returns {*}
 */
export function navigate(url, target = navigationTarget.NEW_TAB) {
    switch (target) {
        case navigationTarget.NEW_WINDOW:
            return chrome.windows.create({url: url, focused: true, type: 'normal'});
        case navigationTarget.CURRENT_TAB:
            return chrome.tabs.update({url: url, active: true});
        default:
            return chrome.tabs.create({url: url, active: true});
    }
}
```

Test it

```js
import chrome from '../src'; // from 'sinon-chrome'
import {assert} from 'chai';
import {navigate, navigationTarget} from './navigate';

describe('navigate.js', function () {

    const url = 'http://my-domain.com';

    before(function () {
        global.chrome = chrome;
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
});
```

You can run this example by command

```
npm run test-navigate
```

More tests in `examples` dir.


## stubs api

With original sinon stubs [api](http://sinonjs.org/docs/#stubs) we add `flush` method, which reset stub behavior.
Sinon stub has same method `resetBehavior`, but it has some issues.

**Example**

```js
chrome.cookie.getAll.withArgs({name: 'my_cookie'}).yields([1, 2]);
chrome.cookie.getAll.withArgs({}).yields([3, 4]);

chrome.cookie.getAll({}, list => console.log(list)); // [3, 4]
chrome.cookie.getAll({name: 'my_cookie'}, list => console.log(list)); // [1, 2]
chrome.cookie.getAll.flush();
chrome.cookie.getAll({name: 'my_cookie'}, list => console.log(list)); // not called
chrome.cookie.getAll({}, list => console.log(list)); // not called
```

### events

Let's write module, which depends on chrome events

```js
export default class EventsModule {
    constructor() {
        this.observe();
    }

    observe() {
        chrome.tabs.onUpdated.addListener(tab => this.handleEvent(tab));
    }

    handleEvent(tab) {
        chrome.runtime.sendMessage(tab.url);
    }
}
```

And test it

```js
import chrome from '../src'; // from 'sinon-chrome'
import {assert} from 'chai';
import EventsModule from './events';

describe('events.js', function () {

    before(function () {
        global.chrome = chrome;
        this.events = new EventsModule();
    });

    beforeEach(function () {
        chrome.runtime.sendMessage.flush();
    });

    it('should subscribe on chrome.tabs.onUpdated', function () {
        assert.ok(chrome.tabs.onUpdated.addListener.calledOnce);
    });

    it('should send correct url on tabs updated event', function () {
        assert.ok(chrome.runtime.sendMessage.notCalled);
        chrome.tabs.onUpdated.dispatch({url: 'my-url'});
        assert.ok(chrome.runtime.sendMessage.calledOnce);
        assert.ok(chrome.runtime.sendMessage.withArgs('my-url').calledOnce);
    });

    after(function () {
        chrome.flush();
        delete global.chrome;
    });
});
```

You can run this test via

```
npm run test-events
```

### properties

You can set property values. `chrome.flush` reset properties to default values (`null` or specified by schema).
Let's create module, which wraps chrome api with Promise. If `chrome.runtime.lastError` is set, promise will be rejected.

```js
export const api = {
    tabs: {
        /**
         * Wrapper for chrome.tabs.query
         * @param {Object} criteria
         * @returns {Promise}
         */
        query(criteria) {
            return new Promise((resolve, reject) => {
                chrome.tabs.query(criteria, tabs => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(tabs);
                    }
                });
            });
        }
    }
};
```

And our tests

```js
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
```

You can run this test via

```
npm run test-then
```

# Plugins

Sinon chrome module supports plugins, that emulates browser behavior.
More info on [example page](https://github.com/acvetkov/sinon-chrome/wiki/Cookie-plugin).

- [Cookie plugin](https://github.com/acvetkov/sinon-chrome/wiki/Cookie-plugin)
- [i18n plugin](https://github.com/acvetkov/sinon-chrome/tree/master/src/plugins/i18n)

```js
const chrome = require('sinon-chrome/extensions');
const CookiePlugin = require('sinon-chrome/plugins').CookiePlugin;

chrome.registerPlugin(new CookiePlugin());
```

## Extension namespaces

* [chrome.alarms](https://developer.chrome.com/extensions/alarms)
* [chrome.bookmarks](https://developer.chrome.com/extensions/bookmarks)
* [chrome.browserAction](https://developer.chrome.com/extensions/browserAction)
* [chrome.browsingData](https://developer.chrome.com/extensions/browsingData)
* [chrome.commands](https://developer.chrome.com/extensions/commands)
* [chrome.contentSettings](https://developer.chrome.com/extensions/contentSettings)
* [chrome.contextMenus](https://developer.chrome.com/extensions/contextMenus)
* [chrome.cookies](https://developer.chrome.com/extensions/cookies)
* [chrome.debugger](https://developer.chrome.com/extensions/debugger)
* [chrome.declarativeContent](https://developer.chrome.com/extensions/declarativeContent)
* [chrome.desktopCapture](https://developer.chrome.com/extensions/desktopCapture)
* [chrome.devtools](https://developer.chrome.com/extensions/devtools)
* [chrome.dial](https://chromium.googlesource.com/chromium/src.git/+/master/chrome/common/extensions/api/dial.idl) (undocumented API for communication with DIAL-capable devices)
* [chrome.downloads](https://developer.chrome.com/extensions/downloads)
* [chrome.extension](https://developer.chrome.com/extensions/extension)
* [chrome.extensionTypes](https://developer.chrome.com/extensions/extensionTypes)
* [chrome.fontSettings](https://developer.chrome.com/extensions/fontSettings)
* [chrome.gcm](https://developer.chrome.com/extensions/gcm)
* [chrome.history](https://developer.chrome.com/extensions/history)
* [chrome.i18n](https://developer.chrome.com/extensions/i18n)
* [chrome.identity](https://developer.chrome.com/extensions/identity)
* [chrome.idle](https://developer.chrome.com/extensions/idle)
* [chrome.instanceID](https://developer.chrome.com/extensions/instanceID)
* [chrome.management](https://developer.chrome.com/extensions/management)
* [chrome.notifications](https://developer.chrome.com/extensions/notifications)
* [chrome.omnibox](https://developer.chrome.com/extensions/omnibox)
* [chrome.pageAction](https://developer.chrome.com/extensions/pageAction)
* [chrome.pageCapture](https://developer.chrome.com/extensions/pageCapture)
* [chrome.permissions](https://developer.chrome.com/extensions/permissions)
* [chrome.power](https://developer.chrome.com/extensions/power)
* [chrome.printerProvider](https://developer.chrome.com/extensions/printerProvider)
* [chrome.privacy](https://developer.chrome.com/extensions/privacy)
* [chrome.proxy](https://developer.chrome.com/extensions/proxy)
* [chrome.runtime](https://developer.chrome.com/extensions/runtime)
* [chrome.sessions](https://developer.chrome.com/extensions/sessions)
* [chrome.storage](https://developer.chrome.com/extensions/storage)
* [chrome.system](https://developer.chrome.com/extensions/system)
* [chrome.tabCapture](https://developer.chrome.com/extensions/tabCapture)
* [chrome.tabs](https://developer.chrome.com/extensions/tabs)
* [chrome.topSites](https://developer.chrome.com/extensions/topSites)
* [chrome.tts](https://developer.chrome.com/extensions/tts)
* [chrome.ttsEngine](https://developer.chrome.com/extensions/ttsEngine)
* [chrome.types](https://developer.chrome.com/extensions/types)
* [chrome.webNavigation](https://developer.chrome.com/extensions/webNavigation)
* [chrome.webRequest](https://developer.chrome.com/extensions/webRequest)
* [chrome.webstore](https://developer.chrome.com/extensions/webstore)
* [chrome.windows](https://developer.chrome.com/extensions/windows)

## Apps namespaces

* [chrome.alarms](https://developer.chrome.com/apps/alarms)
* [chrome.app.runtime](https://developer.chrome.com/apps/app.runtime)
* [chrome.app.window](https://developer.chrome.com/apps/app_window)
* [chrome.bluetooth](https://developer.chrome.com/apps/bluetooth)
* [chrome.bluetoothSocket](https://developer.chrome.com/apps/bluetoothSocket)
* [chrome.browser](https://developer.chrome.com/apps/browser)
* [chrome.commands](https://developer.chrome.com/apps/commands)
* [chrome.contextMenus](https://developer.chrome.com/apps/contextMenus)
* [chrome.events](https://developer.chrome.com/apps/events)
* [chrome.extensionTypes](https://developer.chrome.com/apps/extensionTypes)
* [chrome.fileSystem](https://developer.chrome.com/apps/fileSystem)
* [chrome.gcm](https://developer.chrome.com/apps/gcm)
* [chrome.hid](https://developer.chrome.com/apps/hid)
* [chrome.i18n](https://developer.chrome.com/apps/i18n)
* [chrome.identity](https://developer.chrome.com/apps/identity)
* [chrome.idle](https://developer.chrome.com/apps/idle)
* [chrome.instanceID](https://developer.chrome.com/apps/instanceID)
* [chrome.mdns](https://developer.chrome.com/apps/mdns)
* [chrome.mediaGalleries](https://developer.chrome.com/apps/mediaGalleries)
* [chrome.notifications](https://developer.chrome.com/apps/notifications)
* [chrome.permissions](https://developer.chrome.com/apps/permissions)
* [chrome.power](https://developer.chrome.com/apps/power)
* [chrome.printerProvider](https://developer.chrome.com/apps/printerProvider)
* [chrome.runtime](https://developer.chrome.com/apps/runtime)
* [chrome.serial](https://developer.chrome.com/apps/serial)
* [chrome.socket](https://developer.chrome.com/apps/socket)
* [chrome.sockets](https://developer.chrome.com/apps/sockets)
* [chrome.storage](https://developer.chrome.com/apps/storage)
* [chrome.syncFileSystem](https://developer.chrome.com/apps/syncFileSystem)
* [chrome.system](https://developer.chrome.com/apps/system)
* [chrome.tts](https://developer.chrome.com/apps/tts)
* [chrome.types](https://developer.chrome.com/apps/types)
* [chrome.usb](https://developer.chrome.com/apps/usb)
* [chrome.accessibilityFeatures](https://developer.chrome.com/apps/accessibilityFeatures)
* [chrome.bluetoothLowEnergy](https://developer.chrome.com/apps/bluetoothLowEnergy)
* [chrome.documentScan](https://developer.chrome.com/apps/documentScan)
* [chrome.fileSystemProvider](https://developer.chrome.com/apps/fileSystemProvider)
* [chrome.vpnProvider](https://developer.chrome.com/apps/vpnProvider)
* [chrome.wallpaper](https://developer.chrome.com/apps/wallpaper)

## Webextensions API

* [browser.alarms](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms)
* [browser.cookies](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies)
* [browser.downloads](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/downloads)
* [browser.events](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/events)
* [browser.manifest](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/manifest)
* [browser.extensionTypes](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/extensionTypes)
* [browser.extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/extension)
* [browser.i18n](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/i18n)
* [browser.idle](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/idle)
* [browser.management](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/management)
* [browser.notifications](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/notifications)
* [browser.runtime](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime)
* [browser.storage](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage)
* [browser.test](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/test)
* [browser.webNavigation](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webNavigation)
* [browser.webRequest](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webRequest)
* [browser.bookmarks](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/bookmarks)
* [browser.browserAction](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction)
* [browser.commands](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/commands)
* [browser.contextMenusInternal](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenusInternal)
* [browser.contextMenus](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenus)
* [browser.history](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/history)
* [browser.pageAction](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction)
* [browser.tabs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs)
* [browser.windows](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/windows)

# Any questions?

Feel free to [open issue](https://github.com/acvetkov/sinon-chrome/issues).

# Useful resources
[Awesome Browser Extensions And Apps](https://github.com/vitalets/awesome-browser-extensions-and-apps) - a curated list of awesome resources for building browser extensions and apps.
