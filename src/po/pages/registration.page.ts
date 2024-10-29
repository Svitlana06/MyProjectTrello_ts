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
    return new RegistrationComponent();
  }
}

export default RegistrationPage;
