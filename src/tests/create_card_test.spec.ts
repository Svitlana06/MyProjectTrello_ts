import { expect } from 'chai';
import { BoardPage } from '../po/pages/index.ts';
import { valuesForFields } from '../data/data.ts';
import signIn from '../settings/sign_in.ts';

describe('Creating a new card on a list', () => {
  before(async () => {
    await signIn();
  });

  let boardPage: BoardPage;
  boardPage = new BoardPage();

  it('Creating a new card on the list', async () => {
    await boardPage.boardComponent.check('existedBoard').click();
    await boardPage.boardComponent.createBtn('card').click();
    await boardPage.boardComponent.input('card').setValue(valuesForFields.newCardName);
    await boardPage.boardComponent.addBtn('card').click();
  });

  it('Checking if a new card has been added', async () => {
    expect(await boardPage.boardComponent.check('card').isDisplayed()).to.be.true;
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
