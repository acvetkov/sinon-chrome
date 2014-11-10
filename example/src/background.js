
// display number of opened tabs in button badge
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
    chrome.browserAction.setBadgeText({text: String(tabs.length)});
});

// listen IP request
chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
    if (data === 'get-ip') {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://httpbin.org/ip");
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status === 200) {
              var data;
              try {
                data = JSON.parse(xhr.responseText);
              } catch(e) {
                data = null;
              }
              sendResponse(data && data.origin);
            } else {
              sendResponse(null);
            }
          }
        };
        xhr.send();
        return true;
    }
});
