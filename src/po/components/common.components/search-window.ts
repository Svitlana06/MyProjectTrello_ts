import BaseComponent from './base.ts';
import ElementWrapper from '../wrapper.ts';

class SearchWindowComponent extends BaseComponent {
  
  private openResultsBtnSelector: string = '//span[text()="Переглянути всі результати"]';

  constructor(public rootSelector: string ='//*[@data-test-id="search-dialog-dialog-wrapper"]') {
    super(rootSelector);
  }

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async openResultsBtn(){
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.openResultsBtnSelector);
  }
}

export default SearchWindowComponent;
