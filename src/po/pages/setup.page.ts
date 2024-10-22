import BasePage from './base.page.ts';
import { SetupComponent } from './../components/index.ts';

class SetupPage extends BasePage { // інтерфейс теж без base page


  constructor() {
    super('https://trello.com');
  }

  get setupComponent(): SetupComponent {
    return SetupComponent.getInstance();
  }
  
}
export default SetupPage;
