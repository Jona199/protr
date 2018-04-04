"use strict";

describe('', () => {
    const TestParser = require('../helpers/TestParser');

    const transferToUk = require('./../pages/transfer-to-uk.po'),
        testParser = new TestParser({
            pl: '/przelewy-do-anglii',
            en: '/transfers-to-england'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(transferToUk.logo.isDisplayed()).toBeTruthy();
        }
    });
});
