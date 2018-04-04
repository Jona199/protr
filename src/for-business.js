"use strict";

describe('For Business', () => {
    const TestParser = require('../helpers/TestParser');

    const forBusiness = require('./../pages/for-business.po'),
        testParser = new TestParser({
            pl: '/dla-firmy',
            en: '/for-business'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(forBusiness.logo.isDisplayed()).toBeTruthy();
        }
    });
});
