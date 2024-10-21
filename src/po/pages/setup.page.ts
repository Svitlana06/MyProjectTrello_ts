import BasePage from './base.page.ts';
import { SetupComponent } from './../components/index.ts';

class SetupPage extends BasePage { // інтерфейс теж без base page
  setupComponent: SetupComponent;

  constructor() {
    super('https://trello.com');
    this.setupComponent = new SetupComponent();
  }
}
export default SetupPage;
