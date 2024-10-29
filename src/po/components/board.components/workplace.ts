import  BaseComponent from '../common.components/base.ts';

class WorkplaceComponent extends BaseComponent {
  constructor() {
    const rootSelector = '//*[@data-testid="current-workspace-expanded"]';
    super(rootSelector);
  }
}
export default WorkplaceComponent;
