import { inputData, url } from '../data/data.ts';
import { HomePage, RegistrationPage } from '../po/pages/index.ts';

async function signIn() { // в ліби в хелпер функції; ще подумати куди винести краще - може в base page
    try {
        let homePage: HomePage;
        homePage = new HomePage();
        let registrationPage: RegistrationPage;
        registrationPage = new RegistrationPage();
        await homePage.open();
        const signInBtn = await homePage.headerHomeComponent.signInBtn();
        await signInBtn.click()

        await browser.waitUntil(
            async () => {
                return (await browser.getUrl()).includes(url.login);
            },
            { timeout: 10000 }
        );

        const usernameInput = await registrationPage.registrationComponent.input('username');
        await usernameInput.setValue(inputData.emailLogIn);
        const signInButton = await registrationPage.registrationComponent.submitBtn('signIn');
        await signInButton.click();

        await browser.waitUntil(
            async () => await (await registrationPage.registrationComponent.input('password')).isDisplayed(),
            { timeout: 100000 }
          );

          const passwordInput = await registrationPage.registrationComponent.input('password');
          await passwordInput.setValue(inputData.password);
          
          const signInButtonAgain = await registrationPage.registrationComponent.submitBtn('signIn');
          await signInButtonAgain.click();

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

export default signIn;
