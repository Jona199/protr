"use strict";

const   RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
        LoginPageHelper = require('./LoginPage'),
        LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
        LoginPage = require('./LoginPage.po.js'),
        TransferPage = require('./transfer_GBP_PLN.po.js'),
        PromoCode = require('./using_PromoCode.po.js'),
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

    it('should watch message for invalid promo code during transfer', function() {

        TransferPage.clickMakeTransfer();
        expect(TransferPage.fee.getText()).toBe('Opłata: 2 GBP');
        PromoCode.showInputPromoCode.click();
        PromoCode.inputDiscountCode.sendKeys('invalid promo code');
        PromoCode.buttonPromoCode.click();
        expect(PromoCode.messageInvalidCode.isPresent()).toBe(true);
        expect(TransferPage.fee.getText()).toBe('Opłata: 2 GBP');
        TransferPage.confirmTransfer.click();
        expect(TransferPage.summaryFee.getText()).toBe('Opłata: 2.00 GBP');
        TransferPage.cancelTransfer.click();
        TransferPage.removeTransfer.click();
    });

});


