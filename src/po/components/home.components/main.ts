import BaseComponent from '../common.components/base.ts';
import {ElementWrapper} from '../wrapper.ts';

class MainComponent extends BaseComponent {
  
  private signUpBtnSelector: string = '//*[contains(@aria-label, "Sign up")]';

  constructor(public rootSelector: string ='#skip-target') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  async signUpBtn() {
    return this.container.getChildElement(this.signUpBtnSelector);
  }
}

export default MainComponent;
