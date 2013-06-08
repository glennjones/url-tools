var urlParser = require("url");


var defaults = {
	lowercase: true,
	removeWWW: true,
	removeTrailingSlash: true,
	forceTrailingSlash: false,
	removeSearch: true,
	removeHash: true,
	removeHashbang: true,
	removeProtocol: true
}


// normalize a URL into a standarad format
normalize = function ( url, options ){
	options = setOptions( options );

	if(url && isString(url)){
		url = trim( url );

		if(options.lowercase){
			url = url.toLowerCase();
		}

		if(options.removeWWW){
			url = url.replace('www.', '');
		}
		
		if(options.removeProtocol){
			url = url.replace('http://', '');
			url = url.replace('https://', '');
		}

	    if(options.removeTrailingSlash && endsWith(url,'/')){
	    	url = url.substring(0, url.length - 1);
	    }
	     
	    if(options.forceTrailingSlash && !endsWith(url,'/')){
	    	url = url + '/';
	    } 

	    if(options.removeSearch && url.indexOf('?') > -1){
	        url = url.split('?')[0];
	    }

	    if(options.removeHash && url.indexOf('#') > -1){
	        url = url.split('#')[0];
	    }      

	    if(options.removeHashbang && url.indexOf('/#!/') > -1){
	        url = url.replace('/#!','');
	    }  
    }            

    return url
}


// does one URL equal another
isEqual = function ( urlA, urlB, options ){
	options = setOptions( options );
	
	if(urlA && isString(urlA) && urlB && isString(urlB)){
		return (normalize( urlA, options ) == normalize( urlB, options )); 
	}else{
		false
	}
}

JSONescape = function( url ){
	return url.replace(/\//g,'\\/')
}


// 
//----------------------------------------

// add defaults to options when the property is missing
setOptions = function( options ){
 	if (options === undefined ) {
 		options = {};
 	}
    for (var prop in defaults) {
    	if(defaults.hasOwnProperty(prop)){
	        if (options[prop] === undefined) {
	        	options[prop] = defaults[prop];
	        }
	    }
    }
	return options
}


// is the object a string
isString = function (obj) {
    return typeof (obj) == 'string';
}

// remove whitespace from ends of string
trim = function (str) {
    return str.replace(/^\s+|\s+$/g, "");
}

// does string end with test
endsWith = function(str,test){
    var lastIndex = str.lastIndexOf(test);
    return (lastIndex != -1) && (lastIndex + test.length == str.length);
}


exports.normalize = normalize;
exports.isEqual = isEqual;
exports.JSONescape = JSONescape;
