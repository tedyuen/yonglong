/**
 * Created by tedyuen on 16-12-8.
 */
yonglongApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

  // $urlRouterProvider.when('','/main/companyinner/create_order').otherwise('/main/companyinner/create_order');
  // $urlRouterProvider.when('','/main/userinner/wanner_order').otherwise('/main/userinner/wanner_order');
  $urlRouterProvider.when('','/adminlogin').otherwise('/adminlogin');
  $stateProvider
    .state('adminlogin',{//登录页
      url:'/adminlogin',
      templateUrl:'template/login.html',
      controller:'adminLoginController'
    })
    .state('releaselogin',{//登录页
      url:'/releaselogin',
      templateUrl:'template/release/login.html',
      controller:'releaseLoginController'
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
    .state('forget_password',{//忘记密码
      url:'/forget_password/{role}',
      templateUrl:'template/forget_password.html',
      controller:'forgetPasswordController'
    })


    .state('main',{//主页
      url:'/main',
      templateUrl:'template/main.html',
      controller:'mainController'
    });

  // 放箱路由
  $stateProvider
    .state('main.release',{
      url:'/release',
      views:{
        'nav': {
          templateUrl: 'template/nav.html'
        },
        'sidebar': {
          templateUrl: 'template/sidebar_release.html',
          controller: 'releaseRoleController'
        },
        'footer': {
          templateUrl: 'template/footer.html'
        }
      }
    })
    .state('main.release.user_detail',{//用户资料管理
      url:'/user_detail',
      views: {
        'content@main': {
          templateUrl: 'template/release/user_detail.html',
          controller: 'releaseUserDetailController'
        }
      }
    })
    .state('main.release.order_create',{//创建放箱信息（委托书）
      url:'/order_create',
      views: {
        'content@main': {
          templateUrl: 'template/release/order_create.html',
          controller: 'releaseOrderCreateController'
        }
      }
    })
    .state('main.release.order_list',{//放箱列表查询接口
      url:'/order_list',
      views: {
        'content@main': {
          templateUrl: 'template/release/order_list.html',
          controller: 'releaseOrderListController'
        }
      }
    })
    .state('main.release.company_create',{//创建船公司信息
      url:'/company_create',
      views: {
        'content@main': {
          templateUrl: 'template/release/company_create.html',
          controller: 'releaseCompanyCreateController'
        }
      }
    })
    .state('main.release.company_list',{//船公司列表
      url:'/company_list',
      views: {
        'content@main': {
          templateUrl: 'template/release/company_list.html',
          controller: 'releaseCompanyListController'
        }
      }
    })





  // 管理员路由
  $stateProvider
    .state('main.admin',{
      url:'/admin',
      views:{
        'nav': {
          templateUrl: 'template/nav.html'
        },
        'sidebar': {
          templateUrl: 'template/sidebar_admin.html',
          controller: 'adminRoleController'
        },
        'footer': {
          templateUrl: 'template/footer.html'
        }
      }
    })
    .state('main.admin.update_password',{//修改密码
      url:'/update_password',
      views: {
        'content@main': {
          templateUrl: 'template/update_password.html',
          controller: 'updatePasswordController'
        }
      }
    })
    .state('main.admin.order_list',{//订单列表
      url:'/order_list',
      views: {
        'content@main': {
          templateUrl: 'template/admin/order_list.html',
          controller: 'adminOrderListController'
        }
      }
    })
    .state('main.admin.prerecord',{//我要预录
      url:'/prerecord',
      views: {
        'content@main': {
          templateUrl: 'template/common/prerecord_new.html',
          controller: 'prerecordNewController'
        }
      }
    })
    .state('main.admin.prerecord_list',{//预录列表
      url:'/prerecord_list',
      views: {
        'content@main': {
          templateUrl: 'template/common/prerecord_list.html',
          controller: 'prerecordListController'
        }
      }
    })
    .state('main.admin.user_list',{//承运方会员列表
      url:'/user_list',
      views: {
        'content@main': {
          templateUrl: 'template/admin/user_list.html',
          controller: 'adminUserListController'
        }
      }
    })
    .state('main.admin.company_list',{//发货方会员列表
      url:'/company_list',
      views: {
        'content@main': {
          templateUrl: 'template/admin/company_list.html',
          controller: 'adminCompanyListController'
        }
      }
    })
    .state('main.admin.withdraw_list',{//提现列表
      url:'/withdraw_list',
      views: {
        'content@main': {
          templateUrl: 'template/admin/withdraw_list.html',
          controller: 'adminWithdrawListController'
        }
      }
    })
    .state('main.admin.all_report',{//月度报表
      url:'/all_report',
      views: {
        'content@main': {
          templateUrl: 'template/admin/all_report.html',
          controller: 'adminAllReportController'
        }
      }
    })
    .state('main.admin.friend_list',{//月度报表-外发订单
      url:'/friend_list',
      views: {
        'content@main': {
          templateUrl: 'template/admin/friend_list.html',
          controller: 'adminFriendListReportController'
        }
      }
    })
    .state('main.admin.order_report_list',{//月度报表-外接订单
      url:'/order_report_list',
      views: {
        'content@main': {
          templateUrl: 'template/admin/order_report_list.html',
          controller: 'adminOrderListReportController'
        }
      }
    })
    .state('main.admin.edit_news',{//录入/修改新闻
      url:'/edit_news/{newsId}',
      views: {
        'content@main': {
          templateUrl: 'template/admin/edit_news.html',
          controller: 'adminEditNewsController'
        }
      }
    })
    .state('main.admin.news_list',{//新闻列表
      url:'/news_list',
      views: {
        'content@main': {
          templateUrl: 'template/admin/news_list.html',
          controller: 'adminNewsListController'
        }
      }
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
          controller: 'userRoleController'
        },
        'footer': {
          templateUrl: 'template/footer.html'
        }
      }
    })
    .state('main.userinner.update_password',{//修改密码
      url:'/update_password',
      views: {
        'content@main': {
          templateUrl: 'template/update_password.html',
          controller: 'updatePasswordController'
        }
      }
    })
    .state('main.userinner.wanner_order',{//我要接单
      url:'/wanner_order',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/wanner_order.html',
          controller: 'userWannerOrderController'
        }
      }
    })
    .state('main.userinner.hasget_order',{//已接订单
      url:'/hasget_order',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/hasget_order.html',
          controller: 'userHasgetOrderController'
        }
      }
    })
    .state('main.userinner.hasget2_order',{//已接指派订单
      url:'/hasget2_order',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/hasget2_order.html',
          controller: 'userHasgetOrderController2'
        }
      }
    })
    .state('main.userinner.edit_order',{//修改订单
      url:'/edit_order/{orderId}',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/edit_order_new.html',
          controller: 'userEditOrderController'
        }
      }
    })
    .state('main.userinner.prerecord',{//我要预录
      url:'/prerecord',
      views: {
        'content@main': {
          templateUrl: 'template/common/prerecord_new.html',
          controller: 'prerecordNewController'
        }
      }
    })
    .state('main.userinner.prerecord_list',{//预录列表
      url:'/prerecord_list',
      views: {
        'content@main': {
          templateUrl: 'template/common/prerecord_list.html',
          controller: 'prerecordListController'
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
    .state('main.userinner.friend_list',{//月度报表-外发订单
      url:'/friend_list',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/friend_list.html',
          controller: 'userFriendListReportController'
        }
      }
    })
    .state('main.userinner.order_list',{//月度报表-外接订单
      url:'/order_list',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/order_list.html',
          controller: 'userOrderListReportController'
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
          templateUrl: 'template/companyinner/account_info.html',
          controller: 'accountInfoController'
        }
      }
    })
    .state('main.userinner.withdraw_manage',{//提现账户管理
      url:'/withdraw_manage',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/withdraw_manage.html',
          controller: 'userWithdrawManageController'
        }
      }
    })
    .state('main.userinner.withdraw_list',{//提现列表
      url:'/withdraw_list',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/withdraw_list.html',
          controller: 'userWithdrawListController'
        }
      }
    })
    .state('main.userinner.create_withdraw',{//创建提现工单
      url:'/create_withdraw',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/create_withdraw.html',
          controller: 'userCreateWithdrawController'
        }
      }
    });






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
          controller: 'companyRoleController'
        },
        'footer': {
          templateUrl: 'template/footer.html'
        }
      }
    })
    .state('main.companyinner.update_password',{//修改密码
      url:'/update_password',
      views: {
        'content@main': {
          templateUrl: 'template/update_password.html',
          controller: 'updatePasswordController'
        }
      }
    })
    .state('main.companyinner.create_order',{//创建订单
      url:'/create_order',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/create_order_new.html',
          controller: 'createOrderController'
        }
      }
    })
    .state('main.companyinner.edit_order',{//修改订单
      url:'/edit_order/{orderId}',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/edit_order_new.html',
          controller: 'editOrderController'
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
    .state('main.companyinner.prerecord',{//我要预录
      url:'/prerecord',
      views: {
        'content@main': {
          templateUrl: 'template/common/prerecord_new.html',
          controller: 'prerecordNewController'
        }
      }
    })
    .state('main.companyinner.prerecord_list',{//预录列表
      url:'/prerecord_list',
      views: {
        'content@main': {
          templateUrl: 'template/common/prerecord_list.html',
          controller: 'prerecordListController'
        }
      }
    })
    .state('main.companyinner.all_report',{//外发订单合并
      url:'/all_report',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/send_report.html',
          controller: 'sendReportController'
        }
      }
    })
    .state('main.companyinner.report_order',{//外发订单1
      url:'/report_order',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/order_report_list.html',
          controller: 'reportOrderController'
        }
      }
    })
    .state('main.companyinner.report_friend',{//外发订单2
      url:'/report_friend',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/friend_report_list.html',
          controller: 'reportFriendController'
        }
      }
    })
    .state('main.companyinner.receive_report',{//外接订单
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
    });

}]);
