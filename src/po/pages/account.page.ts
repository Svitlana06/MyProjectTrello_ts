import { SettingsComponent, ProfileVisabilityComponent } from '../components/index.ts';
import BasePage from './base.page.ts';


class AccountPage extends BasePage {
  settingsComponent: SettingsComponent;
  profileVisabilityComponent: ProfileVisabilityComponent;

  constructor() {
    super('https://trello.com');
    this.settingsComponent = new SettingsComponent(); // в гетери винести - повертати новий об'єкт через гетер
    this.profileVisabilityComponent = new ProfileVisabilityComponent();
  }
}

export default AccountPage;
