/**
 * Created by tedyuen on 16-12-8.
 */
yonglongApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.when('','/main/inner').otherwise('/main/inner');
  $stateProvider
    .state('login',{//登录页
      url:'/login',
      templateUrl:'template/login.html'
    })
    .state('main',{//主页
      url:'/main',
      templateUrl:'template/main.html',
    })
    .state('main.inner',{//主页
      url:'/inner',
      views:{
        'nav': {
          templateUrl: 'template/nav.html'
        },
        'sidebar': {
          templateUrl: 'template/sidebar.html',
          controller: 'mainController'
        },
        'footer': {
          templateUrl: 'template/footer.html'
        }
      }
    })
    .state('main.inner.customer_order',{//客户下单
      url:'/customer_order',
      views: {
        'content@main': {
          templateUrl: 'template/inner/customer_order.html',
          controller: 'customerOrderController'
        }
      }
    })
}]);



