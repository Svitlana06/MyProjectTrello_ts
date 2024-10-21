import BaseComponent from './base.component.ts';

class BoardWindowComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="header-container"]');
  }

  settings(name: 'name' | 'type') {
    const selectors: {[key:string]: string} = {
      name: '//*[@data-testid="create-board-title-input"]',
      type: '//*[@data-testid="header-create-board-button"]',
    };
    return this.rootEL.$(selectors[name]);
  }

  get submitBtn() {
    return $('//*[@data-testid="create-board-submit-button"]');
  }
}
export default BoardWindowComponent;
