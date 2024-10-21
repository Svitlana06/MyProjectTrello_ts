import BaseComponent from '../common.components/base.component.ts';

class SetupComponent extends BaseComponent {
  constructor() {
    super('.nvfJSf_0WwLXsm');
  }

  initialSettings(name:'goal' | 'board' | 'listFirst' | 'listSecond' | 'listThird' | 'cardFirst' | 'cardSecond') {
    const selectors: {[key:string]: string}={
      goal: '//p[contains(text(), "Упорядкування ідей")]',
      board: '#boardName',
      listFirst: '#list1',
      listSecond: '#list2',
      listThird: '#list3',
      cardFirst: '#card1',
      cardSecond: '#card2',
    };
    return this.rootEL.$(selectors[name]);
  }
  submitBtn(name: 'continue' | 'next' | 'skip') {
    const selectors: {[key:string]: string}= {
      continue: '//button[text()="Продовжити"]',
      next: '//button[text()="Далі"]',
      skip: '//button[text()="Пропустити"]',
    };

    return this.rootEL.$(selectors[name]);
  }

  get premiumVersionOffer() {
    return $('//span[text()="Спеціальна пропозиція!"]');
  }
}
export default SetupComponent;
