import BaseComponent from './base.component.ts';

class SearchWindowComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="search-dialog-dialog-wrapper"]');
  }

  get openResultsBtn() {
    return $('//span[text()="Переглянути всі результати"]');
  }
}
export default SearchWindowComponent;
