'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'ui.bootstrap',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cv', {templateUrl: 'partials/curriculum-vitae.html', controller: 'CVController'});
        $routeProvider.otherwise({redirectTo: '/cv'});
    }]);
