"use strict";

describe('Card Payments', () => {
    const TestParser = require('../helpers/TestParser');

    const cardPayments = require('./../pages/card-payments.po'),
        testParser = new TestParser({
            pl: '/platnosci-karta',
            en: '/card-payment'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(cardPayments.logo.isDisplayed()).toBeTruthy();
        }
    });
});
