import BaseComponent from '../common.components/base.ts';

class FilterComponent extends BaseComponent {
  
  private readonly openBtnSelector: string = '//*[@data-testid="filter-popover-button"]';
  private readonly selectEndDatePropertySelector: string = '//div[contains(@title, "Протерміновано")]';

  constructor() {
    super('#board');
  }

  get openBtn() {
    return $(this.openBtnSelector);
  }

  get selectEndDateProperty() {
    return $(this.selectEndDatePropertySelector);
  }
}

export default FilterComponent;
