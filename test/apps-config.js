/**
 * @author https://github.com/acvetkov
 * @overview Test config for chrome apps
 */

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
    'app.runtime': {
        methods: [],
        properties: [],
        events: [
            'onEmbedRequested',
            'onLaunched',
            'onRestarted'
        ]
    },
    'app.window': {
        methods: [
            'create',
            'current',
            'initializeAppWindow',
            'getAll',
            'get',
            'canSetVisibleOnAllWorkspaces'
        ],
        properties: [],
        events: [
            'onBoundsChanged',
            'onClosed',
            'onFullscreened',
            'onMaximized',
            'onMinimized',
            'onRestored',
            'onAlphaEnabledChanged',
            'onWindowFirstShown'
        ]
    },
    bluetooth: {
        methods: [
            'getAdapterState',
            'getDevice',
            'getDevices',
            'startDiscovery',
            'stopDiscovery'
        ],
        properties: [],
        events: [
            'onAdapterStateChanged',
            'onDeviceAdded',
            'onDeviceChanged',
            'onDeviceRemoved'
        ]
    },
    bluetoothSocket: {
        methods: [
            'create',
            'update',
            'setPaused',
            'listenUsingRfcomm',
            'listenUsingL2cap',
            'connect',
            'disconnect',
            'close',
            'send',
            'getInfo',
            'getSockets'
        ],
        properties: [],
        events: [
            'onAccept',
            'onAcceptError',
            'onReceive',
            'onReceiveError'
        ]
    },
    browser: {
        methods: ['openTab'],
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
    contextMenus: {
        methods: [
            'create',
            'update',
            'remove',
            'removeAll'
        ],
        properties: [
            'ACTION_MENU_TOP_LEVEL_LIMIT'
        ],
        events: [
            'onClicked'
        ]
    },
    fileSystem: {
        methods: [
            'getDisplayPath',
            'getWritableEntry',
            'isWritableEntry',
            'chooseEntry',
            'restoreEntry',
            'isRestorable',
            'retainEntry',
            'requestFileSystem',
            'getVolumeList',
            'observeDirectory',
            'unobserveEntry',
            'getObservedEntries'
        ],
        properties: [],
        events: [
            'onVolumeListChanged',
            'onEntryChanged',
            'onEntryRemoved'
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
    hid: {
        methods: [
            'getDevices',
            'getUserSelectedDevices',
            'connect',
            'disconnect',
            'receive',
            'send',
            'receiveFeatureReport',
            'sendFeatureReport'
        ],
        properties: [],
        events: [
            'onDeviceAdded',
            'onDeviceRemoved'
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
    mdns: {
        methods: [
            'forceDiscovery'
        ],
        properties: [],
        events: [
            'onServiceList'
        ]
    },
    mediaGalleries: {
        methods: [
            'addUserSelectedFolder',
            'dropPermissionForMediaFileSystem',
            'startMediaScan',
            'cancelMediaScan',
            'addScanResults',
            'getMediaFileSystemMetadata',
            'getAllMediaFileSystemMetadata',
            'getMetadata',
            'addGalleryWatch',
            'removeGalleryWatch',
            'getAllGalleryWatch',
            'removeAllGalleryWatch'
        ],
        properties: [],
        events: [
            'onGalleryChanged',
            'onScanProgress'
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
    power: {
        methods: [
            'requestKeepAwake',
            'releaseKeepAwake'
        ],
        properties: [],
        events: []
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
            'restartAfterDelay',
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
    serial: {
        methods: [
            'getDevices',
            'connect',
            'update',
            'disconnect',
            'setPaused',
            'getInfo',
            'getConnections',
            'send',
            'flush',
            'getControlSignals',
            'setControlSignals',
            'setBreak',
            'clearBreak'
        ],
        properties: [],
        events: [
            'onReceive',
            'onReceiveError'
        ]
    },
    socket: {
        methods: [
            'create',
            'destroy',
            'connect',
            'bind',
            'disconnect',
            'read',
            'write',
            'recvFrom',
            'sendTo',
            'listen',
            'accept',
            'setKeepAlive',
            'setNoDelay',
            'getInfo',
            'getNetworkList',
            'joinGroup',
            'leaveGroup',
            'setMulticastTimeToLive',
            'setMulticastLoopbackMode',
            'getJoinedGroups',
            'secure'
        ],
        properties: [],
        events: []
    },
    'sockets.tcp': {
        methods: [
            'create',
            'update',
            'setPaused',
            'setKeepAlive',
            'setNoDelay',
            'connect',
            'disconnect',
            'secure',
            'send',
            'close',
            'getInfo',
            'getSockets'
        ],
        properties: [],
        events: [
            'onReceive',
            'onReceiveError'
        ]
    },
    'sockets.tcpServer': {
        methods: [
            'create',
            'update',
            'setPaused',
            'listen',
            'disconnect',
            'close',
            'getInfo',
            'getSockets'
        ],
        properties: [],
        events: [
            'onAccept',
            'onAcceptError'
        ]
    },
    'sockets.udp': {
        methods: [
            'create',
            'update',
            'setPaused',
            'bind',
            'send',
            'close',
            'getInfo',
            'getSockets',
            'joinGroup',
            'leaveGroup',
            'setMulticastTimeToLive',
            'setMulticastLoopbackMode',
            'getJoinedGroups',
            'setBroadcast'
        ],
        properties: [],
        events: [
            'onReceive',
            'onReceiveError'
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
    syncFileSystem: {
        methods: [
            'requestFileSystem',
            'setConflictResolutionPolicy',
            'getConflictResolutionPolicy',
            'getUsageAndQuota',
            'getFileStatus',
            'getFileStatuses',
            'getServiceStatus'
        ],
        properties: [],
        events: [
            'onServiceStatusChanged',
            'onFileStatusChanged'
        ]
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
            'getDisplayLayout',
            'setDisplayProperties',
            'setDisplayLayout',
            'enableUnifiedDesktop',
            'overscanCalibrationStart',
            'overscanCalibrationAdjust',
            'overscanCalibrationReset',
            'overscanCalibrationComplete'
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
    'system.network': {
        methods: [
            'getNetworkInterfaces'
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
    usb: {
        methods: [
            'getDevices',
            'getUserSelectedDevices',
            'getConfigurations',
            'requestAccess',
            'openDevice',
            'findDevices',
            'closeDevice',
            'setConfiguration',
            'getConfiguration',
            'listInterfaces',
            'claimInterface',
            'releaseInterface',
            'setInterfaceAlternateSetting',
            'controlTransfer',
            'bulkTransfer',
            'interruptTransfer',
            'isochronousTransfer',
            'resetDevice'
        ],
        properties: [],
        events: [
            'onDeviceAdded',
            'onDeviceRemoved'
        ]
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
    'accessibilityFeatures.spokenFeedback': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.largeCursor': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.stickyKeys': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.highContrast': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.screenMagnifier': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.autoclick': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.virtualKeyboard': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.caretHighlight': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.cursorHighlight': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.focusHighlight': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.selectToSpeak': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.switchAccess': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    'accessibilityFeatures.animationPolicy': {
        methods: [
            'get',
            'set',
            'clear'
        ],
        properties: [],
        events: ['onChange']
    },
    documentScan: {
        methods: ['scan'],
        properties: [],
        events: []
    },
    fileSystemProvider: {
        methods: [
            'mount',
            'unmount',
            'getAll',
            'get',
            'notify'
        ],
        properties: [],
        events: [
            'onUnmountRequested',
            'onGetMetadataRequested',
            'onGetActionsRequested',
            'onReadDirectoryRequested',
            'onOpenFileRequested',
            'onCloseFileRequested',
            'onReadFileRequested',
            'onCreateDirectoryRequested',
            'onDeleteEntryRequested',
            'onCreateFileRequested',
            'onCopyEntryRequested',
            'onMoveEntryRequested',
            'onTruncateRequested',
            'onWriteFileRequested',
            'onAbortRequested',
            'onConfigureRequested',
            'onMountRequested',
            'onAddWatcherRequested',
            'onRemoveWatcherRequested',
            'onExecuteActionRequested'
        ]
    },
    vpnProvider: {
        methods: [
            'createConfig',
            'destroyConfig',
            'setParameters',
            'sendPacket',
            'notifyConnectionStateChanged'
        ],
        properties: [],
        events: [
            'onPlatformMessage',
            'onPacketReceived',
            'onConfigRemoved',
            'onConfigCreated',
            'onUIEvent'
        ]
    },
    wallpaper: {
        methods: ['setWallpaper'],
        properties: [],
        events: []
    },
    bluetoothLowEnergy: {
        methods: [
            'connect',
            'disconnect',
            'getService',
            'createService',
            'getServices',
            'getCharacteristic',
            'createCharacteristic',
            'getCharacteristics',
            'getIncludedServices',
            'getDescriptor',
            'createDescriptor',
            'getDescriptors',
            'readCharacteristicValue',
            'writeCharacteristicValue',
            'startCharacteristicNotifications',
            'stopCharacteristicNotifications',
            'notifyCharacteristicValueChanged',
            'readDescriptorValue',
            'writeDescriptorValue',
            'registerService',
            'unregisterService',
            'removeService',
            'registerAdvertisement',
            'unregisterAdvertisement',
            'setAdvertisingInterval',
            'sendRequestResponse'
        ],
        properties: [],
        events: [
            'onServiceAdded',
            'onServiceChanged',
            'onServiceRemoved',
            'onCharacteristicValueChanged',
            'onDescriptorValueChanged',
            'onCharacteristicReadRequest',
            'onCharacteristicWriteRequest',
            'onDescriptorReadRequest',
            'onDescriptorWriteRequest'
        ]
    }
};
