var excludeProps = ['Event', 'types'];
var tpl = 'get __propName__() {\n\treturn getter("__propPath__", {\n__methods__\n});\n}';

// we cant have both browserAction ad pageAction in manifest
var pageAction = [
	'show',
	'hide',
	'setTitle',
	'getTitle',
	'setIcon',
	'setPopup',
	'getPopup',
	'onClicked'
];

chrome.browserAction.onClicked.addListener(function() {
	var content = generate(chrome);
	chrome.tabs.create({url: getUrl(content)});
});

//generate(chrome);
console.log(generate(chrome));

function getUrl(content) {
	var blob = new Blob([content], {
		type: "text/plain"
	});
	return (window.webkitURL || window.URL).createObjectURL(blob);
}

//todo: add pageAction

function generate(obj, path) {
	path = path || [];
	var content = [];
	var props = Object.keys(obj);
	props.sort();
	//console.log(path, props.length);
	props = props.map(function(propName) {
		// excludes (level 0 only)
		if (path.length === 0 && excludeProps.indexOf(propName) >= 0) {
			return;
		}

		var propPath = path.concat([propName]);

		var str;
		if (typeof obj[propName] === 'function') {
			str = propName + ': ' + (path.length ? '0' : 'sandbox.spy()');
		} else if (propName.substring(0, 2) === 'on') {
			str = propName + ': 1';
		} else if (typeof obj[propName] === 'object') {
			str = 'recursive';
		}
		if (str) {
			// tabular output
			//console.log(new Array(path.length + 1).join('\t'), propName);
		}
		if (str === 'recursive') {
			str = generate(obj[propName], propPath);
		}

		return str;
	}).filter(Boolean);

	var res = path.length ? tpl
		.replace(/__propName__/g, path[path.length-1])
		.replace(/__propPath__/g, path.join('.'))
		.replace(/__methods__/g, props.join(',\n'))
		: props.join(',\n\n')

	return res;
}

