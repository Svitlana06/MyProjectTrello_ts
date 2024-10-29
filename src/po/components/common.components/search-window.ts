import BaseComponent from './base.ts';
import ElementWrapper from '../wrapper.ts';

class SearchWindowComponent extends BaseComponent {
  
  private readonly openResultsBtnSelector: string = '//span[text()="Переглянути всі результати"]';

  constructor() {
    const rootSelector = '//*[@data-testid="search-dialog-dialog-wrapper"]';
    super(rootSelector);
  }

  async openResultsBtn(): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getElement(this.openResultsBtnSelector);
  }
}

export default SearchWindowComponent;
