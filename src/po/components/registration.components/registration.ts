import BaseComponent from '../common.components/base.ts';

class RegistrationComponent extends BaseComponent {
  private static instance: RegistrationComponent | null = null;

  private constructor() {
    super('#WhiteboxContainer');
  }

  public static getInstance(): RegistrationComponent {
    if (this.instance === null) {
      this.instance = new RegistrationComponent();
    }
    return this.instance;
  }

  private readonly selectors: { [key: string]: string } = {
    email: '#email',
    username: '#username',
    password: '#password',
    signUp: '#signup-submit',
    signIn: '#login-submit',
  };

  input(name: 'email' | 'username' | 'password') {
    return this.rootEL.$(this.selectors[name]);
  }

  submitBtn(name: 'signUp' | 'signIn') {
    return this.rootEL.$(this.selectors[name]);
  }
}

export default RegistrationComponent;
