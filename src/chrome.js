/**
 * Chrome.* API stubs with sinonjs
 */

var fs = require('fs');
var path = require('path');
var sinon = require('sinon');
var EventEmitter = require('./event');
var sandbox = sinon.sandbox.create();

// callback signatures
var CB_NO_ARGS = 0;
var CB_ONE_ARG = 1;
var CB_MANY_ARGS = 2;
var NO_CB = 3;

// closure vars
var cache = {};
var config = {
    isAsync: false
};

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
        if (methods[k] !== NO_CB) {
            // data passed to callback
            var data;
            if (methods[k] === CB_NO_ARGS) {
                data = [];
            } else {
                var filename = path.resolve(__dirname, path.join('data', prop, k + '.json'));
                if (fs.existsSync(filename)) {
                    // read data from file
                    data = require(filename);
                    if (methods[k] === CB_ONE_ARG) {
                        data = [data];
                    }
                    // add latest callback argument (sendResponse) for onMessage
                    // otherwise have an error `TypeError: stub expected to yield, but no callback was passed`
                    if (k === 'onMessage') {
                        data.push(sandbox.spy());
                    }
                }
            }
            cache[prop][k][config.isAsync ? 'yieldsAsync' : 'yields'].apply(cache[prop][k], data);
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
        (sandbox.fakes || []).forEach(function(fake) {
            if (fake.reset) {
                fake.reset();
            }
        });
    },
    /**
     * Configure
     * @param  {object} aConfig config
     * @param  {bool} aConfig.isAsync is all calls async
     */
    _configure: function(aConfig) {
        aConfig = aConfig || {};
        Object.keys(aConfig).forEach(function(key) {
            config = aConfig[key];
        });
    },
    get _sandbox() {
        return sandbox;
    },
    // ------ chrome.* API stubs ------
    get tabs() {
        return getter('tabs',  {
            get: CB_ONE_ARG,
            getCurrent: CB_ONE_ARG,
            query: CB_ONE_ARG,
            update: CB_ONE_ARG,
            onCreated: CB_MANY_ARGS,
            onUpdated: CB_MANY_ARGS,
            onRemoved: CB_MANY_ARGS,
            onReplaced: CB_MANY_ARGS,
        });
    },
    get runtime() {
        return getter('runtime',  {
            onMessage: CB_MANY_ARGS,
            sendMessage: CB_NO_ARGS
        });
    },
    get windows() {
        return getter('windows',  {
            getAll: CB_ONE_ARG
        });
    },
    get browserAction() {
        return getter('browserAction',  {
            setIcon: CB_NO_ARGS,
            setTitle: NO_CB,
            setBadgeText: NO_CB,
            setBadgeBackgroundColor: NO_CB,
            getTitle: CB_MANY_ARGS,
            onClicked: CB_ONE_ARG
        });
    },
    get webRequest() {
        return getter('webRequest',  {
            onBeforeRequest: CB_NO_ARGS,
            onCompleted: CB_NO_ARGS,
            onErrorOccurred: CB_NO_ARGS
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
            onCommitted: CB_ONE_ARG
        });
    },
    get cookies() {
        return getter('cookies', {});
    },
    get history() {
        return getter('history', {
            deleteUrl: CB_NO_ARGS
        });
    },
    get i18n() {
        return getter('i18n', {});
    },
    storage: {
        get local() {
            return getter('storage.local', {
                get: CB_ONE_ARG,
                set: CB_ONE_ARG
            });
        },
        get sync() {
            return getter('storage.sync', {
                get: CB_ONE_ARG,
                set: CB_ONE_ARG
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
