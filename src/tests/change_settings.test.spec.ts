import { should } from 'chai';
should(); 
import  { valuesForFields } from '../data/data.ts';
import signIn from '../settings/sign_in.ts';
import { BasePage, AccountPage } from '../po/pages/index.ts';

describe('Modifying workspace setting', () => {
  before(async () => {
    await signIn();
  });

  let accountPage: AccountPage;
  accountPage = new AccountPage();

  let basePage: BasePage;
  basePage = new BasePage('https://trello.com'); // додати в ліби папку посилання (налаштування для тестів)

  it('Changing the frequency setting', async () => { // забрати it , де нема перевірки; можна робити в хелперах або пейджах (коли вони повторюються в інших тестах, інакше - в before)
    await basePage.headerComponent.openAccount.click();
    await basePage.accountWindowComponent.settingsBtn('account').click(); // забираємо

    await accountPage.settingsComponent.openFrequencyProperty.click();

    await accountPage.settingsComponent.changeFrequency.waitForExist({
      timeout: 10000,
    });
    await accountPage.settingsComponent.changeFrequency.click();
  });

  it('Checking changes to the frequency setting', async () => {
    (await accountPage.settingsComponent.checkFrequency.getText()).should.equal( // додавати змінні в перевірки
      valuesForFields.checkedFrequently
    );
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
