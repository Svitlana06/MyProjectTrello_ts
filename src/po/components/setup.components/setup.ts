import BaseComponent from '../common.components/base.ts';

class SetupComponent extends BaseComponent {
  private static instance: SetupComponent | null = null;

  private readonly initialSettingsSelectors: { [key: string]: string } = {
    goal: '//p[contains(text(), "Упорядкування ідей")]',
    board: '#boardName',
    listFirst: '#list1',
    listSecond: '#list2',
    listThird: '#list3',
    cardFirst: '#card1',
    cardSecond: '#card2',
  };

  private readonly submitBtnSelectors: { [key: string]: string } = {
    continue: '//button[text()="Продовжити"]',
    next: '//button[text()="Далі"]',
    skip: '//button[text()="Пропустити"]',
  };

  private constructor() {
    super('.nvfJSf_0WwLXsm');
  }

  public static getInstance(): SetupComponent {
    if (this.instance === null) {
      this.instance = new SetupComponent();
    }
    return this.instance;
  }

  initialSettings(name: 'goal' | 'board' | 'listFirst' | 'listSecond' | 'listThird' | 'cardFirst' | 'cardSecond') {
    return this.rootEL.$(this.initialSettingsSelectors[name]);
  }

  submitBtn(name: 'continue' | 'next' | 'skip') {
    return this.rootEL.$(this.submitBtnSelectors[name]);
  }

  get premiumVersionOffer() {
    return $('//span[text()="Спеціальна пропозиція!"]');
  }
}

export default SetupComponent;
