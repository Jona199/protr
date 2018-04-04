"use strict";

/**
 * Zadaniem tej klasy jest parsowanie scenariuszy testowych, które są takie same
 * zarówno w wersji polskiej, jak i angielskiej.
 *
 * Obiekt `pageUrls` powinien być zdefiniowany według reguł:
 *   - klucz = nazwa języka,
 *   - wartość = url do strony
 *
 * @param {Object <string, string>} pageUrls
 * @constructor
 */
let TestParser = function (pageUrls) {
    this.pageUrls = pageUrls;
};

/**
 * Przykładowe wejście (parametr `testCases`):
 * {
 *      'should contain easysend logo': () => {
 *          expect(aboutUs.logo.isDisplayed()).toBeTruthy();
 *      }
 *  }
 *
 * @param {Object <string, Function>} testCases
 */
TestParser.prototype.parse = function (testCases) {
    let items = Object.keys(testCases);

    Object.keys(this.pageUrls).forEach(lang => {
        describe(lang.toUpperCase(), () => {
            beforeEach(() => {
                browser.get(this.pageUrls[lang]);
            });

            items.forEach(rows => {
                it(rows, testCases[rows]);
            });
        });
    });
};

module.exports = TestParser;
