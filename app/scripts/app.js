'use strict';

/**
 * @ngdoc overview
 * @name tempScoutApp
 * @description
 * # tempScoutApp
 *
 * Main module of the application.
 */
angular
  .module('cubScoutTrackerApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
