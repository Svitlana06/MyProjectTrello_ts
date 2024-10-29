import { When } from '@cucumber/cucumber';
import { valuesForFields } from '../../data/data.ts';
import { SetupPage } from '../../po/pages/index.ts';

let setupPage: SetupPage;
setupPage = new SetupPage();

When('I set up a profile', async () => {
  const goalElement = await setupPage.setupComponent.initialSettings('goal');
  await goalElement.click();
  
  const continueBtn = await setupPage.setupComponent.submitBtn('continue');
  await continueBtn.click();

  const boardElement = await setupPage.setupComponent.initialSettings('board');
  await boardElement.waitForDisplayed({ timeout: 10000 });
  await boardElement.setValue(valuesForFields.registrationBoard);
  
  const nextBtn = await setupPage.setupComponent.submitBtn('next');
  await nextBtn.click();

  const listFirstElement = await setupPage.setupComponent.initialSettings('listFirst');
  await listFirstElement.waitForDisplayed({ timeout: 10000 });
  await listFirstElement.setValue(valuesForFields.registrationListFirst);
  
  const listSecondElement = await setupPage.setupComponent.initialSettings('listSecond');
  await listSecondElement.setValue(valuesForFields.registrationListSecond);
  
  const listThirdElement = await setupPage.setupComponent.initialSettings('listThird');
  await listThirdElement.setValue(valuesForFields.registrationListThird);
  
  await nextBtn.click();

  const cardFirstElement = await setupPage.setupComponent.initialSettings('cardFirst');
  await cardFirstElement.waitForDisplayed({ timeout: 10000 });
  await cardFirstElement.setValue(valuesForFields.registrationCardFirst);
  
  const cardSecondElement = await setupPage.setupComponent.initialSettings('cardSecond');
  await cardSecondElement.setValue(valuesForFields.registrationCardSecond);
  
  await nextBtn.click();

  const skipBtn = await setupPage.setupComponent.submitBtn('skip');
  await skipBtn.click();

  await browser.waitUntil(
    async () => {
      const premiumElement = await setupPage.setupComponent.premiumVersionOffer();
      return await premiumElement.isDisplayed();
    },
    {
      timeout: 10000,
    }
  );

  await skipBtn.click();
});
