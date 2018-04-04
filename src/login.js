"use strict";

describe('Login', () => {
    const TestParser = require('../helpers/TestParser');

    const login = require('./../pages/login.po'),
        testParser = new TestParser({
            pl: '/logowanie',
            en: '/login'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(login.logo.isDisplayed()).toBeTruthy();
        }
    });
});
