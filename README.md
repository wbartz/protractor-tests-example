# end-to-end test with Protractor

Install Protractor and Appium
> npm install -g protractor appium

Install Jasmine Reporter to view logs
> npm install jasmine-spec-reporter --save-dev

Initiate Appium with custom webdriver and specific emulator
> appium --chromedriver-executable /opt/chromedriver --avd grande --full-reset

Run Protractor with a .js config file
> protractor ./path/to/config/file


## Technologies
https://www.protractortest.org/#/
http://appium.io/
https://www.npmjs.com/package/jasmine-spec-reporter
