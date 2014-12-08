'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('infoCtrl', ['$scope', 'FakeData', function ($scope, FakeData) {
    $scope.scoutList = FakeData.getScouts();

    $scope.changeScout = function(scoutId) {
        $scope.scout = FakeData.getAchievements(scoutId);
    }
  }]);
