import BaseComponent from '../common.components/base.ts';
import {ElementWrapper} from '../wrapper.ts';

class FilterComponent extends BaseComponent {
  
  private  openBtnSelector: string = '//*[@data-testid="filter-popover-button"]';
  private selectEndDatePropertySelector: string = '//div[contains(@title, "Протерміновано")]';

  constructor(public rootSelector: string = '#board') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  async openBtn(){
    return this.container.getChildElement(this.openBtnSelector);
  }

  async selectEndDateProperty(){
    return this.container.getChildElement(this.selectEndDatePropertySelector);
  }
}

export default FilterComponent;
