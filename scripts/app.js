'use strict';

var app = angular.module("eventsApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/home", {
        templateUrl : "Home.html"
    })
    .when("/event", {
        templateUrl : "EventDetails.html"
    })
    .when("/new", {
        templateUrl : "NewEvent.html"
    });
});