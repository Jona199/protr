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
//     it('should add and remove new recipient to the Post Office', function() {
//
//         TransferPage.buttonNewRecipient.click();
//         TransferPage.inputRecipientName.sendKeys('Milla Jovovich');
//         TransferPage.recipientPhone.sendKeys('501354564');
//         TransferPage.saveRecipient.click();
//         browser.executeScript('arguments[0].scrollIntoView()', TransferPage.newRecipientPostOffice.getWebElement());
//         TransferPage.newRecipientPostOffice.click();
//         TransferPage.removeRecipient.click();
//         TransferPage.confirmRemoveRecipient.click();
//         expect(TransferPage.recipientList.isPresent()).toBe(true);
//     });
// });
//
//
