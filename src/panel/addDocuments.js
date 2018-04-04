// "use strict";
//
// const path = require('path');
// const LoginPageHelper = require('./LoginPage'),
//     LoginPage = require('./LoginPage.po.js'),
//     MyAccountPage = require('./myAccountProfile.po.js'),
//     absolutePath = '/home/seluser/stubs/charlize.png',
//     LoginHelper = new LoginPageHelper();
//
// describe('User profile page' , () => {
//
//     beforeAll(function(callback) {
//         LoginHelper.isUserLoggedIn().then(callback);
//     });
//
//     beforeEach(function () {
//         MyAccountPage.menuMyAccount.click();
//         browser.manage().window().maximize();
//     });
//
//     it('allow add and remove scan of identity document', function() {
//         browser.executeScript('arguments[0].click()', MyAccountPage.editMyIdentityDocument.getWebElement());
//         browser.wait(function() {
//             return MyAccountPage.addDocumentIdentityEdit.isDisplayed().then(function(value) {
//                 return value;
//             });
//         }, 5000);
//
//         browser.wait(MyAccountPage.preloadFinished);
//         browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');
//
//         browser.sleep(4000);
//         var fileElem = MyAccountPage.addDocumentIdentityEdit.element(by.css('input[file-upload="documentIdentity"]'));
//         browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '30px'; arguments[0].style.width = '300px'", fileElem.getWebElement());
//         fileElem.sendKeys(absolutePath);
//
//         expect(MyAccountPage.deleteScanDocument.isDisplayed()).toBeTruthy();
//         MyAccountPage.saveDocumentIdentity.click();
//         browser.sleep(4000);
//         expect(MyAccountPage.linkDocumentIdentity.isDisplayed()).toBeTruthy();
//
//         browser.executeScript('arguments[0].click()', MyAccountPage.editMyIdentityDocument.getWebElement());
//         MyAccountPage.deleteScanDocument.click();
//         MyAccountPage.saveDocumentIdentity.click();
//         expect(MyAccountPage.linkDocumentIdentity.isPresent()).toBe(false);
//     });
//
//     it('allow add and remove scan of address document', function() {
//
//         browser.executeScript('arguments[0].click()', MyAccountPage.editMyDocumentAddress.getWebElement());
//         browser.wait(function() {
//             return MyAccountPage.addDocumentAddressEdit.isDisplayed().then(function(value) {
//                 return value;
//             });
//         }, 5000);
//
//         browser.wait(MyAccountPage.preloadFinished);
//
//         browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');
//
//         var fileElem = MyAccountPage.addDocumentAddressEdit.element(by.css('input[file-upload="documentAddress"]'));
//         browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '30px'; arguments[0].style.width = '300px'", fileElem.getWebElement());
//         fileElem.sendKeys(absolutePath);
//         browser.sleep(4000);
//
//         expect(MyAccountPage.deleteScanAddressDocument.isDisplayed()).toBeTruthy();
//         MyAccountPage.saveDocumentAddress.click();
//         browser.sleep(4000);
//         browser.executeScript('arguments[0].click()', MyAccountPage.editMyDocumentAddress.getWebElement());
//         browser.sleep(4000);
//         MyAccountPage.deleteScanAddressDocument.click();
//         MyAccountPage.saveDocumentAddress.click();
//
//     });
// });
//
