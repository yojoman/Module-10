const mainPage = require("../pages/main.page");
const productPage = require("../pages/product.page");
const resources = require("../resources/data.js");
const { expect, assert } = require("chai");

describe("Onliner.by short", () => {
  before(async () => {
    await browser.maximizeWindow();
  });

  it("Should open main page", async () => {
    await mainPage.openPage();
    expect(await mainPage.getTitle()).to.equal("Onliner");
  });

  it("Main page should contain correct header info", async () => {
    const headerActualValue = await mainPage.Header.getHeaderMenuText();
    assert.sameMembers(
      resources.headerExpectedValue,
      headerActualValue,
      "Main page contain incorrect header values"
    );
  });

  it("Main page should contain correct footer info", async () => {
    const footerActualValue = await mainPage.Header.getFooterMenuText();
    assert.sameMembers(
      resources.footerExpectedValue,
      footerActualValue,
      "Main page contain incorrect footer values"
    );
  });

  it("Should open searched item page", async () => {
    await mainPage.Header.typeInSearhField(
      "iPhone 14 Pro Max 256GB (космический черный)"
    );
    await mainPage.Header.openItemFromSearchField(1);
    expect(await productPage.getTitle()).to.include(
      "iPhone 14 Pro Max 256GB (космический черный)"
    );
  });

  it("Product page should containt title, image and price", async () => {
    expect(
      await productPage
        .getProductTitleText("iPhone 14 Pro Max 256GB (космический черный)")
        .isDisplayed()
    ).to.equal(true);
    expect(await productPage.priceOfProduct.isDisplayed()).to.equal(true);
    expect(await productPage.productImage.isDisplayed()).to.equal(true);
  });
});
