"use strict";

describe('Remind', () => {
    const TestParser = require('../helpers/TestParser');

    const remind = require('./../pages/remind.po'),
        testParser = new TestParser({
            pl: '/przypomnij',
            en: '/remind'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(remind.logo.isDisplayed()).toBeTruthy();
        }
    });
});
