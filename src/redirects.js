"use strict";

describe('Redirects', () => {
    browser.ignoreSynchronization = true;

    it('should move from invalid url to valid page', () => {
        browser.get('/konkurs');
        expect(browser.getCurrentUrl()).toMatch(/\/polec-nas$/);

        browser.get('/polec-na-wakacje');
        expect(browser.getCurrentUrl()).toMatch(/\/polec-nas$/);
        
        browser.get('/spread-the-word-and-fly');
        expect(browser.getCurrentUrl()).toMatch(/\/spread-the-word$/);

        browser.get('/competition');
        expect(browser.getCurrentUrl()).toMatch(/\/spread-the-word$/);
    });
});
