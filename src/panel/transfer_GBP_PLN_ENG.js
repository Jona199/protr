"use strict";

const TransferPageHelper = require('../../helpers/pages/TransferPage'),
    RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
    LoginPageHelper = require('./LoginPage'),
    LoginPage = require('./LoginPage.po.js'),
    TransferPage = require('./transfer_GBP_PLN.po.js'),
    TransferPageObjectHelper = new TransferPageHelper(TransferPage),
    RecipientListHelperObject = new RecipientListHelper(TransferPage),
    LoginHelper = new LoginPageHelper();

describe('Transfer Page' , () => {

    beforeAll(function(callback) {
        LoginHelper.isUserLoggedIn().then(callback);
    });

    beforeEach(function() {
        RecipientListHelperObject.redirectToRecipientList();
    });

    it('should switch on the English language on recipient list', function() {
        TransferPage.currentLangPl.isPresent().then(function(switchLang) {
            if ( switchLang ) {
                TransferPage.currentLangPl.click();
                TransferPage.switchLangEn.click();
            }
            expect(TransferPage.currentLangEn.isPresent()).toBe(true);
        });
    });

    it('should make and remove transfer from Great Britain to Poland', function() {

        RecipientListHelperObject.redirectToRecipientList();
        TransferPage.clickMakeTransfer();
        expect(TransferPage.countryFrom.getText()).toBe('Great Britain');
        expect(TransferPage.countryTo.getText()).toBe('Poland');
        expect(TransferPage.currencyFrom.getText()).toBe('GBP');
        expect(TransferPage.currencyTo.getText()).toBe('PLN');
        expect(TransferPage.accountNumber.getText()).toBe('PL: 79 2729 2334 9448 3157 6222 7935');
        TransferPage.amountFrom.clear();
        TransferPage.amountFrom.sendKeys('150,00');
        expect(TransferPage.amountFrom.getAttribute('value')).toEqual('150,00');
        TransferPageObjectHelper.testAmounts('GBP', 'PLN');
        expect(TransferPage.fee.getText()).toBe('Fee: 2 GBP');
        TransferPage.confirmTransfer.click();
        TransferPage.checkTransferDetail(
            true,
            true,
            'We are asking for 152.00 GBP to be send',
            'From Great Britain -> To Poland',
            'Fee: 2.00 GBP',
            'PL: 79 2729 2334 9448 3157 6222 7935'
        );

        TransferPage.cancelTransfer.click();
        TransferPage.removeTransfer.click();
    });
});



