import BaseComponent from './base.ts';
import ElementWrapper from '../wrapper.ts';

class HeaderComponent extends BaseComponent {
  
  private readonly openAccountSelector: string = '//*[@data-testid="header-member-menu-avatar"]';
  private readonly addBoardBtnSelector: string = '//*[@data-testid="header-create-menu-button"]';
  private readonly setSearchSelector: string = '//input[@placeholder="Пошук"]';

  constructor() {
    const rootSelector = '//*[@data-testid="header-container"]';
    super(rootSelector);
  }

  get openAccount(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.openAccountSelector);
  }

  get addBoardBtn(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.addBoardBtnSelector);
  }

  get setSearch(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.setSearchSelector);
  }
}

export default HeaderComponent;
