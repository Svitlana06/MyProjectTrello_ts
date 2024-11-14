import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts';

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

  private async getContainer(){
    return await ElementWrapper.getElement(this.rootSelector);
}
  async input(name: RegistrationFields) {
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.selectors[name]);
  }

  async submitBtn(name: SubmitButtons) {
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, this.selectors[name]);
  }

  async getChildElement(childLocator: string){
    const container = await this.getContainer();
    return await ElementWrapper.getChildElement(container, childLocator);
  }
}

export default RegistrationComponent;