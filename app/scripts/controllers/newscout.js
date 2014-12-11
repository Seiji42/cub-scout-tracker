'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('RegisterScoutCtrl', ['$scope', '$location', '$window', 'RegisterScoutService', 'GetLeaderService', 'UpdateScoutLeaderService', function ($scope, $location, $window, RegisterScoutService, GetLeaderService, UpdateScoutLeaderService) {

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

        RegisterScoutService.save(toSend, function(result) {
            if(result.status === "OK")
            {
                var prevResult = result;
                var leaderQuery = {
                    rank_type: $scope.group,
                    pack_number: $scope.packNum
                };
                var leaders = [];
                GetLeaderService.save(leaderQuery, function(result) {
                   if(result.status == "OK")
                   {
                        leaders = result.leaders;
                        var scoutToSend = {
                            first_name: $scope.firstName,
                            last_name: $scope.lastName,
                            birth_date: $scope.birthdate,
                            pack_number: $scope.packNum,
                            rank_type: $scope.group,
                            scout_id: prevResult.scout_id,
                            parent_id: null,
                            leader_id: leaders[0].adult_id
                        };
                        console.log(scoutToSend);
                        UpdateScoutLeaderService.save(scoutToSend, function(result) {
                            console.log("Leader assigned to " + scoutToSend.first_name);
                        });
                    }
                });
                //$location.path("/info");
            }
            else
                $window.alert("There was an error registering the new scout.  Please try again.");
        });
    }

  }]);
