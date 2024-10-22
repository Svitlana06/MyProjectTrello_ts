import BasePage from './base.page.ts';
import { BoardComponent, WorkplaceComponent, FilterComponent } from './../components/index.ts';

class BoardPage extends BasePage {

  constructor() {
    super('https://trello.com');
  }

  get workplaceComponent(): WorkplaceComponent {
    return new WorkplaceComponent();
  }

  get boardComponent(): BoardComponent {
    return new BoardComponent(); 
  }

  get filterComponent(): FilterComponent {
    return new FilterComponent();
  }
}
export default BoardPage;
