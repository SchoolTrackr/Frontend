/**
 * Created by Chandler on 2/12/2015.
 */
var schoolTrackr = angular.module('schoolTrackr',['ui.router', 'schoolTrackr.authentication', 'schoolTrackr.attendance']);

schoolTrackr.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: "partials/login.html"
        })
        .state('core', {
            abstract: true,
            templateUrl: "partials/core.html"
        })
        .state('core.dashboard', {
            url: "/",
            templateUrl: "partials/core.dashboard.html"
        });
});

schoolTrackr.controller('loginController', function($scope, AuthService) {
    $scope.credentials = {};
    $scope.login = function(credentials) {
        AuthService.login(credentials)
    }
});

schoolTrackr.run(function(AuthService, $state, $timeout){
    console.group('Running application checks');
    var authenticated = AuthService.isAuthenticated();
    if (authenticated == false) {
        $timeout(function(){
            $state.go('login')
        });
        console.log('User is not authenticated')
    }
    console.groupEnd()
});
