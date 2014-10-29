/**
 * Chrome.* API stubs with sinonjs
 */

var fs = require('fs');
var path = require('path');
var sinon = require('sinon');
var EventEmitter = require('./event');
var sandbox = sinon.sandbox.create();

// callback signatures:
var CB_NO_ARGS = 0;
var CB_ONE_ARG = 1;
var CB_MANY_ARGS = 2;
var NO_CB = 3;

// closure vars
var cache = {};
var config = {
    isAsync: false
};

var noop = function() {};

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

        if ([CB_NO_ARGS, CB_ONE_ARG, CB_MANY_ARGS].indexOf(methods[k]) >= 0) {
            var data;
            if (methods[k] === CB_NO_ARGS) {
                data = [];
            } else {
                // try read response from file in `data/` directory
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
                        data.push(noop);
                    }
                }
            }
            cache[prop][k][config.isAsync ? 'yieldsAsync' : 'yields'].apply(cache[prop][k], data);
        }
    });
    return cache[prop];
}

/**
 * chrome.* APi mocks
 */
var chrome = {
    _stubEvent: function() {
        var emitter = new EventEmitter();
        sandbox.spy(emitter, 'addListener');
        sandbox.spy(emitter, 'removeListener');
        sandbox.spy(emitter, 'hasListener');
        return emitter;
    },
    /**
     * Reset all stubs and remove event listeners
     * See https://github.com/cjohansen/Sinon.JS/issues/572
     */
    _reset: function() {
        // reset spies
        (sandbox.fakes || []).forEach(function(fake) {
            if (typeof fake.reset === 'function') {
                fake.reset();
            }
        });
        // remove listeners
        for (var prop in cache) {
            for (var method in cache[prop]) {
                if (cache[prop][method] instanceof EventEmitter) {
                    cache[prop][method].removeListeners();
                }
            }
         }
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
    // ================ chrome.* API stubs =================
    // https://developer.chrome.com/extensions/api_index
    // =====================================================
    get accessibilityFeatures() {
        return getter('accessibilityFeatures', {});
    },
    get alarms() {
        return getter('alarms', {});
    },
    get bookmarks() {
        return getter('bookmarks', {});
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
    get browsingData() {
        return getter('browsingData', {});
    },
    get commands() {
        return getter('commands', {});
    },
    get contentSettings() {
        return getter('contentSettings', {});
    },
    get contextMenus() {
        return getter('contextMenus', {});
    },
    get cookies() {
        return getter('cookies', {
            onChanged: CB_MANY_ARGS
        });
    },
    get debugger() {
        return getter('debugger', {});
    },
    get declarativeContent() {
        return getter('declarativeContent', {});
    },
    get desktopCapture() {
        return getter('desktopCapture', {});
    },
    devtools: {
        get inspectedWindow() {
            return getter('devtools.inspectedWindow', {});
        },
        get network() {
            return getter('devtools.network', {});
        },
        get panels() {
            return getter('devtools.panels', {});
        }
    },
    get downloads() {
        return getter('downloads', {});
    },
    enterprise: {
        get platformKeys() {
            return getter('enterprise.platformKeys', {});
        }
    },
    get extension() {
        return getter('extension', {
            onMessageExternal: CB_MANY_ARGS
        });
    },
    get fileBrowserHandler() {
        return getter('fileBrowserHandler', {});
    },
    get fontSettings() {
        return getter('fontSettings', {});
    },
    get gcm() {
        return getter('gcm', {});
    },
    get history() {
        return getter('history', {
            deleteUrl: CB_NO_ARGS
        });
    },
    get i18n() {
        return getter('i18n', {});
    },
    get identity() {
        return getter('identity', {});
    },
    get idle() {
        return getter('idle', {});
    },
    input: {
        get ime() {
            return getter('ime', {});
        }
    },
    get management() {
        return getter('management', {});
    },
    get notifications() {
        return getter('notifications', {});
    },
    get omnibox() {
        return getter('omnibox', {});
    },
    get pageAction() {
        return getter('pageAction', {});
    },
    get pageCapture() {
        return getter('pageCapture', {});
    },
    get permissions() {
        return getter('permissions', {});
    },
    get power() {
        return getter('power', {});
    },
    get privacy() {
        return getter('privacy', {});
    },
    get proxy() {
        return getter('proxy', {});
    },
    get pushMessaging() {
        return getter('pushMessaging', {});
    },
    get runtime() {
        return getter('runtime',  {
            onMessage: CB_MANY_ARGS,
            onMessageExternal: CB_MANY_ARGS,
            sendMessage: CB_NO_ARGS
        });
    },
    get sessions() {
        return getter('sessions', {});
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
    },
    system: {
        get cpu() {
            return getter('system.cpu', {});
        },
        get memory() {
            return getter('system.memory', {});
        },
        get storage() {
            return getter('system.storage', {});
        }
    },
    get tabCapture() {
        return getter('tabCapture', {});
    },
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
    get topSites() {
        return getter('topSites', {});
    },
    get tts() {
        return getter('tts', {});
    },
    get ttsEngine() {
        return getter('ttsEngine', {});
    },
    get types() {
        return getter('types', {});
    },
    get webNavigation() {
        return getter('webNavigation', {
            onCommitted: CB_ONE_ARG
        });
    },
    get webRequest() {
        return getter('webRequest',  {
            onBeforeRequest: CB_NO_ARGS,
            onCompleted: CB_NO_ARGS,
            onErrorOccurred: CB_NO_ARGS
        });
    },
    get webstore() {
        return getter('webstore', {});
    },
    get windows() {
        return getter('windows',  {
            getAll: CB_ONE_ARG
        });
    }
};

module.exports = chrome;

