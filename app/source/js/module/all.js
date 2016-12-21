/**
 * Created by tedyuen on 16-12-7.
 */
global.$ = global.jQuery = require('jquery');
require('bootstrap');
require('metismenu');
require('jquery-slimscroll');
require('jquery-toast-plugin');
require('dropify');

// var LogUtil = require('./utils/LogUtil');
// var log = new LogUtil(true);//Set can out log.

require('bootstrap-datepicker');
require('./utils/bootstrap-datepicker');
require('./utils/jquery.waypoints.min');
require('./utils/jquery.counterup.min');

require('angular');
require('angular-ui-router');

require('angular-baidu-map');//ZO2tPhGQIZk6M5QdHzLQPyBOGbSSGzwW

var yonglongApp = angular.module("myApp",['ui.router','baiduMap']);

var Mock = require('mockjs');



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
    boxVolN: [{name: '不限', id: '-1', show: '不限'},{name: '20', id: '0', show: '短板车'}, {name: '40', id: '1', show: '12.6米'}]
  }
);

/**
 * Created by tedyuen on 16-12-17.
 */
yonglongApp.constant('URL_CONS', {
  // serverUrl:'http://192.168.0.25:8080/admin/api/data',
  serverUrl:'http://192.168.0.25:8080/admin/api/data',
  companyCreateOrder: 'company_create_order',
  companyOrderList: 'company_list_order',
  companyUserinfo:'company_userinfo',
  companyUpdateinfo: 'company_updateinfo',
})

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

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('accountInfoController',['$scope','countupProvider',
  function ($scope,countupProvider) {
    countupProvider.countup();

  }
]);

/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('createOrderController',['$scope','$timeout','showDatePickerProvider','URL_CONS','baseDataService','interfaceService',
  function ($scope,$timeout,showDatePickerProvider,URL_CONS,baseDataService,interfaceService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.orderDetail ={
      shippingName:'awef',
      shippingDate:'2016年12月08日',
      originPort:'aawef',
      loadingPort:'awf',
      returnPort:'awef',
      transitPort:'awef',
      destPort:'awef',
      orderType:'0',
      containerVType:'0',
      containerSType:'0',
      containerVol:323,
      grossWeight:234,
      note:'awef',
      shippingFee:'34',
      extraFee:'332',
      referenceShippingFee:'23',
      shippingSn:'awefewaf'
    }

    //提交表单
    $scope.onSubmit = function($valid){
      if($valid){

        // $('#table-preview').modal('show');
        // $(".modal-content").css("width","80%")



        console.log("url:"+URL_CONS.createOrder);
        interfaceService.companyCreateOrder($scope.orderDetail,function (data,headers,config) {
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(config));

        });
      }else{
        console.log("$valid:"+$valid);
      }
    };


    //百度地图
  $scope.offlineOpts = {retryInterval: 5000};

  var longitude = 121.506191;
  var latitude = 31.245554;
  $scope.mapOptions = {
    center: {
      longitude: longitude,
      latitude: latitude
    },
    zoom: 17,
    city: 'ShangHai',
    markers: [{
      longitude: longitude,
      latitude: latitude,
      icon: 'img/mappiont.png',
      width: 49,
      height: 60,
      title: 'Where',
      content: 'Put description here'
    }]
  };

  $scope.mapLoaded = function(map) {
    console.log(map);
  };

  $timeout(function() {
    $scope.mapOptions.center.longitude = 121.500885;
    $scope.mapOptions.center.latitude = 31.190032;
    $scope.mapOptions.markers[0].longitude = 121.500885;
    $scope.mapOptions.markers[0].latitude = 31.190032;
  }, 5000);

}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('createWithdrawController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('friendManageController',['$scope',
  function ($scope) {


}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('hasgetOrderController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


}]);

