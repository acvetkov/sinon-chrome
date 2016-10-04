export default {
    alarms: {
        methods: [
            'create',
            'get',
            'getAll',
            'clear',
            'clearAll'
        ],
        properties: [],
        events: [
            'onAlarm'
        ]
    },
    bookmarks: {
        methods: [
            'get',
            'getChildren',
            'getRecent',
            'getTree',
            'getSubTree',
            'search',
            'create',
            'move',
            'update',
            'remove',
            'removeTree'
        ],
        properties: [],
        events: [
            'onCreated',
            'onRemoved',
            'onChanged',
            'onMoved',
            'onChildrenReordered',
            'onImportBegan',
            'onImportEnded'
        ]
    },
    browserAction: {
        methods: [
            'setTitle',
            'getTitle',
            'setIcon',
            'setPopup',
            'getPopup',
            'setBadgeText',
            'getBadgeText',
            'setBadgeBackgroundColor',
            'getBadgeBackgroundColor',
            'enable',
            'disable'
        ],
        properties: [],
        events: [
            'onClicked'
        ]
    },
    browsingData: {
        methods: [
            'settings',
            'remove',
            'removeAppcache',
            'removeCache',
            'removeCookies',
            'removeDownloads',
            'removeFileSystems',
            'removeFormData',
            'removeHistory',
            'removeIndexedDB',
            'removeLocalStorage',
            'removePluginData',
            'removePasswords',
            'removeWebSQL'
        ],
        properties: [],
        events: []
    },
    certificateProvider: {
        methods: [],
        properties: [],
        events: [
            'onCertificatesRequested',
            'onSignDigestRequested'
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
    contentSettings: {
        methods: [],
        properties: [
            'cookies',
            'images',
            'javascript',
            'location',
            'plugins',
            'popups',
            'notifications',
            'fullscreen',
            'mouselock',
            'unsandboxedPlugins',
            'automaticDownloads'
        ],
        events: []
    },
    contextMenus: {
        methods: [
            'create',
            'update',
            'remove',
            'removeAll'
        ],
        properties: [],
        events: [
            'onClicked'
        ]
    },
    cookies: {
        methods: [
            'get',
            'getAll',
            'set',
            'remove',
            'getAllCookieStores'
        ],
        properties: [],
        events: [
            'onChanged'
        ]
    },
    debugger: {
        methods: [
            'attach',
            'detach',
            'sendCommand',
            'getTargets'
        ],
        properties: [],
        events: [
            'onEvent',
            'onDetach'
        ]
    },
    declarativeContent: {
        methods: [],
        properties: [],
        events: [
            'onPageChanged'
        ]
    },
    desktopCapture: {
        methods: [
            'chooseDesktopMedia',
            'cancelChooseDesktopMedia'
        ],
        properties: [],
        events: []
    },
    'devtools.inspectedWindow': {
        methods: [
            'eval',
            'reload',
            'getResources'
        ],
        properties: [
            'tabId'
        ],
        events: [
            'onResourceAdded',
            'onResourceContentCommitted'
        ]
    },
    'devtools.network': {
        methods: [
            'getHAR'
        ],
        properties: [],
        events: [
            'onRequestFinished',
            'onNavigated'
        ]
    },
    'devtools.panels': {
        methods: [
            'create',
            'setOpenResourceHandler',
            'openResource '
        ],
        properties: [
            'elements',
            'sources'
        ],
        events: []
    },
    downloads: {
        methods: [
            'download',
            'search',
            'pause',
            'resume',
            'cancel',
            'getFileIcon',
            'open',
            'show',
            'showDefaultFolder',
            'erase',
            'removeFile',
            'acceptDanger',
            'drag',
            'setShelfEnabled'
        ],
        properties: [],
        events: [
            'onCreated',
            'onErased',
            'onChanged',
            'onDeterminingFilename'
        ]
    },
    extension: {
        methods: [
            'sendRequest',
            'getURL',
            'getViews',
            'getBackgroundPage',
            'getExtensionTabs',
            'isAllowedIncognitoAccess',
            'isAllowedFileSchemeAccess',
            'setUpdateUrlData'
        ],
        properties: [
            'lastError',
            'inIncognitoContext'
        ],
        events: [
            'onRequest',
            'onRequestExternal'
        ]
    },
    fontSettings: {
        methods: [
            'clearFont',
            'getFont',
            'setFont',
            'getFontList',
            'clearDefaultFontSize',
            'getDefaultFontSize',
            'setDefaultFontSize',
            'clearDefaultFixedFontSize',
            'getDefaultFixedFontSize',
            'setDefaultFixedFontSize',
            'clearMinimumFontSize',
            'getMinimumFontSize',
            'setMinimumFontSize'
        ],
        properties: [],
        events: [
            'onFontChanged',
            'onDefaultFontSizeChanged',
            'onDefaultFixedFontSizeChanged',
            'onMinimumFontSizeChanged'
        ]
    },
    gcm: {
        methods: [
            'register',
            'unregister',
            'send'
        ],
        properties: [
            'MAX_MESSAGE_SIZE'
        ],
        events: [
            'onMessage',
            'onMessagesDeleted',
            'onSendError'
        ]
    },
    history: {
        methods: [
            'search',
            'getVisits',
            'addUrl',
            'deleteUrl',
            'deleteRange',
            'deleteAll'
        ],
        properties: [],
        events: [
            'onVisited',
            'onVisitRemoved'
        ]
    },
    i18n: {
        methods: [
            'getAcceptLanguages',
            'getMessage',
            'getUILanguage',
            'detectLanguage'
        ],
        properties: [],
        events: []
    },
    identity: {
        methods: [
            'getAccounts',
            'getAuthToken',
            'getProfileUserInfo',
            'removeCachedAuthToken',
            'launchWebAuthFlow',
            'getRedirectURL'
        ],
        properties: [],
        events: [
            'onSignInChanged'
        ]
    },
    idle: {
        methods: [
            'queryState',
            'setDetectionInterval'
        ],
        properties: [],
        events: [
            'onStateChanged'
        ]
    },
    instanceID: {
        methods: [
            'getID',
            'getCreationTime',
            'getToken',
            'deleteToken',
            'deleteID'
        ],
        properties: [],
        events: [
            'onTokenRefresh'
        ]
    },
    management: {
        methods: [
            'getAll',
            'get',
            'getSelf',
            'getPermissionWarningsById',
            'getPermissionWarningsByManifest',
            'setEnabled',
            'uninstall',
            'uninstallSelf',
            'launchApp',
            'createAppShortcut',
            'setLaunchType',
            'generateAppForLink'
        ],
        properties: [],
        events: [
            'onInstalled',
            'onUninstalled',
            'onEnabled',
            'onDisabled'
        ]
    },
    notifications: {
        methods: [
            'create',
            'update',
            'clear',
            'getAll',
            'getPermissionLevel'
        ],
        properties: [],
        events: [
            'onClosed',
            'onClicked',
            'onButtonClicked',
            'onPermissionLevelChanged',
            'onShowSettings'
        ]
    },
    omnibox: {
        methods: [
            'setDefaultSuggestion'
        ],
        properties: [],
        events: [
            'onInputStarted',
            'onInputChanged',
            'onInputEntered',
            'onInputCancelled'
        ]
    },
    pageAction: {
        methods: [
            'show',
            'hide',
            'setTitle',
            'getTitle',
            'setIcon',
            'setPopup',
            'getPopup'
        ],
        properties: [],
        events: [
            'onClicked'
        ]
    },
    pageCapture: {
        methods: [
            'saveAsMHTML'
        ],
        properties: [],
        events: []
    },
    permissions: {
        methods: [
            'getAll',
            'contains',
            'request',
            'remove'
        ],
        properties: [],
        events: [
            'onAdded',
            'onRemoved'
        ]
    },
    printerProvider: {
        methods: [],
        properties: [],
        events: [
            'onGetPrintersRequested',
            'onGetUsbPrinterInfoRequested',
            'onGetCapabilityRequested',
            'onPrintRequested'
        ]
    },
    'privacy.network.networkPredictionEnabled': {
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
    'privacy.services.alternateErrorPagesEnabled': {
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
    'privacy.services.autofillEnabled': {
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
    'privacy.services.passwordSavingEnabled': {
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
    'privacy.services.safeBrowsingEnabled': {
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
    'privacy.services.searchSuggestEnabled': {
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
    'privacy.services.spellingServiceEnabled': {
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
    'privacy.services.translationServiceEnabled': {
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
    'privacy.websites.hyperlinkAuditingEnabled': {
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
    'privacy.websites.referrersEnabled': {
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
    'privacy.websites.thirdPartyCookiesAllowed': {
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
    proxy: {
        methods: [],
        properties: [
            'settings'
        ],
        events: [
            'onProxyError'
        ]
    },
    runtime: {
        methods: [
            'getBackgroundPage',
            'openOptionsPage',
            'getManifest',
            'getURL',
            'setUninstallURL',
            'reload',
            'requestUpdateCheck',
            'restart',
            'connect',
            'connectNative',
            'sendMessage',
            'sendNativeMessage',
            'getPlatformInfo',
            'getPackageDirectoryEntry'
        ],
        properties: [
            'lastError',
            'id'
        ],
        events: [
            'onStartup',
            'onInstalled',
            'onSuspend',
            'onSuspendCanceled',
            'onUpdateAvailable',
            'onBrowserUpdateAvailable',
            'onConnect',
            'onConnectExternal',
            'onMessage',
            'onMessageExternal',
            'onRestartRequired'
        ]
    },
    sessions: {
        methods: [
            'getRecentlyClosed',
            'getDevices',
            'restore'
        ],
        properties: [
            'MAX_SESSION_RESULTS'
        ],
        events: [
            'onChanged'
        ]
    },
    storage: {
        methods: [],
        properties: [],
        events: [
            'onChanged'
        ]
    },
    'storage.local': {
        methods: [
            'clear',
            'get',
            'set',
            'remove',
            'getBytesInUse'
        ],
        properties: [],
        events: []
    },
    'storage.managed': {
        methods: [
            'clear',
            'get',
            'set',
            'remove',
            'getBytesInUse'
        ],
        properties: [],
        events: []
    },
    'storage.sync': {
        methods: [
            'clear',
            'get',
            'set',
            'remove',
            'getBytesInUse'
        ],
        properties: [],
        events: []
    },
    'system.cpu': {
        methods: [
            'getInfo'
        ],
        properties: [],
        events: []
    },
    'system.display': {
        methods: [
            'getInfo',
            'setDisplayProperties'
        ],
        properties: [],
        events: [
            'onDisplayChanged'
        ]
    },
    'system.memory': {
        methods: [
            'getInfo'
        ],
        properties: [],
        events: []
    },
    'system.storage': {
        methods: [
            'getInfo',
            'ejectDevice',
            'getAvailableCapacity'
        ],
        properties: [],
        events: [
            'onAttached',
            'onDetached'
        ]
    },
    tabCapture: {
        methods: [
            'capture',
            'getCapturedTabs'
        ],
        properties: [],
        events: [
            'onStatusChanged'
        ]
    },
    tabs: {
        methods: [
            'get',
            'getCurrent',
            'connect',
            'sendRequest',
            'sendMessage',
            'getSelected',
            'getAllInWindow',
            'create',
            'duplicate',
            'query',
            'highlight',
            'update',
            'move',
            'reload',
            'remove',
            'detectLanguage',
            'captureVisibleTab',
            'executeScript',
            'insertCSS',
            'setZoom',
            'getZoom',
            'setZoomSettings',
            'getZoomSettings'
        ],
        properties: [
            'TAB_ID_NONE'
        ],
        events: [
            'onCreated',
            'onUpdated',
            'onMoved',
            'onSelectionChanged',
            'onActiveChanged',
            'onActivated',
            'onHighlightChanged',
            'onHighlighted',
            'onDetached',
            'onAttached',
            'onRemoved',
            'onReplaced',
            'onZoomChange'
        ]
    },
    topSites: {
        methods: [
            'get'
        ],
        properties: [],
        events: []
    },
    tts: {
        methods: [
            'speak',
            'stop',
            'pause',
            'resume',
            'isSpeaking',
            'getVoices'
        ],
        properties: [],
        events: []
    },
    ttsEngine: {
        methods: [],
        properties: [],
        events: [
            'onSpeak',
            'onStop',
            'onPause',
            'onResume'
        ]
    },
    webNavigation: {
        methods: [
            'getFrame',
            'getAllFrames'
        ],
        properties: [],
        events: [
            'onBeforeNavigate',
            'onCommitted',
            'onDOMContentLoaded',
            'onCompleted',
            'onErrorOccurred',
            'onCreatedNavigationTarget',
            'onReferenceFragmentUpdated',
            'onTabReplaced',
            'onHistoryStateUpdated'
        ]
    },
    webRequest: {
        methods: [
            'handlerBehaviorChanged'
        ],
        properties: [
            'MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES'
        ],
        events: [
            'onBeforeRequest',
            'onBeforeSendHeaders',
            'onSendHeaders',
            'onHeadersReceived',
            'onAuthRequired',
            'onResponseStarted',
            'onBeforeRedirect',
            'onCompleted',
            'onErrorOccurred'
        ]
    },
    windows: {
        methods: [
            'get',
            'getCurrent',
            'getLastFocused',
            'getAll',
            'create',
            'update',
            'remove'
        ],
        properties: [
            'WINDOW_ID_NONE',
            'WINDOW_ID_CURRENT'
        ],
        events: [
            'onCreated',
            'onRemoved',
            'onFocusChanged'
        ]
    }
};
