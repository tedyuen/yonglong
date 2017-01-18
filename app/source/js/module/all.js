/**
 * Created by tedyuen on 16-12-7.
 */
global.$ = global.jQuery = require('jquery');
require('bootstrap');
require('metismenu');
require('jquery-slimscroll');
require('./utils/JqueryEllipsis');
require('./utils/jquery.blockUI');
// require('waypoints');
// require('./utils/jquery.counterup.min');
require('jquery-toast-plugin');
require('dropify');

// var LogUtil = require('./utils/LogUtil');
// var log = new LogUtil(true);//Set can out log.

require('bootstrap-datepicker');
require('./utils/bootstrap-datepicker');
// require('./utils/jquery.waypoints');
// require('./utils/jquery.counterup.min');
require('sweetalert');

require('angular');
require('angular-cookies');
require('angular-ui-router');

// require('angular-baidu-map');//ZO2tPhGQIZk6M5QdHzLQPyBOGbSSGzwW

// var yonglongApp = angular.module("myApp",['ui.router','baiduMap']);
var yonglongApp = angular.module("myApp",['ui.router','ngCookies']);
// yonglongApp.config(['$compileProvider',function ($compileProvider) {
//   $compileProvider.debugInfoEnabled(false);
// }]);
// var Mock = require('mockjs');

var UiState = require('./utils/UiState');
//
// var wait1000 = new Promise((resolve,reject)=>{
//   setTimeout(resolve,1000);
//   }).then(()=>{
//     console.log('Yay!');
// });

$(document).ready(function () {
    $(function () {
        $(".preloader").fadeOut();
    });
    // Theme settings

});

!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(d.allowEvent(t)===!1)return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(1.4*e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;n=a[a.length-1];var o=n.getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=Date.now()-Number(n.getAttribute("data-hold")),l=350-u;0>l&&(l=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},l)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves-effect"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){e=e||{},"duration"in e&&(c.duration=e.duration),c.wrapInput(u(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);
/**
 * Created by tedyuen on 16-12-16.
 */
yonglongApp.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

yonglongApp.value('diyData',
  {
    uapply: [{name: '审核通过', id: '0'}, {name: '未审核', id: '1'}],
    ufriend: [{name: '进口', id: '0'}, {name: '出口', id: '1'}],
    orderType: [{name: '进口', id: 0}, {name: '出口', id: 1}, {name: '拖柜进洋山', id: 2}],
    boxType: [{name: 'GP', id: 0, v: 'GP'}
      , {name: 'HC', id: 1, v: 'HC'}, {name: 'OT(开顶箱)', id: 2, v: 'OT'}, {
        name: 'HT(挂衣箱)',
        id: 3, v: 'HT'
      }, {name: 'RF(冷冻箱)', id: 4, v: 'RF'}, {name: 'RH（l冷冻高箱）', id: 5, v: 'RH'}, {
        name: 'TK（油罐箱）',
        id: 6,
        v: 'TK'
      }, {
        name: 'FR（框架箱）',
        id: 7, v: 'FR'
      }
    ],
    boxTypeN: [{name: '不限', id: -1, v: '不限'},{name: 'GP', id: 0, v: 'GP'}
      , {name: 'HC', id: 1, v: 'HC'}, {name: 'OT(开顶箱)', id: 2, v: 'OT'}, {
        name: 'HT(挂衣箱)',
        id: 3, v: 'HT'
      }, {name: 'RF(冷冻箱)', id: 4, v: 'RF'}, {name: 'RH（l冷冻高箱）', id: 5, v: 'RH'}, {
        name: 'TK（油罐箱）',
        id: 6,
        v: 'TK'
      }, {
        name: 'FR（框架箱）',
        id: 7, v: 'FR'
      }
    ],
    //boxVol: [{name: '20', id: '0'}, {name: '40', id: '1'}, {name: '45', id: '2'}]
    boxVol: [{name: '20', id: 0, show: '短板车'}, {name: '40', id: 1, show: '12.6米'}],
    boxVolN: [{name: '不限', id: -1, show: '不限'},{name: '20', id: 0, show: '短板车'}, {name: '40', id: 1, show: '12.6米'}],
    orderTypeN: [{name: '不限', id: -1},{name: '进口', id: 0}, {name: '出口', id: 1}, {name: '拖柜进洋山', id: 2}],

  }
);

yonglongApp.constant('rescode', {
  SUCCESS:'0000',

  AGAIN_PHONE:'201002',
  EMPTY_SMS_CODE:'201004',
  ERROR_TOKEN:'9001',

  UNKNOW_USER:'201008',//用户不存在
  ERROR_PASSWORD:'201009',//密码不正确

  HAS_BANK:'301008',//已经绑定过银行卡，换卡请先解绑
})

/**
 * Created by tedyuen on 16-12-17.
 */
yonglongApp.constant('URL_CONS', {
  // serverUrl:'http://192.168.0.25:8080/admin/api/data',
  // serverUrl:'http://192.168.0.25:8080/admin/api/data',
  // serverFileUrl:'http://192.168.0.25:8080/admin/api/file',
  serverUrl: 'http://120.26.65.65:8285/api/data',
  serverFileUrl: ' http://120.26.65.65:8285/api/file',
  // serverUrl: 'http://www.56elutong.com/api/data',
  // serverFileUrl: ' http://www.56elutong.com/api/file',


  companyRegister: 'company_register',
  companyCreateOrder: 'company_create_order',
  companyOrderList: 'company_list_order',
  companyListMyorder: 'company_list_myorder',
  companyListGetorder: 'company_list_getorder',
  deleteOrder: 'company_delete_order',
  companyUserinfo: 'company_userinfo',
  companyUserDetail: 'company_user_detail',
  companyUpdateinfo: 'company_updateinfo',
  busUserDetail: 'bus_user_detail',
  fleetTakeOfferOrder: 'fleetTakeOfferOrder',
  cancelOrder: 'userCancelOfferOrder',
  fleetDispatchOrder: 'fleetDispatchOrder',
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

  companyUpdateOrder: 'company_update_order',
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

/**
 * Created by tedyuen on 16-12-16.
 */
yonglongApp.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
})

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

yonglongApp.service('alipayService',['interfaceService','rescode',
  function (interfaceService,rescode) {

  this.alipay = function (result) {
    console.log('alipayService');
    interfaceService.alipay({id:result.id},function (data,headers,config) {
      console.log("response:"+JSON.stringify(data));
      if(data.rescode==rescode.SUCCESS){
        if(data.data.orderAmount>0){
          swal({
            title: "确认付款吗?",
            text: "您即将付款"+data.data.orderAmount+"元！",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,去支付!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          }, function(){
            var $hiddenPanel = $('<div style="display:none;"></div>');
            $hiddenPanel.html(data.data.sHtmlText);
            $hiddenPanel.find('form').submit();
          });
        }
      }
    });
  }

}])

yonglongApp.service('baseDataService',['diyData',function (diyData) {

  this.getOrderType = function () {
    return diyData.orderType;
  }

  this.getOrderTypeN = function () {
    return diyData.orderTypeN;
  }

  this.getBoxVol = function () {
    return diyData.boxVol;
  }

  this.getBoxType = function () {
    return diyData.boxType;
  }

  this.getBoxVolN = function () {
    return diyData.boxVolN;
  }

  this.getBoxTypeN = function () {
    return diyData.boxTypeN;
  }



  this.getPayStatusText = function (value) {
    if(value=='0'){
      return '未付款';
    }else if(value=='1'){
      return '已付款';
    }
  }
}]);

yonglongApp.service('cookiesService',function () {
  this.cookiesDate = function () {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 60);
    return {'expires': expireDate.toUTCString()};
  }
});

yonglongApp.provider('countupProvider',function () {
  this.$get = function () {
    return {
      countup:function () {
        // $(".counter").counterUp({
        //   delay: 100,
        //   time: 1200
        // });
      }
    }
  }
});

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.provider('dropifyProvider',function () {
  this.$get = function () {
    return {
      dropify:function () {
        console.log('dropify');
        var drEvent = jQuery('.dropify').dropify({
          messages: {
            default: '拖拽图片或点击添加',
            replace: '拖拽图片或点击替换',
            remove:  '删除',
            error: {
              'fileSize': '文件不能大于{{ value }}',
              'imageFormat': '文件格式不正确'
            }
          }
        });

        // drEvent.on('dropify.beforeClear', function(event, element){
        //   return confirm("确定要删除 \"" + element.file.name + "\" 吗?");
        // });
        //
        // drEvent.on('dropify.afterClear', function(event, element){
        //   alert('删除成功');
        // });
        //
        // drEvent.on('dropify.errors', function(event, element){
        //   console.log('出错了！');
        // });

      }
    }
  }
});

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
  // 1.4 修改订单
  this.companyUpdateOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyUpdateOrder,params,success,error);
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

  // 3.4 指派车辆
  this.fleetDispatchOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.fleetDispatchOrder,params,success,error);
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

