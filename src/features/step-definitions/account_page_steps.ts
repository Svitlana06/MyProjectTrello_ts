import { When, Then } from '@cucumber/cucumber';
import { assert } from 'chai';
import { should } from 'chai';
should(); 
import { valuesForFields } from '../../data/data.ts';
import { AccountPage } from '../../po/pages/imports.ts';

let accountPage: AccountPage;

accountPage = new AccountPage(); // 

When('I update workspace details', async () => {
  await accountPage.settingsComponent.openFrequencyProperty.click();

  await accountPage.settingsComponent.changeFrequency.waitForExist({
    timeout: 10000,
  });
  await accountPage.settingsComponent.changeFrequency.click();
});

When('I update my profile information', async () => {
  await accountPage.profileVisabilityComponent.changeUsername.setValue(valuesForFields.newUserName);
  await accountPage.profileVisabilityComponent.saveBtn.click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(valuesForFields.newUserName);
    },
    { timeout: 10000 }
  );
});

Then('the workspace settings should be updated successfully', async () => {
  (await accountPage.settingsComponent.checkFrequency.getText()).should.equal( // чи варто створювати змінні??
    valuesForFields.checkedFrequently
  );
});

Then('my profile should reflect the updates', async () => {
  assert.strictEqual(
    await accountPage.profileVisabilityComponent.checkNewUsername.getText(), // чи варто створювати змінні??
    valuesForFields.newUserNameProfile
  );
});
