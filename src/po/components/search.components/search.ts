import BaseComponent from'../common.components/base.ts';

class SearchComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="advanced-search-input"]');
  }
}

export default SearchComponent;