yonglongApp.service('logoutService',['$rootScope','$state','$cookies',function ($rootScope,$state,$cookies) {
  this.logout = function (role) {
    $rootScope.loginUser = undefined;
    $cookies.remove('yltUser');
    if(role){
      $state.go('adminlogin');
    }else{
      window.location.href = 'index.html';
    }
  }
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

/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.provider('showDatePickerProvider',function () {
  this.$get = function () {
    return {
      showDatePicker:function () {
        // console.log('showdatepicker');
        jQuery('.mydatepicker').datepicker({
          language: 'zh-CN',
          autoclose: true,
          format: "yyyy-mm-dd",
          todayHighlight: true
        });
      }
    }
  }
});

yonglongApp.service('toastService',function () {

  this.toastSuccess = function (option) {
    $.toast({
      heading: option.heading,
      text: option.text,
      position: 'top-right',
      loaderBg:'#ff6849',
      icon: 'success',
      hideAfter: 2000,
      stack: 6
    });
  }
  this.toastWarning = function (option) {
    $.toast({
      heading: option.heading,
      text: option.text,
      position: 'top-right',
      loaderBg:'#ff6849',
      icon: 'warning',
      hideAfter: 2000,
      stack: 6
    });
  }

  //验证码发送
  this.sendCodeToast = function (flag) {
    if(flag){
      this.toastSuccess({
        heading: '发送成功',
        text: '验证码发送成功,请查看您的短信收件箱，输入有效验证码，并完成表单。',
      })
    }else{
      this.toastWarning({
        heading: '发送失败',
        text: '验证码发送失败,请查看您的网络设置并重试。',
      });
    }
  }

})

yonglongApp.service('validateService',['$rootScope',function ($rootScope) {

  this.mobile = function (mobile,swalFlag) {
    var code = {
      result:true,
      msg:'手机号正确'
    }
    if(mobile==null || mobile == undefined || mobile==''){
      code = {
        result:false,
        msg:'手机号不能为空'
      }
    }else if(mobile.length!=11 || isNaN(mobile)){
      code = {
        result:false,
        msg:'请输入11位有效的手机号码'
      }
    }else{
      // var myreg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,2,3,5-9]))\\d{8}$/;
      // if(!myreg.test(mobile)){
      //   code= {
      //     result:false,
      //     msg:'请输入有效的手机号码'
      //   }
      // }
    }

    if(swalFlag && !code.result){
      swal('验证',code.msg,'error');
    }
    return code;
  }




}])

yonglongApp.controller('departCostListController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {
    $scope.queryData = {
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }

    var httpList = function () {
      interfaceService.userDispatchList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }


    httpList();

}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('userAllReportController',['$scope','$timeout','showDatePickerProvider','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();

    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
    }

    var httpList = function () {
      interfaceService.reportList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          $scope.flist = data.data.flist;
          $scope.list = data.data.list;
        }
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
      }
    }

    httpList();
  }]);

yonglongApp.controller('userCreateWithdrawController',['$scope','$timeout','$state','interfaceService','showDatePickerProvider','rescode',
  function ($scope,$timeout,$state,interfaceService,showDatePickerProvider,rescode) {
    showDatePickerProvider.showDatePicker();

    $scope.cashListCheckbox = [];//需要提现的订单
    $scope.cashListDispatchCheckbox = [];//需要提现的指派订单
    $scope.params={
      bankNo:null,
      orderIds:'',
      refundMoney:0
    }
    var updateParams = function () {
      var temp;
      $scope.params.refundMoney = 0;
      $scope.params.orderIds = '';
      for(temp in $scope.cashListCheckbox){
        $scope.params.refundMoney+=$scope.cashListCheckbox[temp].moneyPaid;
        $scope.params.orderIds += $scope.cashListCheckbox[temp].id+',';
      }
      for(temp in $scope.cashListDispatchCheckbox){
        $scope.params.refundMoney+=$scope.cashListDispatchCheckbox[temp].moneyPaid + $scope.cashListDispatchCheckbox[temp].offerOrderPaid;
        $scope.params.orderIds += '-->'+$scope.cashListDispatchCheckbox[temp].id+',';
      }
    }

    var getCashList = function () {
      interfaceService.cashList({},function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.cashList = data.data.listCash;
          $scope.listCashDispatch = data.data.dataDispatch;

        }
      });
    }
    var getListBankCard = function () {
      interfaceService.listBankCard({},function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.listBankCards = data.data;
        }
        $timeout(getCashList,50);
      });
    }

    $scope.changeBankCard= function () {
      console.log("card!!!");
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }

    // 复选cashlist

    $scope.isSelected = function(result){
      return $scope.cashListCheckbox.indexOf(result)>=0;
    }
    $scope.isDispatchSelected = function(result){
      return $scope.cashListDispatchCheckbox.indexOf(result)>=0;
    }


    $scope.updateCashListCBSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.cashListCheckbox.push(result);
      }else{
        var idx = $scope.cashListCheckbox.indexOf(result);
        $scope.cashListCheckbox.splice(idx,1);
      }
      updateParams();
    }

    $scope.updateCashListDispatchCBSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.cashListDispatchCheckbox.push(result);
      }else{
        var idx = $scope.cashListCheckbox.indexOf(result);
        $scope.cashListDispatchCheckbox.splice(idx,1);
      }
      updateParams();
    }

    $scope.onSubmit = function(){
      if($scope.params.bankNo==null){
        swal({
          title: "请选择卡号?",
          text: "请选择提现的银行卡卡号!",
          type: "error",
          confirmButtonText: "好!",
          closeOnConfirm: true
        });
      }else if($scope.params.refundMoney==0){
        swal({
          title: "请选择需要提现的订单?",
          text: "请选择需要提现的订单!",
          type: "error",
          confirmButtonText: "好!",
          closeOnConfirm: true
        });
      }else{
        swal({
          title: "确定创建提现订单吗?",
          text: "您即将创建一份新提现的订单!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          interfaceService.addRefundApply($scope.params,function (data,headers,config) {
            // console.log("response:"+JSON.stringify(data));
            if(data.rescode == rescode.SUCCESS){
              swal({
                title:"创建成功！",
                text:"已成功创建提现订单。",
                type:"success",
                showCancelButton: true,
                cancelButtonText: "继续创建",
                confirmButtonText:"前往提现列表",
              },function (confirm) {
                if(confirm){
                  $state.go('main.companyinner.withdraw_list');
                }else{
                  $scope.params={
                    bankNo:null,
                    orderIds:'',
                    refundMoney:0
                  }
                  getListBankCard();
                }
              });
            }
          });
        });
      }
    }

    getListBankCard();
  }]);

yonglongApp.controller('userFriendManageController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {

    $scope.queryData = {
      pageno:1,
      pagesize:20,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }
    $scope.busownerResults={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }


    var httpList = function () {
      interfaceService.userListFriend($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.results = data.data;
      });
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }

    $scope.updateState = function (id,type) {
      var param = {
        id:id,
        status:1
      }
      var title = "确定通过请求吗？";
      var text = "您即将通过这位好友的请求！";
      var confirmButtonText = "是的,通过!";
      var successTitle = "好友添加成功!";
      var successText = "已经成功通过好友的添加请求!";
      var errorTitle = "执行失败!";
      switch (type){
        case 0://通过
          break;
        case 1://拒绝
          param.status = 9;
          title = "确定拒绝请求吗？";
          text = "您即将拒绝这位好友的请求！";
          confirmButtonText = "是的,拒绝!";
          successTitle = "好友拒绝成功!";
          successText = "已经成功拒绝好友的添加请求!";
          break;
      }

      swal({
        title: title,
        text: text,
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: confirmButtonText,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        animation: "slide-from-top",
      }, function(){
        interfaceService.userEditFriend(param,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:successTitle,
              text:successText,
              type:"success",
              confirmButtonText:"确定",
            },function () {
              httpList();
            });
          }else{
            swal({
              title:errorTitle,
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });
      });

    }

    httpList();
  }]);

yonglongApp.controller('userHasgetOrderController',['$scope','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();

    $scope.queryData = {
      orderSn:'',
      startTime:'',
      endTime:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:20,
    }


    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.userListMyorder($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }


    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }

    $scope.over = function (orderId) {
      swal({
        title: "确认送到吗?",
        text: "您即将确认送到此订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,确认!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.userOverOfferOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"确认成功！",
              text:"此订单已确认送到。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"确认失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }



    $scope.cancelOrder = function (orderId) {
      swal({
        title: "确定取消吗?",
        text: "您即将取消这份订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,取消!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.cancelOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"取消成功！",
              text:"此订单已取消。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"取消失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });

    }

    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        orderSn:'',
        startTime:'',
        endTime:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:20,
      }
    }

    httpList();

  }]);

