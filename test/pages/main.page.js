const BasePage = require("./base.page.js");
const Header = require("./header.page.js");

class MainPage extends BasePage {
  constructor() {
    super();
    this.Header = new Header();
  }
}

module.exports = new MainPage();
