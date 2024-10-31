import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts'; 
import { valuesForFields } from '../../../data/data.ts';

class ProfileVisibilityComponent extends BaseComponent {
  private usernameContainerLocator: string = '#username';
  private readonly selectors: { [key: string]: string } = {
    saveButton: '//button[text()="Зберегти"]',
,
  };

  public constructor(private rootSelector: string = '[data-testid="profile-tab-container"]') {
    super(this.rootSelector);
  } 
  get container() {
    return ElementWrapper.getElement(this.rootSelector)
  }

  get changeUsername() {
    return container.getChildElement(this.usernameContainer);
  }

  get saveBtn(): Promise<WebdriverIO.Element> {
    return ElementWrapper.getChildElement(this.rootSelector,this.selectors.saveButton);
  }

  async getNewUsername(): Promise<string> {
    const usernameElement = await this.getUsernameElement(valuesForFields.username);
    return await usernameElement.getText();
  }

  private async getUsernameElement(username: string): Promise<WebdriverIO.Element> {
    const usernameXPath = `//span[text()="${username}"]/following-sibling::*[1]`;
    return ElementWrapper.getChildElement(this.rootSelector, usernameXPath);
  }
}

export default ProfileVisibilityComponent;
