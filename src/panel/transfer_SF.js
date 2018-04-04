"use strict";

const TransferPageHelper = require('../../helpers/pages/TransferPage'),
    RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
    LoginPageHelper = require('./LoginPage'),
    LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
    LoginPage = require('./LoginPage.po.js'),
    TransferPage = require('./transfer_GBP_PLN.po.js'),
    TransferPageObjectHelper = new TransferPageHelper(TransferPage),
    RecipientListHelperObject = new RecipientListHelper(TransferPage),
    LoginHelper = new LoginPageHelper(),
    LangHelper = new LangPageHelper(TransferPage);

describe('Transfer Page' , () => {

    beforeAll(function(callback) {
        LoginHelper.isUserLoggedIn().then(callback);
    });

    beforeEach(function() {
        RecipientListHelperObject.redirectToRecipientList();
        LangHelper.switchLanguageToPl();
    });

    it('should make and remove SuperFast transfer', function() {

        TransferPage.clickMakeTransfer();
        expect(TransferPage.countryFrom.getText()).toBe('Wielkiej Brytanii');
        expect(TransferPage.countryTo.getText()).toBe('Polski');
        expect(TransferPage.currencyFrom.getText()).toBe('GBP');
        expect(TransferPage.currencyTo.getText()).toBe('PLN');
        expect(TransferPage.accountNumber.getText()).toBe('PL: 79 2729 2334 9448 3157 6222 7935');
        TransferPage.amountFrom.clear();
        TransferPage.amountFrom.sendKeys('15,00');
        expect(TransferPage.amountFrom.getAttribute('value')).toEqual('15,00');
        TransferPageObjectHelper.testAmounts('GBP', 'PLN');
        expect(TransferPage.feeSuperFast.getText()).toBe('Opłata: 5 GBP');
        TransferPage.optionSuperFast.click();
        TransferPage.confirmTransfer.click();
        TransferPage.checkTransferDetail(
            true,
            true,
            'Prosimy o wpłatę 20,00 GBP',
            'Z Wielkiej Brytanii -> Do Polski',
            'Opłata: 5.00 GBP',
            'PL: 79 2729 2334 9448 3157 6222 7935'
        );

        expect(TransferPage.transferStatus.getText()).toContain('w trakcie realizacji');
    });
});
