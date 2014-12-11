'use strict';

angular.module('cubScoutTrackerApp')
  .controller('RegisterCtrl', ['$scope', 'FakeData', 'GetScoutNoParentService', function ($scope, FakeData, GetScoutNoParentService) {
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
    $scope.scouts = [];
    //The following will eventually be obtained from the database
    $scope.wolfScouts = [];
    $scope.bearScouts = [];
    $scope.webelosScouts = [];
    
    $scope.getScoutsByGroup = function(group) {
        var scoutsByGroup = [];
        for(var i=0; i<$scope.scouts.length; i++) {
            if($scope.scouts[i].rank_type === group) {
                scoutsByGroup.push($scope.scouts[i]);
            }
        }
        console.log(scoutsByGroup);
        return scoutsByGroup;
    };

    $scope.getScouts = function() {
        var results = GetScoutNoParentService.get(function() {
            $scope.scouts = results.scout;
            console.log($scope.scouts);
        });
    }; 

    $scope.getScouts();

    $scope.selectLeader = function() {
        $scope.isLeader = true;
        $scope.isParent = false;
    };

    $scope.selectParent = function() {
        $scope.isParent = true;
        $scope.isLeader = false;
        console.log($scope.scouts.length);
        $scope.wolfScouts = $scope.getScoutsByGroup("Wolf");
        $scope.bearScouts = $scope.getScoutsByGroup("Bear");
        $scope.webelosScouts = $scope.getScoutsByGroup("Webelos");
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
