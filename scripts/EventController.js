'use strict';

eventsApp.controller('EventController',
   
function EventController($scope) {
    $scope.event = {
        name: 'Prosius Birthday',
        date: '01/02/2017',
        time: '08:00 pm',
    location: {
        address: 'Czeremchowa',
        city:'Lublin'
    },
    imageUrl: '../images/pig.jpg'
    }
}
);