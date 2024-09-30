const { Before, After } = require('@cucumber/cucumber');
const { inputData, url } = require('../../tests/settings');
const { pages } = require('../../po');

async function login() {
  await pages('homePage').open();
  await pages('homePage').headerHomeComponent.signInBtn.click();

  await browser.waitUntil(
    async () => (await browser.getUrl()).includes(url.login),
    { timeout: 10000 }
  );

  await pages('registrationPage')
    .registrationComponent.input('username')
    .setValue(inputData.emailLogIn);
  await pages('registrationPage').registrationComponent.submitBtn('signIn').click();

  await browser.waitUntil(
    async () => await pages('registrationPage').registrationComponent.input('password').isDisplayed(),
    { timeout: 10000 }
  );

  await pages('registrationPage')
    .registrationComponent.input('password')
    .setValue(inputData.password);
  await pages('registrationPage').registrationComponent.submitBtn('signIn').click();

  await browser.waitUntil(
    async () => (await browser.getUrl()).includes(url.boards),
    { timeout: 15000 }
  );
}

Before(async function (scenario) {
  await browser.deleteCookies();
  await browser.execute(() => {
    localStorage.clear();
  });
  if (scenario.pickle.tags.some((tag) => tag.name === '@login')) {
    try {
      await login();
    } catch (error) {
      console.error('Error in Before hook:', error);
    }
  }
});

After(async function () {
  await browser.deleteCookies();
  await browser.reloadSession();
});

module.exports = { After, Before };
