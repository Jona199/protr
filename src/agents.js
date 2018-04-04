"use strict";

describe('Agents', () => {
    const TestParser = require('../helpers/TestParser');

    const agents = require('./../pages/agents.po'),
        testParser = new TestParser({
            pl: '/agenci',
            en: '/agents'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(agents.logo.isDisplayed()).toBeTruthy();
        }
    });
});
