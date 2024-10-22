import { should } from 'chai';
should(); 
import { url, valuesForFields } from '../data/data.ts';
import signIn from '../settings/sign_in.ts';
import { BasePage, BoardPage } from '../po/pages/index.ts';

describe('Creating a new board', () => {
  before(async () => {
    await signIn();
  });

  let boardPage: BoardPage;
  boardPage = new BoardPage();

  let basePage: BasePage;
  basePage = new BasePage('https://trello.com');

  it('Creating a new board', async () => {
    await basePage.headerComponent.addBoardBtn.click();
    await basePage.boardWindowComponent.settings('type').click();
    await basePage
      .boardWindowComponent.settings('name')
      .setValue(valuesForFields.newBoardName);
    await basePage.boardWindowComponent.submitBtn.isDisplayed();
    await basePage.boardWindowComponent.submitBtn.click();

    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes(url.newBoardUrl);
      },
      {
        timeout: 10000,
      }
    );
    await boardPage.boardComponent.check('board').isDisplayed();
  });

  it('Checking if a new board has been added', async () => {
    (await boardPage.boardComponent.check('board').getText()).should.equal(
      valuesForFields.newBoardName
    );
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
