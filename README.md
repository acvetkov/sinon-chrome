[![Build Status](https://travis-ci.org/acvetkov/sinon-chrome.svg?branch=master)](https://travis-ci.org/acvetkov/sinon-chrome)
[![Coverage Status](https://coveralls.io/repos/acvetkov/sinon-chrome/badge.svg?branch=master&service=github)](https://coveralls.io/github/acvetkov/sinon-chrome?branch=master)
[![Code Climate](https://codeclimate.com/github/acvetkov/sinon-chrome/badges/gpa.svg)](https://codeclimate.com/github/acvetkov/sinon-chrome)
[![npm version](https://badge.fury.io/js/sinon-chrome.svg)](https://www.npmjs.com/package/sinon-chrome)

## What is it?

Mocks for `chrome.*` extensions [api](https://developer.chrome.com/extensions/api_index) via [sinon stubs](http://sinonjs.org/docs/#stubs).
Run unit tests for chrome extensions in node or browser.

**Features**

1. Stubs for all `chrome.*` methods and properties
2. Manual events triggering
3. Plugins to emulate cookies storage behavior, opened tabs, etc

## How to install

**Npm:**

```bash
npm install sinon-chrome
```

**Direct download:**  
You can download `sinon-chrome` bundle from [release](https://github.com/acvetkov/sinon-chrome/releases) page.

## How to use

**Node**
```js
before(function () {
   global.chrome = require('sinon-chrome');
});
```

**Browser**

Just add `sinon-chrome` bundle to your page.

```html
<script src="/path/to/sinon-chrome.latest.js">
```

#### Write tests

You can use all sinon stub api to create chrome methods behavior.

**For example**

```js

var domainACookies = [
   {
      name: 'a',
      value: 'b',
      domain: 'domainA.com'
   }
];

var domainBCookies = [
   {
      name: 'b',
      value: 'c',
      domain: 'domainB.com'
   }
];

var allCookies = domainACookies.concat(domainBCookies);

before(function () {
   chrome.cookies.getAll.withArgs({domain: 'domainA.com'}).yields(domainACookies);
   chrome.cookies.getAll.withArgs({domain: 'domainB.com'}).yields(domainBCookies);
   chrome.cookies.getAll.withArgs({}).yields(allCookies);
});

it('should return correct cookies for domain A', function () {
   chrome.cookies.getAll({domain: 'domainA.com'}, function (list) {
      assert.deepEqual(list, domainACookies);
   });
});

it('should return correct cookies for domain B', function () {
   chrome.cookies.getAll({domain: 'domainB.com'}, function (list) {
      assert.deepEqual(list, domainBCookies);
   });
});

it('should return correct cookies for all domains', function () {
   chrome.cookies.getAll({}, function (list) {
      assert.deepEqual(list, allCookies);
   });
});

```

### Properties

You can define chrome api property values.

**For example**

```js
chrome.runtime.id = 'test';
chrome.runtime.lastError = new Error('some error');
chrome.windows.WINDOW_ID_CURRENT = 100;

console.log(chrome.runtime.id); // test
console.log(chrome.runtime.lastError); // Error: some error(…)
console.log(chrome.windows.WINDOW_ID_CURRENT); // 100

chrome.flush();

console.log(chrome.runtime.id); // undefined
console.log(chrome.runtime.lastError); // undefined
console.log(chrome.windows.WINDOW_ID_CURRENT); // undefined
```

### Events

You can can manipulate by chrome events by manual triggering with custom params.

**For example**

```js
var handler = sinon.spy();
chrome.cookies.onChanged.addListener(handler);

chrome.cookies.onChanged.trigger(1, 2, 3);
handler.withArgs(1, 2, 3).callCount; // 1

chrome.cookies.onChanged.trigger(1, 2, 3);
handler.withArgs(1, 2, 3).callCount; // 2

// remove listener
chrome.cookies.onChanged.removeListener(handler);
chrome.cookies.onChanged.trigger(1, 2, 3);
chrome.cookies.onChanged.trigger(1, 2, 3);
handler.withArgs(1, 2, 3).callCount; // 2
```

To reset stubs data, you should call `chrome.reset`.

**For example**

```js
chrome.tabs.getAll();
chrome.tabs.getAll();

chrome.runtime.id = 'test_id';

console.log(chrome.tabs.getAll.callCount); // 2

chrome.reset();
console.log(chrome.tabs.getAll.callCount); // 0
```

To reset stubs behavior, you should call `chrome.flush` or `chrome.[namespace].[method].resetBehavior`

**For example**

```js
chrome.runtime.getURL.returns('url');
chrome.tabs.query.yields([1, 2, 3]);
console.log(chrome.runtime.getURL()); // url
chrome.tabs.query({}, function tabsHandler(list) {
   console.log(list); // [1, 2, 3]
});

chrome.flush();
console.log(chrome.runtime.getURL()); // undefined
chrome.tabs.query({}, function tabsHandler(list) {
   // unreachable point. Function tabsHandler will never be called
});
```

## Difference from 0.2 version

We remove all predefined properties and behavior.
You must define all stubs behavior by yourself.

**For example**

```js
before(function () {
   chrome.runtime.id = 'my_test_id';
   chrome.runtime.getURL = function (path) {
      return 'chrome-extension://' + chrome.runtime.id + '/' + path;
   };
});
```

Checkout [example page](https://github.com/acvetkov/sinon-chrome/wiki/Usage-example) for more info.

## Plugins

Sinon chrome module supports plugins.

- [Cookie plugin](https://github.com/acvetkov/sinon-chrome/wiki/Cookie-plugin)
- Alarm plugin
- Tabs plugin

## Supported namespaces

1. [chrome.alarms](https://developer.chrome.com/extensions/alarms)
2. [chrome.bookmarks](https://developer.chrome.com/extensions/bookmarks)
3. [chrome.browserAction](https://developer.chrome.com/extensions/browserAction)
4. [chrome.browsingData](https://developer.chrome.com/extensions/browsingData)
5. [chrome.certificateProvider](https://developer.chrome.com/extensions/certificateProvider)
6. [chrome.commands](https://developer.chrome.com/extensions/commands)
7. [chrome.contentSettings](https://developer.chrome.com/extensions/contentSettings)
8. [chrome.contextMenus](https://developer.chrome.com/extensions/contextMenus)
9. [chrome.cookies](https://developer.chrome.com/extensions/cookies)
10. [chrome.debugger](https://developer.chrome.com/extensions/debugger)
11. [chrome.declarativeContent](https://developer.chrome.com/extensions/declarativeContent)
12. [chrome.desktopCapture](https://developer.chrome.com/extensions/desktopCapture)
13. [chrome.devtools.inspectedWindow](https://developer.chrome.com/extensions/devtools_inspectedWindow)
14. [chrome.devtools.network](https://developer.chrome.com/extensions/devtools_network)
15. [chrome.devtools.panels](https://developer.chrome.com/extensions/devtools_panels)
16. [chrome.downloads](https://developer.chrome.com/extensions/downloads)
17. [chrome.extension](https://developer.chrome.com/extensions/extension)
18. [chrome.extensionTypes](https://developer.chrome.com/extensions/extensionTypes)
19. [chrome.fontSettings](https://developer.chrome.com/extensions/fontSettings)
20. [chrome.gcm](https://developer.chrome.com/extensions/gcm)
21. [chrome.history](https://developer.chrome.com/extensions/history)
22. [chrome.i18n](https://developer.chrome.com/extensions/i18n)
23. [chrome.identity](https://developer.chrome.com/extensions/identity)
24. [chrome.idle](https://developer.chrome.com/extensions/idle)
25. [chrome.instanceID](https://developer.chrome.com/extensions/instanceID)
26. [chrome.management](https://developer.chrome.com/extensions/management)
27. [chrome.notifications](https://developer.chrome.com/extensions/notifications)
28. [chrome.omnibox](https://developer.chrome.com/extensions/omnibox)
29. [chrome.pageAction](https://developer.chrome.com/extensions/pageAction)
30. [chrome.pageCapture](https://developer.chrome.com/extensions/pageCapture)
31. [chrome.permissions](https://developer.chrome.com/extensions/permissions)
32. [chrome.printerProvider](https://developer.chrome.com/extensions/printerProvider)
33. [chrome.privacy](https://developer.chrome.com/extensions/privacy)
34. [chrome.proxy](https://developer.chrome.com/extensions/proxy)
35. [chrome.runtime](https://developer.chrome.com/extensions/runtime)
36. [chrome.sessions](https://developer.chrome.com/extensions/sessions)
37. [chrome.storage](https://developer.chrome.com/extensions/storage)
38. [chrome.system.cpu](https://developer.chrome.com/extensions/system_cpu)
39. [chrome.system.display](https://developer.chrome.com/apps/system_display)
40. [chrome.system.memory](https://developer.chrome.com/extensions/system_memory)
41. [chrome.system.storage](https://developer.chrome.com/extensions/system_storage)
42. [chrome.tabCapture](https://developer.chrome.com/extensions/tabCapture)
43. [chrome.tabs](https://developer.chrome.com/extensions/tabs)
44. [chrome.topSites](https://developer.chrome.com/extensions/topSites)
45. [chrome.tts](https://developer.chrome.com/extensions/tts)
46. [chrome.ttsEngine](https://developer.chrome.com/extensions/ttsEngine)
47. [chrome.webNavigation](https://developer.chrome.com/extensions/webNavigation)
48. [chrome.webRequest](https://developer.chrome.com/extensions/webRequest)
49. [chrome.windows](https://developer.chrome.com/extensions/windows)

## Development and pull request.

Fork this repo and install all dependencies.
Don't forget check your code style and run tests before send pull request.

**code checking**

```bash
npm run lint
```

**run tests**

```bash
npm test
```

## Any questions?

Feel free to [open issue](https://github.com/acvetkov/sinon-chrome/issues).

## Contributors

1. [Vitaly Potapov](https://github.com/vitalets)
2. [Aleksey Tsvetkov](https://github.com/acvetkov)
