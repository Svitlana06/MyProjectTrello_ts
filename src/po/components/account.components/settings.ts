import BaseComponent from '../common.components/base.ts';
import {ElementWrapper} from '../wrapper.ts';

class SettingsComponent extends BaseComponent {
  private openFrequencySelector: string = '//label[text()="Частота"]/following-sibling::*';
  private changeFrequencySelector: string = '//li[text()="Періодично"]';
  private checkFrequencySelector: string = '//label[text()="Частота"]/following-sibling::div//div';

  constructor(public rootSelector: string ='.tabbed-pane-main-col.u-clearfix.mod-wider') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  async openFrequencyProperty() {
    return this.container.getChildElement(this.openFrequencySelector);
  }

  async changeFrequency() {
    return this.container.getChildElement(this.changeFrequencySelector);
  }

  async checkFrequency(){
    return this.container.getChildElement(this.checkFrequencySelector);
  }
}

export default SettingsComponent;
