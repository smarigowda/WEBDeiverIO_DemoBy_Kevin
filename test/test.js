// var expect = require('chai').expect;
var assert = require('assert')

describe('webdriver.io api page', function() {
    it('should have the right title', function() {
        browser.url('/')
        var title = browser.getTitle()
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js')
        // browser.debug()
    })

    it('should have a link to the API page', function() {
    	browser.url('/');
    	// var hasApiLink = browser.isExisting('=APIkjalfjaljf;a');
    	var hasApiLink = browser.isExisting('=API');
    	// var hasApiLink = browser.isExisting('a[href="/api.html"]');
    	assert(hasApiLink);
    	
    })

    it.only('should take you to the API page', function(){
    	browser.url('/')
    	browser.click('=API')
    	var title = browser.getTitle()
    	assert.equal(title, 'WebdriverIO - API Docs')
    }) 
})