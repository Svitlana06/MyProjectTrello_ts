import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

class MainComponent extends BaseComponent {
  
  private signUpBtnSelector: string = '//*[contains(@aria-label, "Sign up")]';

  constructor(public rootSelector: string ='#skip-target') {
    super(rootSelector);
  }

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async signUpBtn() {
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.signUpBtnSelector);
  }
}

export default MainComponent;
