"use strict";

describe('Homepage', () => {
    const TestParser = require('../helpers/TestParser');

    const homepage = require('./../pages/homepage.po'),
        testParser = new TestParser({
            pl: '/',
            en: '/en'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(homepage.logo.isDisplayed()).toBeTruthy();
        }
    });
});
