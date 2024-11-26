import BaseComponent from './base.ts';
import {ElementWrapper} from '../wrapper.ts';

class HeaderComponent extends BaseComponent {
  
  private openAccountSelector: string = '//*[@data-testid="header-member-menu-avatar"]';
  private addBoardBtnSelector: string = '//*[@data-testid="header-create-menu-button"]';
  private setSearchSelector: string = '//input[@placeholder="Пошук"]';

  constructor(public rootSelector: string ='//*[@data-testid="header-container"]') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  async openAccount() {
    return this.container.getChildElement(this.openAccountSelector);
  }

  async addBoardBtn(){
    return this.container.getChildElement(this.addBoardBtnSelector);
  }

  async setSearch() {
    return this.container.getChildElement(this.setSearchSelector);
  }
}

export default HeaderComponent;
