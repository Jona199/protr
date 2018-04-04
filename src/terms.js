"use strict";

describe('Terms', () => {
    const TestParser = require('../helpers/TestParser');

    const terms = require('./../pages/terms.po'),
        testParser = new TestParser({
            pl: '/regulamin',
            en: '/terms-and-conditions'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(terms.logo.isDisplayed()).toBeTruthy();
        }
    });
});