yonglongApp.controller('userHasgetOrderController2',['$scope','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();

    $scope.queryData = {
      orderSn:'',
      startTime:'',
      endTime:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:20,
    }


    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.userListDispatchorder($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }


    $scope.test = function () {
      console.log(321);
    }
    $scope.companyUserDetail = function (userId) {
      console.log(123);
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }

    $scope.over = function (orderId) {
      swal({
        title: "确认送到吗?",
        text: "您即将确认送到此订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,确认!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.userOverOfferOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"确认成功！",
              text:"此订单已确认送到。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"确认失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }



    $scope.cancelOrder = function (orderId) {
      swal({
        title: "确定取消吗?",
        text: "您即将取消这份订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,取消!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.cancelOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"取消成功！",
              text:"此订单已取消。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"取消失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });

    }


    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        orderSn:'',
        startTime:'',
        endTime:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:20,
      }
    }

    httpList();

  }]);

yonglongApp.controller('userRegisterController',['$scope','$state','dropifyProvider','interfaceService','rescode','baseDataService','validateService','toastService',
  function ($scope,$state,dropifyProvider,interfaceService,rescode,baseDataService,validateService,toastService) {
    dropifyProvider.dropify();
    $scope.showTerms=function () {
      $('#terms').modal('show');
    }

    $scope.containerVType = baseDataService.getBoxVol();



    $scope.reg={
      memberName:'',
      password:'',
      passwordconfirm:'',
      companyName:'',
      companyLinker:'',
      email:'',
      mobilePhone:'',
      tel:'',
      licence:'',
      nameCard:'',
      nameCardBack:'',
      mobileCode:'',
      address:'',
      carNumber:'',
      busContainer:null,
    }
    $scope.regfile1 = {
      name:'drivingLicence',
      file:'',
    }
    $scope.regfile2 = {
      name:'roadLicence',
      file:'',
    }
    $scope.regfile3 = {
      name:'roadLicenceAttach',
      file:'',
    }
    $scope.regfile4 = {
      name:'carPic',
      file:'',
    }
    $scope.regfile5 = {
      name:'nameCard',
      file:'',
    }

    var files = [$scope.regfile5,$scope.regfile1,$scope.regfile2,$scope.regfile3,$scope.regfile4];

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.userRegister($scope.reg,files,function (data,headers,config) {
          console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            $state.go('main.userinner.wanner_order');
          }else if(data.rescode==rescode.AGAIN_PHONE){
            // 手机号码被注册
          }else if(data.rescode==rescode.EMPTY_SMS_CODE){
            // 验证码不能为空
          }
        });
      }else{
        console.log("$valid:"+$valid);
      }
    };

    //发送验证码
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function () {
      var validMobile = validateService.mobile($scope.reg.mobilePhone,true);
      if(validMobile.result && $scope.validCodeFlag){
        var second = 60;
        $scope.validCodeFlag = false;
        $scope.validCodeText = '正在发送...';

        var params = {
          codetype:0,
          mobilePhone:$scope.reg.mobilePhone
        }
        interfaceService.sendcode(params,function (data,headers,config) {
          console.log(JSON.stringify(data));

          if(data.rescode==rescode.SUCCESS){
            toastService.sendCodeToast(true);
            var timePromise = $interval(function () {
              if(second<=0){
                $interval.cancel(timePromise);
                timePromise = undefined;
                $scope.validCodeFlag = true;
                $scope.validCodeText = '重新发送验证码';
              }else{
                $scope.validCodeText = second+'秒后重新发送';
                second--;
              }
            },1000,65);

          }else{
            toastService.sendCodeToast(false);
            $scope.validCodeFlag = true;
            $scope.validCodeText = '发送验证码';
          }
        });
      }
    }

  }]);

yonglongApp.controller('userRoleController',['$rootScope','$scope','$state','$cookies','logoutService',
  function ($rootScope,$scope,$state,$cookies,logoutService) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='user'){
      console.log('没有user权限');
      window.location.href = 'index.html';
    }

    $scope.logout = function () {
      swal({
        title: "退出登录?",
        text: "是否要退出登录!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,注销!",
        closeOnConfirm: false,
      },function () {
        logoutService.logout();
      });
    }

    $scope.statego = function (str) {
      $state.go(str);
    }
  }]);

yonglongApp.controller('userUpdateInfoController',['$scope','$state','$timeout','dropifyProvider','interfaceService','rescode','baseDataService',
  function ($scope,$state,$timeout,dropifyProvider,interfaceService,rescode,baseDataService) {
    // dropifyProvider.dropify();
    $scope.showTerms=function () {
      $('#terms').modal('show');
    }

    $scope.containerVType = baseDataService.getBoxVol();

    $scope.reg={
      memberName:'',
      password:'',
      passwordconfirm:'',
      companyName:'',
      companyLinker:'',
      drivingLicence:'',
      email:'',
      mobilePhone:'',
      tel:'',
      licence:'',
      nameCard:'',
      nameCardBack:'',
      mobileCode:'',
      address:'',
      carNumber:'',
      busContainer:null,
    }
    $scope.regfile1 = {
      name:'drivingLicenceFile',
      file:'',
    }
    $scope.regfile2 = {
      name:'roadLicenceFile',
      file:'',
    }
    $scope.regfile3 = {
      name:'roadLicenceAttachFile',
      file:'',
    }
    $scope.regfile4 = {
      name:'carPicFile',
      file:'',
    }
    $scope.regfile5 = {
      name:'nameCardFile',
      file:'',
    }

    var files = [$scope.regfile5,$scope.regfile1,$scope.regfile2,$scope.regfile3,$scope.regfile4];

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.userUpdateInfo($scope.reg,files,function (data,headers,config) {
          // console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"修改成功！",
              text:"已成功修改个人信息。",
              type:"success",
              confirmButtonText:"确定",
            },function () {
            });
          }
        });
      }else{
        console.log("$valid:"+$valid);
      }
    };


    $scope.getUserInfo = function () {
      interfaceService.userUserinfo({},function (data,headers,config) {
        console.log(JSON.stringify(data));
        $scope.reg = data.data;
        $timeout(function () {
          dropifyProvider.dropify();
        },10);
      })
    };
    $scope.getUserInfo();

  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('userWannerOrderController',['$scope','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();

    $scope.queryData = {
      orderSn:'',
      orderStatus:'',
      startTime:'',
      endTime:'',
      originPort:'',
      loadingPort:'',
      shippingDate:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.userListGetorder($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));

        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }


    $scope.takeOrder = function (orderId) {
      swal({
        title: "确认接单吗?",
        text: "您即将接收此订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,接单!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var param={
          orderId:orderId
        }
        interfaceService.userTakeOfferOrder(param,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"接单成功！",
              text:"此订单已接收完毕。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"接单失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });

    }

    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        orderSn:'',
        orderStatus:'',
        startTime:'',
        endTime:'',
        originPort:'',
        loadingPort:'',
        shippingDate:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:10,
      }
    }

    httpList();

  }]);

/**
 * Created by tedyuen on 16-12-30.
 */
yonglongApp.controller('userWithdrawListController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {

    $scope.queryData ={
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.listRefundApply($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.results = data.data;
      });
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      httpList();
    }

    httpList();
  }]);

yonglongApp.controller('userWithdrawManageController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {

    $scope.params = {
      bankCardNo:'',
      bankCardOwner:'',
      bankName:''
    }

    var httpList = function () {
      interfaceService.listBankCard({},function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;

          console.log($scope.results.dataList.length);
        }
      });
    }

    $scope.del = function (result) {
      swal({
        title: "确定删除吗?",
        text: "您即将删除"+result.bankCardOwner+"的账户!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,删除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        animation: "slide-from-top",
      }, function(){
        var param = {
          id:result.id
        }
        interfaceService.delBankCard(param,function (data,headers,config) {
          // console.log("response:"+JSON.stringify(data));
          if(data.rescode == rescode.SUCCESS){
            swal({
              title:"删除成功成功！",
              text:"已成功删除此提现账户。",
              type:"success",
              confirmButtonText:"确定",
            },function () {
              httpList();
            });
          }
        });
      });
    }

    $scope.showAddBankCard = function () {
      $('#add-bank-card').modal('show');
    }

    //添加提现帐号
    $scope.onSubmit = function ($valid) {
      if($valid){
        interfaceService.addBankCard($scope.params,function (data,headers,config) {
          // console.log("response:"+JSON.stringify(data));
          if(data.rescode == rescode.SUCCESS){
            swal({
              title: "创建成功",
              text: "您已成功创建提现帐号!",
              type: "success",
              confirmButtonText: "完成",
              closeOnConfirm: true,

            },function () {
              $('#add-bank-card').modal('hide');
              httpList();
            })
          }
        });

      }else{

      }
    }

    httpList();
  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('accountInfoController',['$scope','countupProvider','interfaceService','rescode',
  function ($scope,countupProvider,interfaceService,rescode) {
    // countupProvider.countup();
    $scope.result = {
      all: 0,
      canpos:0,
      pay:0,
      pos:0,
      posing:0
    }
    var refresh = function () {
      interfaceService.accountInfo({},function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.result = data.data;
        }
      });
    }

    refresh();
  }
]);

