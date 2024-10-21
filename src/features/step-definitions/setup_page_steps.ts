import { When } from '@cucumber/cucumber';
import { valuesForFields } from '../../data/data.ts';
import { SetupPage } from '../../po/pages/imports.ts';

let setupPage: SetupPage;
setupPage = new SetupPage();

When('I set up a profile', async () => {
  await setupPage.setupComponent.initialSettings('goal').click();
  await setupPage.setupComponent.submitBtn('continue').click();

  await setupPage.setupComponent.initialSettings('board').waitForDisplayed({ timeout: 10000 });
  await setupPage.setupComponent
    .initialSettings('board')
    .setValue(valuesForFields.registrationBoard);
  await setupPage.setupComponent.submitBtn('next').click();
  await setupPage.setupComponent.initialSettings('listFirst').waitForDisplayed({ timeout: 10000 });
  await setupPage.setupComponent
    .initialSettings('listFirst')
    .setValue(valuesForFields.registrationListFirst);
  await setupPage.setupComponent
    .initialSettings('listSecond')
    .setValue(valuesForFields.registrationListSecond);
  await setupPage.setupComponent
    .initialSettings('listThird')
    .setValue(valuesForFields.registrationListThird);
  await setupPage.setupComponent.submitBtn('next').click();

  await setupPage.setupComponent.initialSettings('cardFirst').waitForDisplayed({ timeout: 10000 });
  await setupPage.setupComponent
    .initialSettings('cardFirst')
    .setValue(valuesForFields.registrationCardFirst);
  await setupPage.setupComponent
    .initialSettings('cardSecond')
    .setValue(valuesForFields.registrationCardSecond);
  await setupPage.setupComponent.submitBtn('next').click();

  await setupPage.setupComponent.submitBtn('skip').click();

  await browser.waitUntil(
    async () => {
      return setupPage.setupComponent.premiumVersionOffer.isDisplayed();
    },
    {
      timeout: 10000,
    }
  );

  await setupPage.setupComponent.submitBtn('skip').click();
});
