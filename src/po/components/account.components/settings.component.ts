import BaseComponent from '../common.components/base.component.ts';

class SettingsComponent extends BaseComponent {
  constructor() {
    super('.tabbed-pane-main-col u-clearfix mod-wider'); // локатори винести вгору в поля
  }

  get openFrequencyProperty() {
    return $('//label[text()="Частота"]/following-sibling::*');
  }
  get changeFrequency() {
    return $('//li[text()="Періодично"]');
  }
  get checkFrequency() {
    return $('//label[text()="Частота"]/following-sibling::div//div');
  }
}

export default SettingsComponent;
