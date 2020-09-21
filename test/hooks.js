'use strict'
require('./glob');


before('navigate',  function () {
    browser.manage().window().setSize(1600, 1024);
    browser.manage().window().maximize();
    homepage.goto();
    
});