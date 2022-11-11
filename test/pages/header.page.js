const logger = require("../config/logger.config");

class Header {
  get headerMenu() {
    return $$('.//span[contains(@class,"b-main-navigation__text")]');
  }

  get footerMenu() {
    return $$('.//a[contains(@class,"footer-style__link footer-style__link")]');
  }

  get searchInputField() {
    return $(".//input[@class='fast-search__input']");
  }

  getHeaderMenuText() {
    const elements = this.headerMenu.map((element) => element.getText());
    return elements;
  }

  getFooterMenuText() {
    const elements = this.footerMenu.map((element) => element.getText());
    return elements;
  }

  getItemFromSearchField(number) {
    return $(`.//ul/li[@class='search__result'][${number}]`);
  }

  async typeInSearhField(searchText) {
    logger.debug(`Type "${searchText}" in search field`);
    await this.searchInputField.waitForDisplayed();
    await this.searchInputField.setValue(searchText);
  }

  async openItemFromSearchField(number) {
    logger.debug(`Open "${number}" item from search results`);
    const getIframe = await browser.$(".//iframe[@class='modal-iframe']");
    browser.switchToFrame(getIframe);
    await this.getItemFromSearchField(number).waitForDisplayed();
    await this.getItemFromSearchField(number).click();
    browser.switchToParentFrame();
  }
}

module.exports = Header;
