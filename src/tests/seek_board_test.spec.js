const assert = require('chai').assert;
const { pages } = require('../po');
const { valuesForFields, url } = require('../data/data');
const signIn = require('../settings/sign_in');

describe('Searching for an existing board', () => {
  before(async () => {
    await signIn();
  });

  it('Searching for a specific board', async () => {
    await pages('basePage').headerComponent.setSearch.setValue(valuesForFields.searchingBoard);
    await pages('basePage').searchWindowComponent.openResultsBtn.waitForDisplayed({
      timeout: 12000,
    });
    await pages('basePage').searchWindowComponent.openResultsBtn.click();
    await browser.waitUntil(
      async () => {
        return (await browser.getUrl()).includes(url.test);
      },
      {
        timeout: 10000,
      }
    );
  });

  it('Checking the board search', async () => {
    assert.strictEqual(
      await pages('searchPage').searchComponent.rootEL.getValue(),
      valuesForFields.searchingBoard
    );
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
