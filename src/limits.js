"use strict";

describe('Limits', () => {
    const TestParser = require('../helpers/TestParser');

    const limits = require('./../pages/limits.po'),
        testParser = new TestParser({
            pl: '/limity',
            en: '/limits'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(limits.logo.isDisplayed()).toBeTruthy();
        }
    });
});
