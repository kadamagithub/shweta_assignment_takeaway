global.config = require('./config.js');
global.homepage = require('./pages/home.po')
global.restaurantsList = require('./pages/restaurantpages/restaurants.search.po')
global.testSeleRestaurantpage = require('./pages/restaurantpages/test.sele.restaurant.po')
global.checkoutpage = require('./pages/checkout.po')
global.orderpage = require('./pages/order.po')
global.elements = require('./elements.js');
global.chai = require('chai');
global.expect = chai.expect;
global.base = require('./pages/base.po');