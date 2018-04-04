"use strict";

const LoginPageHelper = require('./LoginPage'),
    LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
    TransferPage = require('./transfer_GBP_PLN.po.js'),
    SettingPage = require('./changePassword.po'),
    LoginHelper = new LoginPageHelper(),
    LangHelper = new LangPageHelper(TransferPage);

describe('Settings Page' , () => {
    beforeAll(function(callback) {
        LoginHelper.isUserLoggedIn().then(callback);
    });

    beforeEach(function() {
        LangHelper.switchLanguageToPl();
        browser.ignoreSynchronization = false;
        browser.executeScript('arguments[0].click()', SettingPage.menuSettings.getWebElement());
        SettingPage.settingsPasswordMenu.click();
    });

    it('changing the password using a valid password', function() {
        SettingPage.inputCurrentPassword.sendKeys('12345678');
        SettingPage.inputNewPassword.sendKeys('12345678');
        SettingPage.buttonSaveNewPassword.click();

        // Thank's for wirus15
        // I think somewhere in code is set $timeout
        // and waits to close alert so protractor wait for it
        // we must disable synchronization for a while
        var successMessage = SettingPage.successMessage;
        // don't know why but that must be resolved
        successMessage.getText().then(function (a) {});
        browser.ignoreSynchronization = true;
        expect(successMessage.getText()).toContain('Hasło zostało zmienione');
        // and enable it again
        browser.ignoreSynchronization = false;
    });

    it('changing the password using a invalid password', function() {
        SettingPage.inputCurrentPassword.sendKeys('invalid');
        SettingPage.inputNewPassword.sendKeys('12345678');
        SettingPage.buttonSaveNewPassword.click();

        // Thank's for wirus15
        // I think somewhere in code is set $timeout
        // and waits to close alert so protractor wait for it
        // we must disable synchronization for a while
        var errorMessage = SettingPage.errorMessage;
        // don't know why but that must be resolved
        errorMessage.getText().then(function (a) {});
        browser.ignoreSynchronization = true;
        expect(errorMessage.getText()).toContain('Podaj poprawnie obecne hasło oraz wpisz nowe hasło');
        // and enable it again
        browser.ignoreSynchronization = false;
    });
});




