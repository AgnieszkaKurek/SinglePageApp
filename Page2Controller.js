'use strict';

eventsApp.controller('Page2Controller',
    function Page2Controller($scope,$location, eventData) {

        $scope.events = eventData.getAllEvents();

    }
);