import BaseComponent from './base.ts';

class BoardWindowComponent extends BaseComponent {
  
  private readonly settingsSelectors: { [key: string]: string } = {
    name: '//*[@data-testid="create-board-title-input"]',
    type: '//*[@data-testid="header-create-board-button"]',
  };

  private readonly submitBtnSelector: string = '//*[@data-testid="create-board-submit-button"]';

  constructor() {
    super('//*[@data-testid="header-container"]');
  }

  settings(name: 'name' | 'type') {
    return this.rootEL.$(this.settingsSelectors[name]);
  }

  get submitBtn() {
    return $(this.submitBtnSelector);
  }
}

export default BoardWindowComponent;
