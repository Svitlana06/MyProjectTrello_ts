import {assert} from 'chai';
import { BoardPage} from '../po/pages/index.ts';
import { url } from '../data/data.ts';
import signIn from '../settings/sign_in.ts';

describe('Filter cards', () => {

  let boardPage: BoardPage;
  boardPage = new BoardPage();

  before(async () => {
    await signIn();
    await boardPage.boardComponent.check('existedBoard').click();
  });

  it('Searching for overdue cards', async () => {
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

  it('Checking the use of the filter', async () => {
    assert.include(await browser.getUrl(), url.filterOverdue);
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
