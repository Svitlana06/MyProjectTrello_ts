import AccountPage from './account.page.ts';
import BoardPage from './board.page.ts';
import HomePage from './home.page.ts';
import RegistrationPage from './registration.page.ts';
import SearchPage from './search.page.ts';
import SetupPage from './setup.page.ts';
import BasePage from './base.page.ts';

type PageName = 'homePage' | 'registrationPage' | 'setupPage' | 'boardPage' | 'searchPage' | 'accountPage' | 'basePage';

function pages(name:PageName) {
  const items: { [key in PageName]: BasePage } = {
    homePage: new HomePage(),
    registrationPage: new RegistrationPage(),
    setupPage: new SetupPage(),
    boardPage: new BoardPage(),
    searchPage: new SearchPage(),
    accountPage: new AccountPage(),
    basePage: new BasePage(),
  };
  return items[name];
}
export {
  HomePage,
  RegistrationPage,
  pages,
  SetupPage,
  BoardPage,
  SearchPage,
  AccountPage,
};
