import { ChainablePromiseElement } from 'webdriverio';

class ElementWrapper {
  private element: ChainablePromiseElement<WebdriverIO.Element>;
  private locator: string;

  constructor(element: string | WebdriverIO.Element, locator: string) {
    // ланцюговий метод виклюків промісів
    this.element = (typeof element === 'string' ? $(element) : element) as ChainablePromiseElement<WebdriverIO.Element>;
    this.locator = locator;
  }


  public static getElement(
    element: string | WebdriverIO.Element, locator: string ): ElementWrapper {
    return new ElementWrapper(element, locator);
  }

  private async getChild(childSelector: string | WebdriverIO.Element): Promise<ChainablePromiseElement<WebdriverIO.Element>> {
    const elementInstance = await this.element;
    return elementInstance.$(childSelector);
  }

  public async getChildElement(childLocator: string): Promise<ElementWrapper> {
    const fullSelector = `${this.locator} ${childLocator}`;
    const childElement = await this.getChild(childLocator);
    return ElementWrapper.getElement(childElement, fullSelector);  //обгорнутий дочірній елемент
  }


  public async click(): Promise<void> { // PROXY
    const element = await this.element; 
    await element.click();
  }

  public async setValue(value: string): Promise<void> {
    const element = await this.element;
    await element.setValue(value);
  }

  public async isDisplayed(): Promise<boolean> {
    const element = await this.element;
    return element.isDisplayed(); 
  }

  public async getText(): Promise<string> {
    const element = await this.element;
    return element.getText();
  }

  public async waitForExist(p0: { timeout: number; }): Promise<string> {
    const element = await this.element;
    return element.waitForExist();
  }

  public async waitForDisplayed(p0: { timeout: number; }): Promise<string> {
    const element = await this.element;
    return element.getText();
  }
}

export { ElementWrapper };
