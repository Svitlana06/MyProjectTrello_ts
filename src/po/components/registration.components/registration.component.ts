import BaseComponent from '../common.components/base.component.ts';

class RegistrationComponent extends BaseComponent {
  constructor() {
    super('#WhiteboxContainer');
  }

  input(name: 'email' | 'username' | 'password') {
    const selectors: {[key:string]: string}= {
      email: '#email',
      username: '#username',
      password: '#password',
    };
    return this.rootEL.$(selectors[name.toLowerCase()]);
  }

  submitBtn(name: 'signUp' | 'signIn') {
    const selectors: {[key:string]: string}={
      signUp: '#signup-submit',
      signIn: '#login-submit',
    };
    return this.rootEL.$(selectors[name]);
  }
}
export default RegistrationComponent;
