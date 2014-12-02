'use strict';

angular.module('cubScoutTrackerApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.username = "";
    $scope.password = "";
    $scope.confirmPass = "";
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.packNum = "";
    $scope.isLeader = false;
    $scope.isParent = false;
    $scope.leaderPhoneNumber = "";
    $scope.leaderGroup = "";
    $scope.selectedScouts = [];
    //The following will eventually be obtained from the database
    $scope.wolfScouts = ["ed", "edd", "eddy"];
    $scope.bearScouts = ["foo", "bar"];
    $scope.webelosScouts = ["bill"];
    
    $scope.selectLeader = function() {
        $scope.isLeader = true;
        $scope.isParent = false;
    };

    $scope.selectParent = function() {
        $scope.isParent = true;
        $scope.isLeader = false;
    };

    $scope.canSubmit = function() {
        if($scope.username !== "" && $scope.password !== "" && $scope.firstName !== "" && $scope.lastName !== "" && 
            $scope.email !== "" && $scope.packNum !== "" && $scope.confirmPass === $scope.password)
        {
            if($scope.isLeader && $scope.leaderPhoneNumber !== "" && $scope.leaderGroup !== "") //Can later add a clause to check for a valid pack
                return true;
            else if($scope.isParent && $scope.selectedScouts.length > 0)
                return true;
            else
                return false;
        }
        else
            return false;
    };

    $scope.submitInfo = function() {
        console.log("Info submitted");
        //this will later connect to the database and add the new information
    };

  });
