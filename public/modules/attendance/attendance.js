var attendance = angular.module('schoolTrackr.attendance', ['ui.router']);

attendance.config(function($stateProvider) {
    $stateProvider
        .state('core.attendance', {
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('core.attendance.dashboard', {
            url: "/attendance",
            templateUrl: "modules/attendance/partials/core.attendance.dashboard.html"
        })
});

attendance.run(function(){
    console.group('Preparing Attendance module');
    console.groupEnd()
});