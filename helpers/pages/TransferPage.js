"use strict";

let TransferPage = function(transferPage){
    this.transferPage = transferPage;
};

TransferPage.prototype.testAmounts = function (currencyFrom, currencyTo) {
    var exchangeRateValue,
        calculatedAmountTo,
        _self = this;

    this.transferPage.exchange.getText().then(function(value){
        expect(value).toMatch('1.00 ' + currencyFrom + ' = [0-9\.\,]+ ' + currencyTo + '$');

        var re = new RegExp('^1.00 ' + currencyFrom + ' = ([0-9\.\,]+) ' + currencyTo + '$');
        var m;
        if ((m = re.exec(value)) !== null) {
            if (m.index === re.lastIndex) {
                re.lastIndex++;
            }
        }

        exchangeRateValue = (m !== null) ? m[1] : 1;

        return _self.transferPage.amountFrom.getAttribute('value');
    }).then(function(value) {
        calculatedAmountTo = parseFloat(value) * exchangeRateValue;

        return _self.transferPage.amountTo.getAttribute('value');
    }).then(function(amountToValue) {
        expect(parseFloat(amountToValue)).toBe(calculatedAmountTo);
    });
};

module.exports = TransferPage;
