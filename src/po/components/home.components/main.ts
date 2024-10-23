import BaseComponent from '../common.components/base.ts';

class MainComponent extends BaseComponent {
  
  private readonly signUpBtnSelector: string = '//*[contains(@aria-label, "Sign up")]';

  constructor() {
    super('#skip-target');
  }

  get signUpBtn() {
    return $(this.signUpBtnSelector);
  }
}

export default MainComponent;
