const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { valuesForFields , url} = require('../../data/data.js');
const { BasePage } = require('../../po/pages/imports.js');


const basePage = new BasePage();

Given('I am on the workspace settings page', async () => {
  expect((await browser.getUrl()).includes(url.boards));
  await basePage.headerComponent.openAccount.click();
  await basePage.accountWindowComponent.settingsBtn('account').click();
});

Given('I am on the profile settings page', async () => {
  expect((await browser.getUrl()).includes(url.boards));
  await basePage.headerComponent.openAccount.click();
  await basePage.accountWindowComponent.settingsBtn('profile').click();
});

When('I add a new board', async () => {
  await basePage.headerComponent.addBoardBtn.click();
  await basePage.boardWindowComponent.settings('type').click();
  await basePage.boardWindowComponent.settings('name').setValue(valuesForFields.newBoardName);
  await basePage.boardWindowComponent.submitBtn.isDisplayed();
  await basePage.boardWindowComponent.submitBtn.click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.newBoardUrl);
    },
    {
      timeout: 13000,
    }
  ); 
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

Then('a new account should be created successfully', async () => {
  await basePage.headerComponent.openAccount.click();
  await expect(basePage.accountWindowComponent.checkUser('newUser')).isDisplayed();
});
