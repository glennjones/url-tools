url-tools
================

This a very simple node.js module for comparing URLs it has two function normalise and isEqual

### Using it as a Module

    var urlTools = require('url-tools'),
        options = {
            lowercase: true,
            removeWWW: true,
            removeTrailingSlash: true,
            forceTrailingSlash: false,
            removeSearch: true,
            removeHash: true,
            removeHashbang: true,
            removeProtocol: true
        };
    
	normalize = urlTools.normalize('https://www.GlennJones.net?p=test', options);
    // normalize would equal: 'glennjones.net'
    
    isequal = urlTools.isEqual('https://www.GlennJones.net?p=test', glennjones.net, options );
    // isequal would equal:  true
