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
            'getPopup',
            'getTitle',
            'setBadgeBackgroundColor',
            'setBadgeText',
            'setIcon',
            'setPopup',
            'setTitle'
        ],
        properties: [],
        events: [
            'onClicked'
        ]
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
    contextMenus: {
        methods: [
            'create',
            'remove',
            'removeAll',
            'update'
        ],
        properties: [
            'ACTION_MENU_TOP_LEVEL_LIMIT'
        ],
        events: [
            'onClicked'
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
            'getAll',
            'get',
            'getSelf',
            'uninstallSelf'
        ],
        properties: [],
        events: []
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
            'onClosed'
        ]
    },
    pageAction: {
        methods: [
            'getPopup',
            'getTitle',
            'hide',
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
    runtime: {
        methods: [
            'connect',
            'connectNative',
            'getBackgroundPage',
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
            'captureVisibleTab',
            'connect',
            'create',
            'detectLanguage',
            'duplicate',
            'executeScript',
            'get',
            'getAllInWindow',
            'getCurrent',
            'getSelected',
            'getZoom',
            'getZoomSettings',
            'highlight',
            'insertCSS',
            'move',
            'query',
            'reload',
            'remove',
            'sendMessage',
            'sendRequest',
            'setZoom',
            'setZoomSettings',
            'update'
        ],
        properties: [
            'TAB_ID_NONE'
        ],
        events: [
            'onActivated',
            'onActiveChanged',
            'onAttached',
            'onCreated',
            'onDetached',
            'onHighlightChanged',
            'onHighlighted',
            'onMoved',
            'onRemoved',
            'onReplaced',
            'onSelectionChanged',
            'onUpdated',
            'onZoomChange'
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
            'handlerBehaviorChanged'
        ],
        properties: ['MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES'],
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
