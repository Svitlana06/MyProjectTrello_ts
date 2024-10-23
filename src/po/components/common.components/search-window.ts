import BaseComponent from './base.ts';

class SearchWindowComponent extends BaseComponent {
  
  private readonly openResultsBtnSelector: string = '//span[text()="Переглянути всі результати"]';

  constructor() {
    super('//*[@data-testid="search-dialog-dialog-wrapper"]');
  }

  get openResultsBtn() {
    return $(this.openResultsBtnSelector);
  }
}

export default SearchWindowComponent;
