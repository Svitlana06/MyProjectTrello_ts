import BaseComponent from './base.component.ts';

class SearchWindowComponent extends BaseComponent {
  // Винесений локатор
  private readonly openResultsBtnSelector: string = '//span[text()="Переглянути всі результати"]';

  constructor() {
    super('//*[@data-testid="search-dialog-dialog-wrapper"]'); // Виклик конструктора батьківського класу
  }

  get openResultsBtn() {
    return $(this.openResultsBtnSelector); // Повертаємо локатор для кнопки перегляду всіх результатів
  }
}

export default SearchWindowComponent;
