import BaseComponent from '../common.components/base.component.ts';
import { valuesForFields } from '../../../data/data.ts';

class ProfileVisibilityComponent extends BaseComponent {
  private static instance: ProfileVisibilityComponent | null = null;

  private constructor() {
    super('[data-testid="profile-tab-container"]');
  }

  public static getInstance(): ProfileVisibilityComponent {
    if (this.instance === null) {
      this.instance = new ProfileVisibilityComponent();
    }
    return this.instance;
  }

  // Локатори
  private readonly usernameSelector: Promise<WebdriverIO.Element> = $('#username');
  private readonly saveButtonSelector: Promise<WebdriverIO.Element> = $('//button[text()="Зберегти"]');

  get changeUsername(): Promise<WebdriverIO.Element> {
    return this.usernameSelector; // Повертаємо локатор для зміни імені
  }

  get saveBtn(): Promise<WebdriverIO.Element> {
    return this.saveButtonSelector; // Повертаємо локатор для кнопки "Зберегти"
  }

  async getNewUsername(): Promise<string> {
    const usernameElement = await this.getUsernameElement(valuesForFields.username);
    return usernameElement.getText(); // Повертаємо текст нового імені користувача
  }

  private async getUsernameElement(username: string): Promise<WebdriverIO.Element> {
    return $(`//span[text()="${username}"]/following-sibling::*[1]`); // Локатор для імені користувача
  }
}

export default ProfileVisibilityComponent;
