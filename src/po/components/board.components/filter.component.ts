import  BaseComponent from '../common.components/base.component.ts';

class FilterComponent extends BaseComponent {
  constructor() {
    super('#board');
  }

  get openBtn() {
    return $('//*[@data-testid="filter-popover-button"]');
  }
  get selectEndDateProperty() {
    return $('//div[contains(@title, "Протерміновано")]');
  }
}
export default FilterComponent;
