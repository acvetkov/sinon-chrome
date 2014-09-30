var sinon = require('sinon');
var sandbox = sinon.sandbox.create();

var EventEmitter = require('./event');

var accessor = function () {
    return {
        get: sandbox.stub(),
        set: sandbox.stub()
    }
};

var getEmitter = function () {
    return new EventEmitter();
};

module.exports = {
    browserAction: {
        onClicked: getEmitter(),
        setIcon: sandbox.stub(),
        setTitle: sandbox.stub(),
        setBadgeText: sandbox.stub(),
        setBadgeBackgroundColor: sandbox.stub(),
        setPopup: sandbox.stub()
    },
    runtime: {
        onMessage: getEmitter(),
        onMessageExternal: getEmitter(),
        onConnect: getEmitter(),
        sendMessage: sandbox.stub(),
        getManifest: sandbox.stub(),
        setUninstallUrl: sandbox.stub(),
        id: "12345678910111213141516"
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
    tabs: {
        update: sandbox.stub(),
        create: sandbox.stub(),
        get: sandbox.stub(),
        reload: sandbox.stub(),
        sendMessage: sandbox.stub(),
        remove: sandbox.stub(),
        getCurrent: sandbox.stub(),
        onActivated: getEmitter(),
        onUpdated: getEmitter(),
        onCreated: getEmitter()
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
        setAll: sandbox.stub(),
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
};
