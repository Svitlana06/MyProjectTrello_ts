import { When } from '@cucumber/cucumber';
import { inputData, url } from '../../data/data.ts';
import { RegistrationPage } from '../../po/pages/index.ts';

let registrationPage: RegistrationPage;
registrationPage = new RegistrationPage();

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
