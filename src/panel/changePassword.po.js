"use strict";

class SettingsPage {
    constructor () {

        this.menuSettings = element(by.css('#krok-5 .qa-settings'));
        this.settingsPasswordMenu = element(by.css('.qa-settingsPassword'));
        this.inputCurrentPassword = element(by.model('changePassword.currentPassword'));
        this.inputNewPassword = element(by.model('changePassword.newPassword'));
        this.buttonSaveNewPassword = element(by.css('[ng-click="savePassword()"]'));
        this.successMessage = element(by.className('message-success'));
        this.errorMessage = element(by.className('message-error'));

    }
}
module.exports = new SettingsPage();