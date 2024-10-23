import { HeaderHomeComponent, MainComponent } from '../components/index.ts';

interface IHomePage {
  open(): Promise<void>;
  headerHomeComponent: HeaderHomeComponent;
  mainComponent: MainComponent;
}

class HomePage implements IHomePage {
  private url: string;

  constructor() {
    this.url = 'https://trello.com';
  }

  async open(): Promise<void> {
    await browser.url(this.url);
  }

  get mainComponent(): MainComponent {
    return new MainComponent();
  }

  get headerHomeComponent(): HeaderHomeComponent {
    return new HeaderHomeComponent();
  }
}

export default HomePage;
