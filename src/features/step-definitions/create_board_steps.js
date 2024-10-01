const { Given, When, Then } = require('@cucumber/cucumber');
const should = require('chai').should();
const { expect } = require('chai');
const { valuesForFields, url } = require('../../tests/settings');
const { BasePage, BoardPage } = require('../../po/pages/imports.js');

const basePage = new BasePage();
const boardPage = new BoardPage();

Given('I am on the boards page', async () => {
  expect((await browser.getUrl()).includes(url.boards));
});

When('I add a new board', async () => {
  await basePage.headerComponent.addBoardBtn.click();
  await basePage.boardWindowComponent.settings('type').click();
  await basePage.boardWindowComponent.settings('name').setValue(valuesForFields.newBoardName);
  await basePage.boardWindowComponent.submitBtn.isDisplayed();
  await basePage.boardWindowComponent.submitBtn.click();

  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.newBoardUrl);
    },
    {
      timeout: 13000,
      
    }
  );
  await boardPage.boardComponent.check('board').isDisplayed();
});

Then('a new board should be created and displayed', async () => {
  (await boardPage.boardComponent.check('board').getText()).should.equal(
    valuesForFields.newBoardName
  );
});
