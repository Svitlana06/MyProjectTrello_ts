import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

class HeaderHomeComponent extends BaseComponent {
  
  private readonly signInBtnSelector: string = '//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]';

  constructor() {
    const rootSelector = '//*[@data-testid="bignav"]';
    super(rootSelector);
  }

  get signInBtn(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.signInBtnSelector);
  }
}

export default HeaderHomeComponent;
