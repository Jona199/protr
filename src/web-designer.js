"use strict";

describe('About Us', () => {
    const TestParser = require('../helpers/TestParser');

    const webDesigner = require('./../pages/web-designer.po'),
        testParser = new TestParser({
            pl: '/web-designer'
        });

    browser.ignoreSynchronization = true;

    testParser.parse({
        'should contain easysend logo': () => {
            expect(webDesigner.logo.isDisplayed()).toBeTruthy();
        }
    });
});
