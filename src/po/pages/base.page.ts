import { HeaderComponent, BoardWindowComponent, AccountWindowComponent, SearchWindowComponent } from '../components/index.ts';

interface IBasePage {
  url: string;
  open(): Promise<void>;
  headerComponent: HeaderComponent;
  boardWindowComponent: BoardWindowComponent;
  accountWindowComponent: AccountWindowComponent;
  searchWindowComponent: SearchWindowComponent;
}

class BasePage implements IBasePage {
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

  async open(): Promise<void> {
    await browser.url(this.url);
  }
}

export default BasePage;
