"use strict";

describe('For You', () => {
    const TestParser = require('../helpers/TestParser');

    const forYou = require('./../pages/for-you.po'),
        testParser = new TestParser({
            pl: '/dla-ciebie',
            en: '/for-you'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(forYou.logo.isDisplayed()).toBeTruthy();
        }
    });
});
