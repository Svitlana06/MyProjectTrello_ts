const { When } = require('@cucumber/cucumber');
const { inputData, url } = require('../../data/data.js');
const { RegistrationPage } = require('../../po/pages/imports.js');

const registrationPage = new RegistrationPage();

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
