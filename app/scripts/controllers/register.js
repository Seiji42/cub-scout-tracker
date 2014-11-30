'use strict';

angular.module('cubScoutTrackerApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.username = "";
    $scope.password = "";
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.packNum = 0;
    $scope.isLeader = false;
    $scope.isParent = false;
    $scope.scouts = {};
    
    $scope.selectLeader() = function() {
        $scope.isLeader = true;
        $scope.isParent = false;
    };

    $scope.selectParent() = function() {
        $scope.isParent = true;
        $scope.isLeader = false;
    };
  });
