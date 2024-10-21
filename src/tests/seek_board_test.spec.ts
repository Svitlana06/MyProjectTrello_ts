import {assert} from 'chai';
import { BasePage, SearchPage } from '../po/pages/imports.ts';
import { url, valuesForFields } from '../data/data.ts';
import signIn from '../settings/sign_in.ts';

describe('Searching for an existing board', () => {
  before(async () => {
    await signIn();
  });

  let basePage: BasePage;
  basePage = new BasePage('https://trello.com');

  let searchPage: SearchPage;
  searchPage = new SearchPage();

  it('Searching for a specific board', async () => {
    await basePage.headerComponent.setSearch.setValue(valuesForFields.searchingBoard);
    await basePage.searchWindowComponent.openResultsBtn.waitForDisplayed({
      timeout: 12000,
    });
    await basePage.searchWindowComponent.openResultsBtn.click();
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
      await searchPage.searchComponent.rootEL.getValue(),
      valuesForFields.searchingBoard
    );
  });

  after(async function () {
    await browser.deleteCookies();
  });
});
