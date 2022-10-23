# js-wdio-mocha-onliner.by

Automated scenarios in JS of https://www.onliner.by/ website using Node.js + WebdriverIO + Mocha + Chai

Running:

1. clone the repository
2. use "npm install" command to setup all dependencies
3. use "npm run test:local" command to run all tests on local machine
4. - use ".\scripts\hub_4.5.0.bat" command to start a hub
   - use ".\scripts\se-node-firefox-4.5.0.bat" and ".\scripts\se-node-chrome-4.5.0.bat" commands to start nodes
   - use "npm run test:grid" command to run all tests using Selenium Grid
5. - use 'npm run test:local -- --instances 2' to perform each of the test files on a separate chrome instance
   - use 'npm run test:local -- --instances 1' or just 'npm run test:local' to perform test files in sequence
   - use 'npm run test:local -- --instances 1 --spec test/specs/testShort.spec.js' to run particular test
