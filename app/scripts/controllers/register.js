'use strict';

angular.module('cubScoutTrackerApp')
  .controller('RegisterCtrl', ['$scope', 'FakeData', function ($scope, FakeData) {
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
    $scope.selectedScoutIDs = [];
    //The following will eventually be obtained from the database
    $scope.wolfScouts = FakeData.getScoutsByGroup("Wolf");
    $scope.bearScouts = FakeData.getScoutsByGroup("Bear");
    $scope.webelosScouts = FakeData.getScoutsByGroup("Webelos");
    
    $scope.selectLeader = function() {
        $scope.isLeader = true;
        $scope.isParent = false;
    };

    $scope.selectParent = function() {
        $scope.isParent = true;
        $scope.isLeader = false;
    };

    $scope.selectScout = function(scout) {
        var index = $scope.selectedScoutIDs.indexOf(scout.id);

        // is currently selected
        if (index > -1) {
          $scope.selectedScoutIDs.splice(index, 1);
        }

        // is newly selected
        else {
          $scope.selectedScoutIDs.push(scout.id);
        }

        console.log(scout.name + " selected; ");

        console.log("Current scouts: " + $scope.selectedScoutIDs);
    };

    $scope.canSubmit = function() {
        var result = false;
        if($scope.username !== "" && $scope.password !== "" && $scope.firstName !== "" && $scope.lastName !== "" && 
            $scope.email !== "" && $scope.packNum !== "" && $scope.password === $scope.confirmPass)
        {
            if($scope.isLeader && $scope.leaderPhoneNumber !== "" && $scope.leaderGroup !== "") //Can later add a clause to check for a valid pack
                result = true;
            else if($scope.isParent && $scope.selectedScouts.length > 0)
                result = true;
            else
            {
                result = false;
            }
        }
        else
        {
            result = false;
        }
        return result;
    };

    $scope.submitInfo = function() {
        console.log("Info submitted");
        console.log($scope.selectedScouts);
        //this will later connect to the database and add the new information
    };

  }]);
