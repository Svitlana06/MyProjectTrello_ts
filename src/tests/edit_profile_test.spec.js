const assert = require('chai').assert;
const { pages } = require('../po');
const { valuesForFields } = require('../data/data');
const signIn = require('../settings/sign_in');

describe('Editing the user profile', () => {
  before(async () => {
    await signIn();
  });

  it('Сhanging the username', async () => {
    await pages('basePage').headerComponent.openAccount.click();
    await pages('basePage').accountWindowComponent.settingsBtn('profile').click();

    await pages('accountPage').profileVisabilityComponent.changeUsername.setValue(
      valuesForFields.newUserName
    );

    await pages('accountPage').profileVisabilityComponent.saveBtn.click();

    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes(valuesForFields.newUserName);
      },
      { timeout: 10000 }
    );
  });

  it('Сhecking the username change', async () => {
    assert.strictEqual(
      await pages('accountPage').profileVisabilityComponent.checkNewUsername.getText(),
      valuesForFields.newUserNameProfile
    );
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
