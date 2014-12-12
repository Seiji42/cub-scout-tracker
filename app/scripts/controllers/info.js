'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('InfoCtrl', ['$scope', '$window', 'CurrentLoginService', 'ViewScoutsService', function ($scope, $window, CurrentLoginService, ViewScoutsService) {
    $scope.scoutList = [];
    $scope.currentUser = CurrentLoginService.getCurrentUser();
    console.log($scope.currentUser);

    $scope.changeScout = function(scoutId) {
        $scope.scout = FakeData.getAchievements(scoutId);
    }

    $scope.getScouts = function() {
        var toSend;
        toSend = {
            leader_type: $scope.currentUser.leader_type,
            rank_type: $scope.currentUser.rank_type,
            pack_number: $scope.currentUser.pack_number,
            parent_id: $scope.currentUser.adult_id
        };
        ViewScoutsService.save(toSend, function(result) {
            if(result.status == "OK")
            {
                console.log("We're good!");
            }
            else
            {
                $window.alert("There was an error loading the scout information.");
            }
        });
    }

    $scope.scoutList = $scope.getScouts();
    console.log($scope.scoutList);

  }]);
