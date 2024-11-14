import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';
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

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}

  async createBtn(name: CreateType){
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.createSelectors[name]);
  }

  async addBtn(name: AddType) {
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.addSelectors[name]);
  }

  async input(name: InputType){
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.inputSelectors[name]);
  }

  async check(name: CheckType){
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.checkSelectors[name]);
  }
}

export default BoardComponent;
