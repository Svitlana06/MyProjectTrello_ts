const { Before, After } = require('@cucumber/cucumber');
const { inputData, url } = require('../../tests/settings');
const { HomePage, RegistrationPage } = require('../../po/pages/imports.js');

async function login() {
  const homePage = new HomePage();
const registrationPage = new RegistrationPage();
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
}

Before(async function (scenario) {
  if (scenario.pickle.tags.some((tag) => tag.name === '@login_on_the_site')) {
    try {
      await login();
    } catch (error) {
      console.error('Error in Before hook:', error);
    }
  }
});

After(async function () {
  await browser.deleteCookies();
});

module.exports = { After, Before };
