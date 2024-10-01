const { Given } = require('@cucumber/cucumber');
const { url } = require('../../data/data.js');
const { HomePage } = require('../../po/pages/imports.js');

const homePage = new HomePage();

Given('the Trello sign up page is displayed', async () => {
  await homePage.open();
  await homePage.mainComponent.signUpBtn.click();
  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.signup);
    },
    {
      timeout: 10000,
    }
  );
});
