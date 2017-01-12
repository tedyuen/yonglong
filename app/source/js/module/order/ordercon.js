/**
 * Created by tedyuen on 17-1-4.
 */
global.$ = global.jQuery = require('jquery');
require('angular');
require('angular-cookies');

var yonglongApp = angular.module("orderApp",['ngCookies']);


yonglongApp.factory('httpService', ['$http','$timeout','$q',function ($http, $timeout, $q) {
  // 默认参数
  var _httpDefaultOpts = {
    method: 'POST', // GET/DELETE/HEAD/JSONP/POST/PUT
    url: '',
    params: {}, // 拼接在url的参数
    data: {},
    cache: false, // boolean or Cache object
    limit: true, //是否节流
    timeout : "httpTimeout", // 节流变量名
    timeoutTime : 100,
    isErrMsg: false,// 错误提示
    isErrMsgFn : null,// 错误提示函数
    checkCode: true, // 是否校验code
    before: function(){}, // ajax 执行开始 执行函数
    end: function(){}, // ajax 执行结束 执行函数
    error: function(){}, // ajax 执行失败 执行函数
    success: function(data){}, // ajax 执行成功 执行函数
    checkCodeError : function(code, errMsg, data){} // ajax 校验code失败 执行函数
  };

  var _httpTimeoutArray = {"httpTimeout" : null};//ajax节流使用的定时器 集合

  var _isErrMsgFn = function (opts) {
    if (angular.isFunction(opts.isErrMsgFn)) {
      opts.isErrMsgFn();
    } else {
      // alert("抱歉！因为操作不能够及时响应，请稍后在试...");
      console.log('因为操作不能够及时响应，请稍后在试...');
    }
  };

  // http请求之前执行函数
  var _httpBefore = function (opts) {
    if (angular.isFunction(opts.before)) {
      opts.before();
    }
  };

  // http请求之后执行函数
  var _httpEnd = function (opts) {
    if (angular.isFunction(opts.end)) {
      opts.end();
    }
    if(opts.limit){
      $timeout.cancel(_httpTimeoutArray[opts.timeout]);
    }
  };

  // 响应错误判断
  var _responseError = function (data, opts) {
    // public.js
    return checkCode(data, opts);
  };

  // http 请求执行过程封装    deferred ：http 链式请求延迟对象
  var _httpMin = function (opts, deferred) {
    _httpBefore(opts);

    var formData = new FormData();
    formData.append('json',JSON.stringify(opts.data.json));
    if(opts.data.files){
      if(angular.isArray(opts.data.files)){
        angular.forEach(opts.data.files,function (file) {
          // console.log("==>file last:  "+file.name+":"+file.file);
          formData.append(file.name,file.file);
        })
      }
    }

    $http({
      method: opts.method,
      url: opts.url,
      params: opts.params,
      data: formData,
      headers: {'Content-Type': function () {
        return undefined;
      }},
      transformRequest: angular.identity
    }).then(function onSuccess(response) {
      // 权限，超时等控制
      if( opts.checkCode && !_responseError(response.data, opts) ) {
        return false;
      }
      // 请求成功回调函数
      if(opts.success) {
        opts.success(response.data,response.config.headers,response.config,response.status);
      }
      if (deferred) {
        deferred.resolve(response.data,response.config.headers,response.config,response.status);  //任务被成功执行
      }
      _httpEnd(opts);
    }).catch(function onError(response) {//处理响应失败
        // Handle error
      if(opts.isErrMsg){
        _isErrMsgFn();
      }

      opts.error(response.data,response.config.headers,response.config,response.status);

      if (deferred) {
        deferred.reject(response.data,response.config.headers,response.config,response.status); //任务未被成功执行
      }

      _httpEnd(opts);
    });
  };

  // http请求，内含节流等控制
  var _http = function (opts, deferred) {
    opts = jQuery.extend({}, _httpDefaultOpts, opts);
    var result;
    if (opts.limit) {
      $timeout.cancel(_httpTimeoutArray[opts.timeout]);
      _httpTimeoutArray[opts.timeout] = $timeout(function () {
        result = _httpMin(opts, deferred);
      }, opts.timeoutTime);
    } else {
      result = _httpMin(opts, deferred);
    }
  };

  // http 链式请求
  var _linkHttpMin = function (opts, deferred) {
    _http(opts, deferred);
  };


  //
  /**
   * 判断 code
   * @param data
   */
  var checkCode = function(data, opts){
    return true;
    // var _data ;
    // var _isCode = true;
    // if(isEmpty(data)){
    //   _isCode = false;
    // } else {
    //   if( typeof data == "string" ){
    //     if(data.indexOf("code") > -1){
    //       _data = jQuery.parseJSON(data);
    //     }else{
    //       _isCode = false;
    //     }
    //   }else{
    //     _data = data;
    //   }
    // }
    // if( _isCode && isNotEmpty(_data.code) ){
    //   if( _data.code == CODESTATUS.IS_NOT_LOGIN || _data.code == CODESTATUS.SESSION_TIME_OUT){// 会话超时
    //     // 超时处理
    //     console.log("超时或未登录");
    //     window.location.href = _data.value;
    //     return false;
    //   } else if( _data.code == CODESTATUS.IS_ERROR ){
    //     console.log("连接错误，请稍等!");
    //     if(opts.checkCodeError){
    //       opts.checkCodeError( _data.code, "连接错误，请稍等!", _data);
    //     }
    //     return false;
    //   } else if( _data.code == CODESTATUS.USER_AUTH_FAIL ){
    //     console.log("用户认证失败!");
    //     if(opts.checkCodeError){
    //       opts.checkCodeError( _data.code, "用户认证失败!", _data);
    //     }
    //     return false;
    //   } else if( _data.code == CODESTATUS.PARAM_IS_ERROR ){
    //     console.log("无效的请求参数");
    //     if(opts.checkCodeError){
    //       opts.checkCodeError( _data.code, "无效的请求参数!", _data);
    //     }
    //     return false;
    //   }
    // }
    // return true;
  }
  //



  return {
    /**
     * http请求
     * @param opts
     */
    http: function (opts) {
      _http(opts);
    },
    /**
     * http链式请求
     * @param opts
     * @param deferred
     * @returns {deferred.promise|{then, catch, finally}}
     */
    linkHttp : function (opts, deferred) {
      deferred = deferred || $q.defer();
      _linkHttpMin(opts, deferred);
      return deferred.promise;
    }
  };
}]);

