import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';
import { inputData } from '../../../data/data.ts';

type UserType = 'newUser' | 'existedUser';
type SettingsType = 'account' | 'profile';

class AccountWindowComponent extends BaseComponent {
  
  private userSelectors: { [key in UserType]: string } = {
    newUser: `//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailSignUp}"]`,
    existedUser: `//h2[text()="Обліковий запис"]//ancestor::div//div[text()="${inputData.emailLogIn}"]`,
  };

  private settingsSelectors: { [key in SettingsType]: string } = {
    account: '//*[@data-testid="account-menu-settings"]',
    profile: '//*[@data-testid="account-menu-profile"]',
  };

  constructor( public rootSelector: string ='//*[@data-testid="header-member-menu-popover"]') {
    super(rootSelector);
  }

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async checkUser(name: UserType){
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.userSelectors[name]);
  }

  async settingsBtn(name: SettingsType) {
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.settingsSelectors[name]);
  }
}

export default AccountWindowComponent;
