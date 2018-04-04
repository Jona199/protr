"use strict";

let RecipientList = function(TransferPage){
    this.redirectToRecipientList = function () {
        browser.ignoreSynchronization = false;
        TransferPage.makeTransferMenu.click();
        expect(TransferPage.recipientList.isPresent()).toBe(true);
    };
};

module.exports = RecipientList;