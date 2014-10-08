// retrieves opened tabs list
function getOpenedTabs(callback) {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, callback);
}

// updates browserAction badge
function updateBadge(tabs) {
    chrome.browserAction.setBadgeText({text: String(tabs.length)});
}

// listen to message from popup
chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
    if (data === 'get-tabs') {
        getOpenedTabs(sendResponse);
        return true;
    }
});

// listen to new tab creation and update badge counter
chrome.tabs.onCreated.addListener(function() {
    getOpenedTabs(updateBadge);
});

// listen to tab removal and update badge counter
chrome.tabs.onRemoved.addListener(function() {
    getOpenedTabs(updateBadge);
});

// update badge counter on startup
getOpenedTabs(updateBadge);
