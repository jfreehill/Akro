'use strict';

/**
 * @ngdoc overview
 * @name akroApp
 * @description
 * # akroApp
 *
 * Main module of the application.
 */
angular
.module('akroApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router'
])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    .otherwise('/');

    $stateProvider
    .state('index', {
        url: '/',
        controller: 'MainCtrl'
    });

    $locationProvider.html5Mode(true);
}]);
