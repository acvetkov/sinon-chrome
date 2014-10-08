// request background for opened tabs list
chrome.runtime.sendMessage('get-tabs', function(data) {
    var html = [];
    var maxLength = 40;
    data.forEach(function(tab) {
        var title = tab.title.length > maxLength ? tab.title.substring(0, maxLength) + '...' : tab.title;
        html.push('<li><a href="#" data-id="' + tab.id + '">' + title + '</a></li>');
    });
    document.getElementById('tabs').innerHTML = html.join('');
});

// listen click on title to activate tab
document.getElementById('tabs').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        var tabId = parseInt(e.target.getAttribute('data-id'), 10);
        chrome.tabs.update(tabId, {active: true});
    }
});