import BaseComponent from'../common.components/base.ts';

class SearchComponent extends BaseComponent {
  constructor(public rootSelector: string ='//*[@data-testid="advanced-search-input"]') {
    super(rootSelector);
  }
}

export default SearchComponent;
