'use strict';

/**
 * @ngdoc overview
 * @name cubScoutTrackerApp
 * @description
 * # cubScoutTrackerApp
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
