import BasePage from './base.page.ts';
import  { RegistrationComponent } from './../components/index.ts';

class RegistrationPage extends BasePage { // додати інтерфейс - додати методи і імплементацію через клас
  registrationComponent: RegistrationComponent;

  constructor() {
    super('https://trello.com');
    this.registrationComponent = new RegistrationComponent();
  }
}
export default RegistrationPage;
