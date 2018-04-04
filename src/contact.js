"use strict";

describe('Contact', () => {
    const TestParser = require('../helpers/TestParser');

    const contact = require('./../pages/contact.po'),
        testParser = new TestParser({
            pl: '/kontakt',
            en: '/contact'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(contact.logo.isDisplayed()).toBeTruthy();
        }
    });
});
