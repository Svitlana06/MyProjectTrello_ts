const { Given, When, Then } = require('@cucumber/cucumber');
const should = require('chai').should();
const { valuesForFields } = require('../../tests/settings.js');
const { BasePage, AccountPage } = require('../../po/pages/imports.js');

const basePage = new BasePage();
const accountPage = new AccountPage();

Given('I am on the workspace settings page', async () => {
  await basePage.headerComponent.openAccount.waitForDisplayed({
    timeout: 80000,
  });

  await basePage.headerComponent.openAccount.click();
  await basePage.accountWindowComponent.settingsBtn('account').waitForDisplayed({
    timeout: 80000,
  });
  await basePage.accountWindowComponent.settingsBtn('account').click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes("account");
    },
    {
      timeout: 15000,
      
    }
  );
});

When('I update workspace details', async () => {
  await accountPage.settingsComponent.openFrequencyProperty.waitForDisplayed({
    timeout: 80000,
  });

  await accountPage.settingsComponent.openFrequencyProperty.click();

  await accountPage.settingsComponent.changeFrequency.waitForExist({
    timeout: 10000,
  });
  await accountPage.settingsComponent.changeFrequency.click();
});

Then('the workspace settings should be updated successfully', async () => {
  (await accountPage.settingsComponent.checkFrequency.getText()).should.equal(
    valuesForFields.checkedFrequently
  );
});
