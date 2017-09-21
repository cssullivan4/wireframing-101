angular.module('myApp', ['myApp.controllers', 'ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true); //rids of hash-bang routing
    $routeProvider
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'PagesCtrl'
        })
        .otherwise('404', {
            templateUrl: '404.html',
            controller: 'PagesCtrl'
        });
}]);