yonglongApp.controller('companyRoleController',['$rootScope','$scope','$cookies','logoutService',
  function ($rootScope,$scope,$cookies,logoutService) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='company'){
      console.log('没有company权限');
      window.location.href = 'index.html';
    }

    $scope.logout = function () {
      swal({
        title: "退出登录?",
        text: "是否要退出登录!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,注销!",
        closeOnConfirm: false,
      },function () {
        logoutService.logout();
      });
    }
}]);

/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('createOrderController',['$scope','$timeout','$state','$compile','showDatePickerProvider','URL_CONS','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,$state,$compile,showDatePickerProvider,URL_CONS,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.orderDetail ={
      shippingName:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      transitPort:'',
      destPort:'',
      orderType:0,
      containerVType:0,
      containerSType:0,
      containerVol:0,
      grossWeight:0,
      note:'',
      shippingFee:0,
      referenceShippingFee:0,
      shippingSn:'',
      extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}]
    }

    $scope.initStr = '上下车费;待时费;动卫检;坏污箱移箱费;预进港;落箱费';

    //提交表单
    $scope.onSubmit = function($valid){
      if($valid){
        swal({
          title: "确定创建订单吗?",
          text: "您即将创建一份新的订单!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          interfaceService.companyCreateOrder($scope.orderDetail,function (data,headers,config) {
            console.log(JSON.stringify(data));
            if(data.rescode==rescode.SUCCESS){
              swal({
                title:"创建成功！",
                text:"已成功创建订单。",
                type:"success",
                showCancelButton: true,
                cancelButtonText: "继续创建",
                confirmButtonText:"订单查询",
              },function () {
                $state.go('main.companyinner.query_order');
              });
            }else{
              swal({
                title:"创建失败！",
                text:"请重新执行此操作。",
                type:"error",
                confirmButtonText:"确定"
              });
            }
          });
        });
      }else{
        // console.log("$valid:"+$valid);
      }
    };

    $scope.reset = function (theForm) {
      $scope.orderDetail ={
        shippingName:'',
        shippingDate:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        transitPort:'',
        destPort:'',
        orderType:0,
        containerVType:0,
        containerSType:0,
        containerVol:0,
        grossWeight:0,
        note:'',
        shippingFee:0,
        referenceShippingFee:0,
        shippingSn:'',
        extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}]
      }

      theForm.$setPristine();
      theForm.$setUntouched();
    }

//   //百度地图
    // $scope.offlineOpts = {retryInterval: 5000};
    //
    // var longitude = 121.506191;
    // var latitude = 31.245554;
    // $scope.mapOptions = {
    //   center: {
    //     longitude: longitude,
    //     latitude: latitude
    //   },
    //   zoom: 17,
    //   city: 'ShangHai',
    //   markers: [{
    //     longitude: longitude,
    //     latitude: latitude,
    //     icon: 'img/mappiont.png',
    //     width: 49,
    //     height: 60,
    //     title: 'Where',
    //     content: 'Put description here'
    //   }]
    // };

    // $scope.mapLoaded = function(map) {
    //   console.log(map);
    // };
  // $timeout(function() {
  //   $scope.mapOptions.center.longitude = 121.500885;
  //   $scope.mapOptions.center.latitude = 31.190032;
  //   $scope.mapOptions.markers[0].longitude = 121.500885;
  //   $scope.mapOptions.markers[0].latitude = 31.190032;
  // }, 5000);

  $scope.$watch('orderDetail.shippingDate',function () {
    console.log('====>!!  '+$scope.orderDetail.shippingDate);

  });




}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('createWithdrawController',['$scope','$timeout','$state','interfaceService','showDatePickerProvider','rescode',
  function ($scope,$timeout,$state,interfaceService,showDatePickerProvider,rescode) {
    showDatePickerProvider.showDatePicker();

    $scope.cashListCheckbox = [];//需要提现的订单
    $scope.cashListDispatchCheckbox = [];//需要提现的指派订单
    $scope.params={
      bankNo:null,
      orderIds:'',
      refundMoney:0
    }
    var updateParams = function () {
      var temp;
      $scope.params.refundMoney = 0;
      $scope.params.orderIds = '';
      for(temp in $scope.cashListCheckbox){
        $scope.params.refundMoney+=$scope.cashListCheckbox[temp].moneyPaid;
        $scope.params.orderIds += $scope.cashListCheckbox[temp].id+',';
      }
      for(temp in $scope.cashListDispatchCheckbox){
        $scope.params.refundMoney+=$scope.cashListDispatchCheckbox[temp].moneyPaid + $scope.cashListDispatchCheckbox[temp].offerOrderPaid;
        $scope.params.orderIds += '-->'+$scope.cashListDispatchCheckbox[temp].id+',';
      }
    }

    var getCashList = function () {
      interfaceService.cashList({},function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.cashList = data.data.listCash;
          $scope.listCashDispatch = data.data.dataDispatch;

        }
      });
    }
    var getListBankCard = function () {
      interfaceService.listBankCard({},function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.listBankCards = data.data;
        }
        $timeout(getCashList,50);
      });
    }

    $scope.changeBankCard= function () {
      console.log("card!!!");
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }

    // 复选cashlist

    $scope.isSelected = function(result){
      return $scope.cashListCheckbox.indexOf(result)>=0;
    }
    $scope.isDispatchSelected = function(result){
      return $scope.cashListDispatchCheckbox.indexOf(result)>=0;
    }


    $scope.updateCashListCBSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.cashListCheckbox.push(result);
      }else{
        var idx = $scope.cashListCheckbox.indexOf(result);
        $scope.cashListCheckbox.splice(idx,1);
      }
      updateParams();
    }

    $scope.updateCashListDispatchCBSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.cashListDispatchCheckbox.push(result);
      }else{
        var idx = $scope.cashListCheckbox.indexOf(result);
        $scope.cashListDispatchCheckbox.splice(idx,1);
      }
      updateParams();
    }

    $scope.onSubmit = function(){
      if($scope.params.bankNo==null){
        swal({
          title: "请选择卡号?",
          text: "请选择提现的银行卡卡号!",
          type: "error",
          confirmButtonText: "好!",
          closeOnConfirm: true
        });
      }else if($scope.params.refundMoney==0){
        swal({
          title: "请选择需要提现的订单?",
          text: "请选择需要提现的订单!",
          type: "error",
          confirmButtonText: "好!",
          closeOnConfirm: true
        });
      }else{
        swal({
          title: "确定创建提现订单吗?",
          text: "您即将创建一份新提现的订单!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          interfaceService.addRefundApply($scope.params,function (data,headers,config) {
            // console.log("response:"+JSON.stringify(data));
            if(data.rescode == rescode.SUCCESS){
              swal({
                title:"创建成功！",
                text:"已成功创建提现订单。",
                type:"success",
                showCancelButton: true,
                cancelButtonText: "继续创建",
                confirmButtonText:"前往提现列表",
              },function (confirm) {
                if(confirm){
                  $state.go('main.companyinner.withdraw_list');
                }else{
                  $scope.params={
                    bankNo:null,
                    orderIds:'',
                    refundMoney:0
                  }
                  getListBankCard();
                }
              });
            }
          });
        });
      }
    }

    getListBankCard();
}]);

