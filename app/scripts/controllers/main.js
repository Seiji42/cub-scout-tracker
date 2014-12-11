'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('MainCtrl', ['$scope', '$location', 'FakeData', 'VerifyUserService', function ($scope, $location, FakeData, VerifyUserService) {
  	$scope.user = {
  		username:'',
  		password:'',
  		message:null
  	};

  	$scope.login = function() {
  		$scope.user.message = null;
  		if($scope.user.username != '' && $scope.user.password != '') {
        var toSend = {
          username: $scope.user.username,
          password: $scope.user.password
        };
        VerifyUserService.save(toSend, function(result) {
          if(result.status === 'OK') {
            $location.path('/info');
          }
          else {
            $scope.user.message = "Invalid username or password"
          }
        });
      }
      else {
        $scope.user.message = "Please input a username and a password"
      }
    }
  }]);