yonglongApp.service('sessionService',['$rootScope',function ($rootScope) {
  this.getSession = function () {
    // console.log("show token:"+eluser.token);
    // console.log("show $rootScope token:"+$rootScope.loginUser.token);
    if($rootScope.loginUser){
      var session = {
        // token:eluser.token
        token:$rootScope.loginUser.token
      }
      return session;
    }else{
      return undefined;
    }
  }
}]);

yonglongApp.service('loadingService',['$timeout',function ($timeout) {

  var timeoutFlag = undefined;
  this.showLoading = function (str) {
    var loadingText = "正在加载...";
    if(str!=undefined && str!=''){
      loadingText = str+"...";
    }
    $.blockUI({
      message: '<h4 id="own-block-text" style="color:white;"> '+loadingText+'</h4>'
      ,css: {
        border: 'none',
        padding: '15px',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        opacity: .5,
        color: '#fff'
      }
    });
    timeoutFlag=$timeout(function () {
      // $.unblockUI();
      $('#own-block-text').html('超时,点击关闭等待!');
      $('.blockOverlay').attr('title','点击关闭等待').click($.unblockUI);
    },5000);
  }
  this.closeLoading = function () {
    $.unblockUI();
    if(timeoutFlag!=undefined){
      $timeout.cancel(timeoutFlag);
      timeoutFlag = undefined;
    }
  }
}]);

