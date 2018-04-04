"use strict";

class CardPayment {
    constructor () {

        this.selectedCard = element(by.css('.qa-cardSelected'));
        this.selectedNewCardOptions = element(by.cssContainingText('option', 'Zapłać nową kartą'));
        this.selectedErrorCard = element(by.cssContainingText('option', 'ERROR: **** **** **** 4444'));
        this.selectedFailedCard = element(by.cssContainingText('option', 'FAILED: **** **** **** 4444'));
        this.selectedCardOptions = element.all(by.cssContainingText('option', 'MASTERCARD_DEBIT **** **** **** 5454'));
        this.cardNumber = element(by.id('card-number'));
        this.cardExpiry = element(by.id('card-expiry'));
        this.cardCVC = element(by.id('card-cvc'));
        this.nextButton = element(by.css('.qa-nextStepButton'));
        this.submitButton = element(by.css('.qa-cardPaymentSubmit'));
        this.submit3DS = element(by.css('.qa-3dsSubmit'));
        this.identified3DS = element(by.css('.qa-3dsIdentified'));
        this.selectFailed3DS = element(by.cssContainingText('option', 'FAILED'));
        this.textCardPaymentSubmit = element(by.css('#payment-form .qa-textCardPaymentSubmit'));
        this.successfulButton = element(by.css('.button-successful'));
        this.failedButton = element(by.css('.payment-result-failed .button-successful'));
        this.failedDescription = element(by.css('.popup-content .qa-failedCardPayment'));
        this.successDescription = element(by.css('.qa-successCardPayment'));
        this.pendingTransferStatus = element(by.css('.qa-pendingTransferStatus'));
        this.cardPaymentError = element(by.css('.qa-cardPaymentError'));
        this.buttonIntoErrorMessage = element(by.css('.qa-buttonIntoErrorMessage'));
        this.transferDataPopup = element(by.css('.qa-transferDataPopup'));
        this.closePopup = element(by.css('.qa-closePopup'));

        this.preloadFinished = function() {
            return element(by.css('.qa-cardPaymentError')).isPresent().then(function(value) {
                return value;
            });
        };

        this.preloadFormFinished = function() {
            return element(by.css('#payment-form .qa-textCardPaymentSubmit')).isPresent().then(function(value) {
                return value;
            });
        };

        this.preloadPopupFinished = function() {
            return element(by.css('.popup-content .qa-failedCardPayment')).isPresent().then(function(value) {
                return value;
            });
        };

        this.preloadErrorPopupFinished = function() {
            return element(by.css('.qa-cardPayment')).isPresent().then(function(value) {
                return value;
            });
        };

    }
}
module.exports = new CardPayment();

