import  BaseComponent from '../common.components/base.component.ts';

class WorkplaceComponent extends BaseComponent {
  constructor() {
    super('//*[@data-testid="current-workspace-expanded"]');
  }
}
export default WorkplaceComponent;
