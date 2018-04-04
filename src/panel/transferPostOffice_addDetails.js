// "use strict";
//
// const RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
//     LoginPageHelper = require('./LoginPage'),
//     LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
//     LoginPage = require('./LoginPage.po.js'),
//     TransferPage = require('./transfer_GBP_PLN.po.js'),
//     TransferPostOffice = require('./transferPostOffice.po.js'),
//     RecipientListHelperObject = new RecipientListHelper(TransferPage),
//     LoginHelper = new LoginPageHelper(),
//     LangHelper = new LangPageHelper(TransferPage);
//
// describe('Recipients' , () => {
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
//     it('should add new recipient with only account', function() {
//         var EC = protractor.ExpectedConditions;
//         var el = TransferPage.changeViewType;
//         var isClickable = EC.elementToBeClickable(el);
//         browser.wait(isClickable, 4000);
//         el.click();
//         TransferPage.buttonNewRecipient.click();
//         TransferPage.inputRecipientName.sendKeys('Iain Glen');
//         TransferPage.selectCountry.click();
//         TransferPage.selectCurrency.click();
//         TransferPage.inputPlnAccount.sendKeys('47 9770 8720 7820 3806 6118 7658');
//         TransferPage.saveRecipient.click();
//     });
//
//     it('should make and remove transfer to the Post Office with adding details', function() {
//
//         browser.executeScript('arguments[0].scrollIntoView()', TransferPage.newRecipientOnlyAccount.getWebElement());
//         TransferPage.makeTransfer.get(2).click();
//         var EC = protractor.ExpectedConditions;
//         var el = TransferPostOffice.selectTransferMethod;
//         var isClickable = EC.elementToBeClickable(el);
//         browser.wait(isClickable, 4000);
//         el.click();
//
//         TransferPostOffice.completeGiroDetails.click();
//         TransferPage.recipientPhone.sendKeys('605897654');
//         TransferPostOffice.saveRecipientInformation.click();
//         TransferPostOffice.buttonMakeTransfer.click();
//         TransferPostOffice.selectTransferMethod.click();
//         TransferPostOffice.selectGiroMethod.get(0).click();
//
//         var EC = protractor.ExpectedConditions;
//         var el = TransferPage.countryFrom;
//         var isClickable = EC.elementToBeClickable(el);
//         browser.wait(isClickable, 4000);
//         el.click();
//
//         TransferPage.countryFromIE.click();
//         expect(TransferPage.countryFrom.getText()).toBe('Irlandii');
//         expect(TransferPage.countryTo.getText()).toBe('Polski');
//         expect(TransferPage.currencyFrom.getText()).toBe('EUR');
//         expect(TransferPage.currencyTo.getText()).toBe('PLN');
//         TransferPage.amountFrom.clear();
//         TransferPage.amountFrom.sendKeys('5,00');
//         expect(TransferPostOffice.feePostOffice.getText()).toBe('Opłata: 3.90 EUR');
//         expect(TransferPage.optionSuperFast.isPresent()).toBe(false);
//         expect(TransferPage.optionFast.isPresent()).toBe(false);
//         TransferPage.confirmTransfer.click();
//         TransferPage.checkTransferDetail(
//             true,
//             true,
//             'Prosimy o wpłatę 8,90 EUR',
//             'Irlandii -> Do Polski',
//             'Opłata: 3.90 EUR'
//         );
//         expect(TransferPage.summaryAccountRecipient.isPresent()).toBe(false);
//         TransferPage.cancelTransfer.click();
//         TransferPage.removeTransfer.click();
//     });
//
//     it('should remove new recipient with transfer to the Post Office', function() {
//
//         TransferPage.makeTransferMenu.click();
//         browser.executeScript('arguments[0].scrollIntoView()', TransferPage.newRecipientOnlyAccount.getWebElement());
//         TransferPage.newRecipientOnlyAccount.click();
//         TransferPage.removeRecipient.click();
//         TransferPage.confirmRemoveRecipient.click();
//         expect(TransferPage.recipientList.isPresent()).toBe(true);
//     });
// });
//
