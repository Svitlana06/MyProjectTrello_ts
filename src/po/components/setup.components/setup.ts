import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

type InitialSettings = 'goal' | 'board' | 'listFirst' | 'listSecond' | 'listThird' | 'cardFirst' | 'cardSecond';
type SubmitButtons = 'continue' | 'next' | 'skip';

class SetupComponent extends BaseComponent {

  private readonly initialSettingsSelectors: { [key in InitialSettings]: string } = {
    goal: '//p[contains(text(), "Упорядкування ідей")]',
    board: '#boardName',
    listFirst: '#list1',
    listSecond: '#list2',
    listThird: '#list3',
    cardFirst: '#card1',
    cardSecond: '#card2',
  };

  private readonly submitBtnSelectors: { [key in SubmitButtons]: string } = {
    continue: '//button[text()="Продовжити"]',
    next: '//button[text()="Далі"]',
    skip: '//button[text()="Пропустити"]',
  };

  private readonly specialOffer: string ='//span[text()="Спеціальна пропозиція!"]'

  public constructor() {
    const rootSelector = '.nvfJSf_0WwLXsm';
    super(rootSelector);
  }

  async initialSettings(name: keyof typeof this.initialSettingsSelectors): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.initialSettingsSelectors[name]);
  }

  async submitBtn(name: keyof typeof this.submitBtnSelectors): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.submitBtnSelectors[name]);
  }

  async premiumVersionOffer(): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.specialOffer);
  }
}

export default SetupComponent;
