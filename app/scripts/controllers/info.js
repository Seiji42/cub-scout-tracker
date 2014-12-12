'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('InfoCtrl', ['$scope', '$window', 'CurrentLoginService', 'ViewScoutsService', 'ScoutInfoService', 'SubmitDateService', function ($scope, $window, CurrentLoginService, ViewScoutsService, ScoutInfoService, SubmitDateService) {
    $scope.scoutList = [];
    $scope.currentUser = CurrentLoginService.getCurrentUser();
    $scope.currentScoutId = "";

    //console.log($scope.currentUser);

    $scope.changeScout = function(scoutId) {
        var toSend = {id: scoutId};
        ScoutInfoService.save(toSend, function(result) {
            if(result.status == "OK") {
                $scope.currentScoutId = scoutId;
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

    $scope.submitDate = function(group, scout_id, req_id, date) {
        console.log(date);
        var toSend = {
            rank_type: group,
            date_done: date,
            req_id: req_id,
            scout_id: $scope.currentScoutId
        };
        console.log(toSend);
        SubmitDateService.save(toSend, function(result) {
            if(result.status == "OK")
            {

            }
            else
            {
                $window.alert("There was an error uploading the date for that requirement.  Please try again.");
            }
        });
    }

    $scope.getScouts();

  }]);
