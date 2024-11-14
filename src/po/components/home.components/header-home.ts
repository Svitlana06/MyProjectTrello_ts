import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

class HeaderHomeComponent extends BaseComponent {
  
  private signInBtnSelector: string = '//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]';

  constructor(public rootSelector: string ='//*[@data-testid="bignav"]') {
    super(rootSelector);
  }

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async signInBtn() {
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.signInBtnSelector);
  }
}

export default HeaderHomeComponent;
