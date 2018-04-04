// "use strict";
//
// const RecipientListHelper = require('../../helpers/pages/RedirectToRecipientList'),
//     LoginPageHelper = require('./LoginPage'),
//     LangPageHelper = require('../../helpers/pages/CheckCurrentLang'),
//     LoginPage = require('./LoginPage.po.js'),
//     TransferPage = require('./transfer_GBP_PLN.po.js'),
//     RecipientListHelperObject = new RecipientListHelper(TransferPage),
//     LoginHelper = new LoginPageHelper(),
//     LangHelper = new LangPageHelper(TransferPage);
//
// describe('Transfer Page' , () => {
//
//     beforeAll(function(callback) {
//         LoginHelper.isBusinessUserLoggedIn().then(callback);
//         browser.get('/panel/#/dashboard');
//     });
//
//     beforeEach(function() {
//         RecipientListHelperObject.redirectToRecipientList();
//         LangHelper.switchLanguageToPl();
//     });
//
//     it('should make and remove business transfer from Great Britain to Poland with change rate', function() {
//
//         TransferPage.clickMakeTransfer();
//         expect(TransferPage.countryFrom.getText()).toBe('Wielkiej Brytanii');
//         expect(TransferPage.countryTo.getText()).toBe('Polski');
//         expect(TransferPage.currencyFrom.getText()).toBe('GBP');
//         expect(TransferPage.currencyTo.getText()).toBe('PLN');
//         expect(TransferPage.accountNumber.getText()).toBe('PL: 45 8804 8530 8040 2984 7387 9702');
//         TransferPage.amountFrom.clear();
//         TransferPage.amountFrom.sendKeys('77,00');
//         expect(TransferPage.amountFrom.getAttribute('value')).toBe('77,00');
//         TransferPage.inputBusinessRate.clear();
//         TransferPage.inputBusinessRate.sendKeys('8,00');
//         expect(TransferPage.inputBusinessRate.getAttribute('value')).toBe('8,00');
//         expect(TransferPage.amountTo.getAttribute('value')).toBe('616,00');
//         expect(TransferPage.fee.getText()).toBe('Opłata: 2 GBP');
//         TransferPage.confirmTransfer.click();
//         TransferPage.checkTransferDetail(
//             true,
//             true,
//             '79,00 GBP',
//             'Z Wielkiej Brytanii -> Do Polski',
//             'Opłata: 2.00 GBP',
//             'PL: 45 8804 8530 8040 2984 7387 9702'
//         );
//
//         TransferPage.cancelTransfer.click();
//         TransferPage.removeTransfer.click();
//     });
//
// });
//
//
