import BaseComponent from './base.ts';

class HeaderComponent extends BaseComponent {
  
  private readonly openAccountSelector: string = '//*[@data-testid="header-member-menu-avatar"]';
  private readonly addBoardBtnSelector: string = '//*[@data-testid="header-create-menu-button"]';
  private readonly setSearchSelector: string = '//input[@placeholder="Пошук"]';

  constructor() {
    super('//*[@data-testid="header-container"]');
  }

  get openAccount() {
    return $(this.openAccountSelector);
  }

  get addBoardBtn() {
    return $(this.addBoardBtnSelector);
  }

  get setSearch() {
    return $(this.setSearchSelector);
  }
}

export default HeaderComponent;
