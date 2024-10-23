import BaseComponent from '../common.components/base.ts';

class SettingsComponent extends BaseComponent {
  private readonly openFrequencySelector: string = '//label[text()="Частота"]/following-sibling::*';
  private readonly changeFrequencySelector: string = '//li[text()="Періодично"]';
  private readonly checkFrequencySelector: string = '//label[text()="Частота"]/following-sibling::div//div';

  constructor() {
    super('.tabbed-pane-main-col.u-clearfix.mod-wider'); 
  }

  get openFrequencyProperty() {
    return $(this.openFrequencySelector); 
  }
  
  get changeFrequency() {
    return $(this.changeFrequencySelector); 
  }
  
  get checkFrequency() {
    return $(this.checkFrequencySelector); 
  }
}

export default SettingsComponent;
