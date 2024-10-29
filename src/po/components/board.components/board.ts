import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';
import { valuesForFields } from '../../../data/data.ts';

type CreateType = 'list' | 'card';
type AddType = 'list' | 'card';
type InputType = 'list' | 'card';
type CheckType = 'list' | 'card' | 'board' | 'existedBoard';

class BoardComponent extends BaseComponent {
  
  private readonly createSelectors: { [key in CreateType]: string } = {
    list: '//*[@data-testid="list-composer-button"]',
    card: '//li[@data-list-id="66b47b03606ffbb4544dcced"]//div[@data-testid="list-footer"]',
  };

  private readonly addSelectors: { [key in AddType]: string } = {
    list: '//*[@data-testid="list-composer-add-list-button"]',
    card: '//*[@data-testid="list-card-composer-add-card-button"]',
  };

  private readonly inputSelectors: { [key in InputType]: string } = {
    list: '//textarea[contains(@placeholder, "Введіть назву")]',
    card: '//*[@data-testid="list-card-composer-textarea"]',
  };

  private readonly checkSelectors: { [key in CheckType]: string } = {
    list: `//ol[@id="board"]//h2[text()="${valuesForFields.newListName}"]`,
    card: `//ol[@id="board"]//a[text()="${valuesForFields.newCardName}"]`,
    board: `//ul/div/li/a[text()="${valuesForFields.newBoardName}"]`,
    existedBoard: `//div[text()="${valuesForFields.nameExistedBoard}"]`,
  };

  constructor() {
    const rootSelector = '#content';
    super(rootSelector);
  }

  async createBtn(name: CreateType): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.createSelectors[name]);
  }

  async addBtn(name: AddType): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.addSelectors[name]);
  }

  async input(name: InputType): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.inputSelectors[name]);
  }

  async check(name: CheckType): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.checkSelectors[name]);
  }
}

export default BoardComponent;
