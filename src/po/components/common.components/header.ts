import BaseComponent from './base.ts';
import ElementWrapper from '../wrapper.ts';

class HeaderComponent extends BaseComponent {
  
  private openAccountSelector: string = '//*[@data-testid="header-member-menu-avatar"]';
  private addBoardBtnSelector: string = '//*[@data-testid="header-create-menu-button"]';
  private setSearchSelector: string = '//input[@placeholder="Пошук"]';

  constructor(public rootSelector: string ='//*[@data-testid="header-container"]') {
    super(rootSelector);
  }

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async openAccount() {
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.openAccountSelector);
  }

  async addBoardBtn(){
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.addBoardBtnSelector);
  }

  async setSearch() {
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.setSearchSelector);
  }
}

export default HeaderComponent;
