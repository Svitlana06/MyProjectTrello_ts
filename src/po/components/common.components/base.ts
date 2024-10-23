class BaseComponent {
  rootSelector:string;
  constructor(rootSelector:string) {
    this.rootSelector = rootSelector;
  }

  get rootEL() {
    return $(this.rootSelector);
  }
}
export default BaseComponent;
