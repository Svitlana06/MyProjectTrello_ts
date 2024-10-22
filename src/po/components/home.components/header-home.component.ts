import BaseComponent from '../common.components/base.component.ts';

class HeaderHomeComponent extends BaseComponent {
  // Винесений локатор
  private readonly signInBtnSelector: string = '//a[@data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]';

  constructor() {
    super('//*[@data-testid="bignav"]'); // Виклик конструктора батьківського класу
  }

  get signInBtn() {
    return $(this.signInBtnSelector); // Повертаємо локатор для кнопки входу
  }
}

export default HeaderHomeComponent;