yonglongApp.controller('editOrderController',['$scope','$stateParams','$state','showDatePickerProvider','URL_CONS','baseDataService','interfaceService','rescode',
  function ($scope,$stateParams,$state,showDatePickerProvider,URL_CONS,baseDataService,interfaceService,rescode) {

    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();

    $scope.orderDetail = {
      id:$stateParams.orderId,
      shippingName:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      transitPort:'',
      destPort:'',
      orderType:0,
      containerVType:0,
      containerSType:0,
      containerVol:0,
      grossWeight:0,
      note:'',
      shippingFee:0,
      referenceShippingFee:0,
      shippingSn:'',
      extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}]
    }

    var httpList = function () {
      console.log('==> '+$stateParams.orderId);
      if($stateParams.orderId){
        interfaceService.companyDetailOrder({orderId:$stateParams.orderId},function (data,headers,config) {
          console.log("response:"+JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS) {
            $scope.orderDetail = data.data;
            $scope.orderDetail.shippingDate = data.data.shippingDateStr;

          }
        });
      }
    }

    // 表单查询订单列表
    $scope.reset = function () {
      interfaceService.showLoading('正在重置');
      httpList();
    }

    //提交表单
    $scope.onSubmit = function($valid){
      if($valid){
        swal({
          title: "确定修改订单吗?",
          text: "您即将修改此订单!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,修改!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          console.log('$scope.orderDetail:  '+$scope.orderDetail);
          interfaceService.companyUpdateOrder($scope.orderDetail,function (data,headers,config) {
            console.log(JSON.stringify(data));
            if(data.rescode==rescode.SUCCESS){
              swal({
                title:"修改成功！",
                text:"已成功修改订单。",
                type:"success",
                showCancelButton: true,
                cancelButtonText: "确定",
                confirmButtonText:"订单查询",
              },function () {
                $state.go('main.companyinner.query_order');
              });
            }else{
              swal({
                title:"修改失败！",
                text:"请重新执行此操作。",
                type:"error",
                confirmButtonText:"确定"
              });
            }
          });
        });
      }else{
        // console.log("$valid:"+$valid);
      }
    };

    httpList();

}])

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('friendManageController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {

    $scope.queryData = {
      startTime:'',
      endTime:'',
      orderType:'',
      pageno:1,
      pagesize:20,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }
    $scope.busownerResults={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 通过手机查找联系人，请求参数
    $scope.busowner = {
      mobilePhone:''
    }
    $scope.addFriendId = {
      busMemberId:''
    };

    var httpList = function () {
      interfaceService.companyListFriend($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.results = data.data;
      });
    }

    var httpBusowner = function () {
      interfaceService.companyListBusowners($scope.busowner,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.busownerResults = data.data;
      });
    }

    // 表单查询好友列表
    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }

    // 通过手机查人
    $scope.getBusowner = function ($valid) {
      if($valid){
        httpBusowner();
      }else{

      }
    }

    // 添加好友
    $scope.addFriend = function () {
      if($scope.addFriendId.busMemberId!=''){
        interfaceService.companyAddFriend($scope.addFriendId,function (data,headers,config) {
          // console.log("response:"+JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"添加成功！",
              text:"已添加好友。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpBusowner();
              httpList();
            });
          }else{
            swal({
              title:"添加失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });
      }
    }

    $scope.delFriend = function (fid) {
      swal({
        title: "确定解除关系吗?",
        text: "您即将解除与该好友的关系!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,解除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        animation: "slide-from-top",
      }, function(){
        var param = {
          fid:fid
        }
        interfaceService.companyDelFriend(param,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"解除成功！",
              text:"已解除好友关系。",
              type:"success",
              confirmButtonText:"确定",
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"解除失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });
      });

    }

    httpList();
}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('hasgetOrderController',['$scope','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode','alipayService',
  function ($scope,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode,alipayService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();

    $scope.queryData = {
      orderSn:'',
      startTime:'',
      endTime:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:20,
    }


    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.companyListMyorder($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }


    $scope.busUserDetail = function (userId,type) {
      // console.log("===> "+userId);
      switch (type){
        case 0:param={
          userId:userId
        };
          break;
        case 1:param={
          orderId:userId
        }
      }
      interfaceService.busUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 0;
          $('#bus-user-detail-modal').modal('show');
        }
      });
    }

    $scope.companyUserDetail = function (userId) {
      console.log('===> ');
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }


    $scope.cancelOrder = function (orderId) {
      swal({
        title: "确定取消吗?",
        text: "您即将取消这份订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,取消!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.cancelOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"取消成功！",
              text:"此订单已取消。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"取消失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });

    }

    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        orderSn:'',
        startTime:'',
        endTime:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:20,
      }
    }

    $scope.alipay = function (result) {
      alipayService.alipay(result);
    }

    httpList();

    $scope.companyListFriend = function (orderId) {
      console.log('请求好友列表');
      $scope.dispatchCarParams={
        dispatchFee:undefined,
        fid:'',
        offerOrderMoney:undefined,
        orderId:orderId
      }
      $scope.myFriendsIdArray = [];
      // $scope.dispatchCarParams.orderId = orderId;

      var friendStatus = {
        status:1
      };
      interfaceService.companyListFriend(friendStatus,function (data,headers,config) {
        console.log('--->'+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.friendList = data.data;
          for(var i=0;i<$scope.friendList.pageData.length;i++){
            $scope.myFriendsIdArray.push($scope.friendList.pageData[i]);
          }
          console.log('获取好友列表'+$scope.friendList.pageData.length);
          //
          $('#dispatch-car').modal('show')
        }
      });
    }

      // 指定车辆
    $scope.selectedOid = function () {
      console.log('指定车辆==>  '+JSON.stringify($scope.dispatchCarParams));
      swal({
          title: "确认指派吗？",
          text: "此订单即将指派车辆!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,确定指派!",
          cancelButtonText: "取消",
          closeOnConfirm: false
        },
        function(){
          interfaceService.fleetDispatchOrder($scope.dispatchCarParams,function (data,headers,config) {
            console.log('--->'+JSON.stringify(data));
            if(data.rescode == rescode.SUCCESS){
              swal("成功!", "指派成功", "success");
              $('#dispatch-car').modal('hide');
            }else {
              swal("失败!", data.resdesc , "warning");
            }
          });
        });
    }



  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('queryOrderController',['$scope','$state','showDatePickerProvider','baseDataService','interfaceService','rescode','alipayService',
  function ($scope,$state,showDatePickerProvider,baseDataService,interfaceService,rescode,alipayService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();
    $scope.queryData = {
      goodsMemberId: 67,
      startTime:'',
      endTime:'',
      orderSn:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    var httpList = function () {
      interfaceService.companyOrderList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    //删除订单
    $scope.delete = function (orderId) {
      swal({
        title: "确定删除吗?",
        text: "您即将删除这份订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,删除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.deleteOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"删除成功！",
              text:"此订单已删除。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"删除失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }


    $scope.busUserDetail = function (userId,type) {
      // console.log("===> "+userId);
      switch (type){
        case 0:param={
          userId:userId
        };
        break;
        case 1:param={
          orderId:userId
        }
      }
      interfaceService.busUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 0;
          $('#bus-user-detail-modal').modal('show');
        }
      });
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }


    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.editOrder = function (id) {
      if(id){
        $state.go('main.companyinner.edit_order',{orderId:id});
      }
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        goodsMemberId: 67,
        startTime:'',
        endTime:'',
        orderSn:'',
        shippingDate:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:10,
      }
    }


    $scope.alipay = function (result) {
      alipayService.alipay(result);
    }

    httpList();

}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('receiveReportController',['$scope','$timeout','showDatePickerProvider','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();

    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
    }

    var httpList = function () {
      interfaceService.reportList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          $scope.flist = data.data.flist;
          $scope.list = data.data.list;
        }
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
      }
    }


    httpList();
}]);

