import BaseComponent from '../common.components/base.component.ts';
import { inputData } from '../../../data/data.ts';

class AccountWindowComponent extends BaseComponent {
  // Винесені локатори
  private readonly userSelector: { [key: string]: string } = {
    newUser: `//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailSignUp}"]`,
    existedUser: `//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailLogIn}"]`,
  };

  private readonly settingsSelectors: { [key: string]: string } = {
    account: '//*[@data-testid="account-menu-settings"]',
    profile: '//*[@data-testid="account-menu-profile"]',
  };

  constructor() {
    super('//*[@data-testid="header-member-menu-popover"]');
  }

  checkUser(name: 'newUser' | 'existedUser') {
    return this.rootEL.$(this.userSelector[name]); // Використовуємо локатор з поля
  }

  settingsBtn(name: 'account' | 'profile') {
    return this.rootEL.$(this.settingsSelectors[name]); // Використовуємо локатор з поля
  }
}

export default AccountWindowComponent;
