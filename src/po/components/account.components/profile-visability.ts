import BaseComponent from '../common.components/base.ts';
import { valuesForFields } from '../../../data/data.ts';

class ProfileVisibilityComponent extends BaseComponent {
  
  private readonly usernameSelector: Promise<WebdriverIO.Element> = $('#username');
  private readonly saveButtonSelector: Promise<WebdriverIO.Element> = $('//button[text()="Зберегти"]');

  constructor() {
    super('[data-testid="profile-tab-container"]');
  }

  get changeUsername(): Promise<WebdriverIO.Element> {
    return this.usernameSelector;
  }

  get saveBtn(): Promise<WebdriverIO.Element> {
    return this.saveButtonSelector;
  }

  async getNewUsername(): Promise<string> {
    const usernameElement = await this.getUsernameElement(valuesForFields.username);
    return usernameElement.getText();
  }

  private async getUsernameElement(username: string): Promise<WebdriverIO.Element> {
    return $(`//span[text()="${username}"]/following-sibling::*[1]`);
  }
}

export default ProfileVisibilityComponent;
