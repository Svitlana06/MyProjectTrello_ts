import BaseComponent from '../common.components/base.ts';
import {ElementWrapper} from '../wrapper.ts';

class HeaderHomeComponent extends BaseComponent {
  
  private signInBtnSelector: string = '//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]';

  constructor(public rootSelector: string ='//*[@data-testid="bignav"]') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  async signInBtn() {
    return this.container.getChildElement(this.signInBtnSelector);
  }
}

export default HeaderHomeComponent;
