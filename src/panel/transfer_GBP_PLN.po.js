"use strict";

class TransferPage {
  constructor () {
    let self = this;
    this.currentLangPl = element(by.css('.current-lang.pl'));
    this.currentLangEn = element(by.css('.current-lang.en'));
    this.switchLangEn = element(by.css('.qa-switchLang-en'));
    this.switchLangPl = element(by.css('.qa-switchLang-pl'));
    this.usernameInput = element(by.id('username'));
    this.passwordInput = element(by.id('password'));
    this.loginButton = element(by.id('login'));
    this.makeTransferMenu = element(by.css('.qa-makeTransferMenu'));
    this.makeTransferBox = element.all(by.css('.qa-makeTransferBox'));
    this.makeTransfer = element.all(by.css('.qa-makeTransfer'));

    this.clickMakeTransfer = function () {
      self.makeTransferBox.count().then(function (boxQty)  {
        if (boxQty > 0) {
          self.makeTransferBox.get(0).click();
        } else {
          self.makeTransfer.get(0).click();
        }
      });
    };

    this.countryFrom = element(by.css('.qa-transferCountryFrom'));
    this.countryFromIE = element(by.css('.qa-selectCountryIE'));
    this.countryTo = element(by.css('.qa-transferCountryTo'));
    this.currencyFrom = element(by.css('.qa-currencyFrom'));
    this.currencyTo = element(by.css('.qa-currencyTo'));
    this.accountNumber = element(by.css('.qa-recipientAccount'));
    this.exchange = element(by.css('.qa-currencyExchange'));
    this.fee = element(by.css('.qa-feeFast'));
    this.optionFast = element(by.css('.option-a'));
    this.optionSuperFast = element(by.css('.qa-optionSuperFast'));
    this.feeSuperFast = element(by.css('.qa-feeSuperFast'));
    this.amountFrom = element(by.css('.qa-amountFrom'));
    this.amountTo = element(by.css('.qa-amountTo'));
    this.confirmTransfer = element(by.css('.qa-buttonConfirmTransfer'));
    this.cardPayment = element(by.css('.qa-cardPayment'));
    this.bankTransfer = element(by.css('.qa-bankTransfer'));
    this.amountWithFee = element(by.css('.qa-amountWithFee'));
    this.summaryDirection = element(by.css('.qa-summaryDirection'));
    this.summaryFee = element(by.css('.qa-summaryFee'));
    this.summaryAccountRecipient = element(by.css('.qa-summaryAccountRecipient'));
    this.checkTransferDetail = function checkTransferDetail(cardPayment, bankTransfer, amountWithFee, summaryDirection, summaryFee, summaryAccountRecipient) {
      expect(this.cardPayment.isPresent()).toBe(cardPayment);
      expect(this.bankTransfer.isPresent()).toBe(bankTransfer);
      expect(this.amountWithFee.getText()).toContain(amountWithFee);
      expect(this.summaryDirection.getText()).toContain(summaryDirection);
      expect(this.summaryFee.getText()).toContain(summaryFee);
      if(summaryAccountRecipient!==undefined) {
        expect(this.summaryAccountRecipient.getText()).toContain(summaryAccountRecipient);
      }
    };

    this.cancelTransfer = element(by.css('.qa-cancelTransfer'));
    this.removeTransfer = element(by.css('.qa-removeTransfer'));
    this.recipientTitle = element(by.css('.qa-recipientTitle'));
    this.recipientList = element(by.id('krok-6'));
    this.inputRecipientName = element(by.css('.qa-inputRecipientName'));
    this.inputRecipientAccount = element(by.css('.qa-inputRecipientAccount'));
    this.saveRecipient = element(by.css('.qa-saveRecipient'));
    this.newRecipient = element(by.cssContainingText('.full-name', 'Evangeline Lilly'));
    this.newRecipientPostOffice = element(by.cssContainingText('.full-name', 'Milla Jovovich'));
    this.newRecipientOnlyAccount = element(by.cssContainingText('.full-name', 'Iain Glen'));
    this.removeRecipient = element(by.css('.qa-removeRecipient'));
    this.confirmRemoveRecipient = element(by.css('.qa-confirmRemoveRecipient'));
    this.inputPlnAccount = element(by.id('account_account_pl'));
    this.selectRecipientPurpose = element(by.cssContainingText('option', 'Pieniądze dla członka rodziny'));
    this.transferStatus = element(by.css('.text-success'));
    this.changeViewType = element(by.id('krok-8'));
    this.buttonNewRecipient = element(by.id('button-new-recipient'));
    this.recipientPhone = element(by.id('es-recipientPhone'));
    this.recipientEmail = element(by.id('es-recipientEmail'));
    this.selectCountry = element(by.cssContainingText('option', 'Polska'));
    this.selectCurrency = element(by.cssContainingText('option', 'PLN'));
    this.inputBusinessRate = element(by.css('.qa-inputBusinessRate'));
  }
}
module.exports = new TransferPage();

