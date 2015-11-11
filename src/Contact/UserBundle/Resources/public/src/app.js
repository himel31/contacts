myModule = angular.module('contactsApp', ['ngRoute','ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'bundles/contactuser/views/list.html'
            })
            .when('/contact/new', {
                controller: 'NewController',
                templateUrl: 'bundles/contactuser/views/add.html'
            })
            .when('/contact/:id', {
                controller: 'SingleController',
                templateUrl: 'bundles/contactuser/views/single.html'
            })
            .otherwise({
                redirectTo: '/contacts'
            });
        //$locationProvider.html5Mode(true);
    });

    