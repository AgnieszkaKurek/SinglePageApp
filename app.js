'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource'])
.config(function($routeProvider) {
 $routeProvider.when('/Home',
 {
     templateUrl:'templates/Home.html',
     controller: 'HomeController'
 });
  $routeProvider.when('/Page2',
 {
     templateUrl:'templates/Page2.html',
     controller: 'Page2Controller'
 });


});
  