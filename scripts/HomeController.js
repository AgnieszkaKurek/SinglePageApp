'use strict';

eventsApp.controller('homeController',
    function HomeController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function (event, form) {
            if(form.$valid) {
                eventData.save(event);
            }
        };

        $scope.cancelEdit = function () {
            window.location = "Home.html";
        };

    }
);