import { expect } from 'chai';
import { BoardPage } from '../po/pages/imports.ts';
import { valuesForFields } from '../data/data.ts';
import signIn from '../settings/sign_in.ts';

describe('Creating a new list', () => {
  before(async () => {
    await signIn();
  });

  let boardPage: BoardPage;
  boardPage = new BoardPage();

  it('Creating a new list on the board', async () => {
    await boardPage.boardComponent.check('existedBoard').click();
    await boardPage.boardComponent.createBtn('list').click();

    await boardPage.boardComponent.input('list').setValue(valuesForFields.newListName);
    await boardPage.boardComponent.addBtn('list').click();
  });

  it('checking if a new list has been added', async () => {
    expect(await boardPage.boardComponent.check('list').isDisplayed()).to.be.true;
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
