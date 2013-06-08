url-tools
================

This a very simple node.js module for comparing URLs it has two function normalise and isEqual

### Using it as a Node Module


var urlTools = require('url-tools');

var options = {
	lowercase: true,
	removeWWW: true,
	removeTrailingSlash: true,
	forceTrailingSlash: false,
	removeSearch: true,
	removeHash: true,
	removeHashbang: true,
	removeProtocol: true
}

var normalize = urlTools.normalize('https://www.GlennJones.net?prama=test', options);
normalize > 'glennjones.net'

var isequal = urlTools.isEqual('https://www.GlennJones.net?prama=test', glennjones.net, options );
isequal > true