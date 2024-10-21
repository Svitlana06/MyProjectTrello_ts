import BaseComponent from '../common.components/base.component.ts';

class MainComponent extends BaseComponent {
  constructor() {
    super('#skip-target');
  }

  get signUpBtn() {
    return $('//*[contains(@aria-label, "Sign up")]');
  }
}
export default MainComponent;