yonglongApp.controller('registerCompanyController', ['$scope', '$state', '$interval', '$cookies', 'dropifyProvider', 'interfaceService', 'rescode', 'validateService', 'toastService', 'cookiesService',
  function($scope, $state, $interval, $cookies, dropifyProvider, interfaceService, rescode, validateService, toastService, cookiesService) {
    dropifyProvider.dropify();
    $scope.showTerms = function() {
      $('#terms').modal('show');
    };

    $scope.reg = {
      memberName: '',
      password: '',
      passwordconfirm: '',
      companyName: '',
      companyLinker: '',
      email: '',
      mobilePhone: '',
      tel: '',
      licence: '',
      nameCard: '',
      nameCardBack: '',
      mobileCode: '',
      address: ''
    };
    $scope.regfile1 = {
      name: 'nameCardFile',
      file: '',
    };
    $scope.regfile2 = {
      name: 'nameCardBackFile',
      file: '',
    };
    $scope.regfile3 = {
      name: 'licenceFile',
      file: '',
    };
    var files = [$scope.regfile1, $scope.regfile2, $scope.regfile3];

    $scope.onSubmit = function($valid) {
      if ($valid) {
        interfaceService.companyRegister($scope.reg, files, function(data, headers, config) {
          // console.log(JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            $state.go('main.companyinner.create_order');
          } else if (data.rescode == rescode.AGAIN_PHONE) {
            // 手机号码被注册
          } else if (data.rescode == rescode.EMPTY_SMS_CODE) {
            // 验证码不能为空
          }
        });
      } else {
        console.log("$valid:" + $valid);
      }
    };

    //发送验证码
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function() {
      var validMobile = validateService.mobile($scope.reg.mobilePhone, true);
      if (validMobile.result && $scope.validCodeFlag) {
        var second = 60;
        $scope.validCodeFlag = false;
        $scope.validCodeText = '正在发送...';

        var params = {
          codetype: 0,
          mobilePhone: $scope.reg.mobilePhone
        };
        interfaceService.sendcode(params, function(data, headers, config) {
          console.log(JSON.stringify(data));

          if (data.rescode == rescode.SUCCESS) {
            toastService.sendCodeToast(true);
            var timePromise = $interval(function() {
              if (second <= 0) {
                $interval.cancel(timePromise);
                timePromise = undefined;
                $scope.validCodeFlag = true;
                $scope.validCodeText = '重新发送验证码';
              } else {
                $scope.validCodeText = second + '秒后重新发送';
                second--;
              }
            }, 1000, 65);

          } else {
            toastService.sendCodeToast(false);
            $scope.validCodeFlag = true;
            $scope.validCodeText = '发送验证码';
          }
        });
      }
    };


  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('sendReportController',['$scope','$timeout','showDatePickerProvider','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();

    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:true,
      sender:'',
    }

    var httpList = function () {
      interfaceService.reportList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          $scope.flist = data.data.flist;
          $scope.list = data.data.list;
        }
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:true,
        sender:'',
      }
    }


    httpList();
}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('updateInfoController', ['$scope','$timeout', 'dropifyProvider', 'interfaceService', 'rescode',
  function($scope,$timeout, dropifyProvider, interfaceService, rescode) {
    // dropifyProvider.dropify();

    $scope.reg = {
      memberName: '',
      password: '',
      passwordconfirm: '',
      companyName: '',
      companyLinker: '',
      email: '',
      mobilePhone: '',
      tel: '',
      license: '',
      nameCard: '',
      nameCardBack: '',
      mobileCode: '',
      address: ''
    };
    $scope.regfile1 = {
      name: 'nameCardFile',
      file: '',
    };
    $scope.regfile2 = {
      name: 'nameCardBackFile',
      file: '',
    };
    $scope.regfile3 = {
      name: 'licenceFile',
      file: '',
    };
    var files = [$scope.regfile1, $scope.regfile2, $scope.regfile3];


    $scope.onSubmit = function($valid) {
      if ($valid) {
        interfaceService.companyUpdateinfo($scope.reg, files, function(data, headers, config) {
          // console.log(JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            swal({
              title: "修改成功！",
              text: "已成功修改个人信息。",
              type: "success",
              confirmButtonText: "确定",
            }, function() {});
          }
        });
      } else {
        console.log("$valid:" + $valid);
      }
    };


    $scope.getUserInfo = function() {
      interfaceService.companyUserinfo({}, function(data, headers, config) {
        console.log(JSON.stringify(data));
        $scope.reg = data.data;
        $timeout(function () {
          dropifyProvider.dropify();
        },10);
      });
    };
    $scope.getUserInfo();
  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('wannerOrderController',['$scope','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();

    $scope.queryData = {
      orderSn:'',
      orderStatus:'',
      startTime:'',
      endTime:'',
      originPort:'',
      loadingPort:'',
      shippingDate:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.companyListGetorder($scope.queryData,function (data,headers,config) {
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }


    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }

    $scope.busUserDetail = function (userId) {
      // console.log("===> "+userId);
      var param={
        orderId:userId
      }
      interfaceService.busUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 0;
          $('#bus-user-detail-modal').modal('show');
        }
      });
    }

    $scope.takeOrder = function (orderId) {
      swal({
        title: "确认接单吗?",
        text: "您即将接收此订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,接单!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var param={
          orderId:orderId,
          busMemberType:0
        }
        interfaceService.fleetTakeOfferOrder(param,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"接单成功！",
              text:"此订单已接收完毕。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"接单失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });

    }

    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        orderSn:'',
        orderStatus:'',
        startTime:'',
        endTime:'',
        originPort:'',
        loadingPort:'',
        shippingDate:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:10,
      }
    }

    httpList();

  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('withdrawListController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {

    $scope.queryData ={
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.listRefundApply($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.results = data.data;
      });
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      httpList();
    }

    httpList();
}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('withdrawManageController', ['$scope', 'interfaceService', 'rescode',
  function($scope, interfaceService, rescode) {

    $scope.params = {
      bankCardNo: '',
      bankCardOwner: '',
      bankName: ''
    };

    var httpList = function() {
      interfaceService.listBankCard({}, function(data, headers, config) {
        // console.log("response:"+JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;

          console.log($scope.results.dataList.length);
        }
      });
    };

    $scope.del = function(result) {
      swal({
        title: "确定删除吗?",
        text: "您即将删除" + result.bankCardOwner + "的账户!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,删除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        animation: "slide-from-top",
      }, function() {
        var param = {
          id: result.id
        };
        interfaceService.delBankCard(param, function(data, headers, config) {
          console.log("response:"+JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            swal({
              title: "删除成功成功！",
              text: "已成功删除此提现账户。",
              type: "success",
              confirmButtonText: "确定",
            }, function() {
              httpList();
            });
          }
        });
      });
    };

    $scope.showAddBankCard = function() {
      $('#add-bank-card').modal('show');
    };

    //添加提现帐号
    $scope.onSubmit = function($valid) {
      if ($valid) {
        interfaceService.addBankCard($scope.params, function(data, headers, config) {
          // console.log("response:"+JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            swal({
              title: "创建成功",
              text: "您已成功创建提现帐号!",
              type: "success",
              confirmButtonText: "完成",
              closeOnConfirm: true,

            }, function() {
              $('#add-bank-card').modal('hide');
              httpList();
            });
          }else if(data.rescode == rescode.HAS_BANK){
            swal('绑卡出错','已经绑定过银行卡，换卡请先解绑!','error');
          }

        });

      } else {

      }
    };

    httpList();
  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('adminAllReportController',['$scope','$timeout','showDatePickerProvider','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();

    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
    }

    var httpList = function () {
      interfaceService.reportList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          $scope.flist = data.data.flist;
          $scope.list = data.data.list;
        }
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
      }
    }

    httpList();
  }]);

yonglongApp.controller('adminCompanyListController',['$scope','showDatePickerProvider','interfaceService','rescode',
  function ($scope,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.queryData = {
      startTime:'',
      endTime:'',
      pageno:1,
      pagesize:20
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    var httpList = function () {
      interfaceService.adminGetGoodsUserList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 查看用户账户状态
    $scope.gb = function (id,type,bankCardOwner) {
      var tempData = {
        id:id,
        type:type
      }
      interfaceService.accountInfo(tempData,function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.accountResult = data.data;
          $scope.accountResult.bankCardOwner = bankCardOwner;
          $scope.accountResult.type = type;
          $('#account-info-modal').modal('show');
        }
      });
    }

    //通过审核
    $scope.auditSysMember = function (id,type,ila) {
      var title = "确定通过审核吗";
      var text = "这位会员即将通过审核";
      var confirmButtonText = "是的,通过!";
      var resultTitle = "通过成功!";
      var resultText = "此会员已经通过审核。";
      if(ila==1){//通过

      }else if(ila==0){//取消
        title = "确定取消审核吗";
        text = "即将取消此会员已通过的审核";
        confirmButtonText = "是的,取消!";
        resultTitle = "取消成功!";
        resultText = "此会员已经取消通过的审核。";
      }
      swal({
        title: title,
        text: text,
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: confirmButtonText,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          id:id,
          isValidated:ila,
          type:type
        }
        interfaceService.adminAuditSysMember(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:resultTitle,
              text:resultText,
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"执行失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }


    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }



    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        pageno:1,
        pagesize:20
      }
    }

    httpList();

  }]);

yonglongApp.controller('adminEditNewsController',['$scope','$stateParams','$timeout','dropifyProvider','interfaceService','rescode',
  function ($scope,$stateParams,$timeout,dropifyProvider,interfaceService,rescode) {
    console.log("newsId: "+$stateParams.newsId);

    $scope.reg = {
      id:$stateParams.newsId,
      title:'',
      note:'',
      linkurl:'',
      thumbImg:''
    }

    $scope.regfile1 = {
      name:'thumbImgFile',
      file:'',
    }

    var files = [$scope.regfile1];

    var httpList = function () {
      var params = {
        id:$scope.reg.id
      }
      interfaceService.articleDetail(params,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.reg = data.data;
        }
        $timeout(function () {
          dropifyProvider.dropify();
        },10);

      });
    }

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.articleEdit($scope.reg,files,function (data,headers,config) {
          console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"编辑成功！",
              text:"已成功编辑此条新闻。",
              type:"success",
              confirmButtonText:"确定",
            },function () {
              httpList();
            });
          }
        });
      }else{
        console.log("$valid:"+$valid);
      }
    };

    if($scope.reg.id!=0){
      httpList();
    }else{
      dropifyProvider.dropify();
    }

  }]);

