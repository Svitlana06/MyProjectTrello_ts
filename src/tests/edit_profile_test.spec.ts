import {assert} from 'chai';
import { BasePage, AccountPage } from '../po/pages/imports.ts';
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

    await accountPage.profileVisabilityComponent.changeUsername.setValue(
      valuesForFields.newUserName
    );

    await accountPage.profileVisabilityComponent.saveBtn.click();

    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes(valuesForFields.newUserName);
      },
      { timeout: 10000 }
    );
  });

  it('Сhecking the username change', async () => {
    assert.strictEqual(
      await accountPage.profileVisabilityComponent.checkNewUsername.getText(),
      valuesForFields.newUserNameProfile
    );
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
