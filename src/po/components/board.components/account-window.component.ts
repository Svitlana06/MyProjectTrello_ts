import BaseComponent from '../common.components/base.component.ts';
import { inputData } from'../../../data/data.ts';

class AccountWindowComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="header-member-menu-popover"]');
  }
  

  checkUser(name: 'newUser' | 'existedUser') {
    const selectors: { [key: string]: string } = {
      newUser: `//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailSignUp}"]`,
      existedUser: `//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailLogIn}"]`,
    };
    return this.rootEL.$(selectors[name]);
  }

  settingsBtn(name: 'account' | 'profile') {
    const selectors: {[key:string]: string} = {
      account: '//*[@data-testid="account-menu-settings"]',
      profile: '//*[@data-testid="account-menu-profile"]',
    };
    return this.rootEL.$(selectors[name]);
  }
}
export default AccountWindowComponent;
