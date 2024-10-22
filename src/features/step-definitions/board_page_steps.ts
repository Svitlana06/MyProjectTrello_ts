import { Given, When, Then } from '@cucumber/cucumber';
import { should } from 'chai';
should(); 
import { expect, assert } from 'chai';
import { valuesForFields, url } from '../../data/data.ts';
import { BoardPage } from '../../po/pages/index.ts';

let boardPage: BoardPage;
boardPage = new BoardPage();

Given('I am on the boards page', async () => {
  expect((await browser.getUrl()).includes(url.boards));
});

Given('I am on the existing board', async () => {
  await boardPage.boardComponent.check('existedBoard').click();
});

When('I add a new list', async () => {
  await boardPage.boardComponent.createBtn('list').click();
  await boardPage.boardComponent.input('list').setValue(valuesForFields.newListName);
  await boardPage.boardComponent.addBtn('list').click();
});

When('I add a new card', async () => {
  await boardPage.boardComponent.createBtn('card').click();
  await boardPage.boardComponent.input('card').setValue(valuesForFields.newCardName);
  await boardPage.boardComponent.addBtn('card').click();
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

Then('a new list should be added to the board', async () => {
  expect(await boardPage.boardComponent.check('list').isDisplayed()).to.be.true;
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

Then('only cards matching the criteria should be displayed', async () => {
  assert.include(await browser.getUrl(), url.filterOverdue);
});
