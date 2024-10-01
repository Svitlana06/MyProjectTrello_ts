const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('chai').assert;
const { valuesForFields, url, inputData } = require('../../tests/settings');
const { SearchPage, BasePage, HomePage, RegistrationPage } = require('../../po/pages/imports.js');

const basePage = new BasePage();
const searchPage = new SearchPage();
const homePage = new HomePage();
const registrationPage = new RegistrationPage();

Given('I am on the boards page', async () => {
  await homePage.open();
  await homePage.headerHomeComponent.signInBtn.click();

  await browser.waitUntil(
    async () => (await browser.getUrl()).includes(url.login),
    { timeout: 10000 }
  );

  await registrationPage
    .registrationComponent.input('username')
    .setValue(inputData.emailLogIn);
  await registrationPage.registrationComponent.submitBtn('signIn').click();

  await browser.waitUntil(
    async () => await registrationPage.registrationComponent.input('password').isDisplayed(),
    { timeout: 10000 }
  );

  await registrationPage
    .registrationComponent.input('password')
    .setValue(inputData.password);
  await registrationPage.registrationComponent.submitBtn('signIn').click();

  await browser.waitUntil(
    async () => (await browser.getUrl()).includes(url.boards),
    { timeout: 15000 }
  );
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
