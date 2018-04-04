"use strict";

describe('Complaints', () => {
    const TestParser = require('../helpers/TestParser');

    const complaints = require('./../pages/complaints.po'),
        testParser = new TestParser({
            pl: '/reklamacje',
            en: '/complaints'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(complaints.logo.isDisplayed()).toBeTruthy();
        }
    });
});
