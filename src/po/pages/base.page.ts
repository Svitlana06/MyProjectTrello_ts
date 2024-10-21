import { HeaderComponent, BoardWindowComponent, AccountWindowComponent, SearchWindowComponent } from '../components/index.ts';

class BasePage { // додати інтерфейс
  url: string;
  headerComponent: HeaderComponent;
  boardWindowComponent: BoardWindowComponent;
  accountWindowComponent: AccountWindowComponent;
  searchWindowComponent: SearchWindowComponent;

  constructor(url: string) {
    this.url = url;
    this.headerComponent = new HeaderComponent();
    this.boardWindowComponent = new BoardWindowComponent();
    this.accountWindowComponent = new AccountWindowComponent();
    this.searchWindowComponent = new SearchWindowComponent();
  }

  open() {
    return browser.url(this.url);
  }
}

export default BasePage;
