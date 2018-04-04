"use strict";

describe('Privacy Policy', () => {
    const TestParser = require('../helpers/TestParser');

    const privacyPolicy = require('./../pages/privacy-policy.po'),
        testParser = new TestParser({
            pl: '/ochrona-danych-osobowych',
            en: '/privacy-policy'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(privacyPolicy.logo.isDisplayed()).toBeTruthy();
        }
    });
});
