import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

class FilterComponent extends BaseComponent {
  
  private readonly openBtnSelector: string = '//*[@data-testid="filter-popover-button"]';
  private readonly selectEndDatePropertySelector: string = '//div[contains(@title, "Протерміновано")]';

  constructor() {
    const rootSelector = '#board';
    super(rootSelector);
  }

  get openBtn(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.openBtnSelector);
  }

  get selectEndDateProperty(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector, this.selectEndDatePropertySelector);
  }
}

export default FilterComponent;
