import BaseComponent from '../common.components/base.component.ts'; // забрати слово component з назви фалів
import { valuesForFields } from '../../../data/data.ts';

class ProfileVisabilityComponent extends BaseComponent {
  constructor() {
    super('[data-testid="profile-tab-container"]');
  }

  get changeUsername() {
    return $('#username');
  }
  get saveBtn() {
    return $('//button[text()="Зберегти"]');
  }
  get checkNewUsername() {
    return $(`//span[text()="${valuesForFields.username}"]/following-sibling::*[1]`); // логіка селектора має бути винесена в окремий клас в сінглтон
  }
} // клас в лібах має бути

export default ProfileVisabilityComponent;
