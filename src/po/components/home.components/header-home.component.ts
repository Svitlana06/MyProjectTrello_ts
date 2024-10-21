import BaseComponent from '../common.components/base.component.ts';

class HeaderHomeComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="bignav"]');
  }

  get signInBtn() {
    return $('//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]');
  }
}
export default HeaderHomeComponent;
