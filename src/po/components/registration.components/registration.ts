import BaseComponent from '../common.components/base.ts';
import {ElementWrapper} from '../wrapper.ts';

type RegistrationFields = 'email' | 'username' | 'password';
type SubmitButtons = 'signUp' | 'signIn';

class RegistrationComponent extends BaseComponent {
  public constructor(public rootSelector: string ='#WhiteboxContainer') {
    super(rootSelector);
  }

  private selectors: { [key in RegistrationFields | SubmitButtons]: string } = {
    email: '#email',
    username: '#username',
    password: '#password',
    signUp: '#signup-submit',
    signIn: '#login-submit',
  };

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }
  async input(name: RegistrationFields) {
    return await this.container.getChildElement(this.selectors[name]);
  }

  async submitBtn(name: SubmitButtons) {
    return await this.container.getChildElement(this.selectors[name]);
  }

  async getChildElement(childLocator: string){
    return await this.container.getChildElement(childLocator);
  }
}

export default RegistrationComponent;