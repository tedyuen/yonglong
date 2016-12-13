/**
 * Created by tedyuen on 16-12-8.
 */
require('angular');
require('angular-ui-router');
var myApp = angular.module("myApp",['ui.router']);


myApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.when('','/main/inner/customer_order').otherwise('/main/inner/customer_order');
  $stateProvider
    .state('login',{
      url:'/login',
      templateUrl:'template/login.html'
    })
    .state('main',{
      url:'/main',
      templateUrl:'template/main.html',
    })
    .state('main.inner',{
      url:'/inner',
      views:{
        'nav': {
          templateUrl: 'template/nav.html'
        },
        'sidebar': {
          templateUrl: 'template/sidebar.html'
        },
        'footer': {
          templateUrl: 'template/footer.html',
          controller: 'indexControler'
        }
      }
    })
    .state('main.inner.customer_order',{
      url:'/customer_order',
      views: {
        'content@main': {
          templateUrl: 'template/inner/customer_order.html'
        }
      }
    })

}]);

myApp.controller("indexControler",function () {
  var UiState = require('./utils/UiState');
  var uiState = new UiState();
  uiState.ready();
});

myApp.controller('customerOrderControler',function () {
  console.log('customerOrderControler');
});
