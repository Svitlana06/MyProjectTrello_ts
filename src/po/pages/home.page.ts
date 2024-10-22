import { HeaderHomeComponent, MainComponent } from '../components/index.ts';

interface IHomePage {
  open(): Promise<void>;
  headerHomeComponent: HeaderHomeComponent;
  mainComponent: MainComponent;
}

class HomePage implements IHomePage {
  private url: string;

  constructor() {
    this.url = 'https://trello.com'; // Задаємо URL
  }

  async open(): Promise<void> {
    await browser.url(this.url); // Відкриваємо URL
  }

  get mainComponent(): MainComponent {
    return new MainComponent(); // Повертаємо новий екземпляр MainComponent
  }

  get headerHomeComponent(): HeaderHomeComponent {
    return new HeaderHomeComponent(); // Повертаємо новий екземпляр HeaderHomeComponent
  }
}

export default HomePage;
