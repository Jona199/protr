"use strict";

describe('Refer Us', () => {
    const TestParser = require('../helpers/TestParser');

    const referUs = require('./../pages/refer-us.po'),
        testParser = new TestParser({
            pl: '/polec-nas',
            en: '/spread-the-word'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(referUs.logo.isDisplayed()).toBeTruthy();
        }
    });
});
