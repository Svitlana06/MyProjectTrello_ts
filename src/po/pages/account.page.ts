import { SettingsComponent, ProfileVisabilityComponent } from '../components/index.ts';
import BasePage from './base.page.ts';


class AccountPage extends BasePage {

  constructor() {
    super('https://trello.com');
  }

  get settingsComponent(): SettingsComponent {
    return new SettingsComponent();
  }

  get profileVisabilityComponent(): ProfileVisabilityComponent {
    return new ProfileVisabilityComponent();
  }
}

export default AccountPage;
