'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('InfoCtrl', ['$scope', '$window', 'CurrentLoginService', 'ViewScoutsService', 'ScoutInfoService', function ($scope, $window, CurrentLoginService, ViewScoutsService, ScoutInfoService) {
    $scope.scoutList = [];
    $scope.currentUser = CurrentLoginService.getCurrentUser();

    //console.log($scope.currentUser);

    $scope.changeScout = function(scoutId) {
        var toSend = {id: scoutId};
        ScoutInfoService.save(toSend, function(result) {
            if(result.status == "OK") {
                $scope.scout = result;
                console.log($scope.scout);
            }
        });
    }

    $scope.getScouts = function() {
        var toSend;
        toSend = {
            //leader_type: $scope.currentUser.leader_type,
            //rank_type: $scope.currentUser.rank_type,
            //pack_number: $scope.currentUser.pack_number,
            //parent_id: $scope.currentUser.adult_id
            leader_type: "leader",
            rank_type: "Bear",
            pack_number: "752",
            parent_id: null
        };
        ViewScoutsService.save(toSend, function(result) {
            if(result.status == "OK")
            {
                $scope.scoutList = result.scout;
            }
            else
            {
                $window.alert("There was an error loading the scout information.");
            }
        });
    }

    $scope.getScouts();

  }]);
