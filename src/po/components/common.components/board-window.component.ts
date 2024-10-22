import BaseComponent from './base.component.ts';

class BoardWindowComponent extends BaseComponent {
  // Винесені локатори
  private readonly settingsSelectors: { [key: string]: string } = {
    name: '//*[@data-testid="create-board-title-input"]',
    type: '//*[@data-testid="header-create-board-button"]',
  };

  private readonly submitBtnSelector: string = '//*[@data-testid="create-board-submit-button"]';

  constructor() {
    super('//*[@data-testid="header-container"]'); // Виклик конструктора батьківського класу
  }

  settings(name: 'name' | 'type') {
    return this.rootEL.$(this.settingsSelectors[name]); // Використовуємо локатор з поля
  }

  get submitBtn() {
    return $(this.submitBtnSelector); // Повертаємо локатор для кнопки підтвердження
  }
}

export default BoardWindowComponent;
