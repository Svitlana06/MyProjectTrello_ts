class ElementWrapper {
  constructor(private element: Element | Promise<Element>, private locator: string) {}

  public getElement(locator: string, childLocator?:) {
    return new ElementWrapper($(locator), locator)
  }

  private getChild(childSelector: string) {
    const elementInstance = await this.element;
    return elementInstance.$(childSelector);
  }

  public getChildElement(childLocator: string) {
    const fullSelector = `${this.locator} ${childLocator}`;
    return this.getElement(this.getChild(childLocator), fullSelector); 
  }
  
}
