"use strict";

class MyAccountPage {
    constructor () {

        this.menuMyAccount = element(by.id('krok-5'));
        this.editMyAccountDetails = element(by.css('.qa-editMyAccountDetails'));
        this.editMyIdentityDocument = element(by.css('.qa-editMyIdentityDocument'));
        this.addDocumentIdentity = element(by.css('.qa-addDocumentIdentity'));
        this.addDocumentIdentityEdit = element(by.css('.qa-addDocumentIdentityEdit'));
        this.addDocumentAddress = element(by.css('.qa-addDocumentAddress'));
        this.addDocumentAddressEdit = element(by.css('.qa-addDocumentAddressEdit'));
        this.saveDocumentIdentity = element(by.css('.qa-saveDocumentIdentity'));
        this.saveDocumentAddress = element(by.css('.qa-saveDocumentAddress'));
        this.deleteScanDocument = element(by.css('.qa-deleteScanDocument'));
        this.deleteScanAddressDocument = element(by.css('.qa-deleteScanAddressDocument'));
        this.linkDocumentIdentity = element(by.css('.qa-linkDocumentIdentity'));
        this.editMyDocumentAddress = element(by.css('.qa-editMyDocumentAddress'));

        this.preloadFinished = function() {
            return element(by.css('.form-loading')).isPresent().then(function(value) {
                return !value;
            });
        };
    }
}
module.exports = new MyAccountPage();