yonglongApp.controller('adminLoginController',['$scope','$rootScope','$cookies','$state','interfaceService','rescode','cookiesService',
  function ($scope,$rootScope,$cookies,$state,interfaceService,rescode,cookiesService) {


    var initAdminForm = function () {
      var adminMName = $cookies.get('yltAdminMName');
      var adminIsReme = $cookies.get('yltAdminIsReme');
      var adminPass = $cookies.get('yltAdminPass');

      console.log(adminMName);

      if(adminMName==undefined){
        adminMName = '';
      }
      if(adminPass==undefined){
        adminPass = '';
      }
      if(adminIsReme==undefined){
        adminIsReme = 'false';
        adminPass = '';
      }else{
        if(adminIsReme=='false'){
          adminPass = '';
        }
      }

      $scope.admin = {
        memberName:adminMName,
        password:adminPass,
        isRemember:adminIsReme=='true'
      }
    }

    var doSwal = function (code) {
      if(code == rescode.UNKNOW_USER){
        swal('错误','帐号不存在','warning');
      }else if(code == rescode.ERROR_PASSWORD){
        swal('错误','密码不正确','warning');
      }
    }


    $scope.onLoginAdmin = function ($valid) {
      if($valid.adminMemberName.$invalid){
        swal('错误','帐号不能为空','warning');
        return;
      }

      if($valid.adminPassword.$invalid){
        swal('错误','密码不能为空','warning');
        return;
      }

      interfaceService.adminLogin($scope.admin,function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $rootScope.loginUser = data.data;

          $cookies.put('yltAdminMName',$scope.admin.memberName,cookiesService.cookiesDate());
          if($scope.admin.isRemember){
            $cookies.put('yltAdminIsReme','true',cookiesService.cookiesDate());
            $cookies.put('yltAdminPass',$scope.admin.password,cookiesService.cookiesDate());
          }else{
            $cookies.put('yltAdminIsReme','false',cookiesService.cookiesDate());
            $cookies.remove('yltAdminPass');
          }
          $cookies.putObject('yltUser',$rootScope.loginUser,cookiesService.cookiesDate());
          $state.go('main.admin.order_list');
        }else{
          doSwal(data.rescode);
        }
      });
    }

    initAdminForm();
}]);

yonglongApp.controller('adminNewsListController',['$scope','$timeout','$state','showDatePickerProvider','interfaceService','rescode',
  function ($scope,$timeout,$state,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.queryData = {
      pageno:1,
      pagesize:8
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      httpList();
    }

    var httpList = function () {
      interfaceService.articleList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;

          $timeout(function () {
            $('.news-note').ellipsis({
              row:2
            });
            $('.news-title').ellipsis({
              row:1
            });

          },20);

        }
      });
    }

    $scope.editNews = function (id) {
      $state.go('main.admin.edit_news',{newsId:id});
    }

    //通过审核
    $scope.deleteNews = function (id) {
      swal({
        title: "确定删除吗?",
        text: "您即将删除此条新闻!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,删除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          id:id
        }
        interfaceService.articleDelete(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"删除成功！",
              text:"此条新闻已经删除。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"删除失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }


    httpList();

  }]);

yonglongApp.controller('adminOrderListController',['$scope','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,showDatePickerProvider,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();
    $scope.queryData = {
      startTime:'',
      endTime:'',
      orderSn:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    var httpList = function () {
      interfaceService.adminGetOrderList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    //删除订单
    $scope.delete = function (orderId) {
      swal({
        title: "确定删除吗?",
        text: "您即将删除这份订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,删除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.deleteOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"删除成功！",
              text:"此订单已删除。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"删除失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }


    $scope.busUserDetail = function (userId,type) {
      // console.log("===> "+userId);
      switch (type){
        case 0:param={
          userId:userId
        };
          break;
        case 1:param={
          orderId:userId
        }
      }
      interfaceService.busUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 0;
          $('#bus-user-detail-modal').modal('show');
        }
      });
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }


    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        orderSn:'',
        shippingDate:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:10,
      }
    }

    httpList();

  }]);

yonglongApp.controller('adminRoleController',['$rootScope','$scope','$cookies','$state','logoutService',
  function ($rootScope,$scope,$cookies,$state,logoutService) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='admin'){
      console.log('没有admin权限');
      $state.go('login');
    }

    $scope.logout = function () {
      swal({
        title: "退出登录?",
        text: "是否要退出登录!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,注销!",
        closeOnConfirm: false,
      },function () {
        logoutService.logout('admin');
      });
    }

}]);

yonglongApp.controller('adminUserListController',['$scope','showDatePickerProvider','interfaceService','rescode',
  function ($scope,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.queryData = {
      startTime:'',
      endTime:'',
      pageno:1,
      pagesize:20
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    var httpList = function () {
      interfaceService.adminGetBusUserList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 查看用户账户状态
    $scope.gb = function (id,type,bankCardOwner) {
      var tempData = {
        id:id,
        type:type
      }
      interfaceService.accountInfo(tempData,function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.accountResult = data.data;
          $scope.accountResult.bankCardOwner = bankCardOwner;
          $scope.accountResult.type = type;
          $('#account-info-modal').modal('show');
        }
      });
    }

    //通过审核
    $scope.auditSysMember = function (id,type,ila) {
      var title = "确定通过审核吗";
      var text = "这位会员即将通过审核";
      var confirmButtonText = "是的,通过!";
      var resultTitle = "通过成功!";
      var resultText = "此会员已经通过审核。";
      if(ila==1){//通过

      }else if(ila==0){//取消
        title = "确定取消审核吗";
        text = "即将取消此会员已通过的审核";
        confirmButtonText = "是的,取消!";
        resultTitle = "取消成功!";
        resultText = "此会员已经取消通过的审核。";
      }
      swal({
        title: title,
        text: text,
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: confirmButtonText,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          id:id,
          isValidated:ila,
          type:type
        }
        interfaceService.adminAuditSysMember(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:resultTitle,
              text:resultText,
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"执行失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }


    $scope.busUserDetail = function (userId) {
      var param={
        userId:userId
      }

      interfaceService.busUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 0;
          $('#bus-user-detail-modal').modal('show');
        }
      });
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }



    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        pageno:1,
        pagesize:20
      }
    }

    httpList();

  }]);

yonglongApp.controller('adminWithdrawListController',['$scope','showDatePickerProvider','interfaceService','rescode','loadingService',
  function ($scope,showDatePickerProvider,interfaceService,rescode,loadingService) {
    showDatePickerProvider.showDatePicker();
    $scope.queryData = {
      startTime:'',
      endTime:'',
      pageno:1,
      pagesize:20
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    var httpList = function () {
      interfaceService.adminListSysRefund($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 查看用户账户状态
    $scope.gb = function (id,type,bankCardOwner) {
      var tempData = {
        id:id,
        type:type
      }
      interfaceService.accountInfo(tempData,function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.accountResult = data.data;
          $scope.accountResult.bankCardOwner = bankCardOwner;
          $scope.accountResult.type = type;
          $('#account-info-modal').modal('show');
        }
      });
    }

    //通过审核
    $scope.auditSysRefund = function (id) {
      swal({
        title: "确定通过审核吗?",
        text: "这份提现订单即将通过审核!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,通过!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          id:id
        }
        interfaceService.adminAuditSysRefund(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"通过成功！",
              text:"此提现订单已经通过审核。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"通过失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }


    $scope.busUserDetail = function (userId) {
      var param={
        userId:userId
      }

      interfaceService.busUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 0;
          $('#bus-user-detail-modal').modal('show');
        }
      });
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }



    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        pageno:1,
        pagesize:20
      }
    }

    httpList();

  }]);

yonglongApp.controller('forgetPasswordController',['$scope','$state','$stateParams','$interval','interfaceService','rescode','validateService','toastService',
  function ($scope,$state,$stateParams,$interval,interfaceService,rescode,validateService,toastService) {

    switch ($stateParams.role){
      case '0':
        $scope.roleText = '发货方';
        break;
      case '1':
        $scope.roleText = '承运方';
        break;
      case '2':
        $scope.roleText = '管理员';
        break;

    }

    $scope.params = {
      role:$stateParams.role,
      mobileCode:'',
      mobilePhone:undefined,
      newPassword:''
    }

    $scope.onResetPassword = function ($valid) {
      if($valid){
        interfaceService.resetPassword($scope.params,function (data,headers,config) {
          // console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"密码重置成功！",
              text:"新密码已通过短信发送至您的注册手机。",
              type:"success",
              showCancelButton: true,
              cancelButtonText: "确定",
              confirmButtonText:"前往登录",
            },function () {
              console.log("$stateParams.role: "+$stateParams.role);
              switch($stateParams.role){
                case '0'://company
                case '1'://user
                  window.location.href = 'index.html';
                  break;
                case '2':
                  console.log('go!!');
                  $state.go('adminlogin');
                  break;//admin
              }
            });
          }else{

          }
        });
      }
    }

    //发送验证码
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function () {
      var validMobile = validateService.mobile($scope.params.mobilePhone,true);
      if(validMobile.result && $scope.validCodeFlag){
        var second = 60;
        $scope.validCodeFlag = false;
        $scope.validCodeText = '正在发送...';

        var params = {
          codetype:1,
          mobilePhone:$scope.params.mobilePhone
        }
        interfaceService.sendcode(params,function (data,headers,config) {
          // console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            toastService.sendCodeToast(true);
            var timePromise = $interval(function () {
              if(second<=0){
                $interval.cancel(timePromise);
                timePromise = undefined;
                $scope.validCodeFlag = true;
                $scope.validCodeText = '重新发送验证码';
              }else{
                $scope.validCodeText = second+'秒后重新发送';
                second--;
              }
            },1000,65);

          }else{
            toastService.sendCodeToast(false);
            $scope.validCodeFlag = true;
            $scope.validCodeText = '发送验证码';
          }
        });
      }
    }

}]);

