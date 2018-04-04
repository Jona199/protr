"use strict";

describe('Registration', () => {
    const TestParser = require('../helpers/TestParser');

    const registration = require('./../pages/registration.po'),
        testParser = new TestParser({
            pl: '/rejestracja',
            en: '/registration'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(registration.logo.isDisplayed()).toBeTruthy();
        }
    });
});
