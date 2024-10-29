import { Given } from '@cucumber/cucumber';
import { url } from '../../data/data.ts';
import { HomePage } from '../../po/pages/index.ts';

let homePage: HomePage;
homePage = new HomePage();

Given('the Trello sign up page is displayed', async () => {
  await homePage.open();
  

  const signUpBtn = await homePage.mainComponent.signUpBtn; 
  await signUpBtn.click(); 
  
  await browser.waitUntil(
    async () => {
      return (await browser.getUrl()).includes(url.signup);
    },
    {
      timeout: 10000,
    }
  );
});

