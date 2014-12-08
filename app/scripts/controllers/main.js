'use strict';

/**
 * @ngdoc function
 * @name cubScoutTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cubScoutTrackerApp
 */
angular.module('cubScoutTrackerApp')
  .controller('MainCtrl', ['$scope', '$location', 'FakeData', function ($scope, $location, FakeData) {
  	$scope.user = {
  		username:'',
  		password:'',
  		message:null
  	};

  	$scope.login = function() {
  		debugger
  		$scope.user.message = null;
  		if($scope.user.username != '' && $scope.user.password != '') {
  			$scope.user = FakeData.verify($scope.user);
			if($scope.user.status === 'verified') {
				$location.path('/info');
	  		}
	  		else {
	  			$scope.user.message = "Invalid username or password"
	  		}
  		}
  		else {
  			$scope.user.message = "Please input a username and a password"
  		}
  	}
  }]);
