'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource'])
.config(function($routeProvider) {
 $routeProvider.when('/Home',
 {
     templateUrl:'templates/Home.html',
     controller: 'EditEventController'
 })
});
  