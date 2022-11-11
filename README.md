# js-wdio-mocha-onliner.by

Automated scenarios in JS of https://www.onliner.by/ website using Node.js + WebdriverIO + Mocha + Chai

Running:

1. clone the repository
2. use `npm install` to setup all dependencies
3. use `npm run test:local` to run all tests on local machine in sequence
4. use `.\scripts\hub_4.5.0.bat` to start a hub
   use `.\scripts\se-node-firefox-4.5.0.bat` and `.\scripts\se-node-chrome-4.5.0.bat` to start nodes
   use `npm run test:grid` to run all tests using Selenium Grid
5. use `npm run test:local -- --instances 2` to perform each of the test files on a separate chrome instance
   use `npm run test:local -- --instances 1 --spec test/specs/testShort.spec.js` to run particular test
6. use `npm run report` to open Allure report