/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller("mainController",['$rootScope','$timeout',function ($rootScope,$timeout) {
  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      console.info(fromState + "->" + toState, toParams, fromParams);
    }
  )

  $timeout(function () {
    var UiState = require('./utils/UiState');
    var uiState = new UiState();
    uiState.ready()
  },50);
}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('queryOrderController',['$scope','showDatePickerProvider','baseDataService','interfaceService',
  function ($scope,showDatePickerProvider,baseDataService,interfaceService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
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
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      httpList();
    }

    var httpList = function () {
      interfaceService.companyOrderList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.results = data.data;
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
    }

}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('receiveReportController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('sendReportController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('updateInfoController',['$scope','dropifyProvider','interfaceService',
  function ($scope,dropifyProvider,interfaceService) {
    dropifyProvider.dropify();

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
      companyAddress:''
    }

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.companyUpdateinfo($scope.reg,function (data,headers,config) {
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(config));

        });
      }else{
        console.log("$valid:"+$valid);
      }
    };


    $scope.getUserInfo = function () {
      interfaceService.companyUserinfo({},function (data,headers,config) {
        console.log(JSON.stringify(data));
      })
    };

    $scope.getUserInfo();

  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('wannerOrderController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('withdrawListController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('withdrawManageController',['$scope',
  function ($scope) {


}]);

yonglongApp.service('baseDataService',['diyData',function (diyData) {

  this.getOrderType = function () {
    return diyData.orderType;
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

yonglongApp.provider('countupProvider',function () {
  this.$get = function () {
    return {
      countup:function () {
        console.log('countup');
        // jQuery(".counter").counterUp({
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
      alert("抱歉！因为操作不能够及时响应，请稍后在试...");
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
    $http({
      method: opts.method,
      url: opts.url,
      params: opts.params,
      data: opts.data,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function (data) {
        var tr = jQuery.param(data);
        return tr;
      }
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

yonglongApp.service('interfaceService',['httpService','URL_CONS','sessionService',function (httpService,URL_CONS,sessionService) {
  this.doHttp = function (sub,params,success,error) {
    var base = {
      token:sessionService.getSession().token
    }
    jQuery.extend(params,sub);
    jQuery.extend(params,base);
    // console.log(JSON.stringify(params));
    var request = {
      json:params
    }
    var _opts = jQuery.extend({
      timeout : 'getError404Timeout'
    },null);
    // _opts.url = URL_CONS.serverUrl+"/"+sub.method;
    _opts.url = URL_CONS.serverUrl;
    _opts.method = 'POST';
    // _opts.data = request;
    _opts.params = request;
    _opts.success = function (data,headers,config,status) {
      if(success){
        success(data,headers,config,status);
      }
    };
    _opts.error = function (data,headers,config,status) {
      if(error){
        error(data,headers,config,status);
      }
    };
    httpService.http(_opts);
  }
  this.doHttpMethod = function (method,params,success,error) {
    var sub = {
      method:method,
    };
    this.doHttp(sub,params,success,error);
  }
  // 创建订单
  this.companyCreateOrder = function (params,success,error) {
    var sub = {
      method:URL_CONS.createOrder,
      orderStatus:1,
      orderCreditRank:5
    };
    // console.log(JSON.stringify(data));
    this.doHttp(sub,params,success,error);
  }

  // 1.2 订单列表
  this.companyOrderList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyOrderList,params,success,error);
  }

  // 2.2 查看个人信息
  this.companyUserinfo = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyUserinfo,params,success,error);
  }
  // 2.3 更新用户信息
  this.companyUpdateinfo = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyUpdateinfo,params,success,error);
  }


}]);

yonglongApp.service('sessionService',function () {
  this.getSession = function () {
    console.log("show token:"+eluser.token);
    var session = {
      token:eluser.token
    }
    return session;
  }
});

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
          format: "yyyy年mm月dd日",
          todayHighlight: true
        });
      }
    }
  }
});

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

yonglongApp.directive('orderdetail',function () {
  return{
    restrict: 'A',
    replace: true,
    // template:'<h1>hello world</h1>'
    templateUrl: 'template/directive/order_detail.html'
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

/**
 * Created by tedyuen on 16-12-8.
 */
yonglongApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.when('','/login').otherwise('/login');
  $stateProvider
    .state('login',{//登录页
      url:'/login',
      templateUrl:'template/login.html'
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
          controller: 'receiveReportController'
        }
      }
    })
    .state('main.userinner.friend_manage',{//好友管理
      url:'/friend_manage',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/friend_manage.html',
          controller: 'friendManageController'
        }
      }
    })
    .state('main.userinner.update_info',{//更新资料
      url:'/update_info',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/update_info.html',
          controller: 'updateInfoController'
        }
      }
    })
    .state('main.userinner.depart_cost_list',{//发车费列表
      url:'/depart_cost_list',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/depart_cost_list.html',
          controller: 'createWithdrawController'
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



