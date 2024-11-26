import BaseComponent from '../common.components/base.ts';
import {ElementWrapper}  from '../wrapper.ts';
import { valuesForFields } from '../../../data/data.ts';

class ProfileVisibilityComponent extends BaseComponent {
  public saveButtonLocator = '//button[text()="Зберегти"]';
  public usernameContainerLocator = '#username';
  public usernameXPath = '.M7DuYRS8ksp5f8';


  public constructor(public rootSelector = '#content') {
    super(rootSelector);
  }

  get container() {
    return ElementWrapper.getElement(this.rootSelector, this.rootSelector);
  }

  get changeUsername() {
    return this.container.getChildElement(this.usernameContainerLocator);
  }


  public async saveBtn() {
    return await this.container.getChildElement(this.saveButtonLocator);
  }


  public async getNewUsername() {
    return await this.getUsernameElement(valuesForFields.username); 
  }

  public async getUsernameElement(username: string) {
    return await this.container.getChildElement(this.usernameXPath);
  }
}

export default ProfileVisibilityComponent;
