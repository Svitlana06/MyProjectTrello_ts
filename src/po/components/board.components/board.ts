import BaseComponent from '../common.components/base.ts';
import {ElementWrapper} from '../wrapper.ts';
import { valuesForFields } from '../../../data/data.ts';

type CreateType = 'list' | 'card';
type AddType = 'list' | 'card';
type InputType = 'list' | 'card';
type CheckType = 'list' | 'card' | 'board' | 'existedBoard';

class BoardComponent extends BaseComponent {
  
  private createSelectors: { [key in CreateType]: string } = {
    list: '//*[@data-testid="list-composer-button"]',
    card: '//li[@data-list-id="66b47b03606ffbb4544dcced"]//div[@data-testid="list-footer"]',
  };

  private addSelectors: { [key in AddType]: string } = {
    list: '//*[@data-testid="list-composer-add-list-button"]',
    card: '//*[@data-testid="list-card-composer-add-card-button"]',
  };

  private inputSelectors: { [key in InputType]: string } = {
    list: '//textarea[contains(@placeholder, "Введіть назву")]',
    card: '//*[@data-testid="list-card-composer-textarea"]',
  };

  private checkSelectors: { [key in CheckType]: string } = {
    list: `//ol[@id="board"]//h2[text()="${valuesForFields.newListName}"]`,
    card: `//ol[@id="board"]//a[text()="${valuesForFields.newCardName}"]`,
    board: `//ul/div/li/a[text()="${valuesForFields.newBoardName}"]`,
    existedBoard: `//div[text()="${valuesForFields.nameExistedBoard}"]`,
  };

  constructor(public rootSelector: string = '#content') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  async createBtn(name: CreateType){
    return await this.container.getChildElement(this.createSelectors[name]);
  }

  async addBtn(name: AddType) {
    return await this.container.getChildElement(this.addSelectors[name]);
  }

  async input(name: InputType){
    return await this.container.getChildElement(this.inputSelectors[name]);
  }

  async check(name: CheckType){
    return await this.container.getChildElement(this.checkSelectors[name]);
  }
}

export default BoardComponent;
