'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('infoCtrl', ['$scope', 'fakeData', function ($scope, fakeData) {
    $scope.scoutList = fakeData.getScouts();

    $scope.changeScout = function(scoutId) {
        $scope.scout = fakeData.getAchievements(scoutId);
    }
  }]);
