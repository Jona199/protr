"use strict";

describe('Transfer to Pol', () => {
    const TestParser = require('../helpers/TestParser');

    const transferToPol = require('./../pages/transfer-to-pol.po'),
        testParser = new TestParser({
            pl: '/przelewy-do-polski',
            en: '/transfers-to-poland'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(transferToPol.logo.isDisplayed()).toBeTruthy();
        }
    });
});
