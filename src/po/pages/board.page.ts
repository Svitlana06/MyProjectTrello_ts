import BasePage from './base.page.ts';
import { BoardComponent, WorkplaceComponent, FilterComponent } from './../components/index.ts';

class BoardPage extends BasePage {
  workplaceComponent: WorkplaceComponent;
  boardComponent : BoardComponent;
  filterComponent : FilterComponent;

  constructor() {
    super('https://trello.com');
    this.workplaceComponent = new WorkplaceComponent();
    this.boardComponent = new BoardComponent();
    this.filterComponent = new FilterComponent();
  }
}
export default BoardPage;
