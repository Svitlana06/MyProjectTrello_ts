import BaseComponent from '../common.components/base.ts';

class HeaderHomeComponent extends BaseComponent {
  
  private readonly signInBtnSelector: string = '//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]';

  constructor() {
    super('//*[@data-testid="bignav"]');
  }

  get signInBtn() {
    return $(this.signInBtnSelector);
  }
}

export default HeaderHomeComponent;
