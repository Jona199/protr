"use strict";

class TransferPage {
    constructor () {

        this.selectTransferMethod = element(by.css('.qa-selectTransferMethod'));
        this.selectGiroMethod = element.all(by.css('.qa-selectTransferMethod-giro'));
        this.feePostOffice = element(by.css('.qa-feePostOffice'));
        this.companyNumber = element(by.css('.qa-summaryCompanyNumber'));
        this.completeGiroDetails = element(by.css('.qa-completeGiroDetails'));
        this.saveRecipientInformation = element(by.css('.qa-saveRecipientInformation'));
        this.buttonMakeTransfer = element(by.css('.qa-buttonMakeTransfer'));
        }
}
module.exports = new TransferPage();

