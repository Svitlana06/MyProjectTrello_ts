const assert = require('chai').assert;
const { inputData, url } = require('./settings');
const { pages } = require('../po');

async function signIn() {
  try {
    await pages('homePage').open();
    await pages('homePage').headerHomeComponent.signInBtn.click();

    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes(url.login);
      },
      { timeout: 10000 }
    );

    await pages('registrationPage')
      .registrationComponent.input('username')
      .setValue(inputData.emailLogIn);
    await pages('registrationPage').registrationComponent.submitBtn('signIn').click();

    await browser.waitUntil(
      async () => {
        return await pages('registrationPage')
          .registrationComponent.input('password')
          .isDisplayed();
      },
      { timeout: 10000 }
    );

    await pages('registrationPage')
      .registrationComponent.input('password')
      .setValue(inputData.password);
    await pages('registrationPage').registrationComponent.submitBtn('signIn').click();

    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes(url.boards);
      },
      { timeout: 15000 }
    );
  } catch (error) {
    console.error('Error during setup:', error);
    throw error;
  }
}

module.exports = signIn;
