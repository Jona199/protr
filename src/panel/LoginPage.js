"use strict";

var LoginPage = require('./LoginPage.po.js');

let LoginPageHelper = function () {

    var Q = require('q');

    let getAccessToken = function() {
        let defer = Q.defer();

        let getCookie = function() {
            var match;
            if (
                window.location.href.match(/\/panel/) &&
                (match = document.cookie.match(/access_token=([^;]+)/))
            ) {
                return match[1];
            }
        };

        browser.executeScript(getCookie).then(function(cookie) {
            if (cookie) {
                defer.resolve(cookie);
            } else {
                defer.reject();
            }
        });

        return defer.promise;
    };

    let testApiRequest = function(accessToken) {
        let defer = Q.defer(),
            request = require('request');

        let host = process.env.npm_config_base_url || 'https://www.easysend.pl';

        let options = {
            url: host + '/api/profile',
            rejectUnauthorized: false,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        };

        request(options, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                defer.resolve(JSON.parse(response.body));
            } else {
                defer.reject();
            }
        });

        return defer.promise;
    };

    this.isUserLoggedIn = function (login, password) {
        let defer = Q.defer();

        login = login || 'supo1@wp.pl';
        password = password || '12345678';

        getAccessToken()
            .then(testApiRequest)
            .then(function(profile) {
                if (profile.number !== login && profile.email !== login) {
                    throw Error();
                }
                defer.resolve();
            })
            .fail(function() {
                LoginPage.login(login, password);
                defer.resolve();
            });

        return defer.promise;
    };

    this.isBusinessUserLoggedIn = function() {
        return this.isUserLoggedIn('26533', '12345678');
    };
};

module.exports = LoginPageHelper;


