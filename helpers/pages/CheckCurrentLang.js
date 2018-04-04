"use strict";

let CheckLang = function(TransferPage){
    this.switchLanguageToPl = function () {
        TransferPage.currentLangEn.isPresent().then(function(switchLang) {
            if ( switchLang ) {
                TransferPage.currentLangEn.click();
                TransferPage.switchLangPl.click();
            }
            expect(TransferPage.currentLangPl.isPresent()).toBe(true);
        });
    };
};

module.exports = CheckLang;
