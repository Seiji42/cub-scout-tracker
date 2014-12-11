'use strict';

angular.module('cubScoutTrackerApp')
  .controller('RegisterCtrl', ['$scope', '$window', 'FakeData', 'GetScoutNoParentService', 'RegisterAdultService', 'AddParentIDService', 'UpdateScoutLeaderService', function ($scope, $window, FakeData, GetScoutNoParentService, RegisterAdultService, AddParentIDService, UpdateScoutLeaderService) {
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
        $scope.wolfScouts = $scope.getScoutsByGroup("Wolf");
        $scope.bearScouts = $scope.getScoutsByGroup("Bear");
        $scope.webelosScouts = $scope.getScoutsByGroup("Webelos");
    };

    $scope.selectScout = function(scout) {
        var index = -1;

        for (var i = 0; i < $scope.selectedScouts.length; i++) {
            if ($scope.selectedScouts[i].scout_id === scout.scout_id) {
                index = i;
                break;
            }
        }

        // is currently selected
        if (index > -1) {
          $scope.selectedScouts.splice(index, 1);
        }

        // is newly selected
        else {
          $scope.selectedScouts.push(scout);
        }

        console.log(scout.first_name + " selected; ");

        console.log($scope.selectedScouts);
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
        var toSend = {
            first_name: $scope.firstName,
            last_name: $scope.lastName,
            username: $scope.username,
            password: $scope.password,
            leader_type: "adult",
            rank_type: "",
            phone_number: "",
            email: $scope.email,
            pack_number: $scope.packNum
        };
        if($scope.isLeader)
        {
            toSend.leader_type = "leader";
            toSend.phone_number = $scope.leaderPhoneNumber;
            toSend.rank_type = $scope.leaderGroup;
        }
        RegisterAdultService.save(toSend, function(result) {
            if(result.status === "OK") {
                if($scope.isParent)
                {
                    for(var i=0; i<$scope.selectedScouts.length; i++)
                    {
                        var scoutToSend = {
                            first_name: $scope.selectedScouts[i].first_name,
                            last_name: $scope.selectedScouts[i].last_name,
                            birth_date: $scope.selectedScouts[i].birth_date,
                            pack_number: $scope.selectedScouts[i].pack_number,
                            rank_type: $scope.selectedScouts[i].rank_type,
                            scout_id: $scope.selectedScouts[i].scout_id,
                            parent_id: result.adult_id,
                            leader_id: $scope.selectedScouts[i].leader_id
                        };
                        AddParentIDService.save(scoutToSend, function(result) {
                            console.log("Parent assigned to " + scoutToSend.first_name);
                        });
                    }
                }
                else if($scope.isLeader)
                {
                    for(var i=0; i<$scope.scouts.length; i++)
                    {
                        if($scope.scouts[i].rank_type === $scope.leaderGroup && $scope.scouts[i].pack_number === $scope.packNum)
                        {
                            //This is where we would assign all the scouts to a leader id
                            
                            var scoutToSend = {
                                first_name: $scope.scouts[i].first_name,
                                last_name: $scope.scouts[i].last_name,
                                birth_date: $scope.scouts[i].birth_date,
                                pack_number: $scope.scouts[i].pack_number,
                                rank_type: $scope.scouts[i].rank_type,
                                scout_id: $scope.scouts[i].scout_id,
                                parent_id: $scope.scouts[i].parent_id,
                                leader_id: result.adult_id
                            };
                            UpdateScoutLeaderService.save(scoutToSend, function(result) {
                                console.log("Parent assigned to " + scoutToSend.first_name);
                            });
                        }
                    }
                }
            }
            else
                $window.alert("There was an error registering with that username.  Please try a different username");
        });
        console.log($scope.selectedScouts);
        //this will later connect to the database and add the new information
    };

  }]);