yonglongApp.service('interfaceService',['httpService','URL_CONS','sessionService','rescode','loadingService',
  function (httpService,URL_CONS,sessionService,rescode,loadingService) {

  this.doHttp = function (url,sub,params,success,error,files) {
    var base = {
      // token:sessionService.getSession().token
    }
    if(sessionService.getSession() != undefined){
      base = {
        token:sessionService.getSession().token
      }
    }
    jQuery.extend(params,sub);
    jQuery.extend(params,base);
    // console.log(JSON.stringify(params));
    var request = {
      json:params,
      files:files
    }
    // console.log("request json str:-->  "+request.json);
    var _opts = jQuery.extend({
      timeout : 'getError404Timeout'
    },null);
    // _opts.url = URL_CONS.serverUrl+"/"+sub.method;
    _opts.url = url;
    _opts.method = 'POST';
    _opts.data = request;
    // _opts.params = request;
    _opts.success = function (data,headers,config,status) {
      try{
        loadingService.closeLoading();
      }catch (e){}

      if(data.rescode==rescode.ERROR_TOKEN){
        swal({
          title: "登录失效",
          text: "您的登录已经失效，请前往重新登录!",
          type: "error",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "前往登录!",
          closeOnConfirm: false
        },function () {
          window.location.href = 'index.html';
        });
      }
      if(success){
        // swal('success','success','success');
        success(data,headers,config,status);
      }
    };
    _opts.error = function (data,headers,config,status) {
      loadingService.closeLoading();
      swal('错误','网络请求失败，请重试！','error');
      if(error){
        error(data,headers,config,status);
      }
    };
    httpService.http(_opts);
  }


  this.doHttpMethod = function (method,params,success,error,files) {
    var sub = {
      method:method,
    };
    if(files){
      this.doHttp(URL_CONS.serverFileUrl,sub,params,success,error,files);
    }else{
      this.doHttp(URL_CONS.serverUrl,sub,params,success,error);
    }
  }

  this.showLoading = function (str) {
    loadingService.showLoading(str);
  }

  // 创建订单
  this.companyCreateOrder = function (params,success,error) {
    var sub = {
      method:URL_CONS.companyCreateOrder,
      orderStatus:1,
      orderCreditRank:5
    };
    this.doHttp(URL_CONS.serverUrl,sub,params,success,error);
  }

  // 1.2 订单列表
  this.companyOrderList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyOrderList,params,success,error);
  }

  // 1.3 订单详情
  this.companyDetailOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyDetailOrder,params,success,error);
  }

  // 1.5 订单删除
  this.deleteOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.deleteOrder,params,success,error);
  }
  // 1.6 我要接单列表
  this.companyListGetorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyListGetorder,params,success,error);
  }
  // 1.7 已接订单列表
  this.companyListMyorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyListMyorder,params,success,error);
  }

  // 2.1 注册
  this.companyRegister = function (params,files,success,error) {
    this.doHttpMethod(URL_CONS.companyRegister,params,success,error,files);
  }

  // 2.2 查看个人信息
  this.companyUserinfo = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyUserinfo,params,success,error);
  }

  // 2.3 更新用户信息
  this.companyUpdateinfo = function (params,files,success,error) {
    this.doHttpMethod(URL_CONS.companyUpdateinfo,params,success,error,files);
  }
  // 2.4 接单方详情
  this.companyUserDetail = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyUserDetail,params,success,error);
  }

  // 2.5承运方详情
  this.busUserDetail = function (params,success,error) {
    this.doHttpMethod(URL_CONS.busUserDetail,params,success,error);
  }

  // 3.1 接单
  this.fleetTakeOfferOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.fleetTakeOfferOrder,params,success,error);
  }
  // 3.3 订单取消
  this.cancelOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.cancelOrder,params,success,error);
  }

  // 4.1好友分页列表
  this.companyListFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyListFriend,params,success,error);
  }
  // 4.2通过手机号查询车主
  this.companyListBusowners = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyListBusowners,params,success,error);
  }
  // 4.3新增好友
  this.companyAddFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyAddFriend,params,success,error);
  }
  // 4.4解除好友关系
  this.companyDelFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyDelFriend,params,success,error);
  }
  // 5.1个人账户信息
  this.accountInfo = function (params,success,error) {
    this.doHttpMethod(URL_CONS.accountInfo,params,success,error);
  }
  // 5.2 添加提现账户
  this.addBankCard = function (params,success,error) {
    this.doHttpMethod(URL_CONS.addBankCard,params,success,error);
  }

  // 5.3 提现账户列表
  this.listBankCard = function (params,success,error) {
    this.doHttpMethod(URL_CONS.listBankCard,params,success,error);
  }
  // 5.4 删除提现账户
  this.delBankCard = function (params,success,error) {
    this.doHttpMethod(URL_CONS.delBankCard,params,success,error);
  }
  // 5.5 提现列表
  this.listRefundApply = function (params,success,error) {
    this.doHttpMethod(URL_CONS.listRefundApply,params,success,error);
  }
  // 5.6 创建提现工单
  this.addRefundApply = function (params,success,error) {
    this.doHttpMethod(URL_CONS.addRefundApply,params,success,error);
  }
  // 5.7 创建工单-查询订单
  this.cashList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.cashList,params,success,error);
  }

  // 6.1 订单
  this.reportList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.reportList,params,success,error);
  }

  // 8.1 订单查询-支付前
  this.alipay = function (params,success,error) {
    this.doHttpMethod(URL_CONS.alipay,params,success,error);
  }




  /////----- ------  以下是user接口
  // b1.1 我要接单列表
  this.userListGetorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userListGetorder,params,success,error);
  }
  // B1.2 已接订单列表
  this.userListMyorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userListMyorder,params,success,error);
  }
  // B1.3 已接指派订单列表
  this.userListDispatchorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userListDispatchorder,params,success,error);
  }



  // b2.1 注册
  this.userRegister = function (params,files,success,error) {
    this.doHttpMethod(URL_CONS.userRegister,params,success,error,files);
  }
  // B2.2 查看个人信息
  this.userUserinfo = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userUserinfo,params,success,error);
  }
  this.userUpdateInfo = function (params,files,success,error) {
    this.doHttpMethod(URL_CONS.userUpdateInfo,params,success,error,files);
  }

  // b3.1 接单
  this.userTakeOfferOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userTakeOfferOrder,params,success,error);
  }
  // b3.2 确认送到哦啊
  this.userOverOfferOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userOverOfferOrder,params,success,error);
  }

  // b4.1好友分页列表
  this.userListFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userListFriend,params,success,error);
  }
  // b4.2好友请求通过/拒绝
  this.userEditFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userEditFriend,params,success,error);
  }


  // B7.1 发车费列表
  this.userDispatchList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userDispatchList,params,success,error);
  }


  ///  以下是管理员接口
  // A11.1 登录
  this.adminLogin = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminLogin,params,success,error);
  }

  // A1.1 订单列表
  this.adminGetOrderList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminGetOrderList,params,success,error);
  }

  // A2.1 承运方会员列表
  this.adminGetBusUserList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminGetBusUserList,params,success,error);
  }
  // A2.2 发货方会员列表
  this.adminGetGoodsUserList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminGetGoodsUserList,params,success,error);
  }


  // A2.3 会员审核通过/取消
  this.adminAuditSysMember = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminAuditSysMember,params,success,error);
  }



  // A3.1 提现列表
  this.adminListSysRefund = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminListSysRefund,params,success,error);
  }
  // A3.2 提现通过审核
  this.adminAuditSysRefund = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminAuditSysRefund,params,success,error);
  }

    // 12.1 编辑文章
    this.articleEdit = function (params,files,success,error) {
      this.doHttpMethod(URL_CONS.articleEdit,params,success,error,files);
    }
    // 12.3 文章列表
    this.articleList = function (params,success,error) {
      this.doHttpMethod(URL_CONS.articleList,params,success,error);
    }

    // 12.3 删除文章
    this.articleDelete = function (params,success,error) {
      this.doHttpMethod(URL_CONS.articleDelete,params,success,error);
    }

    // 12.3 文章详情
    this.articleDetail = function (params,success,error) {
      this.doHttpMethod(URL_CONS.articleDetail,params,success,error);
    }


    // 13.1 修改密码
    this.updatePassword = function (params,success,error) {
      this.doHttpMethod(URL_CONS.updatePassword,params,success,error);
    }

    // 13.2 找回密码
    this.resetPassword = function (params,success,error) {
      this.doHttpMethod(URL_CONS.resetPassword,params,success,error);
    }

    // 13.3 发送验证码
    this.sendcode = function (params,success,error) {
      this.doHttpMethod(URL_CONS.sendcode,params,success,error);
    }




}]);

