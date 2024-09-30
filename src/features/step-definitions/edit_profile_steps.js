const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('chai').assert;
const { valuesForFields, url } = require('../../tests/settings');
const { BasePage, AccountPage } = require('../../po/pages/imports.js');

const basePage = new BasePage();
const accountPage = new AccountPage();

Given('I am on the settings page', async () => {
  expect((await browser.getUrl()).includes(url.boards));
  await basePage.headerComponent.openAccount.click();
  await basePage.accountWindowComponent.settingsBtn('profile').click();
});

When('I update my profile information', async () => {
  await accountPage.profileVisabilityComponent.changeUsername.setValue(valuesForFields.newUserName);
  await accountPage.profileVisabilityComponent.saveBtn.click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(valuesForFields.newUserName);
    },
    { timeout: 10000 }
  );
});

Then('my profile should reflect the updates', async () => {
  assert.strictEqual(
    await accountPage.profileVisabilityComponent.checkNewUsername.getText(),
    valuesForFields.newUserNameProfile
  );
});
