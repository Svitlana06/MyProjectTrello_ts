const BaseComponent = require('../common.components/base.component');
const { valuesForFields } = require('../../../data/data');

class BoardComponent extends BaseComponent {
  constructor() {
    super('#content');
  }

  createBtn(name) {
    const selectors = {
      list: '//*[@data-testid="list-composer-button"]',
      card: '//li[@data-list-id="66b47b03606ffbb4544dcced"]//div[@data-testid="list-footer"]',
    };
    return this.rootEL.$(selectors[name]);
  }

  addBtn(name) {
    const selectors = {
      list: '//*[@data-testid="list-composer-add-list-button"]',
      card: '//*[@data-testid="list-card-composer-add-card-button"]',
    };
    return this.rootEL.$(selectors[name]);
  }

  input(name) {
    const selectors = {
      list: '//textarea[contains(@placeholder, "Введіть назву")]',
      card: '//*[@data-testid="list-card-composer-textarea"]',
    };
    return this.rootEL.$(selectors[name]);
  }

  check(name) {
    const selectors = {
      list: `//ol[@id="board"]//h2[text()="${valuesForFields.newListName}"]`,
      card: `//ol[@id="board"]//a[text()="${valuesForFields.newCardName}"]`,
      board: `//ul/div/li/a[text()="${valuesForFields.newBoardName}"]`,
      existedBoard: `//div[text()="${valuesForFields.nameExistedBoard}"]`,
    };
    return this.rootEL.$(selectors[name]);
  }
}
module.exports = BoardComponent;
