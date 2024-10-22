import BaseComponent from '../common.components/base.component.ts';

class FilterComponent extends BaseComponent {
  // Винесені локатори
  private readonly openBtnSelector: string = '//*[@data-testid="filter-popover-button"]';
  private readonly selectEndDatePropertySelector: string = '//div[contains(@title, "Протерміновано")]';

  constructor() {
    super('#board'); // Виклик конструктора батьківського класу
  }

  get openBtn() {
    return $(this.openBtnSelector); // Повертаємо локатор для кнопки відкриття фільтра
  }

  get selectEndDateProperty() {
    return $(this.selectEndDatePropertySelector); // Повертаємо локатор для властивості дати закінчення
  }
}

export default FilterComponent;
