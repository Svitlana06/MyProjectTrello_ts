import AccountPage from './account.page.ts';
import BoardPage from './board.page.ts';
import HomePage from './home.page.ts';
import RegistrationPage from './registration.page.ts';
import SearchPage from './search.page.ts';
import SetupPage from './setup.page.ts';
import BasePage from './base.page.ts';

type PageName = 
  | 'homePage' 
  | 'registrationPage' 
  | 'setupPage' 
  | 'boardPage' 
  | 'searchPage' 
  | 'accountPage';

class PageFactory {
  private static instance: PageFactory | null = null;

  private constructor() {}

  public static getInstance(): PageFactory {
    if (!this.instance) {
      this.instance = new PageFactory();
    }
    return this.instance;
  }

  public getPage(name: PageName): BasePage | HomePage | RegistrationPage {
    const pages: { [key in PageName]: BasePage | HomePage | RegistrationPage } = {
      homePage: new HomePage(),
      registrationPage: new RegistrationPage(),
      setupPage: new SetupPage(),
      boardPage: new BoardPage(),
      searchPage: new SearchPage(),
      accountPage: new AccountPage(),
    };

    return pages[name];
  }
}

function pages(name: PageName) {
  return PageFactory.getInstance().getPage(name);
}

export {
  HomePage,
  RegistrationPage,
  pages,
  SetupPage,
  BoardPage,
  SearchPage,
  AccountPage,
  BasePage,
};
