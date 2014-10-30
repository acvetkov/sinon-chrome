// request IP on start
chrome.runtime.sendMessage('get-ip', function(ip) {
    document.querySelector('#ip').innerText = ip || 'error';
});

// request opened tabs
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
    document.getElementById('tabs').innerHTML = (tabs || []).map(function(tab) {
        return '<li><a href="#" data-id="' + tab.id + '">' + tab.title + '</a></li>';
    }).join('');
});

// activate particular tab by click
document.getElementById('tabs').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        var tabId = parseInt(e.target.getAttribute('data-id'), 10);
        chrome.tabs.update(tabId, {active: true});
    }
});