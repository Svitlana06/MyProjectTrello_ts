import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

class MainComponent extends BaseComponent {
  
  private readonly signUpBtnSelector: string = '//*[contains(@aria-label, "Sign up")]';

  constructor() {
    const rootSelector = '#skip-target';
    super(rootSelector);
  }

  get signUpBtn(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.signUpBtnSelector);
  }
}

export default MainComponent;