yonglongApp.controller('mainController',['$rootScope','$scope','$cookies','$timeout',function ($rootScope,$scope,$cookies,$timeout) {
  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      console.info(fromState + "->" + toState, toParams, fromParams);
    }
  )

  $timeout(function () {
    var uiState = new UiState();
    uiState.ready()
  },50);
}]);

yonglongApp.controller('updatePasswordController', ['$rootScope', '$scope', '$interval', 'interfaceService', 'rescode', 'toastService',
  function($rootScope, $scope, $interval, interfaceService, rescode, toastService) {

    $scope.reg = {
      mobileCode: '',
      newPassword: '',
      repassword: '',
    };

    $scope.valid = {
      repass: true
    };


    $scope.checkPassword = function() {
      $scope.valid.repass = $scope.reg.newPassword == $scope.reg.repassword;
    };

    $scope.onSubmit = function($valid) {
      if ($valid) {
        if (!$scope.valid.repass) {
          swal('重复密码有误', '两次输入的密码需要一致!', 'error');
          return;
        }
        interfaceService.updatePassword($scope.reg, function(data, headers, config) {
          if (data.rescode == rescode.SUCCESS) {
            swal('修改成功', '修改密码成功!', 'success');
            $scope.reg = {
              mobileCode: '',
              newPassword: '',
              repassword: '',
            };
          } else {
            swal('修改密码出错', '修改密码出错，请重新修改!', 'error');
            $scope.reg.mobileCode = '';
          }
        });
      } else {
        swal('提交内容不能为空', '表单内红框部分的内容不能为空!', 'error');
      }
    };

    //发送验证码
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function() {
      if ($rootScope.loginUser) {
        if ($rootScope.loginUser.mobilePhone) {
          var mobilePhone = $rootScope.loginUser.mobilePhone;
          mobilePhone = mobilePhone.substring(0, 3) + '****' + mobilePhone.substring(8, 11);
          swal({
            title: "发送验证码?",
            text: "即将往手机号为" + mobilePhone + "的手机发送一条验证码短信!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,发送!",
          }, function() {
            var second = 60;
            $scope.validCodeFlag = false;
            $scope.validCodeText = '正在发送...';
            var params = {
              codetype: 2,
              mobilePhone: mobilePhone
            };
            interfaceService.sendcode(params, function(data, headers, config) {
              // console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                toastService.sendCodeToast(true);
                var timePromise = $interval(function() {
                  if (second <= 0) {
                    $interval.cancel(timePromise);
                    timePromise = undefined;
                    $scope.validCodeFlag = true;
                    $scope.validCodeText = '重新发送验证码';
                  } else {
                    $scope.validCodeText = second + '秒后重新发送';
                    second--;
                  }
                }, 1000, 65);

              } else {
                toastService.sendCodeToast(false);
                $scope.validCodeFlag = true;
                $scope.validCodeText = '发送验证码';
              }
            });
          });
        }
      }
    };

  }
]);

yonglongApp.directive('creditRank',function () {
  return{
    restrict: 'A',
    replace: true,
    scope:{
      star:'@forStar'
    },
    template:'<div style="overflow:hidden;width:{{star * 16}}px;"><img src="images/stars.png"></div>'
  }
});

yonglongApp.directive('extraFee',['$compile',function($compile){
  return{
    restrict: 'AE',
    replace: true,
    scope: {
      initStr:'=',
      resultList:'='
    },
    templateUrl: 'template/directive/extra_fee.html',
    controller: function($scope){
      // $scope.resultList = [];
      // console.log($scope.initStr);
      // var strArray = $scope.initStr.split(';');
      // for(var n in strArray){
      //   $scope.resultList.push({
      //     feeName:strArray[n],
      //     feeValue:0,
      //     id:0,
      //     sort:0,
      //     isInit:true
      //   });
      // }

      $scope.addExtra = function(){
        swal({
          title: "新增",
          text: "您即将新增一项额外费用",
          type: "input",
          showCancelButton: true,
          closeOnConfirm: false,
          cancelButtonText: "取消",
          confirmButtonText: "是的,新增!",
          animation: "slide-from-top",
          inputPlaceholder: "输入额外费用的名称"
        },
        function(inputValue){
          if (inputValue === false){

          }else if (inputValue === "") {
            swal.showInputError("请输入额外费用的名称!");
            // swal('错误','额外费用名称不能为空！','error');
            // return false
          }else{
            $scope.$apply(function () {
              $scope.resultList.push({
                feeName:inputValue,
                feeValue:0,
                id:0,
                sort:0,
                isInit:false
              });
            });
            sweetAlert.close();
          }


        });
      };

      $scope.deleteItem = function (item) {
        for(var i=0;i<$scope.resultList.length;i++){
          if($scope.resultList[i].feeName==item.feeName) {
            $scope.resultList.splice(i,1);
            break;
          }
        }
        // swal({
        //   title: "删除额外费用",
        //   text: "您即将删除一项额外费用",
        //   type: "info",
        //   showCancelButton: true,
        //   cancelButtonText: "取消",
        //   confirmButtonText: "是的,删除!",
        // },
        // function(){
        //
        // });

      }
    }
  }
}]);

yonglongApp.directive("ngFilesModel", [function () {
  return {
    scope: {
      ngFilesModel: "="
    },
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        scope.$apply(function () {
          scope.ngFilesModel = changeEvent.target.files[0];
          // or all selected files:
          // scope.fileread = changeEvent.target.files;
        });
      });
    }
  }
}])

;

yonglongApp.directive('orderdetail',function () {
  return{
    restrict: 'AE',
    replace: true,
    scope:{
      orderId:'='
    },
    template:'<div id="od-frame" class="table-responsive"></div>',
    controller:function ($scope) {
      // $scope.orderId
      $scope.$watch('orderId',function () {
        console.log("===>  orderId:"+$scope.orderId);
        $('#od-frame').html(
          '<iframe src="table_print.html#!?id='+$scope.orderId+'" frameborder="0" width="100%" height="500%" style="height:1050px;"></iframe>'
        );
      },true);
    }
  }
});

yonglongApp.directive('pagination',function () {
  return{
    restrict: 'AE',
    replace: true,
    scope:{
      pageSize:'=',
      totalPages:'=',
      currPage:'=',
      showCount:'=',
      switchPage:'='
    },
    templateUrl: 'template/directive/pagination.html',
    controller: function ($scope) {
      var changeData = function () {
        $scope.pageArray =[];
        var firstPage = {
          pageNum:1,
          isCurrent:$scope.currPage==1,
          canClick:$scope.currPage!=1
        }

        $scope.pageArray.push(firstPage);

        if($scope.showCount>=($scope.totalPages)){//全部显示
          for(var i=2;i<$scope.totalPages;i++){
            var item = {
              pageNum:i,
              isCurrent:$scope.currPage==i,
              canClick:$scope.currPage!=i
            }
            $scope.pageArray.push(item);
          }
        }

        if($scope.totalPages!=1){
          var lastPage = {
            pageNum:$scope.totalPages,
            isCurrent:$scope.currPage==$scope.totalPages,
            canClick:$scope.currPage!=$scope.totalPages
          }
          $scope.pageArray.push(lastPage);
        }
      }
      $scope.$watch('totalPages',changeData,true);
      $scope.$watch('currPage',changeData,true);

    }
  }
});

yonglongApp.directive('terms',function () {
  return{
    restrict: 'AE',
    replace: true,
    templateUrl: 'template/directive/terms.html'
  }
});

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
    .state('main.admin.all_report',{//报表
      url:'/all_report',
      views: {
        'content@main': {
          templateUrl: 'template/admin/all_report.html',
          controller: 'adminAllReportController'
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
          templateUrl: 'template/companyinner/create_order.html',
          controller: 'createOrderController'
        }
      }
    })
    .state('main.companyinner.edit_order',{//修改订单
      url:'/edit_order/{orderId}',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/edit_order.html',
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
    });

}]);
