import { SearchComponent } from "../components/index.ts";
import BasePage from './base.page.ts';

class SearchPage extends BasePage {
  
  constructor() {
    super('https://trello.com');
  }

  get searchComponent(): SearchComponent {
    return new SearchComponent();
  }
}
export default SearchPage;
