import BaseComponent from './base.ts';
import ElementWrapper from '../wrapper.ts';

type SettingsName = 'name' | 'type';

class BoardWindowComponent extends BaseComponent {
  
  private readonly settingsSelectors: { [key in SettingsName]: string } = {
    name: '//*[@data-testid="create-board-title-input"]',
    type: '//*[@data-testid="header-create-board-button"]',
  };

  private readonly submitBtnSelector: string = '//*[@data-testid="create-board-submit-button"]';

  constructor() {
    const rootSelector = '//*[@data-testid="header-container"]';
    super(rootSelector);
  }

  settings(name: SettingsName): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.settingsSelectors[name]);
  }

  get submitBtn(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.submitBtnSelector);
  }
}

export default BoardWindowComponent;
