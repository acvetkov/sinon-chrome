/**
 * Chrome.* API mocks with sinon.
 */

var fs = require('fs');
var path = require('path');
var sinon = require('sinon');
var EventEmitter = require('./event');
var sandbox = sinon.sandbox.create();

var NO_ARGS = 0;
var ONE_ARG = 1;
var MANY_ARGS = 2;
var NO_CALLBACK = 3;

var cache = {};

/**
 * Lazy getter for methods
 */
function getter(prop, methods) {
    if (cache[prop]) {
        return cache[prop];
    }
    cache[prop] = {};
    Object.keys(methods || {}).forEach(function(k) {
        // stub whole event or single method
        cache[prop][k] = k.substring(0, 2) === 'on' ? chrome._stubEvent() : sandbox.stub();
        if (methods[k] !== NO_CALLBACK) {
            // data passed to callback
            var data;
            if (methods[k] === NO_ARGS) {
                data = [];
            } else {
                var filename = path.resolve(__dirname, path.join('data', prop, k + '.json'));
                if (fs.existsSync(filename)) {
                    // read data from file
                    data = require(filename);
                    if (methods[k] === ONE_ARG) {
                        data = [data];
                    }
                    // add latest callback argument for onMessage
                    // otherwise have an error `TypeError: stub expected to yield, but no callback was passed`
                    if (k === 'onMessage') {
                        data.push(sandbox.spy());
                    }
                }
            }
            cache[prop][k].yieldsAsync.apply(cache[prop][k], data);
        }
    });
    return cache[prop];
}

/**
 * Add `reset` method to event emitter
 */
EventEmitter.prototype.reset = function() {
    this.removeListeners();
    this.addListener.reset();
    this.removeListener.reset();
    this.hasListener.reset();
};

/**
 * chrome.* APi mocks
 */
var chrome = {
    _stubEvent: function() {
        var emitter = new EventEmitter();
        emitter.addListener = sandbox.spy(emitter, 'addListener');
        emitter.removeListener = sandbox.spy(emitter, 'removeListener');
        emitter.hasListener = sandbox.spy(emitter, 'hasListener');
        return emitter;
    },
    /**
     * Reset all stubs
     * See https://github.com/cjohansen/Sinon.JS/issues/572
     */
    _reset: function() {
        for (var prop in cache) {
            for (var method in cache[prop]) {
                cache[prop][method].reset();
            }
        }
    },
    get _sandbox() {
        return sandbox;
    },
    // ------ chrome.* API stubs ------
    get tabs() {
        return getter('tabs',  {
            get: ONE_ARG,
            getCurrent: ONE_ARG,
            query: ONE_ARG,
            update: ONE_ARG,
            onUpdated: MANY_ARGS,
            onRemoved: MANY_ARGS,
            onReplaced: MANY_ARGS,
        });
    },
    get runtime() {
        return getter('runtime',  {
            onMessage: MANY_ARGS
        });
    },
    get windows() {
        return getter('windows',  {
            getAll: ONE_ARG
        });
    },
    get browserAction() {
        return getter('browserAction',  {
            setIcon: NO_ARGS,
            setTitle: NO_CALLBACK,
            setBadgeText: NO_CALLBACK,
            setBadgeBackgroundColor: NO_CALLBACK,
            getTitle: MANY_ARGS,
            onClicked: ONE_ARG
        });
    },
    get webRequest() {
        return getter('webRequest',  {
            onBeforeRequest: NO_ARGS,
            onCompleted: NO_ARGS,
            onErrorOccurred: NO_ARGS
        });
    },
    get extension() {
        return getter('extension', {});
    },
    get contextMenus() {
        return getter('contextMenus', {});
    },
    get management() {
        return getter('management', {});
    },
    get webNavigation() {
        return getter('webNavigation', {
            onCommitted: ONE_ARG
        });
    },
    get cookies() {
        return getter('cookies', {});
    },
    get history() {
        return getter('history', {
            deleteUrl: NO_ARGS
        });
    },
    get i18n() {
        return getter('i18n', {});
    },
    storage: {
        get local() {
            return getter('storage.local', {
                get: ONE_ARG,
                set: ONE_ARG
            });
        },
        get sync() {
            return getter('storage.sync', {
                get: ONE_ARG,
                set: ONE_ARG
            });
        }
    }
};

module.exports = chrome;
/*
    runtime: {
        onMessage: getEmitter(),
        onMessageExternal: getEmitter(),
        onConnect: getEmitter(),
        sendMessage: sandbox.stub(),
        getManifest: sandbox.stub(),
        setUninstallUrl: sandbox.stub(),
        //id: "12345678910111213141516"
    },
    extension: {
        getBackgroundPage: sandbox.stub(),
        getURL: sandbox.stub().returns("chrome-extension://key/"),
        onMessage: getEmitter(),
        onMessageExternal: getEmitter()
    },
    contextMenus: {},
    management: {
        uninstall: sandbox.stub(),
        onUninstalled: getEmitter(),
        onEnabled: getEmitter(),
        onDisabled:getEmitter()
    },
    webRequest: {
        onBeforeRequest: getEmitter(),
        onCompleted: getEmitter(),
        onErrorOccurred: getEmitter()
    },
    webNavigation: {
        onCommitted: getEmitter(),
        onCompleted: getEmitter()
    },
    cookies: {
        get: sandbox.stub(),
        getAll: sandbox.stub(),
        set: sandbox.stub(),
        remove: sandbox.stub(),
        getAllCookieStores: sandbox.stub(),
        onChanged: EventEmitter()
    },
    storage: {
        local: accessor(),
        sync: accessor()
    },
    history: {
        search: sandbox.stub(),
        getVisits: sandbox.stub(),
        addUrl: sandbox.stub(),
        deleteUrl: sandbox.stub(),
        deleteRange: sandbox.stub(),
        deleteAll: sandbox.stub(),
        onVisited: getEmitter(),
        onVisitRemoved: getEmitter()
    },
    i18n: {
        getMessage: sandbox.stub(),
        getUILanguage: sandbox.stub(),
        getAcceptLanguages: sandbox.stub()
    },
    windows: {
        create: sandbox.stub(),
        remove: sandbox.stub(),
        onFocusChanged: getEmitter(),
        onCreated: getEmitter(),
        getCurrent: sandbox.stub()
    }

};*/
