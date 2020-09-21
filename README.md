This is alpha testing of online food delivery web application [Takeaway](https://www.thuisbezorgd.nl/en/).
# Features
- :nut_and_bolt: UI automation tool used in this project is [Protractor](https://www.protractortest.org/).
- :page_with_curl:[Mocha](https://mochajs.org/) testing framework is used.
- :bar_chart: Reports are generated in [Mochawesome](https://www.npmjs.com/package/mochawesome).
# Getting Statrted
This project performs testing of Takeaway application. It covers a scenario where user can order food from restaurants in his area.
## Prerequisites
The only requirement for this project is to have [Node.js](https://nodejs.org/en/) version greater than 0.10.0.

The Protractor install includes the following:
- ```protractor``` command line tool
- ```webdriver-manager``` command line tool
## Installation
- Clone this repo to a local directory
```git clone https://github.com/<your-username>/cypress-example-kitchensink.git```

- cd into the cloned repo
```cd cypress-example-kitchensink```

- install the node_modules
```npm install```

- start the local webserver
```webdriver-manager update```,
```webdriver-manager start```
## Running Tests
Start tests in terminal (This command will run all the tests):
 Ensure terminal is in the project folder
   ```protractor conf.js```

To run the test in firefox browser
```npm run test:firefox```
# Reports
Reports are generated using the plugin [Mochawesome](https://www.npmjs.com/package/mochawesome).

To generate a code coverage report:
1. Run `yarn cypress:run --env coverage=true` and wait for the test run to complete.
2. Once the test run is complete, you can view the report at `coverage/index.html`
