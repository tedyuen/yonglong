/**
 * Created by tedyuen on 16-12-8.
 */
yonglongApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
  // $urlRouterProvider.when('','/main/companyinner/create_order').otherwise('/main/companyinner/create_order');
  $urlRouterProvider.when('','/main/userinner/wanner_order').otherwise('/main/userinner/wanner_order');
  // $urlRouterProvider.when('','/register_user').otherwise('/register_user');
  $stateProvider
    .state('login',{//登录页
      url:'/login',
      templateUrl:'template/login.html'
    })
    .state('register_company',{//发货方注册页
      url:'/register_company',
      templateUrl:'template/register_company.html',
      controller:'registerCompanyController'
    })
    .state('register_user',{//承运方注册页
      url:'/register_user',
      templateUrl:'template/register_user.html',
      controller:'userRegisterController'
    })

    .state('main',{//主页
      url:'/main',
      templateUrl:'template/main.html',
    });

  // 承运方路由
  $stateProvider
    .state('main.userinner',{//主页
      url:'/userinner',
      views:{
        'nav': {
          templateUrl: 'template/nav.html'
        },
        'sidebar': {
          templateUrl: 'template/sidebar_userinner.html',
          controller: 'mainController'
        },
        'footer': {
          templateUrl: 'template/footer.html'
        }
      }
    })
    .state('main.userinner.wanner_order',{//我要接单
      url:'/wanner_order',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/wanner_order.html',
          controller: 'wannerOrderController'
        }
      }
    })
    .state('main.userinner.hasget_order',{//已接订单
      url:'/hasget_order',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/hasget_order.html',
          controller: 'hasgetOrderController'
        }
      }
    })
    .state('main.userinner.hasget2_order',{//已接指派订单
      url:'/hasget2_order',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/hasget2_order.html',
          controller: 'hasgetOrderController'
        }
      }
    })
    .state('main.userinner.all_report',{//月度报表
      url:'/all_report',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/all_report.html',
          controller: 'userAllReportController'
        }
      }
    })
    .state('main.userinner.friend_manage',{//好友管理
      url:'/friend_manage',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/friend_manage.html',
          controller: 'userFriendManageController'
        }
      }
    })
    .state('main.userinner.update_info',{//更新资料
      url:'/update_info',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/update_info.html',
          controller: 'userUpdateInfoController'
        }
      }
    })
    .state('main.userinner.depart_cost_list',{//发车费列表
      url:'/depart_cost_list',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/depart_cost_list.html',
          controller: 'departCostListController'
        }
      }
    })
    .state('main.userinner.account_info',{//账户信息
      url:'/account_info',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/account_info.html',
          controller: 'accountInfoController'
        }
      }
    })
    .state('main.userinner.withdraw_manage',{//提现账户管理
      url:'/withdraw_manage',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/withdraw_manage.html',
          controller: 'withdrawManageController'
        }
      }
    })
    .state('main.userinner.withdraw_list',{//提现列表
      url:'/withdraw_list',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/withdraw_list.html',
          controller: 'withdrawListController'
        }
      }
    })
    .state('main.userinner.create_withdraw',{//创建提现工单
      url:'/create_withdraw',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/create_withdraw.html',
          controller: 'createWithdrawController'
        }
      }
    })






  //发货方路由
  $stateProvider
    .state('main.companyinner',{//主页
      url:'/companyinner',
      views:{
        'nav': {
          templateUrl: 'template/nav.html'
        },
        'sidebar': {
          templateUrl: 'template/sidebar_companyinner.html',
          controller: 'mainController'
        },
        'footer': {
          templateUrl: 'template/footer.html'
        }
      }
    })
    .state('main.companyinner.create_order',{//创建订单
      url:'/create_order',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/create_order.html',
          controller: 'createOrderController'
        }
      }
    })
    .state('main.companyinner.query_order',{//订单查询
      url:'/query_order',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/query_order.html',
          controller: 'queryOrderController'
        }
      }
    })
    .state('main.companyinner.wanner_order',{//我要接单
      url:'/wanner_order',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/wanner_order.html',
          controller: 'wannerOrderController'
        }
      }
    })
    .state('main.companyinner.hasget_order',{//已接订单
      url:'/hasget_order',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/hasget_order.html',
          controller: 'hasgetOrderController'
        }
      }
    })
    .state('main.companyinner.send_report',{//外发订单
      url:'/send_report',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/send_report.html',
          controller: 'sendReportController'
        }
      }
    })
    .state('main.companyinner.receive_report',{//外发订单
      url:'/receive_report',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/receive_report.html',
          controller: 'receiveReportController'
        }
      }
    })
    .state('main.companyinner.friend_manage',{//好友管理
      url:'/friend_manage',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/friend_manage.html',
          controller: 'friendManageController'
        }
      }
    })
    .state('main.companyinner.update_info',{//更新资料
      url:'/update_info',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/update_info.html',
          controller: 'updateInfoController'
        }
      }
    })
    .state('main.companyinner.account_info',{//账户信息
      url:'/account_info',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/account_info.html',
          controller: 'accountInfoController'
        }
      }
    })
    .state('main.companyinner.withdraw_manage',{//提现账户管理
      url:'/withdraw_manage',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/withdraw_manage.html',
          controller: 'withdrawManageController'
        }
      }
    })
    .state('main.companyinner.create_withdraw',{//创建提现工单
      url:'/create_withdraw',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/create_withdraw.html',
          controller: 'createWithdrawController'
        }
      }
    })
    .state('main.companyinner.withdraw_list',{//提现列表
      url:'/withdraw_list',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/withdraw_list.html',
          controller: 'withdrawListController'
        }
      }
    })












}]);



