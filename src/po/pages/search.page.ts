import { SearchComponent } from "../components/index.ts";
import BasePage from './base.page.ts';

class SearchPage extends BasePage {
  searchComponent: SearchComponent;
  
  constructor() {
    super('https://trello.com');
    this.searchComponent = new SearchComponent();
  }
}
export default SearchPage;
