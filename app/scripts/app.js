'use strict';

/**
 * @ngdoc overview
 * @name meetMeApp
 * @description
 * # meetMeApp
 *
 * Main module of the application.
 */
angular
    .module('meetMeApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ngMaterial',
        'meetMeApp.login',
        'meetMeApp.signup',
        'satellizer'
    ])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $authProvider) {
        $locationProvider.hashPrefix('');

        $urlRouterProvider.otherwise("/home");
        // 
        // Now set up the states 
        $stateProvider
            .state('features', {
                url: "/Features",
                templateUrl: "views/features.html"
            })

            .state('download', {
                url: "/Download",
                templateUrl: "views/download.html"
            })

            .state('security', {
                url: "/Security",
                templateUrl: "views/security.html"
            })

            .state('faq', {
                url: "/FAQ",
                templateUrl: "views/faq.html"
            })

            .state('login', {
                url: "/Login",
                templateUrl: "./modules/login/login.html"
            })

            .state('signup', {
                url: "/SignUp",
                templateUrl: "./modules/signup/signup.html"
            });

        $authProvider.facebook({
            clientId: '241453776316587'
        });

        // Optional: For client-side use (Implicit Grant), set responseType to 'token' (default: 'code')
        $authProvider.facebook({
            clientId: '241453776316587',
            responseType: 'token'
        });

        $authProvider.google({
            clientId: 'Google Client ID'
        });

        $authProvider.github({
            clientId: 'GitHub Client ID'
        });

        $authProvider.linkedin({
            clientId: 'LinkedIn Client ID'
        });

        $authProvider.instagram({
            clientId: 'Instagram Client ID'
        });

        $authProvider.yahoo({
            clientId: 'Yahoo Client ID / Consumer Key'
        });

        $authProvider.live({
            clientId: 'Microsoft Client ID'
        });

        $authProvider.twitch({
            clientId: 'rPGrA9fqj5ZV43BEVoUI8Ryp0'
        });

        $authProvider.bitbucket({
            clientId: 'Bitbucket Client ID'
        });

        $authProvider.spotify({
            clientId: 'Spotify Client ID'
        });

        // No additional setup required for Twitter

        $authProvider.oauth2({
            name: 'foursquare',
            url: '/auth/foursquare',
            clientId: 'Foursquare Client ID',
            redirectUri: window.location.origin,
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
        });


        $authProvider.httpInterceptor = function () { return true; },
            $authProvider.withCredentials = false;
        $authProvider.tokenRoot = null;
        $authProvider.baseUrl = '/';
        $authProvider.loginUrl = '/auth/login';
        $authProvider.signupUrl = '/auth/signup';
        $authProvider.unlinkUrl = '/auth/unlink/';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'satellizer';
        $authProvider.tokenHeader = 'Authorization';
        $authProvider.tokenType = 'Bearer';
        $authProvider.storageType = 'localStorage';

        // Facebook
        $authProvider.facebook({
            name: 'facebook',
            url: '/auth/facebook',
            authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
            redirectUri: window.location.origin + '/',
            requiredUrlParams: ['display', 'scope'],
            scope: ['email'],
            scopeDelimiter: ',',
            display: 'popup',
            oauthType: '2.0',
            popupOptions: { width: 580, height: 400 }
        });

        // Google
        $authProvider.google({
            url: '/auth/google',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            redirectUri: window.location.origin,
            requiredUrlParams: ['scope'],
            optionalUrlParams: ['display'],
            scope: ['profile', 'email'],
            scopePrefix: 'openid',
            scopeDelimiter: ' ',
            display: 'popup',
            oauthType: '2.0',
            popupOptions: { width: 452, height: 633 }
        });

        // GitHub
        $authProvider.github({
            url: '/auth/github',
            authorizationEndpoint: 'https://github.com/login/oauth/authorize',
            redirectUri: window.location.origin,
            optionalUrlParams: ['scope'],
            scope: ['user:email'],
            scopeDelimiter: ' ',
            oauthType: '2.0',
            popupOptions: { width: 1020, height: 618 }
        });

        // Instagram
        $authProvider.instagram({
            name: 'instagram',
            url: '/auth/instagram',
            authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
            redirectUri: window.location.origin,
            requiredUrlParams: ['scope'],
            scope: ['basic'],
            scopeDelimiter: '+',
            oauthType: '2.0'
        });

        // LinkedIn
        $authProvider.linkedin({
            url: '/auth/linkedin',
            authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
            redirectUri: window.location.origin,
            requiredUrlParams: ['state'],
            scope: ['r_emailaddress'],
            scopeDelimiter: ' ',
            state: 'STATE',
            oauthType: '2.0',
            popupOptions: { width: 527, height: 582 }
        });

        // Twitter
        $authProvider.twitter({
            url: '/auth/twitter',
            authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
            redirectUri: window.location.origin,
            oauthType: '1.0',
            popupOptions: { width: 495, height: 645 }
        });

        // Twitch
        $authProvider.twitch({
            url: '/auth/twitch',
            authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
            redirectUri: window.location.origin,
            requiredUrlParams: ['scope'],
            scope: ['user_read'],
            scopeDelimiter: ' ',
            display: 'popup',
            oauthType: '2.0',
            popupOptions: { width: 500, height: 560 }
        });

        // Windows Live
        $authProvider.live({
            url: '/auth/live',
            authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
            redirectUri: window.location.origin,
            requiredUrlParams: ['display', 'scope'],
            scope: ['wl.emails'],
            scopeDelimiter: ' ',
            display: 'popup',
            oauthType: '2.0',
            popupOptions: { width: 500, height: 560 }
        });

        // Yahoo
        $authProvider.yahoo({
            url: '/auth/yahoo',
            authorizationEndpoint: 'https://api.login.yahoo.com/oauth2/request_auth',
            redirectUri: window.location.origin,
            scope: [],
            scopeDelimiter: ',',
            oauthType: '2.0',
            popupOptions: { width: 559, height: 519 }
        });

        // Bitbucket
        $authProvider.bitbucket({
            url: '/auth/bitbucket',
            authorizationEndpoint: 'https://bitbucket.org/site/oauth2/authorize',
            redirectUri: window.location.origin + '/',
            optionalUrlParams: ['scope'],
            scope: ['email'],
            scopeDelimiter: ' ',
            oauthType: '2.0',
            popupOptions: { width: 1020, height: 618 }
        });

        // Spotify
        $authProvider.spotify({
            url: '/auth/spotify',
            authorizationEndpoint: 'https://accounts.spotify.com/authorize',
            redirectUri: window.location.origin,
            optionalUrlParams: ['state'],
            requiredUrlParams: ['scope'],
            scope: ['user-read-email'],
            scopePrefix: '',
            scopeDelimiter: ',',
            oauthType: '2.0',
            popupOptions: { width: 500, height: 530 }
        });

        // Generic OAuth 2.0
        $authProvider.oauth2({
            name: null,
            url: null,
            clientId: null,
            redirectUri: null,
            authorizationEndpoint: null,
            defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
            requiredUrlParams: null,
            optionalUrlParams: null,
            scope: null,
            scopePrefix: null,
            scopeDelimiter: null,
            state: null,
            oauthType: null,
            popupOptions: null,
            responseType: 'code',
            responseParams: {
                code: 'code',
                clientId: 'clientId',
                redirectUri: 'redirectUri'
            }
        });

        // Generic OAuth 1.0
        $authProvider.oauth1({
            name: null,
            url: null,
            authorizationEndpoint: null,
            redirectUri: null,
            oauthType: null,
            popupOptions: null
        });
    });


