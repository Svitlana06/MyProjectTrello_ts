// додати для множини елементів а не 1 (масив наприклад)
 // додати вейтери елементів
  // для аксіоса обгортку створити - клас загальний - інший

  class ElementWrapper {

    public static async getElements(locator: string): Promise<WebdriverIO.Element[]> {
      await browser.waitUntil(async () => {
        const elements = await $$(locator);
        return elements.length > 0;
      }, {
        timeout: 5000,
        timeoutMsg: 'Elements not found'
      });
  
      const elements = await $$(locator);
      return elements as unknown as WebdriverIO.Element[];
    }
  
    public static async getElement(locator: string): Promise<WebdriverIO.Element> {
      const elements = await this.getElements(locator);
      if (elements.length === 0) {
        throw new Error(`Element not found: ${locator}`);
      }
      
      const element = elements[0];
      await browser.waitUntil(async () => {
        return await element.isDisplayed();
      }, {
        timeout: 5000,
        timeoutMsg: `Element not visible: ${locator}`
      });
  
      return element;
    }
  
    public static async getChildElement(parentElement: WebdriverIO.Element, childLocator: string): Promise<WebdriverIO.Element> {
      await browser.waitUntil(async () => {
        const childElement = await parentElement.$(childLocator);
        return await childElement.isDisplayed();
      }, {
        timeout: 5000,
        timeoutMsg: `Child element not found within parent`
      });
  
      return await parentElement.$(childLocator);
    }
  }
  
  export default ElementWrapper;
  