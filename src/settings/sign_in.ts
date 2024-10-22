import { inputData, url } from '../data/data.ts';
import { HomePage, RegistrationPage } from '../po/pages/index.ts';

async function signIn() { // в ліби в хелпер функції; ще подумати куди винести краще - може в base page
    try {
        let homePage: HomePage;
        homePage = new HomePage();
        let registrationPage: RegistrationPage;
        registrationPage = new RegistrationPage();
        await homePage.open();
        await homePage.headerHomeComponent.signInBtn.click();

        await browser.waitUntil(
            async () => {
                return (await browser.getUrl()).includes(url.login);
            },
            { timeout: 10000 }
        );

        await registrationPage
            .registrationComponent.input('username')
            .setValue(inputData.emailLogIn);
        await registrationPage.registrationComponent.submitBtn('signIn').click();

        await browser.waitUntil(
            async () => {
                return await registrationPage
                    .registrationComponent.input('password')
                    .isDisplayed();
            },
            { timeout: 10000 }
        );

        await registrationPage
            .registrationComponent.input('password')
            .setValue(inputData.password);
        await registrationPage.registrationComponent.submitBtn('signIn').click();

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
