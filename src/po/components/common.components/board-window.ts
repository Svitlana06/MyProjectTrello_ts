import BaseComponent from './base.ts';
import {ElementWrapper} from '../wrapper.ts';

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

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  async settings(name: SettingsName) {
    return this.container.getChildElement(this.settingsSelectors[name]);
  }

  async submitBtn(){
    return this.container.getChildElement(this.submitBtnSelector);
  }
}

export default BoardWindowComponent;
