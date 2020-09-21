
'use strict'
require('../glob');
const base = require('./base.po');

let Homepage = function() {


    this.cookieElement = $("div[data-button-text='OK'] button")
    this.searchZipCode = $('input[id="imysearchstring"]')

    this.goto = function() {
        browser.waitForAngularEnabled(false)
        browser.get(config.webserver);
        this.cookieElement.click()
    }

    this.searchRestaurantsForPostCode = function (searchWithZipCode, selectZipCode) {
        
        this.searchZipCode.click()
        this.searchZipCode.sendKeys(searchWithZipCode)        
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(2000)
        element(by.xpath(`//a[contains(@data-href,"${selectZipCode}")]`)).click();
    }
}

Homepage.prototype = base;
module.exports = new Homepage();


