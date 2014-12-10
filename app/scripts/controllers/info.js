'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('InfoCtrl', ['$scope', 'FakeData', function ($scope, FakeData) {
    $scope.scoutList = FakeData.getScouts();
    console.log($scope.scoutList);

    $scope.changeScout = function(scoutId) {
        $scope.scout = FakeData.getAchievements(scoutId);
    }
  }]);
