import { Before, After } from '@cucumber/cucumber';
import { inputData, url } from '../../data/data.ts';
import { HomePage, RegistrationPage } from '../../po/pages/index.ts';

async function login() {
  const homePage = new HomePage();
  const registrationPage = new RegistrationPage();
  
  await homePage.open();
  const signInBtn= await homePage.headerHomeComponent.signInBtn;
  signInBtn.click();

  await browser.waitUntil(async () => (await browser.getUrl()).includes(url.login), {
    timeout: 10000,
  });

  const usernameInput = await registrationPage.registrationComponent.input('username');
  await usernameInput.setValue(inputData.emailLogIn);
  
  const signInButton = await registrationPage.registrationComponent.submitBtn('signIn');
  await signInButton.click();

  await browser.waitUntil(
    async () => await (await registrationPage.registrationComponent.input('password')).isDisplayed(),
    { timeout: 10000 }
  );

  const passwordInput = await registrationPage.registrationComponent.input('password');
  await passwordInput.setValue(inputData.password);
  
  await (await registrationPage.registrationComponent.submitBtn('signIn')).click();

  await browser.waitUntil(async () => (await browser.getUrl()).includes(url.boards), {
    timeout: 15000,
  });
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

export { Before, After };
