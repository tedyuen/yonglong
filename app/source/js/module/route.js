/**
 * Created by tedyuen on 16-12-8.
 */
require('angular');
require('angular-ui-router');
var myApp = angular.module("myApp",['ui.router']);
// myApp.controller('SomeController',function($scope){
//   $scope.lastName = "Doe";
// });

myApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/index');
  $stateProvider
    .state('index',{
      url:'/index',
      templateUrl:'template/main.html',
      controller: 'indexControler'
    })
}]);

myApp.controller("indexControler",['$timeout',function ($timeout) {
  var UiState = require('./utils/UiState');
  var uiState = new UiState();
  uiState.ready();
  // $timeout(uiState.ready(),500);
}]);
