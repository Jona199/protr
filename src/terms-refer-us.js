"use strict";

describe('Terms', () => {
    const TestParser = require('../helpers/TestParser');

    const termsReferUs = require('./../pages/terms-refer-us.po'),
        testParser = new TestParser({
            pl: '/regulamin-polec-nas',
            en: '/conditions-referral-program'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(termsReferUs.logo.isDisplayed()).toBeTruthy();
        }
    });
});
