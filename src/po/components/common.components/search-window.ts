import BaseComponent from './base.ts';
import {ElementWrapper} from '../wrapper.ts';

class SearchWindowComponent extends BaseComponent {
  
  private openResultsBtnSelector: string = '//span[text()="Переглянути всі результати"]';

  constructor(public rootSelector: string ='//*[@data-test-id="search-dialog-dialog-wrapper"]') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }
  async openResultsBtn(){
    return await this.container.getChildElement(this.openResultsBtnSelector);
  }
}

export default SearchWindowComponent;
