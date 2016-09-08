'use strict';

eventsApp.controller('EventController',
function EventController($scope) {
    
    $scope.event = {
        name: 'Pig Party',
        date: '01/02/2017',
        time: '08:00 pm',
    location: {
        address: 'Czeremchowa',
        city:'Lublin'
    },
    imageUrl: '../images/pig.jpg',
    sessions: [
        {
            name: 'Prosius Birthday',
            creatorName:'Ryjek',
            duration:'4h',
            abstract:'Fun at the cake and other delicacies with friends and family.',
            upVoteCount: 0
        },
        {
            name: 'Fun for pigs',
            creatorName:'Ryjek',
            duration:'1h',
            abstract:'Dancing party for large and small  piggies.You can twist your ham.',
            upVoteCount: 0
        },
        
           
    ]
    }
}
);