import { inputData, url, valuesForFields } from '../data/data.ts';
import { RegistrationPage, HomePage, SetupPage, BasePage } from '../po/pages/imports.ts';

describe.skip('Sign up for a new Trello account', () => {

  let registrationPage: RegistrationPage;
  registrationPage = new RegistrationPage();

  let homePage: HomePage;
  homePage = new HomePage();

  let basePage: BasePage;
  basePage = new BasePage('https://trello.com');

  let setupPage: SetupPage;
  setupPage = new SetupPage();

  before(async () => {
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


  it('Entering of valid registration details', async () => {
    await registrationPage
      .registrationComponent.input('email')
      .setValue(inputData.emailSignUp);
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

  it('Setting up a profile', async () => {
    await setupPage.setupComponent.initialSettings('goal').click();
    await setupPage.setupComponent.submitBtn('continue').click();

    await setupPage
      .setupComponent.initialSettings('board')
      .waitForDisplayed({ timeout: 10000 });
    await setupPage
      .setupComponent.initialSettings('board')
      .setValue(valuesForFields.registrationBoard);
    await setupPage.setupComponent.submitBtn('next').click();
    await setupPage
      .setupComponent.initialSettings('listFirst')
      .waitForDisplayed({ timeout: 10000 });
    await setupPage
      .setupComponent.initialSettings('listFirst')
      .setValue(valuesForFields.registrationListFirst);
    await setupPage
      .setupComponent.initialSettings('listSecond')
      .setValue(valuesForFields.registrationListSecond);
    await setupPage
      .setupComponent.initialSettings('listThird')
      .setValue(valuesForFields.registrationListThird);
    await setupPage.setupComponent.submitBtn('next').click();

    await setupPage
      .setupComponent.initialSettings('cardFirst')
      .waitForDisplayed({ timeout: 10000 });
    await setupPage
      .setupComponent.initialSettings('cardFirst')
      .setValue(valuesForFields.registrationCardFirst);
    await setupPage
      .setupComponent.initialSettings('cardSecond')
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

  it('Checking the creation of a profile', async () => {
    await basePage.headerComponent.openAccount.click();
    await expect(basePage.accountWindowComponent.checkUser('newUser')).toBeDisplayed();
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
