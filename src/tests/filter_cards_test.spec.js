const assert = require('chai').assert;
const { pages } = require('../po');
const { url } = require('../data/data');
const signIn = require('../settings/sign_in');

describe('Filter cards', () => {
  before(async () => {
    await signIn();
    await pages('boardPage').boardComponent.check('existedBoard').click();
  });

  it('Searching for overdue cards', async () => {
    await pages('boardPage').filterComponent.openBtn.click();
    await pages('boardPage').filterComponent.selectEndDateProperty.click();
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
