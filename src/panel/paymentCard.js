// "use strict";
//
// const TransferPageHelper = require('../../helpers/pages/TransferPage'),
//     RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
//     LoginPageHelper = require('./LoginPage'),
//     LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
//     LoginPage = require('./LoginPage.po.js'),
//     TransferPage = require('./transfer_GBP_PLN.po.js'),
//     CardPayment = require('./paymentCard.po.js'),
//     TransferPageObjectHelper = new TransferPageHelper(TransferPage),
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
//     it('should make transfer and card payment with 3DS success', function() {
//
//         TransferPage.clickMakeTransfer();
//         expect(TransferPage.countryFrom.getText()).toBe('Wielkiej Brytanii');
//         expect(TransferPage.countryTo.getText()).toBe('Polski');
//         expect(TransferPage.currencyFrom.getText()).toBe('GBP');
//         expect(TransferPage.currencyTo.getText()).toBe('PLN');
//         TransferPage.amountFrom.clear();
//         TransferPage.amountFrom.sendKeys('10,00');
//         expect(TransferPage.amountFrom.getAttribute('value')).toBe('10,00');
//         TransferPageObjectHelper.testAmounts('GBP', 'PLN');
//         expect(TransferPage.fee.getText()).toBe('Opłata: 2 GBP');
//         TransferPage.confirmTransfer.click();
//         expect(TransferPage.cardPayment.isPresent()).toBe(true);
//         CardPayment.selectedCard.click();
//         CardPayment.selectedNewCardOptions.click();
//         TransferPage.cardPayment.click();
//         CardPayment.cardNumber.sendKeys('5454545454545454');
//         CardPayment.cardExpiry.sendKeys('0220');
//         CardPayment.cardCVC.sendKeys('123');
//         CardPayment.nextButton.click();
//         expect(CardPayment.textCardPaymentSubmit.getText()).toBe('Prosimy o dokonanie płatności kartą debetową na kwotę 12,00 GBP');
//         CardPayment.submitButton.click();
//
//         browser.wait(function() {
//                 return browser.getCurrentUrl().then(
//                     function(url) {
//                         return url.match('/3ds_mock$');
//                     });
//             }, 5000, 'It\'s taking too long to load ' + '/3ds_mock' + '!'
//         );
//
//         browser.ignoreSynchronization = true;
//         expect(CardPayment.submit3DS.isPresent()).toBe(true);
//         CardPayment.submit3DS.click();
//         browser.waitForAngular();
//         browser.sleep(3000);
//         expect(CardPayment.successDescription.isPresent()).toBe(true);
//
//         var EC = protractor.ExpectedConditions;
//         var el = CardPayment.successfulButton;
//         var isClickable = EC.elementToBeClickable(el);
//         browser.wait(isClickable, 5000);
//         el.click();
//         expect(CardPayment.pendingTransferStatus.isPresent()).toBe(true);
//
//     });
//
// });
//
