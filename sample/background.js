function getTitle(callback) {
  chrome.tabs.getCurrent(function (tab) {
    callback(tab.title);
  });
}