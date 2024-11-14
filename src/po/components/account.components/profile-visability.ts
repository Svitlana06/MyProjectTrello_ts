// в параметри конструктора додати локатор super - у всіх файлах
// окрема змінна для кожного селектора - у всіх файлах - не впевнена стосовно всіх
// забрати типізацію методів - у всіх файлах
// змінити на класи динамічний селектор
// додати метод враперу - у всіх файлах

import BaseComponent from '../common.components/base.ts';
import ElementWrapper from '../wrapper.ts'; 
import { valuesForFields } from '../../../data/data.ts';

class ProfileVisibilityComponent extends BaseComponent {
  
    private saveButtonLocator: string = '//button[text()="Зберегти"]';
    private usernameContainerLocator: string = '#username';
    private usernameXPath: string = '.M7DuYRS8ksp5f8';
  
    public constructor(public rootSelector: string = '#content') {
        super(rootSelector);
    }
  
    private async getContainer(){
        return await ElementWrapper.getElement(this.rootSelector);
    }

    async changeUsername() {
        const container = await this.getContainer();
        return await ElementWrapper.getChildElement(container, this.usernameContainerLocator);
    }

    async saveBtn(){
        const container = await this.getContainer();
        return await ElementWrapper.getChildElement(container, this.saveButtonLocator);
    }

    async getNewUsername() {
        return await this.getUsernameElement(valuesForFields.username);

    }

    async getUsernameElement(username: string): Promise<WebdriverIO.Element> {
      const container = await this.getContainer();
      return await ElementWrapper.getChildElement(container, this.usernameXPath);
        
    }
}

export default ProfileVisibilityComponent;

