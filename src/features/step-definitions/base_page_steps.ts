import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { valuesForFields, url } from '../../data/data.ts';
import { BasePage } from '../../po/pages/index.ts';

let basePage: BasePage;
basePage = new BasePage('https://trello.com');

Given('I am on the workspace settings page', async () => {
  expect((await browser.getUrl()).includes(url.boards)).to.be.true;
  const openAccount = await basePage.headerComponent.openAccount;
  await openAccount.click();
  
  const accountButton = await basePage.accountWindowComponent.settingsBtn('account');
  await accountButton.click();
});

Given('I am on the profile settings page', async () => {
  expect((await browser.getUrl()).includes(url.boards)).to.be.true;
  const openAccount = await basePage.headerComponent.openAccount;
  await openAccount.click();
  const profileButton = await basePage.accountWindowComponent.settingsBtn('profile');
  await profileButton.click();
});

When('I add a new board', async () => {
  const addBoardBtn = await basePage.headerComponent.addBoardBtn; 
  await addBoardBtn.click();
  const typeButton = await basePage.boardWindowComponent.settings('type');
  await typeButton.click();
  const nameInput = await basePage.boardWindowComponent.settings('name');
  await nameInput.setValue(valuesForFields.newBoardName);
  const submitBtn = await basePage.boardWindowComponent.submitBtn;
  await submitBtn.waitForDisplayed();
  await submitBtn.click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.newBoardUrl);
    },
    {
      timeout: 20000,
    }
  );
});

When('I seek the boards', async () => {
  const setSearch = await basePage.headerComponent.setSearch;
  await setSearch.setValue(valuesForFields.searchingBoard);
  
  const openResultsBtn = await basePage.searchWindowComponent.openResultsBtn();
  await openResultsBtn.waitForDisplayed({ timeout: 12000 });
  await openResultsBtn.click();
  
  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.test);
    },
    {
      timeout: 10000,
    }
  );
});

Then('a new account should be created successfully', async () => {
  const openAccountBtn = await basePage.headerComponent.openAccount;
  await openAccountBtn.click();
  
  const userElement = await basePage.accountWindowComponent.checkUser('newUser');
  expect(await userElement.isDisplayed()).to.be.true;
});
