'use strict';
require('../../glob');

let Restaurantslistpage = function () {

    this.selectRestaurant = function (restaurantName) {
        element(by.xpath(`//a[contains(text(),"${restaurantName}")]`)).click();
    }
}

module.exports = new Restaurantslistpage();