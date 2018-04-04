"use strict";

describe('About Us', () => {
    const TestParser = require('../helpers/TestParser');

    const aboutUs = require('./../pages/about-us.po'),
        testParser = new TestParser({
            pl: '/o-nas',
            en: '/about-us'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(aboutUs.logo.isDisplayed()).toBeTruthy();
        }
    });
});
