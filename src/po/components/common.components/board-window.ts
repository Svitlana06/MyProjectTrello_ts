import BaseComponent from './base.ts';
import ElementWrapper from '../wrapper.ts';

type SettingsName = 'name' | 'type';

class BoardWindowComponent extends BaseComponent {
  
  private settingsSelectors: { [key in SettingsName]: string } = {
    name: '//*[@data-testid="create-board-title-input"]',
    type: '//*[@data-testid="header-create-board-button"]',
  };

  private submitBtnSelector: string = '//*[@data-testid="create-board-submit-button"]';

  constructor(public rootSelector: string ='//*[@data-testid="header-container"]') {
    super(rootSelector);
  }

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async settings(name: SettingsName) {
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.settingsSelectors[name]);
  }

  async submitBtn(){
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.submitBtnSelector);
  }
}

export default BoardWindowComponent;
