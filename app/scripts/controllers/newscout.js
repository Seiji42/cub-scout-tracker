'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('RegisterScoutCtrl', ['$scope', 'Test2', 'FakeData', function ($scope, Test2, FakeData) {

    $scope.group = "";
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.birthdate = "";
    $scope.packNum = "";

    $scope.canSubmit = function() {
        if($scope.group !== "" && $scope.firstName !== "" && $scope.lastName !== "" && $scope.packNum !== "" && $scope.birthdate !== "")
            return true;
        else
            return false;
    }
    
    $scope.submitInfo = function() {
        var toSend = {
            first_name: $scope.firstName,
            last_name: $scope.lastName,
            rank_type: $scope.group,
            birth_date: $scope.birthdate,
            pack_number: $scope.packNum
        };

        Test2.save(toSend, function(result) {
            console.log(result);
        });
    }

  }]);
