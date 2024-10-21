import BasePage from './base.page.ts';
import  { HeaderHomeComponent, MainComponent } from '../components/index.ts';

class HomePage extends BasePage {
  mainComponent: MainComponent;
  headerHomeComponent : HeaderHomeComponent;

  constructor() {
    super('https://trello.com');
    this.mainComponent = new MainComponent();
    this.headerHomeComponent = new HeaderHomeComponent();
  }
}
export default HomePage;
