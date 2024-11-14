import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

class SettingsComponent extends BaseComponent {
  private openFrequencySelector: string = '//label[text()="Частота"]/following-sibling::*';
  private changeFrequencySelector: string = '//li[text()="Періодично"]';
  private checkFrequencySelector: string = '//label[text()="Частота"]/following-sibling::div//div';

  constructor(public rootSelector: string ='.tabbed-pane-main-col.u-clearfix.mod-wider') {
    super(rootSelector);
  }

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async openFrequencyProperty() {
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.openFrequencySelector);
  }

  async changeFrequency() {
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.changeFrequencySelector);
  }

  async checkFrequency(){
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.checkFrequencySelector);
  }
}

export default SettingsComponent;
