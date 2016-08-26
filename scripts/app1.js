'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute'])
.config(function($routeProvider) {
 $routeProvider.when('/Home',
 {
     templateUrl:'templates/Home.html',
     controller: 'HomeController'
 });
  $routeProvider.when('/Eventspage',
 {
     templateUrl:'templates/Eventspage.html',
     controller: 'EventspageController'
 });


});
  