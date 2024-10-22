import {assert} from 'chai';
import { BasePage, AccountPage } from '../po/pages/index.ts';
import { valuesForFields } from '../data/data.ts';
import signIn from '../settings/sign_in.ts';

describe('Editing the user profile', () => {

  let accountPage: AccountPage;
  accountPage = new AccountPage();

  let basePage: BasePage;
  basePage = new BasePage('https://trello.com');

  before(async () => {
    await signIn();
  });

  it('Сhanging the username', async () => {
    await basePage.headerComponent.openAccount.click();
    await basePage.accountWindowComponent.settingsBtn('profile').click();
  
    // Дочекайтеся елемента
    const changeUsernameField = await accountPage.profileVisabilityComponent.changeUsername;
    await changeUsernameField.setValue(valuesForFields.newUserName);
  
    // Дочекайтеся кнопки "Зберегти"
    const saveButton = await accountPage.profileVisabilityComponent.saveBtn;
    await saveButton.click();
  
    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes(valuesForFields.newUserName);
      },
      { timeout: 10000 }
    );
  });
  

  it('Сhecking the username change', async () => {
    const actualUsername = await accountPage.profileVisabilityComponent.getNewUsername();
    assert.strictEqual(actualUsername, valuesForFields.newUserNameProfile);
  });
  

  after(async function () {
    await browser.deleteCookies();
  });
});
