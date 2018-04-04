"use strict";

describe('Free transfers', () => {
    const TestParser = require('../helpers/TestParser');

    const freeTransfers = require('./../pages/free-transfers.po'),
        testParser = new TestParser({
            pl: '/przelewy-za-darmo',
            en: '/free-transfers'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(freeTransfers.logo.isDisplayed()).toBeTruthy();
        }
    });
});
