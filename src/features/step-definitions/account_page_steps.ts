import { When, Then } from '@cucumber/cucumber';
import { assert } from 'chai';
import { should } from 'chai';
should(); 
import { valuesForFields } from '../../data/data.ts';
import { AccountPage } from '../../po/pages/index.ts';

let accountPage: AccountPage;

accountPage = new AccountPage(); 

When('I update workspace details', async () => {
  const openFrequency = await accountPage.settingsComponent.openFrequencyProperty;
  await openFrequency.click();

  const changeFrequency = await accountPage.settingsComponent.changeFrequency;
  await changeFrequency.waitForExist({
    timeout: 10000,
  });
  await changeFrequency.click();
});

When('I update my profile information', async () => {
  const usernameInput = await accountPage.profileVisabilityComponent.changeUsername;
  await usernameInput.setValue(valuesForFields.newUserName);
  
  const saveButton = await accountPage.profileVisabilityComponent.saveBtn;
  await saveButton.click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(valuesForFields.newUserName);
    },
    { timeout: 10000 }
  );
});

Then('the workspace settings should be updated successfully', async () => {
  const frequencyElement = await accountPage.settingsComponent.checkFrequency;
  const frequencyText = await frequencyElement.getText()
  frequencyText.should.equal(valuesForFields.checkedFrequently);
});

Then('my profile should reflect the updates', async () => {
  const newUsernameText = await accountPage.profileVisabilityComponent.getNewUsername();
  assert.strictEqual(newUsernameText, valuesForFields.newUserNameProfile);
});
