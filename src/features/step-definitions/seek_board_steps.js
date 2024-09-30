const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('chai').assert;
const { valuesForFields, url } = require('../../tests/settings');
const { SearchPage, BasePage } = require('../../po/pages/imports.js');

const basePage = new BasePage();
const searchPage = new SearchPage();

Given('I am on the boards page yes', async () => {
  expect((await browser.getUrl()).includes(url.boards));
});

When('I seek the boards', async () => {
  await basePage.headerComponent.setSearch.setValue(valuesForFields.searchingBoard);
  await basePage.searchWindowComponent.openResultsBtn.waitForDisplayed({
    timeout: 12000,
  });
  await basePage.searchWindowComponent.openResultsBtn.click();
  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.test);
    },
    {
      timeout: 10000,
    }
  );
});

Then('only necessary boards should be displayed', async () => {
  assert.strictEqual(
    await searchPage.searchComponent.rootEL.getValue(),
    valuesForFields.searchingBoard
  );
});
