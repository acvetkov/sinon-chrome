/**
 * Chrome.* API stubs with sinonjs
 */
(function() {

    // dependencies
    var sinon;
    var ChromeEvent;

    if (typeof exports === 'object') {
        sinon = require('sinon');
        ChromeEvent = require('./chrome-event');
        chromeAlarms = require('./chrome-alarms');
    } else {
        sinon = window.sinon;
        ChromeEvent = window.ChromeEvent;
        chromeAlarms = window.chromeAlarms;
    }

    var sandbox = sinon.sandbox.create();

    // cache of touched props
    var cache = {};

    /**
     * Some additional porperties (tweaks)
     */
    var tweaks = {
        runtime: {
            id: 'abcabcbabcabcabcbabcabcabcbabcab',
            getURL: function(path) {
                path = path.indexOf('/') === 0 ? path.substring(1) : path;
                return 'chrome-extension://' + chrome.runtime.id + '/' + path;
            }
        }
    };

    sandbox.spy(tweaks.runtime, 'getURL');

    /**
     * Lazy getter for methods
     */
    function getter(prop, methods) {
        if (cache[prop]) {
            return cache[prop];
        }
        cache[prop] = {};
        Object.keys(methods).forEach(function(m) {
            // method
            if (methods[m] === 0) {
                cache[prop][m] = sandbox.stub();
            // event
            } else if (methods[m] === 1) {
                cache[prop][m] = new ChromeEvent();
                sandbox.spy(cache[prop][m], 'addListener');
                sandbox.spy(cache[prop][m], 'hasListener');
                sandbox.spy(cache[prop][m], 'removeListener');
                sandbox.spy(cache[prop][m], 'removeListeners');
            // object
            } else {
                cache[prop][m] = methods[m];
            }
        });

        // tweaks
        if (tweaks[prop]) {
            Object.keys(tweaks[prop]).forEach(function(m){
                cache[prop][m] = tweaks[prop][m];
            });
        }

        if (prop === 'i18n') {
          cache[prop].getMessage.returnsArg(0);
          cache[prop].getMessage.withArgs('@@ui_locale').returns('en');
        }

        return cache[prop];
    }

    /**
     * chrome.* APi mocks
     */
    var chrome = {

       /**
        * Flush cache
        */
        flush: function () {
          cache = {};
        },

        /**
         * Reset all stubs and remove event listeners
         * See https://github.com/cjohansen/Sinon.JS/issues/572
         */
        reset: function() {
            // reset spies
            (sandbox.fakes || []).forEach(function(fake) {
                if (typeof fake.reset === 'function') {
                    fake.reset();
                }
            });
            // remove listeners
            for (var prop in cache) {
                for (var method in cache[prop]) {
                    if (cache[prop][method] instanceof ChromeEvent) {
                        cache[prop][method].removeListeners();
                    }
                }
            }
        },
        // ================ chrome.* API stubs =================
        // https://developer.chrome.com/extensions/api_index
        // =====================================================
        get alarms() {
            if (cache['alarms']) {
                return cache['alarms'];
            }

            var alarms = {
                clear: chromeAlarms.clear,
                clearAll: chromeAlarms.clearAll,
                create: chromeAlarms.create,
                get: chromeAlarms.get,
                getAll: chromeAlarms.getAll,
                onAlarm: new ChromeEvent()
            };

            chromeAlarms.onTrigger(function(alarm) {
              alarms.onAlarm.trigger(alarm);
            });

            Object.keys(alarms).forEach(function(key) {
              if (key !== 'onAlarm') {
                sandbox.spy(alarms, key);
              } else {
                sandbox.spy(alarms.onAlarm, 'addListener');
                sandbox.spy(alarms.onAlarm, 'hasListener');
                sandbox.spy(alarms.onAlarm, 'removeListener');
                sandbox.spy(alarms.onAlarm, 'removeListeners');
              }
            });

            cache['alarms'] = alarms;

            return alarms;
        },

        get app() {
            return getter("app", {
                getDetails: 0,
                getDetailsForFrame: 0,
                getIsInstalled: 0,
                installState: 0,
                runningState: 0
            });
        },

        get bookmarks() {
            return getter("bookmarks", {
                create: 0,
                get: 0,
                getChildren: 0,
                getRecent: 0,
                getSubTree: 0,
                getTree: 0,
                move: 0,
                onChanged: 1,
                onChildrenReordered: 1,
                onCreated: 1,
                onImportBegan: 1,
                onImportEnded: 1,
                onMoved: 1,
                onRemoved: 1,
                remove: 0,
                removeTree: 0,
                search: 0,
                update: 0
            });
        },

        get browserAction() {
            return getter("browserAction", {
                disable: 0,
                enable: 0,
                getBadgeBackgroundColor: 0,
                getBadgeText: 0,
                getPopup: 0,
                getTitle: 0,
                onClicked: 1,
                setBadgeBackgroundColor: 0,
                setBadgeText: 0,
                setIcon: 0,
                setPopup: 0,
                setTitle: 0
            });
        },

        get browsingData() {
            return getter("browsingData", {
                remove: 0,
                removeAppcache: 0,
                removeCache: 0,
                removeCookies: 0,
                removeDownloads: 0,
                removeFileSystems: 0,
                removeFormData: 0,
                removeHistory: 0,
                removeIndexedDB: 0,
                removeLocalStorage: 0,
                removePasswords: 0,
                removePluginData: 0,
                removeWebSQL: 0,
                settings: 0
            });
        },

        get contentSettings() {
            return getter("contentSettings", {
                get cookies() {
                    return getter("contentSettings.cookies", {
                        clear: 0,
                        get: 0,
                        getResourceIdentifiers: 0,
                        set: 0
                    });
                },
                get images() {
                    return getter("contentSettings.images", {
                        clear: 0,
                        get: 0,
                        getResourceIdentifiers: 0,
                        set: 0
                    });
                },
                get javascript() {
                    return getter("contentSettings.javascript", {
                        clear: 0,
                        get: 0,
                        getResourceIdentifiers: 0,
                        set: 0
                    });
                },
                get notifications() {
                    return getter("contentSettings.notifications", {
                        clear: 0,
                        get: 0,
                        getResourceIdentifiers: 0,
                        set: 0
                    });
                },
                get plugins() {
                    return getter("contentSettings.plugins", {
                        clear: 0,
                        get: 0,
                        getResourceIdentifiers: 0,
                        set: 0
                    });
                },
                get popups() {
                    return getter("contentSettings.popups", {
                        clear: 0,
                        get: 0,
                        getResourceIdentifiers: 0,
                        set: 0
                    });
                }
            });
        },

        get contextMenus() {
            return getter("contextMenus", {
                create: 0,
                onClicked: 1,
                remove: 0,
                removeAll: 0,
                update: 0
            });
        },

        get omnibox() {
          return getter("omnibox", {
            setDefaultSuggestion: 0,
            onInputStarted: 1,
            onInputChanged: 1,
            onInputEntered: 1,
            onInputCancelled: 1
          });
        },        

        get cookies() {
            return getter("cookies", {
                get: 0,
                getAll: 0,
                getAllCookieStores: 0,
                onChanged: 1,
                remove: 0,
                set: 0
            });
        },

        csi: sandbox.spy(),

        get debugger() {
            return getter("debugger", {
                attach: 0,
                detach: 0,
                getTargets: 0,
                onDetach: 1,
                onEvent: 1,
                sendCommand: 0
            });
        },

        get declarativeContent() {
            return getter("declarativeContent", {
                PageStateMatcher: 0,
                RequestContentScript: 0,
                ShowPageAction: 0,
                onPageChanged: 1
            });
        },

        get desktopCapture() {
            return getter("desktopCapture", {
                cancelChooseDesktopMedia: 0,
                chooseDesktopMedia: 0
            });
        },

        get downloads() {
            return getter("downloads", {
                acceptDanger: 0,
                cancel: 0,
                download: 0,
                drag: 0,
                erase: 0,
                getFileIcon: 0,
                onChanged: 1,
                onCreated: 1,
                onDeterminingFilename: 1,
                onErased: 1,
                open: 0,
                pause: 0,
                removeFile: 0,
                resume: 0,
                search: 0,
                setShelfEnabled: 0,
                show: 0,
                showDefaultFolder: 0
            });
        },

        get extension() {
            return getter("extension", {
                connect: 0,
                connectNative: 0,
                getBackgroundPage: 0,
                getURL: 0,
                getViews: 0,
                isAllowedFileSchemeAccess: 0,
                isAllowedIncognitoAccess: 0,
                onConnect: 1,
                onConnectExternal: 1,
                onMessage: 1,
                onMessageExternal: 1,
                onRequest: 1,
                onRequestExternal: 1,
                sendMessage: 0,
                sendNativeMessage: 0,
                sendRequest: 0,
                setUpdateUrlData: 0
            });
        },

        get fontSettings() {
            return getter("fontSettings", {
                clearDefaultFixedFontSize: 0,
                clearDefaultFontSize: 0,
                clearFont: 0,
                clearMinimumFontSize: 0,
                getDefaultFixedFontSize: 0,
                getDefaultFontSize: 0,
                getFont: 0,
                getFontList: 0,
                getMinimumFontSize: 0,
                onDefaultFixedFontSizeChanged: 1,
                onDefaultFontSizeChanged: 1,
                onFontChanged: 1,
                onMinimumFontSizeChanged: 1,
                setDefaultFixedFontSize: 0,
                setDefaultFontSize: 0,
                setFont: 0,
                setMinimumFontSize: 0
            });
        },

        get gcm() {
            return getter("gcm", {
                onMessage: 1,
                onMessagesDeleted: 1,
                onSendError: 1,
                register: 0,
                send: 0,
                unregister: 0
            });
        },

        get history() {
            return getter("history", {
                addUrl: 0,
                deleteAll: 0,
                deleteRange: 0,
                deleteUrl: 0,
                getVisits: 0,
                onVisitRemoved: 1,
                onVisited: 1,
                search: 0
            });
        },

        get i18n() {
            return getter("i18n", {
                getAcceptLanguages: 0,
                getMessage: 0,
                getUILanguage: 0
            });
        },

        get identity() {
            return getter("identity", {
                getAuthToken: 0,
                getProfileUserInfo: 0,
                getRedirectURL: 0,
                launchWebAuthFlow: 0,
                onSignInChanged: 1,
                removeCachedAuthToken: 0
            });
        },

        get idle() {
            return getter("idle", {
                onStateChanged: 1,
                queryState: 0,
                setDetectionInterval: 0
            });
        },

        loadTimes: sandbox.spy(),

        get management() {
            return getter("management", {
                createAppShortcut: 0,
                generateAppForLink: 0,
                get: 0,
                getAll: 0,
                getPermissionWarningsById: 0,
                getPermissionWarningsByManifest: 0,
                launchApp: 0,
                onDisabled: 1,
                onEnabled: 1,
                onInstalled: 1,
                onUninstalled: 1,
                setEnabled: 0,
                setLaunchType: 0,
                uninstall: 0,
                uninstallSelf: 0
            });
        },

        get notifications() {
            return getter("notifications", {
                clear: 0,
                create: 0,
                getAll: 0,
                getPermissionLevel: 0,
                onButtonClicked: 1,
                onClicked: 1,
                onClosed: 1,
                onPermissionLevelChanged: 1,
                onShowSettings: 1,
                update: 0
            });
        },

        get pageCapture() {
            return getter("pageCapture", {
                saveAsMHTML: 0
            });
        },

        get permissions() {
            return getter("permissions", {
                contains: 0,
                getAll: 0,
                onAdded: 1,
                onRemoved: 1,
                remove: 0,
                request: 0
            });
        },

        get power() {
            return getter("power", {
                releaseKeepAwake: 0,
                requestKeepAwake: 0
            });
        },

        get privacy() {
            return getter("privacy", {
                get network() {
                    return getter("privacy.network", {
                        get networkPredictionEnabled() {
                            return getter("privacy.network.networkPredictionEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        }
                    });
                },
                get services() {
                    return getter("privacy.services", {
                        get alternateErrorPagesEnabled() {
                            return getter("privacy.services.alternateErrorPagesEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        },
                        get autofillEnabled() {
                            return getter("privacy.services.autofillEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        },
                        get passwordSavingEnabled() {
                            return getter("privacy.services.passwordSavingEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        },
                        get safeBrowsingEnabled() {
                            return getter("privacy.services.safeBrowsingEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        },
                        get searchSuggestEnabled() {
                            return getter("privacy.services.searchSuggestEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        },
                        get spellingServiceEnabled() {
                            return getter("privacy.services.spellingServiceEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        },
                        get translationServiceEnabled() {
                            return getter("privacy.services.translationServiceEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        }
                    });
                },
                get websites() {
                    return getter("privacy.websites", {
                        get hyperlinkAuditingEnabled() {
                            return getter("privacy.websites.hyperlinkAuditingEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        },
                        get referrersEnabled() {
                            return getter("privacy.websites.referrersEnabled", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        },
                        get thirdPartyCookiesAllowed() {
                            return getter("privacy.websites.thirdPartyCookiesAllowed", {
                                clear: 0,
                                get: 0,
                                onChange: 1,
                                set: 0
                            });
                        }
                    });
                }
            });
        },

        get proxy() {
            return getter("proxy", {
                onProxyError: 1,
                get settings() {
                    return getter("proxy.settings", {
                        clear: 0,
                        get: 0,
                        onChange: 1,
                        set: 0
                    });
                }
            });
        },

        get pushMessaging() {
            return getter("pushMessaging", {
                getChannelId: 0,
                onMessage: 1
            });
        },

        get runtime() {
            return getter("runtime", {
                connect: 0,
                connectNative: 0,
                getBackgroundPage: 0,
                getManifest: 0,
                getPackageDirectoryEntry: 0,
                getPlatformInfo: 0,
                getURL: 0,
                onBrowserUpdateAvailable: 1,
                onConnect: 1,
                onConnectExternal: 1,
                onInstalled: 1,
                onMessage: 1,
                onMessageExternal: 1,
                onRestartRequired: 1,
                onStartup: 1,
                onSuspend: 1,
                onSuspendCanceled: 1,
                onUpdateAvailable: 1,
                reload: 0,
                requestUpdateCheck: 0,
                restart: 0,
                sendMessage: 0,
                sendNativeMessage: 0
            });
        },

        get sessions() {
            return getter("sessions", {
                getDevices: 0,
                getRecentlyClosed: 0,
                onChanged: 1,
                restore: 0
            });
        },

        get storage() {
            return getter("storage", {
                get local() {
                    return getter("storage.local", {
                        clear: 0,
                        get: 0,
                        getBytesInUse: 0,
                        remove: 0,
                        set: 0
                    });
                },
                get managed() {
                    return getter("storage.managed", {
                        clear: 0,
                        get: 0,
                        getBytesInUse: 0,
                        remove: 0,
                        set: 0
                    });
                },
                onChanged: 1,
                get sync() {
                    return getter("storage.sync", {
                        clear: 0,
                        get: 0,
                        getBytesInUse: 0,
                        remove: 0,
                        set: 0
                    });
                }
            });
        },

        get tabCapture() {
            return getter("tabCapture", {
                capture: 0,
                getCapturedTabs: 0,
                onStatusChanged: 1
            });
        },

        get tabs() {
            return getter("tabs", {
                captureVisibleTab: 0,
                connect: 0,
                create: 0,
                detectLanguage: 0,
                duplicate: 0,
                executeScript: 0,
                get: 0,
                getAllInWindow: 0,
                getCurrent: 0,
                getSelected: 0,
                highlight: 0,
                insertCSS: 0,
                move: 0,
                onActivated: 1,
                onActiveChanged: 1,
                onAttached: 1,
                onCreated: 1,
                onDetached: 1,
                onHighlightChanged: 1,
                onHighlighted: 1,
                onMoved: 1,
                onRemoved: 1,
                onReplaced: 1,
                onSelectionChanged: 1,
                onUpdated: 1,
                onZoomChange: 1,
                query: 0,
                reload: 0,
                remove: 0,
                sendMessage: 0,
                sendRequest: 0,
                update: 0
            });
        },

        get topSites() {
            return getter("topSites", {
                get: 0
            });
        },

        get tts() {
            return getter("tts", {
                getVoices: 0,
                isSpeaking: 0,
                onEvent: 1,
                pause: 0,
                resume: 0,
                speak: 0,
                stop: 0
            });
        },

        get ttsEngine() {
            return getter("ttsEngine", {
                onPause: 1,
                onResume: 1,
                onSpeak: 1,
                onStop: 1,
                sendTtsEvent: 0
            });
        },

        get webNavigation() {
            return getter("webNavigation", {
                getAllFrames: 0,
                getFrame: 0,
                onBeforeNavigate: 1,
                onCommitted: 1,
                onCompleted: 1,
                onCreatedNavigationTarget: 1,
                onDOMContentLoaded: 1,
                onErrorOccurred: 1,
                onHistoryStateUpdated: 1,
                onReferenceFragmentUpdated: 1,
                onTabReplaced: 1
            });
        },

        get webRequest() {
            return getter("webRequest", {
                handlerBehaviorChanged: 0,
                onAuthRequired: 1,
                onBeforeRedirect: 1,
                onBeforeRequest: 1,
                onBeforeSendHeaders: 1,
                onCompleted: 1,
                onErrorOccurred: 1,
                onHeadersReceived: 1,
                onResponseStarted: 1,
                onSendHeaders: 1
            });
        },

        get windows() {
            return getter("windows", {
                create: 0,
                get: 0,
                getAll: 0,
                getCurrent: 0,
                getLastFocused: 0,
                onCreated: 1,
                onFocusChanged: 1,
                onRemoved: 1,
                remove: 0,
                update: 0
            });
        }
    };

    // exports
    if (typeof exports === 'object') {
        module.exports = chrome;
    } else {
        window.chrome = chrome;
    }

}());
