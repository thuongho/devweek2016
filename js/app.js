(function () {

  // MODULE
  var cameraApp = angular.module('cameraApp', ['ngResource', 'ngRoute']);

  // ROUTING
  cameraApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
      })
  });

  // SERVICES
  cameraApp.service('cityService', function (){
    this.city = 'San Francisco, CA';
  });

  // DIRECTIVES

  // CONTROLLERS
  cameraApp.controller('mainController', ['$scope', 'cityService', function ($scope, cityService){

    $scope.cityName = cityService.city;
    $scope.$watch('cityName', function () {
      cityService.city = $scope.cityName;
    });
    
  }]);



}());