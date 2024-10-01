const { Given, When, Then } = require('@cucumber/cucumber');
const should = require('chai').should();
const assert = require('chai').assert;
const { expect } = require('chai');
const { valuesForFields, url } = require('../../data/data.js');
const { BoardPage } = require('../../po/pages/imports.js');

const boardPage = new BoardPage();

Given('I"m on the boards page', async () => {
  expect((await browser.getUrl()).includes(url.boards));
});

Given('I am on a Trello board with existing lists', async () => {
  await boardPage.boardComponent.check('existedBoard').click();
});

Given('I am on a Trello board', async () => {
  await boardPage.boardComponent.check('existedBoard').click();
});

When('I add a new list', async () => {
  await boardPage.boardComponent.createBtn('list').click();
  await boardPage.boardComponent.input('list').setValue(valuesForFields.newListName);
  await boardPage.boardComponent.addBtn('list').click();
});

Then('a new list should be added to the board', async () => {
  expect(await boardPage.boardComponent.check('list').isDisplayed()).to.be.true;
});

When('I add a new card', async () => {
  await boardPage.boardComponent.createBtn('card').click();
  await boardPage.boardComponent.input('card').setValue(valuesForFields.newCardName);
  await boardPage.boardComponent.addBtn('card').click();
});

Then('a new card should be added to the list', async () => {
  expect(await boardPage.boardComponent.check('card').isDisplayed()).to.be.true;
});



Then('a new board should be created and displayed', async () => {
  await boardPage.boardComponent.check('board').isDisplayed();
  (await boardPage.boardComponent.check('board').getText()).should.equal(
    valuesForFields.newBoardName
  );
});

Given('I am on a Trello board with multiple cards', async () => {
  await boardPage.boardComponent.check('existedBoard').click();
});

When('I apply a filter for specific criteria', async () => {
  await boardPage.filterComponent.openBtn.click();
  await boardPage.filterComponent.selectEndDateProperty.click();
  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.filter);
    },
    {
      timeout: 10000,
    }
  );
});

Then('only cards matching the criteria should be displayed', async () => {
  assert.include(await browser.getUrl(), url.filterOverdue);
});

Given('I am on the boards page', async () => {
  expect((await browser.getUrl()).includes(url.boards));
});