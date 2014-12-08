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
            id:1
        }, {
            name: "Tom",
            id:2
        }]
    };

    var userMap = {
        austin: {
            username:'austin',
            password:'tom'
        }
    };
    return {
        getAchievements: function(scoutId) {
            if(scoutId === 1)
                return mainInfoBob;
            else
                return mainInfoTom;
        },
        getScouts: function() {
            return scoutInfo;
        },
        verify: function(user) {
            var currentUser = userMap[user.username];
            if (user.username === currentUser.username && user.password == currentUser.password) {
                currentUser.status = 'verified';
            }
            else
                currentUser.status = 'failed';
            return currentUser;
        }
    };
}]);

