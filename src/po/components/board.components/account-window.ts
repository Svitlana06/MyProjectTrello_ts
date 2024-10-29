import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';
import { inputData } from '../../../data/data.ts';

type UserType = 'newUser' | 'existedUser';
type SettingsType = 'account' | 'profile';

class AccountWindowComponent extends BaseComponent {
  
  private readonly userSelectors: { [key in UserType]: string } = {
    newUser: `//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailSignUp}"]`,
    existedUser: `//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailLogIn}"]`,
  };

  private readonly settingsSelectors: { [key in SettingsType]: string } = {
    account: '//*[@data-testid="account-menu-settings"]',
    profile: '//*[@data-testid="account-menu-profile"]',
  };

  constructor() {
    const rootSelector = '//*[@data-testid="header-member-menu-popover"]';
    super(rootSelector);
  }

  async checkUser(name: UserType): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.userSelectors[name]);
  }

  async settingsBtn(name: SettingsType): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.settingsSelectors[name]);
  }
}

export default AccountWindowComponent;
