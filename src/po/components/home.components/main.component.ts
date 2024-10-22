import BaseComponent from '../common.components/base.component.ts';

class MainComponent extends BaseComponent {
  // Винесений локатор
  private readonly signUpBtnSelector: string = '//*[contains(@aria-label, "Sign up")]';

  constructor() {
    super('#skip-target'); // Виклик конструктора батьківського класу
  }

  get signUpBtn() {
    return $(this.signUpBtnSelector); // Повертаємо локатор для кнопки реєстрації
  }
}

export default MainComponent;
