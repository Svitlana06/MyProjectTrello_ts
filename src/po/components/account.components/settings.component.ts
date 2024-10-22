import BaseComponent from '../common.components/base.component.ts';

class SettingsComponent extends BaseComponent {
  // Винесені локатори
  private readonly openFrequencySelector: string = '//label[text()="Частота"]/following-sibling::*';
  private readonly changeFrequencySelector: string = '//li[text()="Періодично"]';
  private readonly checkFrequencySelector: string = '//label[text()="Частота"]/following-sibling::div//div';

  constructor() {
    super('.tabbed-pane-main-col.u-clearfix.mod-wider'); // Використовуємо локатор безпосередньо
  }

  get openFrequencyProperty() {
    return $(this.openFrequencySelector); // Повертаємо локатор для відкриття частоти
  }
  
  get changeFrequency() {
    return $(this.changeFrequencySelector); // Повертаємо локатор для зміни частоти
  }
  
  get checkFrequency() {
    return $(this.checkFrequencySelector); // Повертаємо локатор для перевірки частоти
  }
}

export default SettingsComponent;
