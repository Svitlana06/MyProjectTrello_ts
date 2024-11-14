import { Given, When, Then } from '@cucumber/cucumber';
import { should } from 'chai';
should(); 
import { expect, assert } from 'chai';
import { valuesForFields, url } from '../../data/data.ts';
import { BoardPage } from '../../po/pages/index.ts';

let boardPage: BoardPage;
boardPage = new BoardPage();

Given('I am on the boards page', async () => {
  expect((await browser.getUrl()).includes(url.boards)).to.be.true;
});

Given('I am on the existing board', async () => {
  const existingBoard = await boardPage.boardComponent.check('existedBoard');
  await existingBoard.click();
});

When('I add a new list', async () => {
  await (await boardPage.boardComponent.createBtn('list')).click();
  const listInput = await boardPage.boardComponent.input('list');
  await listInput.setValue(valuesForFields.newListName);
  await (await boardPage.boardComponent.addBtn('list')).click();
});

When('I add a new card', async () => {
  await (await boardPage.boardComponent.createBtn('card')).click();
  const cardInput = await boardPage.boardComponent.input('card');
  await cardInput.setValue(valuesForFields.newCardName);
  await (await boardPage.boardComponent.addBtn('card')).click();
});

When('I apply a filter for specific criteria', async () => {
  const openBtn = await boardPage.filterComponent.openBtn();
  await openBtn.click();
  
  const selectEndDateProperty = await boardPage.filterComponent.selectEndDateProperty();
  await selectEndDateProperty.click();
  
  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.filter);
    },
    {
      timeout: 10000,
    }
  );
});


Then('a new list should be added to the board', async () => {
  const isDisplayed = await boardPage.boardComponent.check('list');
  expect(await isDisplayed.isDisplayed()).to.be.true;
});

Then('a new card should be added to the list', async () => {
  const isDisplayed = await boardPage.boardComponent.check('card');
  expect(await isDisplayed.isDisplayed()).to.be.true;
});

Then('a new board should be created and displayed', async () => {
  const isDisplayed = await boardPage.boardComponent.check('board');
  expect(await isDisplayed.isDisplayed()).to.be.true;
  expect(await isDisplayed.getText()).to.equal(valuesForFields.newBoardName);
});

Then('only cards matching the criteria should be displayed', async () => {
  assert.include(await browser.getUrl(), url.filterOverdue);
});
