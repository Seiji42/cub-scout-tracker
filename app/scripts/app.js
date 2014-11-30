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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
