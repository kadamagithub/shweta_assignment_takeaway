This is alpha testing of online food delivery web application [Takeaway](https://www.thuisbezorgd.nl/en/).
# Features
- :nut_and_bolt: UI automation tool used in this project is [Protractor](https://www.protractortest.org/).
- :page_with_curl:[Mocha](https://mochajs.org/) testing framework is used.
- :bar_chart: Reports are generated in [Mochawesome](https://www.npmjs.com/package/mochawesome).
- :page_with_curl: Page object model framework

# Getting Statrted
This project performs testing of Takeaway application. It covers a scenario where user can order food from restaurants in their area.

## Prerequisites
Install node - https://nodejs.org/en/download/

## Installation
- Clone this repo to a local directory
```git clone https://github.com/ShwetaLute/shweta_assignment_takeaway.git```

- cd into the cloned repo
```cd shweta_assignment_takeaway```

- install the node_modules
```npm install```

- download browser drivers

if you have latest chrome version installed, use ```node node_modules/protractor/bin/webdriver-manager update```
if your machine doesnt have latest chrome installed, plesae use ```node node_modules/protractor/bin/webdriver-manager update --versions.chrome "your chrome driver version"```
you can get it from chrome settings ( example chrome version - 84.0.4147.30 )

## Running Tests
Open terminal in project folder and run  ```protractor protractor-conf.js```

# Reports
Reports generated can be found at cd into cloned repo/test/report
