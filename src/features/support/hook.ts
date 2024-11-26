import { Before, After } from '@cucumber/cucumber';
import { inputData, url } from '../../data/data.ts';
import { HomePage, RegistrationPage } from '../../po/pages/index.ts';
import { ElementWrapper } from "../../po/components/wrapper.ts"; // Імпортуємо ElementWrapper

async function login() {
  const homePage = new HomePage();
  const registrationPage = new RegistrationPage();
  
  // Відкриваємо домашню сторінку
  await homePage.open();

  // Отримуємо кнопку "Sign In" через ElementWrapper і клікаємо по ній
  const signInBtn = await homePage.headerHomeComponent.signInBtn();
  await signInBtn.click();

  // Чекаємо на перехід до сторінки логіну
  await browser.waitUntil(async () => (await browser.getUrl()).includes(url.login), {
    timeout: 100000,
  });

  // Заповнюємо поле "Username" через ElementWrapper
  const usernameInput = await registrationPage.registrationComponent.input('username');
  await usernameInput.setValue(inputData.emailLogIn);
  
  // Клікаємо на кнопку "Sign In"
  const signInButton = await registrationPage.registrationComponent.submitBtn('signIn');
  await signInButton.click();

  // Чекаємо, поки з'явиться поле для введення паролю
  await browser.waitUntil(
    async () => await (await registrationPage.registrationComponent.input('password')).isDisplayed(),
    { timeout: 100000 }
  );

  // Заповнюємо поле для паролю і клікаємо на кнопку
  const passwordInput = await registrationPage.registrationComponent.input('password');
  await passwordInput.setValue(inputData.password);
  
  const signInButtonAgain = await registrationPage.registrationComponent.submitBtn('signIn');
  await signInButtonAgain.click();

  // Чекаємо на перехід до головної сторінки після успішного логіну
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
