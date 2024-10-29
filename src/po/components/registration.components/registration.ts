import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

type RegistrationFields = 'email' | 'username' | 'password';
type SubmitButtons = 'signUp' | 'signIn';

class RegistrationComponent extends BaseComponent {
  public constructor() {
    const rootSelector = '#WhiteboxContainer';
    super(rootSelector);
  }

  private readonly selectors: { [key in RegistrationFields | SubmitButtons]: string } = {
    email: '#email',
    username: '#username',
    password: '#password',
    signUp: '#signup-submit',
    signIn: '#login-submit',
  };

  async input(name: RegistrationFields): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.selectors[name]);
  }

  async submitBtn(name: SubmitButtons): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, this.selectors[name]);
  }

  async getChildElement(childLocator: string): Promise<WebdriverIO.Element> {
    return await ElementWrapper.getChildElement(this.rootSelector, childLocator);
  }
}

export default RegistrationComponent;