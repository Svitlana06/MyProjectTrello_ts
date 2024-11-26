import BaseComponent from '../common.components/base.ts';
import {ElementWrapper} from '../wrapper.ts';

type InitialSettings = 'goal' | 'board' | 'listFirst' | 'listSecond' | 'listThird' | 'cardFirst' | 'cardSecond';
type SubmitButtons = 'continue' | 'next' | 'skip';

class SetupComponent extends BaseComponent {

  private initialSettingsSelectors: { [key in InitialSettings]: string } = {
    goal: '//p[contains(text(), "Упорядкування ідей")]',
    board: '#boardName',
    listFirst: '#list1',
    listSecond: '#list2',
    listThird: '#list3',
    cardFirst: '#card1',
    cardSecond: '#card2',
  };

  private submitBtnSelectors: { [key in SubmitButtons]: string } = {
    continue: '//button[text()="Продовжити"]',
    next: '//button[text()="Далі"]',
    skip: '//button[text()="Пропустити"]',
  };

  private specialOffer: string ='//span[text()="Спеціальна пропозиція!"]'

  public constructor(public rootSelector: string ='.nvfJSf_0WwLXsm') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  async initialSettings(name: keyof typeof this.initialSettingsSelectors){
    return await this.container.getChildElement(this.initialSettingsSelectors[name]);
  }

  async submitBtn(name: keyof typeof this.submitBtnSelectors){
    return await this.container.getChildElement(this.submitBtnSelectors[name]);
  }

  async premiumVersionOffer(){
    return await this.container.getChildElement(this.specialOffer);
  }
}

export default SetupComponent;