'use strict';

var app = angular.module('interviewApp', ['ui.router','log', 'register', 'login', 'home']);
app.controller('epamController', ['$scope', 'logger', function($scope, logger) {
  logger.info('onload');
  $scope.logoname = 'Epam';
}]);


app.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('index', {
              url: '/',
              templateUrl: 'templates/partial-main.html'
          })
          .state('registration', {
              url: '/register',
              templateUrl: 'templates/partial-register.html',
              controller: 'RegistrationController'
          })
          .state('login', {
              url: '/login',
              templateUrl: 'templates/partial-login.html',
              controller: 'LoginController'
          })
          .state('home', {
              url: '/home',
              templateUrl: 'templates/partial-home.html',
              controller: 'HomepageController',
          });
      });
