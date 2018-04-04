"use strict";

const TransferPageHelper = require('../../helpers/pages/TransferPage'),
    LoginPageHelper = require('./LoginPage'),
    LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
    RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
    LoginPage = require('./LoginPage.po.js'),
    TransferPage = require('./transfer_GBP_PLN.po.js'),
    TransferPostOffice = require('./transferPostOffice.po.js'),
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

    it('should make and remove transfer to the Post Office', function() {

        TransferPage.clickMakeTransfer();
        expect(TransferPage.countryFrom.getText()).toBe('Wielkiej Brytanii');
        expect(TransferPage.countryTo.getText()).toBe('Polski');
        expect(TransferPage.currencyFrom.getText()).toBe('GBP');
        expect(TransferPage.currencyTo.getText()).toBe('PLN');
        TransferPage.amountFrom.clear();
        TransferPage.amountFrom.sendKeys('10,00');
        TransferPageObjectHelper.testAmounts('GBP', 'PLN');
        TransferPostOffice.selectTransferMethod.click();
        TransferPostOffice.selectGiroMethod.get(0).click();
        expect(TransferPostOffice.feePostOffice.getText()).toBe('Opłata: 3.90 GBP');
        expect(TransferPage.optionSuperFast.isPresent()).toBe(false);
        expect(TransferPage.optionFast.isPresent()).toBe(false);
        TransferPage.confirmTransfer.click();
        TransferPage.checkTransferDetail(
            true,
            true,
            'Prosimy o wpłatę 13,90 GBP',
            'Z Wielkiej Brytanii -> Do Polski',
            'Opłata: 3.90 GBP'
        );

        expect(TransferPage.summaryAccountRecipient.isPresent()).toBe(false);
        expect(TransferPostOffice.companyNumber.getText()).toContain('Numer Easysend: 99999999');
        TransferPage.cancelTransfer.click();
        TransferPage.removeTransfer.click();
        });

});