yonglongApp.constant('rescode', {
  SUCCESS:'0000',

  AGAIN_PHONE:'201002',
  EMPTY_SMS_CODE:'201004',
  ERROR_TOKEN:'9001',

  UNKNOW_USER:'201008',//用户不存在
  ERROR_PASSWORD:'201009',//密码不正确
})

/**
 * Created by tedyuen on 16-12-17.
 */
yonglongApp.constant('URL_CONS', {
  // serverUrl:'http://192.168.0.25:8080/admin/api/data',
  // serverUrl:'http://192.168.0.25:8080/admin/api/data',
  // serverFileUrl:'http://192.168.0.25:8080/admin/api/file',
  serverUrl:'http://120.26.65.65:8285/adm/api/data',
  serverFileUrl:' http://120.26.65.65:8285/adm/api/file',

  companyRegister: 'company_register',
  companyCreateOrder: 'company_create_order',
  companyOrderList: 'company_list_order',
  companyListMyorder: 'company_list_myorder',
  companyListGetorder: 'company_list_getorder',
  deleteOrder: 'company_delete_order',
  companyUserinfo:'company_userinfo',
  companyUserDetail:'company_user_detail',
  companyUpdateinfo: 'company_updateinfo',
  busUserDetail: 'bus_user_detail',
  fleetTakeOfferOrder: 'fleetTakeOfferOrder',
  cancelOrder: 'userCancelOfferOrder',
  companyListFriend: 'company_list_friend',
  companyListBusowners: 'company_list_busowners',
  companyAddFriend: 'company_add_friend',
  companyDelFriend: 'company_del_friend',
  accountInfo: 'account_info',
  addBankCard: 'addBankCard',
  listBankCard: 'listBankCard',
  delBankCard: 'delBankCard',
  listRefundApply: 'listRefundApply',
  addRefundApply: 'addRefundApply',
  cashList: 'cashList',
  reportList: 'report_list',
  alipay: 'alipay',

  companyDetailOrder: 'company_detail_order',

  // 以下是user接口
  userListGetorder: 'user_list_getorder',
  userListMyorder: 'user_list_myorder',
  userListDispatchorder: 'user_list_dispatchorder',
  userRegister: 'user_register',
  userUserinfo: 'user_userinfo',
  userUpdateInfo: 'user_updateinfo',
  userTakeOfferOrder: 'userTakeOfferOrder',
  userOverOfferOrder: 'userOverOfferOrder',
  userListFriend: 'user_list_friend',
  userEditFriend: 'user_edit_friend',

  userDispatchList: 'user_dispatchList',

  // 以下是admin接口
  adminLogin: 'admin_login',
  adminGetOrderList: 'admin_getOrderList',
  adminListSysRefund: 'admin_listSysRefund',
  adminAuditSysRefund: 'admin_auditSysRefund',
  adminGetBusUserList: 'admin_getBusUserlist',
  adminGetGoodsUserList: 'admin_getGoodsUserlist',
  adminAuditSysMember: 'admin_auditSysMember',

  articleEdit: 'article_edit',
  articleList: 'article_list',
  articleDelete: 'article_delete',
  articleDetail: 'article_detail',

  updatePassword: 'update_password',
  resetPassword: 'reset_password',
  sendcode: 'sendcode',
});

