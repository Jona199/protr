'use strict';

const gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('webdriver-update', $.protractor.webdriver_update);
gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

function runProtractor(done) {
    var params = process.argv;
    var args = params.length > 3 ? [params[3], params[4]] : [];

    gulp.src('src/panel/*.js')
        .pipe($.protractor.protractor({
            configFile: 'protractor.conf.js',
            args: args
        }))
        .on('error', function (err) {
            throw err;
        })
        .on('end', function () {
            done();
        });
}

gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', ['webdriver-update'], runProtractor);
