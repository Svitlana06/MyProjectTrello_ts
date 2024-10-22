import BaseComponent from './base.component.ts';

class HeaderComponent extends BaseComponent {
  // Винесені локатори
  private readonly openAccountSelector: string = '//*[@data-testid="header-member-menu-avatar"]';
  private readonly addBoardBtnSelector: string = '//*[@data-testid="header-create-menu-button"]';
  private readonly setSearchSelector: string = '//input[@placeholder="Пошук"]';

  constructor() {
    super('//*[@data-testid="header-container"]'); // Виклик конструктора батьківського класу
  }

  get openAccount() {
    return $(this.openAccountSelector); // Повертаємо локатор для відкриття облікового запису
  }

  get addBoardBtn() {
    return $(this.addBoardBtnSelector); // Повертаємо локатор для кнопки додавання дошки
  }

  get setSearch() {
    return $(this.setSearchSelector); // Повертаємо локатор для поля пошуку
  }
}

export default HeaderComponent;