yonglongApp.value('diyData',
  {
    uapply: [{name: '审核通过', id: '0'}, {name: '未审核', id: '1'}],
    ufriend: [{name: '进口', id: '0'}, {name: '出口', id: '1'}],
    orderType: [{name: '进口', id: '0'}, {name: '出口', id: '1'}, {name: '拖柜进洋山', id: '2'}],
    boxType: [{name: 'GP', id: '0', v: 'GP'}
      , {name: 'HC', id: '1', v: 'HC'}, {name: 'OT(开顶箱)', id: '2', v: 'OT'}, {
        name: 'HT(挂衣箱)',
        id: '3', v: 'HT'
      }, {name: 'RF(冷冻箱)', id: '4', v: 'RF'}, {name: 'RH（l冷冻高箱）', id: '5', v: 'RH'}, {
        name: 'TK（油罐箱）',
        id: '6',
        v: 'TK'
      }, {
        name: 'FR（框架箱）',
        id: '7', v: 'FR'
      }
    ],
    boxTypeN: [{name: '不限', id: '-1', v: '不限'},{name: 'GP', id: '0', v: 'GP'}
      , {name: 'HC', id: '1', v: 'HC'}, {name: 'OT(开顶箱)', id: '2', v: 'OT'}, {
        name: 'HT(挂衣箱)',
        id: '3', v: 'HT'
      }, {name: 'RF(冷冻箱)', id: '4', v: 'RF'}, {name: 'RH（l冷冻高箱）', id: '5', v: 'RH'}, {
        name: 'TK（油罐箱）',
        id: '6',
        v: 'TK'
      }, {
        name: 'FR（框架箱）',
        id: '7', v: 'FR'
      }
    ],
    //boxVol: [{name: '20', id: '0'}, {name: '40', id: '1'}, {name: '45', id: '2'}]
    boxVol: [{name: '20', id: '0', show: '短板车'}, {name: '40', id: '1', show: '12.6米'}],
    boxVolN: [{name: '不限', id: '-1', show: '不限'},{name: '20', id: '0', show: '短板车'}, {name: '40', id: '1', show: '12.6米'}],
    orderTypeN: [{name: '不限', id: '-1'},{name: '进口', id: '0'}, {name: '出口', id: '1'}, {name: '拖柜进洋山', id: '2'}],

  }
);

