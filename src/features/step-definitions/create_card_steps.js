const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { valuesForFields } = require('../../data/data.js');
const { BoardPage } = require('../../po/pages/imports.js');

const boardPage = new BoardPage();

Given('I am on a Trello board with existing lists', async () => {
  await boardPage.boardComponent.check('existedBoard').click();
});

When('I add a new card', async () => {
  await boardPage.boardComponent.createBtn('card').click();
  await boardPage.boardComponent.input('card').setValue(valuesForFields.newCardName);
  await boardPage.boardComponent.addBtn('card').click();
});

Then('a new card should be added to the list', async () => {
  expect(await boardPage.boardComponent.check('card').isDisplayed()).to.be.true;
});
