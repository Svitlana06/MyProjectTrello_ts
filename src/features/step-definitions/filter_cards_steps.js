const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('chai').assert;
const { url } =  require('../../data/data.js');
const { BoardPage } = require('../../po/pages/imports.js');

const boardPage = new BoardPage();

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
