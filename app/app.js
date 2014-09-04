var app = angular.module('MemoryLeakDemo', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
    'use strict';

    $locationProvider.hashPrefix('!');

    $routeProvider.when('/list', {
        controller: 'ListController',
        templateUrl: 'app/partials/list.html'
    }).when('/details/:itemId', {
        controller: 'DetailsController',
        templateUrl: 'app/partials/details.html'
    }).otherwise({redirectTo:'/list'})


});