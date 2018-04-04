// "use strict";
//
// const RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
//     LoginPageHelper = require('./LoginPage'),
//     LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
//     LoginPage = require('./LoginPage.po.js'),
//     TransferPage = require('./transfer_GBP_PLN.po.js'),
//     CardPayment = require('./paymentCard.po.js'),
//     RecipientListHelperObject = new RecipientListHelper(TransferPage),
//     LangHelper = new LangPageHelper(TransferPage),
//     LoginHelper = new LoginPageHelper();
//
// describe('Transfer Page' , () => {
//
//     beforeAll(function(callback) {
//         LoginHelper.isUserLoggedIn().then(callback);
//     });
//
//     beforeEach(function() {
//         RecipientListHelperObject.redirectToRecipientList();
//         LangHelper.switchLanguageToPl();
//     });
//
//     it('should make transfer and card payment with error card', function() {
//
//         TransferPage.clickMakeTransfer();
//         expect(TransferPage.countryFrom.getText()).toBe('Wielkiej Brytanii');
//         expect(TransferPage.countryTo.getText()).toBe('Polski');
//         expect(TransferPage.currencyFrom.getText()).toBe('GBP');
//         expect(TransferPage.currencyTo.getText()).toBe('PLN');
//         TransferPage.amountFrom.clear();
//         TransferPage.amountFrom.sendKeys('5,00');
//         TransferPage.confirmTransfer.click();
//         CardPayment.selectedErrorCard.click();
//         TransferPage.cardPayment.click();
//         CardPayment.cardCVC.sendKeys('789');
//         CardPayment.nextButton.click();
//
//         var EC = protractor.ExpectedConditions;
//         var el = CardPayment.submitButton;
//         var isClickable = EC.elementToBeClickable(el);
//         browser.wait(isClickable, 5000);
//         el.click();
//
//         browser.wait(CardPayment.preloadFinished, 5000);
//         expect(CardPayment.cardPaymentError.isPresent()).toBe(true);
//         CardPayment.buttonIntoErrorMessage.click();
//         expect(CardPayment.transferDataPopup.isPresent()).toBe(true);
//         CardPayment.closePopup.click();
//         TransferPage.cancelTransfer.click();
//         TransferPage.removeTransfer.click();
//
//     });
//
// });
//
//
