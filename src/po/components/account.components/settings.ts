import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

class SettingsComponent extends BaseComponent {
  private readonly openFrequencySelector: string = '//label[text()="Частота"]/following-sibling::*';
  private readonly changeFrequencySelector: string = '//li[text()="Періодично"]';
  private readonly checkFrequencySelector: string = '//label[text()="Частота"]/following-sibling::div//div';

  constructor() {
    const rootSelector = '.tabbed-pane-main-col.u-clearfix.mod-wider';
    super(rootSelector);
  }

  get openFrequencyProperty(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.openFrequencySelector);
  }

  get changeFrequency(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.changeFrequencySelector);
  }

  get checkFrequency(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.checkFrequencySelector);
  }
}

export default SettingsComponent;
