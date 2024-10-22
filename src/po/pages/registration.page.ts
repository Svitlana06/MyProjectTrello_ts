interface IRegistrationPage {
  get registrationComponent(): RegistrationComponent;
}

import { RegistrationComponent } from './../components/index.ts';

class RegistrationPage implements IRegistrationPage {
  url: string;

  constructor() {
    this.url = 'https://trello.com';
  }

  get registrationComponent(): RegistrationComponent {
    return RegistrationComponent.getInstance();
  }
}

export default RegistrationPage;
