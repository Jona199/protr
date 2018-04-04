"use strict";

describe('SuperFast', () => {
    const TestParser = require('../helpers/TestParser');

    const superfast = require('./../pages/superfast.po'),
        testParser = new TestParser({
            pl: '/superfast',
            en: '/superfast-transfers'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(superfast.logo.isDisplayed()).toBeTruthy();
        }
    });
});
