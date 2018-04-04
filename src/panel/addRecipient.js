"use strict";

const RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
    LoginPageHelper = require('./LoginPage'),
    LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
    LoginPage = require('./LoginPage.po.js'),
    TransferPage = require('./transfer_GBP_PLN.po.js'),
    RecipientListHelperObject = new RecipientListHelper(TransferPage),
    LoginHelper = new LoginPageHelper(),
    LangHelper = new LangPageHelper(TransferPage);
    // global.EC = browser.ExpectedConditions;


describe('Recipients' , () => {

    beforeAll(function(callback) {
        LoginHelper.isUserLoggedIn().then(callback);
    });

    beforeEach(function() {
        RecipientListHelperObject.redirectToRecipientList();
        LangHelper.switchLanguageToPl();
    });

    it('should add and remove new recipient with phone and account', function() {

        TransferPage.changeViewType.click();
        TransferPage.buttonNewRecipient.click();
        TransferPage.inputRecipientName.sendKeys('Evangeline Lilly');
        TransferPage.recipientPhone.sendKeys('605897654');
        TransferPage.recipientEmail.sendKeys('test@test.pl');
        TransferPage.selectCountry.click();
        TransferPage.selectCurrency.click();
        TransferPage.inputPlnAccount.sendKeys('79 2729 2334 9448 3157 6222 7935');
        TransferPage.selectRecipientPurpose.click();
        TransferPage.saveRecipient.click();
        browser.executeScript('arguments[0].scrollIntoView()', TransferPage.newRecipient.getWebElement());
        TransferPage.newRecipient.click();
        TransferPage.removeRecipient.click();
        TransferPage.confirmRemoveRecipient.click();
        expect(TransferPage.recipientList.isPresent()).toBe(true);
    });

});

