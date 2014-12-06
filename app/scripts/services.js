angular.module('cubScoutTrackerApp').
factory('fakeData', [ function() {
    var mainInfo = {
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
    return mainInfo;
}]);

