var urlTools  = require('../lib/url-tools.js'),
	assert = require("assert");

describe('normalize URL', function(){
	it('lowercase', function(){
		var options = {
			lowercase: true,
			removeWWW: false,
			removeTrailingSlash: false,
			forceTrailingSlash: false,
			removeSearch: false,
			removeHash: false,
			removeHashbang: false,
			removeProtocol: false
		}

	  	assert.equal('http://glennjones.net', urlTools.normalize('http://GlennJones.net', options));
	})
	it('removeWWW', function(){
		var options = {
			lowercase: false,
			removeWWW: true,
			removeTrailingSlash: false,
			forceTrailingSlash: false,
			removeSearch: false,
			removeHash: false,
			removeHashbang: false,
			removeProtocol: false
		}
	  	assert.equal('http://glennjones.net', urlTools.normalize('http://www.glennjones.net', options));
	})
	it('removeTrailingSlash', function(){
		var options = {
			lowercase: false,
			removeWWW: false,
			removeTrailingSlash: true,
			forceTrailingSlash: false,
			removeSearch: false,
			removeHash: false,
			removeHashbang: false,
			removeProtocol: false
		}
	  	assert.equal('http://glennjones.net', urlTools.normalize('http://glennjones.net/', options));
	})
	it('forceTrailingSlash', function(){
		var options = {
			lowercase: false,
			removeWWW: false,
			removeTrailingSlash: false,
			forceTrailingSlash: true,
			removeSearch: false,
			removeHash: false,
			removeHashbang: false,
			removeProtocol: false
		}
	  	assert.equal('http://glennjones.net/', urlTools.normalize('http://glennjones.net', options));
	})
	it('removeSearch', function(){
		var options = {
			lowercase: false,
			removeWWW: false,
			removeTrailingSlash: false,
			forceTrailingSlash: false,
			removeSearch: true,
			removeHash: false,
			removeHashbang: false,
			removeProtocol: false
		}
	  	assert.equal('http://glennjones.net', urlTools.normalize('http://glennjones.net?prama=test', options));
	})
	it('removeHash', function(){
		var options = {
			lowercase: false,
			removeWWW: false,
			removeTrailingSlash: false,
			forceTrailingSlash: false,
			removeSearch: false,
			removeHash: true,
			removeHashbang: false,
			removeProtocol: false
		}
	  	assert.equal('http://glennjones.net', urlTools.normalize('http://glennjones.net#name', options));
	})
	it('removeHashbang', function(){
		var options = {
			lowercase: false,
			removeWWW: false,
			removeTrailingSlash: false,
			forceTrailingSlash: false,
			removeSearch: false,
			removeHash: false,
			removeHashbang: true,
			removeProtocol: false
		}
	  	assert.equal('http://glennjones.net/about', urlTools.normalize('http://glennjones.net/#!/about', options));
	})
	it('removeProtocol', function(){
		var options = {
			lowercase: false,
			removeWWW: false,
			removeTrailingSlash: false,
			forceTrailingSlash: false,
			removeSearch: false,
			removeHash: false,
			removeHashbang: false,
			removeProtocol: true
		}
	  	assert.equal('glennjones.net/about', urlTools.normalize('http://glennjones.net/about', options));
	  	assert.equal('glennjones.net/about', urlTools.normalize('https://glennjones.net/about', options));
	})
})


describe('isEqual', function(){
	it('default options', function(){
	  	assert.equal(true, urlTools.isEqual('http://GlennJones.net?prama=test', 'https://glennjones.net'));
	  	assert.equal(false, urlTools.isEqual('http://GlennJones.net?prama=test', 'https://glennjones.net/about'));
	})
})






