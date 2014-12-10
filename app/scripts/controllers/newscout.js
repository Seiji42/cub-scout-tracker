'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('RegisterScoutCtrl', ['$scope', 'FakeData', function ($scope, FakeData) {

    $scope.group = "";
    $scope.firstName = "";
    $scope.lastName = "";

    $scope.canSubmit = function() {
        if($scope.group !== "" && $scope.firstName !== "" && $scope.lastName !== "")
            return true;
        else
            return false;
    }
    
    $scope.submitInfo = function() {
        console.log("New Scout Submitted");
        return;
    }

  }]);
