'use strict';

eventsApp.controller('EventspageController',
    function EventspageController($scope,$location, eventData) {
        $scope.events = eventData.getAllEvents();
    }
);