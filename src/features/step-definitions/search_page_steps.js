const { Then } = require('@cucumber/cucumber');
const assert = require('chai').assert;
const { valuesForFields } = require('../../data/data.js');
const { SearchPage} = require('../../po/pages/imports.js');

const searchPage = new SearchPage();

Then('only necessary boards should be displayed', async () => {
  assert.strictEqual(
    await searchPage.searchComponent.rootEL.getValue(),
    valuesForFields.searchingBoard
  );
});
