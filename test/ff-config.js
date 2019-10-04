/**
 * @author https://github.com/acvetkov
 * @overview FF extension expected api
 * @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/bookmarks
 */

export default {
    alarms: {
        methods: [
            'clear',
            'clearAll',
            'create',
            'get',
            'getAll'
        ],
        events: ['onAlarm'],
        properties: []
    },
    bookmarks: {
        methods: [
            'create',
            'get',
            'getChildren',
            'getRecent',
            'getSubTree',
            'getTree',
            'move',
            'remove',
            'removeTree',
            'search',
            'update'
        ],
        properties: [],
        events: [
            'onChanged',
            'onChildrenReordered',
            'onCreated',
            'onImportBegan',
            'onImportEnded',
            'onMoved',
            'onRemoved'
        ]
    },
    browserAction: {
        methods: [
            'disable',
            'enable',
            'getBadgeBackgroundColor',
            'getBadgeText',
            'getBadgeTextColor',
            'getPopup',
            'getTitle',
            'openPopup',
            'setBadgeBackgroundColor',
            'setBadgeText',
            'setBadgeTextColor',
            'setIcon',
            'setPopup',
            'setTitle'
        ],
        properties: [],
        events: [
            'onClicked'
        ]
    },
    browserSettings: {
        methods: [],
        properties: [
            'allowPopupsForUserEvents',
            'cacheEnabled',
            'closeTabsByDoubleClick',
            'contextMenuShowEvent',
            'homepageOverride',
            'imageAnimationBehavior',
            'newTabPageOverride',
            'newTabPosition',
            'openBookmarksInNewTabs',
            'openSearchResultsInNewTabs',
            'openUrlbarResultsInNewTabs',
            'overrideDocumentColors',
            'useDocumentFonts',
            'webNotificationsDisabled'
        ],
        events: []
    },
    browsingData: {
        methods: [
            'remove',
            'removeCache',
            'removeCookies',
            'removeDownloads',
            'removeFormData',
            'removeHistory',
            'removeLocalStorage',
            'removePasswords',
            'removePluginData',
            'settings'
        ],
        properties: [],
        events: []
    },
    clipboard: {
        methods: [
            'setImageData'
        ],
        properties: [],
        events: []
    },
    commands: {
        methods: [
            'getAll'
        ],
        properties: [],
        events: [
            'onCommand'
        ]
    },
    contentScripts: {
       methods: [
           'register'
       ]
    },
    contextualIdentities: {
        methods: [
            'create',
            'get',
            'query',
            'remove',
            'update'
        ],
        properties: [],
        events: [
            'onCreated',
            'onRemoved',
            'onUpdated'
        ]
    },
    cookies: {
        methods: [
            'get',
            'getAll',
            'getAllCookieStores',
            'remove',
            'set'
        ],
        properties: [],
        events: [
            'onChanged'
        ]
    },
    'devtools.inspectedWindow': {
        methods: [
            'eval',
            'reload'
        ],
        properties: [
            'tabId'
        ],
        events: []
    },
    'devtools.network': {
        methods: [],
        properties: [],
        events: [
            'onNavigated'
        ]
    },
    'devtools.panels': {
        methods: [
            'create'
        ],
        properties: [
            'elements',
            'themeName'
        ],
        events: [
            'onThemeChanged'
        ]
    },
    downloads: {
        methods: [
            'acceptDanger',
            'cancel',
            'download',
            'drag',
            'erase',
            'getFileIcon',
            'open',
            'pause',
            'removeFile',
            'resume',
            'search',
            'setShelfEnabled',
            'show',
            'showDefaultFolder'
        ],
        properties: [],
        events: [
            'onChanged',
            'onCreated',
            'onErased'
        ]
    },
    extension: {
        methods: [
            'getBackgroundPage',
            'getURL',
            'getViews',
            'isAllowedFileSchemeAccess',
            'isAllowedIncognitoAccess',
            'setUpdateUrlData'
        ],
        properties: [
            'inIncognitoContext',
            'lastError'
        ],
        events: [
            'onRequest',
            'onRequestExternal'
        ]
    },
    find: {
        methods: [
            'find',
            'highlightResults',
            'removeHighlighting'
        ],
        properties: [],
        events: []
    },
    history: {
        methods: [
            'addUrl',
            'deleteAll',
            'deleteRange',
            'deleteUrl',
            'getVisits',
            'search'
        ],
        properties: [],
        events: [
            'onTitleChanged',
            'onVisitRemoved',
            'onVisited'
        ]
    },
    i18n: {
        methods: [
            'detectLanguage',
            'getAcceptLanguages',
            'getMessage',
            'getUILanguage'
        ],
        properties: [],
        events: []
    },
    identity: {
        methods: [
            'getRedirectURL',
            'launchWebAuthFlow'
        ],
        properties: [],
        events: []
    },
    idle: {
        methods: [
            'setDetectionInterval',
            'queryState'
        ],
        properties: [],
        events: [
            'onStateChanged'
        ]
    },
    management: {
        methods: [
            'get',
            'getAll',
            'getSelf',
            'setEnabled',
            'uninstallSelf'
        ],
        properties: [],
        events: [
            'onDisabled',
            'onEnabled',
            'onInstalled',
            'onUninstalled'
        ]
    },
    menus: {
        methods: [
            'create',
            'getTargetElement',
            'overrideContext',
            'refresh',
            'remove',
            'removeAll',
            'update'
        ],
        properties: [
            'ACTION_MENU_TOP_LEVEL_LIMIT'
        ],
        events: [
            'onClicked',
            'onHidden',
            'onShown'
        ]
    },
    notifications: {
        methods: [
            'clear',
            'create',
            'getAll',
            'update'
        ],
        properties: [],
        events: [
            'onButtonClicked',
            'onClicked',
            'onClosed',
            'onShown'
        ]
    },
    omnibox: {
        methods: [
            'setDefaultSuggestion'
        ],
        properties: [],
        events: [
            'onInputCancelled',
            'onInputChanged',
            'onInputEntered',
            'onInputStarted'
        ]
    },
    pageAction: {
        methods: [
            'getPopup',
            'getTitle',
            'hide',
            'openPopup',
            'setIcon',
            'setPopup',
            'setTitle',
            'show'
        ],
        properties: [],
        events: [
            'onClicked'
        ]
    },
    permissions: {
        methods: [
            'contains',
            'getAll',
            'remove',
            'request'
        ],
        properties: [],
        events: [
            'onAdded',
            'onRemoved'
        ]
    },
    pkcs11: {
        methods: [
            'getModuleSlots',
            'installModule',
            'isModuleInstalled',
            'uninstallModule'
        ],
        properties: [],
        events: []
    },
    'privacy.network': {
        methods: [],
        properties: [
            'networkPredictionEnabled',
            'peerConnectionEnabled',
            'webRTCIPHandlingPolicy'
        ],
        events: []
    },
    'privacy.services': {
        methods: [],
        properties: [
            'passwordSavingEnabled'
        ],
        events: []
    },
    'privacy.websites': {
        methods: [],
        properties: [
            'cookieConfig',
            'firstPartyIsolate',
            'hyperlinkAuditingEnabled',
            'protectedContentEnabled',
            'referrersEnabled',
            'resistFingerprinting',
            'thirdPartyCookiesAllowed',
            'trackingProtectionMode'
        ],
        events: []
    },
    proxy: {
        methods: [
            'register',
            'unregister'
        ],
        properties: [],
        events: [
            'onProxyError'
        ]
    },
    runtime: {
        methods: [
            'connect',
            'connectNative',
            'getBackgroundPage',
            'getBrowserInfo',
            'getManifest',
            'getPackageDirectoryEntry',
            'getPlatformInfo',
            'getURL',
            'openOptionsPage',
            'reload',
            'requestUpdateCheck',
            'sendMessage',
            'sendNativeMessage',
            'setUninstallURL'
        ],
        properties: [
            'id',
            'lastError'
        ],
        events: [
            'onBrowserUpdateAvailable',
            'onConnect',
            'onConnectExternal',
            'onInstalled',
            'onMessage',
            'onMessageExternal',
            'onRestartRequired',
            'onStartup',
            'onSuspend',
            'onSuspendCanceled',
            'onUpdateAvailable'
        ]
    },
    search: {
        methods: [
            'get',
            'search'
        ]
    },
    sessions: {
        methods: [
            'forgetClosedTab',
            'forgetClosedWindow',
            'getRecentlyClosed',
            'getTabValue',
            'getWindowValue',
            'removeTabValue',
            'removeWindowValue',
            'restore',
            'setTabValue',
            'setWindowValue'
        ],
        properties: [
            'MAX_SESSION_RESULTS'
        ],
        events: [
            'onChanged'
        ]
    },
    sidebarAction: {
        methods: [
            'close',
            'getPanel',
            'getTitle',
            'open',
            'setIcon',
            'setPanel',
            'setTitle'
        ],
        properties: [],
        events: []
    },
    storage: {
        methods: [],
        properties: [],
        events: ['onChanged']
    },
    'storage.local': {
        methods: [
            'get',
            'getBytesInUse',
            'set',
            'remove',
            'clear'
        ],
        properties: [],
        events: []
    },
    'storage.sync': {
        methods: [
            'get',
            'getBytesInUse',
            'set',
            'remove',
            'clear'
        ],
        properties: [],
        events: []
    },
    'storage.managed': {
        methods: [
            'get',
            'getBytesInUse',
            'set',
            'remove',
            'clear'
        ],
        properties: [],
        events: []
    },
    tabs: {
        methods: [
            'captureTab',
            'captureVisibleTab',
            'connect',
            'create',
            'detectLanguage',
            'duplicate',
            'executeScript',
            'get',
            'getCurrent',
            'getZoom',
            'getZoomSettings',
            'hide',
            'highlight',
            'insertCSS',
            'move',
            'moveInSuccession',
            'print',
            'printPreview',
            'query',
            'reload',
            'remove',
            'removeCSS',
            'saveAsPDF',
            'sendMessage',
            'sendRequest',
            'setZoom',
            'setZoomSettings',
            'show',
            'toggleReaderMode',
            'update'
        ],
        properties: [
            'TAB_ID_NONE'
        ],
        events: [
            'onActivated',
            'onAttached',
            'onCreated',
            'onDetached',
            'onHighlighted',
            'onMoved',
            'onRemoved',
            'onReplaced',
            'onUpdated',
            'onZoomChange'
        ]
    },
    theme: {
        methods: [
            'getCurrent',
            'reset',
            'update'
        ],
        properties: [],
        events: [
            'onUpdated'
        ]
    },
    topSites: {
        methods: [
            'get'
        ],
        properties: [],
        events: []
    },
    'types.BrowserSetting': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: [
            'onChange'
        ]
    },
    webNavigation: {
        methods: [
            'getAllFrames',
            'getFrame'
        ],
        properties: [],
        events: [
            'onBeforeNavigate',
            'onCommitted',
            'onCompleted',
            'onCreatedNavigationTarget',
            'onDOMContentLoaded',
            'onErrorOccurred',
            'onHistoryStateUpdated',
            'onReferenceFragmentUpdated',
            'onTabReplaced'
        ]
    },
    webRequest: {
        methods: [
            'handlerBehaviorChanged',
            'filterResponseData',
            'getSecurityInfo'
        ],
        properties: [
            'MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES'
        ],
        events: [
            'onAuthRequired',
            'onBeforeRedirect',
            'onBeforeRequest',
            'onBeforeSendHeaders',
            'onCompleted',
            'onErrorOccurred',
            'onHeadersReceived',
            'onResponseStarted',
            'onSendHeaders'
        ]
    },
    windows: {
        methods: [
            'create',
            'get',
            'getAll',
            'getCurrent',
            'getLastFocused',
            'remove',
            'update'
        ],
        properties: [
            'WINDOW_ID_CURRENT',
            'WINDOW_ID_NONE'
        ],
        events: [
            'onCreated',
            'onFocusChanged',
            'onRemoved'
        ]
    }
};
