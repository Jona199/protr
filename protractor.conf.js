((ENV) => {
    'use strict';
    const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter'),
          artifactsPath = process.env.CIRCLE_ARTIFACTS,
          baseUrl = ENV.npm_config_base_url || 'http://www2.dev.easysend.pl/',
          seleniumUrl = ENV.npm_config_selenium_url || 'http://selenium:4444/wd/hub';

    exports.config = {
        seleniumAddress: seleniumUrl,
        baseUrl: baseUrl,
        directConnect: false,
        onPrepare: function() {
            if (artifactsPath) {
                // screenshot reporter
                jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
                    dest: `${artifactsPath}`,
                    filename: 'e2e-report.html',
                    captureOnlyFailedSpecs: true,
                    reportOnlyFailedSpecs: false,
                    pathBuilder: (currentSpec, B, C) => {
                        // TODO: can not get browser name due to
                        // https://github.com/mlison/protractor-jasmine2-screenshot-reporter/issues/4
                        return currentSpec.description.replace(/[ :]/g, '-');
                    }
                }));
            }

            // browser.driver.manage().window().setSize(1280, 800);

        },
        capabilities: {
            'browserName': 'chrome'
        },
        framework: 'jasmine2',
        jasmineNodeOpts: {
            showColors: true,
            defaultTimeoutInterval: 30000
        }
    };

})(process.env);
