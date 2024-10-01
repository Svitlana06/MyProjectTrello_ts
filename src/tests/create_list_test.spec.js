const { expect } = require('chai');
const { pages } = require('../po');
const { valuesForFields } = require('../data/data');
const signIn = require('../settings/sign_in');

describe('Creating a new list', () => {
  before(async () => {
    await signIn();
  });

  it('Creating a new list on the board', async () => {
    await pages('boardPage').boardComponent.check('existedBoard').click();
    await pages('boardPage').boardComponent.createBtn('list').click();

    await pages('boardPage').boardComponent.input('list').setValue(valuesForFields.newListName);
    await pages('boardPage').boardComponent.addBtn('list').click();
  });

  it('checking if a new list has been added', async () => {
    expect(await pages('boardPage').boardComponent.check('list').isDisplayed()).to.be.true;
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
