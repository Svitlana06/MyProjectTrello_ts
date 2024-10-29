import BaseComponent from'../common.components/base.ts';

class SearchComponent extends BaseComponent {
  constructor() {
    const rootSelector = '//*[@data-testid="advanced-search-input"]';
    super(rootSelector);
  }
}

export default SearchComponent;
