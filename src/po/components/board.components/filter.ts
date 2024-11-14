import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

class FilterComponent extends BaseComponent {
  
  private  openBtnSelector: string = '//*[@data-testid="filter-popover-button"]';
  private selectEndDatePropertySelector: string = '//div[contains(@title, "Протерміновано")]';

  constructor(public rootSelector: string = '#board') {
    super(rootSelector);
  }

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async openBtn(){
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.openBtnSelector);
  }

  async selectEndDateProperty(){
    const container = await this.getContainer();
    return ElementWrapper.getChildElement(container, this.selectEndDatePropertySelector);
  }
}

export default FilterComponent;
