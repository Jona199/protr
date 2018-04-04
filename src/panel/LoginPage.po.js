"use strict";

class LoginPage {
    constructor () {

        this.usernameInput = element(by.id('username'));
        this.passwordInput = element(by.id('password'));
        this.loginButton = element(by.id('login'));
    }

    login(login, password) {
        browser.ignoreSynchronization = true;
        browser.get('/logowanie');

        this.usernameInput.sendKeys(login);
        this.passwordInput.sendKeys(password);
        this.loginButton.click();

        browser.driver.wait(function () {
            return browser.getCurrentUrl().then(function (currentUrl) {
                return currentUrl.match(/\/panel\/#\/dashboard$/);
            });
        }, 10000);

        browser.waitForAngular();
    }



}

module.exports = new LoginPage();
