angular.module('cubScoutTrackerApp').
factory('FakeData', [ function() {
    var mainInfoBob = {
        categories: [{
            id:1,
            achievements:[{
                id:1,
                num_required:1,
                requirements:[{
                    id: 'a',
                    description: 'Do stuff',
                    completion_date: '',
                    required: false
                },
                {
                    id: 'b',
                    description: 'Do other stuff',
                    completion_date: '',
                    required: false
                }]
            },{
                id: 2,
                num_required: 0,
                requirements: [{
                    id: 'a',
                    description: 'Do stuff',
                    completion_date: '',
                    required: true
                },
                {
                    id: 'b',
                    description: 'Do other stuff',
                    completion_date: '',
                    required: true
                }]
            }]
        }]
    }
    var mainInfoTom = {
        categories: [{
            id:1,
            achievements:[{
                id:1,
                num_required:1,
                requirements:[{
                    id: 'a',
                    description: 'Do stuff',
                    completion_date: '',
                    required: false
                },
                {
                    id: 'b',
                    description: 'Do other stuff',
                    completion_date: '',
                    required: false
                }]
            },{
                id: 2,
                num_required: 0,
                requirements: [{
                    id: 'a',
                    description: 'Do weird stuff',
                    completion_date: '2014-12-125',
                    required: true
                },
                {
                    id: 'b',
                    description: 'Do other weirder stuff',
                    completion_date: '',
                    required: true
                }]
            }]
        }]
    }
    var mainInfoEd = {
        categories: [{
            id:1,
            achievements:[{
                id:1,
                num_required:1,
                requirements:[{
                    id: 'a',
                    description: 'Do stuff',
                    completion_date: '',
                    required: false
                },
                {
                    id: 'b',
                    description: 'Do other stuff',
                    completion_date: '',
                    required: false
                }]
            },{
                id: 2,
                num_required: 0,
                requirements: [{
                    id: 'a',
                    description: 'Do stuff',
                    completion_date: '2014-10-15',
                    required: true
                },
                {
                    id: 'b',
                    description: 'Do other stuff',
                    completion_date: '',
                    required: true
                }]
            }]
        }]
    }
    var scoutInfo = {
        scouts:[{
            name:"Bob",
            id:1,
            group:"Wolf"
        }, {
            name: "Tom",
            id:2,
            group:"Bear"
        }, {
            name:"Ed",
            id:3,
            group:"Webelos"
        }]
    };

    var userMap = {
        austin: {
            username:'austin',
            password:'tom'
        },
        jason: {
            username:'jason',
            password:'jason'
        }
    };
    return {
        getAchievements: function(scoutId) {
            if(scoutId === 1)
                return mainInfoBob;
            else if(scoutId === 2)
                return mainInfoTom;
            else
                return mainInfoEd;
        },
        getScouts: function() {
            return scoutInfo;
        },
        getScoutsByGroup: function(group) {
            scoutsByGroup = [];
            for(i=0; i<scoutInfo.scouts.length; i++) {
                if(scoutInfo.scouts[i].group === group) {
                    scoutsByGroup.push(scoutInfo.scouts[i]);
                }
            }
            return scoutsByGroup;
        },
        verify: function(user) {
            debugger
            var currentUser = angular.copy(userMap[user.username]);
            if (currentUser && user.username === currentUser.username && user.password == currentUser.password) {
                currentUser.status = 'verified';
            }
            else {
                currentUser = {status:'failed'};
            }
            return currentUser;
        }
    };
}]).
factory('Test', ['$resource', function($resource) {
    return $resource('http://localhost:8084/scoutswithnoparent', {});
}]).
factory('Test2', ['$resource', function($resource) {
    return $resource('http://localhost:8084/registerscout', {});
}]);

