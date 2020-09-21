require('../hooks')
const path = require('path')
const xlsx = require('../utils/excel.utils')
const filepath = require('../../filepaths')

describe('validate order scenario', function () {

  it('select a restaurant and order', function (done) {

    // read data from excel file
    let customerDataArray = xlsx.getExcelDataInJsonFormat(path.join(filepath.baseDir, 'test','data', 'customer.xlsx'), 'customer_info')
    // take first row from excel file 
    let customerData = customerDataArray[0];
    
    homepage.searchRestaurantsForPostCode('8888', '8888-alpha')
    restaurantsList.selectRestaurant('TEST Restaurant Selenium')
    testSeleRestaurantpage.selectFoodItem('Chicken Breast')

    // validate if order basket contains selected food item
    testSeleRestaurantpage.validateOrderBasket('TEST Restaurant Selenium','Chicken Breast')

    testSeleRestaurantpage.orderButton.click();
    checkoutpage.filloutCustomerDetails(customerData["Street Name and House Number"], customerData["Postal Code"], customerData["Place Name"], customerData["Customer Name"], customerData["Email"], customerData["Phone Number"])

    checkoutpage.selectNearestPrice();
    checkoutpage.checkoutOrder.click();
    orderpage.getOrderReferenceNumber();
    done()
  })


})