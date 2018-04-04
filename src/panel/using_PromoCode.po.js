"use strict";

class PromoCode {
    constructor () {

        this.showInputPromoCode = element(by.css('.qa-showInputPromoCode'));
        this.inputDiscountCode = element(by.css('.qa-inputDiscountCode'));
        this.buttonPromoCode = element(by.css('.qa-buttonPromoCode'));
        this.messageInvalidCode = element(by.css('.qa-messageInvalidCode'));
        this.messageValidCode = element(by.css('.qa-messageValidCode'));
    }
}
module.exports = new PromoCode();