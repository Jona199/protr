"use strict";

describe('Career', () => {
    const TestParser = require('../helpers/TestParser');

    const career = require('./../pages/career.po'),
        testParser = new TestParser({
            pl: '/kariera',
            en: '/career'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(career.logo.isDisplayed()).toBeTruthy();
        }
    });
});
