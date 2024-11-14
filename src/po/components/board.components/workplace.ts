import  BaseComponent from '../common.components/base.ts';

class WorkplaceComponent extends BaseComponent {
  constructor(public rootSelector: string ='//*[@data-testid="current-workspace-expanded"]') {
    super(rootSelector);
  }
}
export default WorkplaceComponent;