//结算状态
yonglongApp.filter('payStatusText',function () {
  return function (input) {
    if(input=='0'){
      return '未付款';
    }else if(input=='1'){
      return '已付款';
    }
  }
});

yonglongApp.filter('friendType',function () {
  return function (str) {
    if(str=='0'){
      return '未审核'
    }else if(str=='1'){
      return '审核通过'
    }else if(str=='9'){
      return '用户拒绝'
    }
  }
});

yonglongApp.filter('memberType',function () {
  return function (str) {
    if(str=='0'){
      return '货主'
    }else if(str=='1'){
      return '车主'
    }
  }
});


yonglongApp.filter('emptyText',function () {
  return function (str) {
    if(str==''){
      return '无'
    }else{
      return str;
    }
  }
});

yonglongApp.filter('moneyText',function () {
  return function (str) {
    return str+"元";
  }
})



yonglongApp.filter('atmStatus',function () {
  return function (str) {
    if(str=='1'){
      return '审核通过';
    }else{
      return '审核中';
    }
  }
});

yonglongApp.filter('boxVol',function () {
  return function (str) {
    if(str=='0' || str==0){
      return '20'
    }else if(str=='1' || str==1){
      return '40'
    }else if(str=='2' || str==2){
      return '45'
    }
  }
})

yonglongApp.filter('boxType',['diyData',function (diyData) {
  return function(str){
    var temp;
    for(temp in diyData.boxType){
      if(str==diyData.boxType[temp].id){
        return diyData.boxType[temp].name;
      }
    }
  }
}]);

yonglongApp.filter('orderType',['diyData',function (diyData) {
  return function(str){
    var temp;
    for(temp in diyData.orderType){
      if(str==diyData.orderType[temp].id){
        return diyData.orderType[temp].name;
      }
    }
  }
}])

//订单状态
yonglongApp.filter('orderStatusText',function () {
  return function (input) {
    var _bv = '';
    switch(input){
      case '1',1:
        _bv = '已审核';
        break;
      case '2',2:
        _bv = '待装箱';
        break;
      case '3',3:
        _bv = '已拼箱';
        break;
      case '8',8:
        _bv = '已取消';
        break;
      case '9',9:
        _bv = '完成';
        break;
      case '10',10:
        _bv = '待提箱';
        break;
      case '11',11:
        _bv = '待卸货';
        break;
      case '12',12:
        _bv = '待装货';
        break;
      case '13',13:
        _bv = '待进港';
        break;
      case '14',14:
        _bv = '待落箱';
        break;
      case '20',20:
        _bv = '待付款';
        break;
      case '21',21:
        _bv = '已付款';
        break;
      case '22',22:
        _bv = '部分支付';
        break;
      default:
        _bv = '未审核';
        break;
      case '101',101:
        _bv = '进行中';
        break;
    }
    return _bv;
  }
});

yonglongApp.controller('orderController',['$scope','$rootScope','$cookies','$location','interfaceService','rescode',
  function ($scope,$rootScope,$cookies,$location,interfaceService,rescode) {

    $rootScope.loginUser = $cookies.getObject('yltUser');

    $scope.testNum = 3000;
    $scope.orderId = $location.search().id;

    // console.log("==>orderid: "+$location.search().id);

    var getDetail = function (orderId) {
      var params = {
        orderId:orderId
      }
      var success = function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      }
      interfaceService.companyDetailOrder(params,success);
    }
    if($scope.orderId){
      getDetail($scope.orderId);
    }

}]);
