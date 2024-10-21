import { Then } from '@cucumber/cucumber';
import {assert} from 'chai';
import { valuesForFields } from '../../data/data.ts';
import { SearchPage } from '../../po/pages/imports.ts';

let searchPage: SearchPage;
searchPage = new SearchPage();

Then('only necessary boards should be displayed', async () => {
  assert.strictEqual(
    await searchPage.searchComponent.rootEL.getValue(),
    valuesForFields.searchingBoard

  );
});
