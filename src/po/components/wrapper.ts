class ElementWrapper {
  
  public static async getElement(locator: string): Promise<WebdriverIO.Element> {
    return await $(locator);
  }

  public static async getChildElement(parentLocator: string, childLocator: string): Promise<WebdriverIO.Element> {
    const parentElement = await this.getElement(parentLocator);
    return await parentElement.$(childLocator);
  }
}


export default ElementWrapper;
