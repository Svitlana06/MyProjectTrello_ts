const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { pages } = require('../../po/index.js');
const { valuesForFields, inputData, url }  = require('../../data/data.js');
const { BasePage, SetupPage, RegistrationPage, HomePage } = require('../../po/pages/imports.js');

const basePage = new BasePage();
const setupPage = new SetupPage();
const registrationPage = new RegistrationPage();
const homePage = new HomePage();

Given('the Trello sign up page is displayed', async () => {
  await homePage.open();
  await homePage.mainComponent.signUpBtn.click();
  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.signup);
    },
    {
      timeout: 10000,
    }
  );
});

When('I enter valid registration details', async () => {
  await registrationPage.registrationComponent.input('email').setValue(inputData.emailSignUp);
  await registrationPage.registrationComponent.submitBtn('signUp').click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.createFirstTeam);
    },
    {
      timeout: 55000,
    }
  );
});

When('I set up a profile', async () => {
  await setupPage.setupComponent.initialSettings('goal').click();
  await setupPage.setupComponent.submitBtn('continue').click();

  await setupPage.setupComponent.initialSettings('board').waitForDisplayed({ timeout: 10000 });
  await setupPage.setupComponent
    .initialSettings('board')
    .setValue(valuesForFields.registrationBoard);
  await setupPage.setupComponent.submitBtn('next').click();
  await setupPage.setupComponent.initialSettings('listFirst').waitForDisplayed({ timeout: 10000 });
  await setupPage.setupComponent
    .initialSettings('listFirst')
    .setValue(valuesForFields.registrationListFirst);
  await setupPage.setupComponent
    .initialSettings('listSecond')
    .setValue(valuesForFields.registrationListSecond);
  await setupPage.setupComponent
    .initialSettings('listThird')
    .setValue(valuesForFields.registrationListThird);
  await setupPage.setupComponent.submitBtn('next').click();

  await setupPage.setupComponent.initialSettings('cardFirst').waitForDisplayed({ timeout: 10000 });
  await setupPage.setupComponent
    .initialSettings('cardFirst')
    .setValue(valuesForFields.registrationCardFirst);
  await setupPage.setupComponent
    .initialSettings('cardSecond')
    .setValue(valuesForFields.registrationCardSecond);
  await setupPage.setupComponent.submitBtn('next').click();

  await setupPage.setupComponent.submitBtn('skip').click();

  await browser.waitUntil(
    async () => {
      return setupPage.setupComponent.premiumVersionOffer.isDisplayed();
    },
    {
      timeout: 10000,
    }
  );

  await setupPage.setupComponent.submitBtn('skip').click();
});

Then('a new account should be created successfully', async () => {
  await basePage.headerComponent.openAccount.click();
  await expect(basePage.accountWindowComponent.checkUser('newUser')).isDisplayed();
});
