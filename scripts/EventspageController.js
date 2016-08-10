'use strict';

eventsApp.controller('EventspageController',
    function Page2Controller($scope,$location, eventData) {

        $scope.events = eventData.getAllEvents();

    }
);