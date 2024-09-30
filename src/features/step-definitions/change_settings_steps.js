const { Given, When, Then } = require('@cucumber/cucumber');
const should = require('chai').should();
const { valuesForFields } = require('../../tests/settings.js');
const { BasePage, AccountPage } = require('../../po/pages/imports.js');

const basePage = new BasePage();
const accountPage = new AccountPage();

Given('I am on the workspace settings page', async () => {
  await basePage.headerComponent.openAccount.click();
  await basePage.accountWindowComponent.settingsBtn('account').click();
  await browser.pause(2000); // Затримка для завантаження сторінки
});

When('I update workspace details', async () => {
  await accountPage.settingsComponent.openFrequencyProperty.waitForExist({
    timeout: 10000,
  });
  await accountPage.settingsComponent.openFrequencyProperty.waitForDisplayed();
  await accountPage.settingsComponent.openFrequencyProperty.click();
  
  await browser.pause(1000); // Затримка перед наступним кроком

  await accountPage.settingsComponent.changeFrequency.waitForExist({
    timeout: 10000,
  });
  await accountPage.settingsComponent.changeFrequency.waitForDisplayed();
  await accountPage.settingsComponent.changeFrequency.click();

  await browser.pause(1000); // Затримка перед завершенням зміни
});

Then('the workspace settings should be updated successfully', async () => {
  await accountPage.settingsComponent.checkFrequency.waitForExist({
    timeout: 10000,
  });
  await accountPage.settingsComponent.checkFrequency.waitForDisplayed();

  const frequencyText = await accountPage.settingsComponent.checkFrequency.getText();
  frequencyText.should.equal(valuesForFields.checkedFrequently);
});
