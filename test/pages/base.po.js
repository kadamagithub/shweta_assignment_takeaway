'use strict';
require('../glob');

let Basepage = function () {

    
    let base = this;

    // timeout for expected condictions
    this.timeout = '5000';

    
    let ElementFinder = $('').constructor;

    ElementFinder.prototype.waitClickable = function (timeout) {
        browser.wait(base.isClickable(this), timeout || base.timeout);
        return this;
    };


    /**
     * Wrappers for expected conditions
     *
     */
    let EC = protractor.ExpectedConditions;

    this.isClickable = function (locator) {
        return EC.elementToBeClickable(locator);
    };




}


module.exports = new Basepage()