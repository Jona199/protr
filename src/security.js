"use strict";

describe('Security', () => {
    const TestParser = require('../helpers/TestParser');

    const security = require('./../pages/security.po'),
        testParser = new TestParser({
            pl: '/bezpieczenstwo',
            en: '/security'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(security.logo.isDisplayed()).toBeTruthy();
        }
    });
});
