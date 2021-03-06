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
require('jquery-typeahead');

// var LogUtil = require('./utils/LogUtil');
// var log = new LogUtil(true);//Set can out log.

require('bootstrap-datepicker');
// require('./utils/bootstrap-tagsinput');
// require('bootstrap-timepicker');
// require('jquery-clockpicker');
require('./utils/bootstrap-datetimepicker-new');
require('./utils/bootstrap-datetimepicker.zh-CN');

require('./utils/bootstrap-datepicker');

// require('./utils/jquery.waypoints');
// require('./utils/jquery.counterup.min');
require('sweetalert');

require('angular');
require('angular-cookies');
require('angular-ui-router');
require('angular-ui-bootstrap');
var Clipboard = require('clipboard');
// require('angular-baidu-map');//ZO2tPhGQIZk6M5QdHzLQPyBOGbSSGzwW

// var yonglongApp = angular.module("myApp",['ui.router','baiduMap']);
var yonglongApp = angular.module("myApp",['ui.router','ui.bootstrap','ngCookies']);
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
      }, {name: 'RF(冷冻箱)', id: 4, v: 'RF'}, {name: 'RH（冷冻高箱）', id: 5, v: 'RH'}, {
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
      }, {name: 'RF(冷冻箱)', id: 4, v: 'RF'}, {name: 'RH（冷冻高箱）', id: 5, v: 'RH'}, {
        name: 'TK（油罐箱）',
        id: 6,
        v: 'TK'
      }, {
        name: 'FR（框架箱）',
        id: 7, v: 'FR'
      }
    ],
    //boxVol: [{name: '20', id: '0'}, {name: '40', id: '1'}, {name: '45', id: '2'}]
    boxVolReg: [{name: '20', id: 20, show: '短板车'}, {name: '40', id: 40, show: '12.6米'}, {name: '45', id: 45, show: '12.6米'}],
    boxVol: [{name: '20', id: 0, show: '短板车'}, {name: '40', id: 1, show: '12.6米'}, {name: '45', id: 2, show: '12.6米'}],
    boxVolN: [{name: '不限', id: -1, show: '不限'},{name: '20', id: 0, show: '短板车'}, {name: '40', id: 1, show: '12.6米'},{name: '45', id: 2, show: '12.6米'}],
    orderTypeN: [{name: '不限', id: -1},{name: '进口', id: 0}, {name: '出口', id: 1}, {name: '拖柜进洋山', id: 2}],
    reportTypeN1:[{name:'车主',id:0},{name:'车队',id:1}],
    reportTypeN2:[{name:'外发订单',id:0},{name:'外接订单',id:1}],
    temperatureUnit:[{name:'C摄氏',id:'C'},{name:'F华氏',id:'F'}],
    prerecordType:[{name:'4--空箱',id:'4'},{name:'7--拼箱',id:'7'},{name:'8--整箱',id:'8'}],
    packaddressType:[{name:'SN--市内',id:'SN'},{name:'SW--市外',id:'SW'},{name:'QT--其他',id:'QT'}],
    passengerlinerType:[{name:'Y-班轮',id:'Y'},{name:'N-非班轮',id:'N'},{name:'H-核心班轮',id:'H'}],
    impexpsignType:[{name:'E-出口',id:'E'},{name:'I-进口',id:'I'}],
    calltypeType:[{name:'M--机械封志',id:'M'},{name:'E--电子封志',id:'E'}],
    callmanType:[{name:'AA--拼箱人',id:'AA'},{name:'AB--未知',id:'AB'},{name:'AC--检疫',id:'AC'},
      {name:'CA--承运人',id:'CA'},{name:'CU--海关',id:'CU'},{name:'SH--发货人',id:'SH'},
      {name:'TO--码头',id:'TO'}],
    shiptypeType:[{name:'无',id:'无'},{name:'1--海铁联运',id:'1'},{name:'2--公路直通',id:'2'},{name:'3--内贸',id:'3'}],
    marinepollutionType:[{name:'Y-有污染',id:'Y'},{name:'N-无污染',id:'N'}],
    sizetypeData:
      [
        ['22G1','42G1','L2G1'],
        ['25G1','45G1','L5G1'],
        ['22U1','42U1','L2U1'],
        ['22V1','42V1','L2V1'],
        ['22R1','42R1','L2R1'],
        ['25R1','45R1','L5R1'],
        ['22T1','42T1','L2T1'],
        ['22P1','42P1','L2P1'],
      ]
  }
);

yonglongApp.constant('rescode', {
  SUCCESS:'0000',

  AGAIN_PHONE:'201004',//手机号已被注册
  ERROR_TOKEN:'9001',

  UNKNOW_USER:'201008',//用户不存在
  ERROR_PASSWORD:'201009',//密码不正确

  WRONG_PHONE:'201011',//参数 mobile 格式不正确，mobile手机号格式不正确
  WRONG_CODE:'201010',//验证码错误
  AGAIN_USERNAME:'201006',//用户名已被注册
  AGAIN_EMAIL:'201005',//邮箱已被注册


  HAS_BANK:'301008',//已经绑定过银行卡，换卡请先解绑
})

/**
 * Created by tedyuen on 16-12-17.
 */
yonglongApp.constant('URL_CONS', {

  // server: 'http://www.56elutong.com/',
  // server: 'http://120.26.65.65:8285/',

  serverUrl: 'http://120.26.65.65:8285/api/data',
  serverFileUrl: 'http://120.26.65.65:8285/api/file',
  exportReport : 'http://120.26.65.65:8285/execl/exportReport.do',
  exportReportOfOrder : 'http://120.26.65.65:8285/execl/exportReportOfOrder.do',
  exportReportOfFriend : 'http://120.26.65.65:8285/execl/exportReportOfFriend.do',
  exportRefund : 'http://120.26.65.65:8285/execl/exportRefund.do',

  // serverUrl: 'http://www.56elutong.com/api/data',
  // serverFileUrl: 'http://www.56elutong.com/api/file',
  // exportReport : 'http://www.56elutong.com/execl/exportReport.do',
  // exportReportOfOrder : 'http://www.56elutong.com/execl/exportReportOfOrder.do',
  // exportReportOfFriend : 'http://www.56elutong.com/execl/exportReportOfFriend.do',
  // exportRefund : 'http://www.56elutong.com/execl/exportRefund.do',


  companyRegister: 'company_register',
  companyCreateOrder: 'company_create_order',
  companyOrderList: 'company_list_order',
  companyListMyorder: 'company_list_myorder',
  companyPublishOrder: 'company_publish_order',
  createImportOrder: 'createImportOrder',
  importOrderList: 'importOrderList',
  importOrderZip: 'importOrderZip',
  importShiplist: 'import_shiplist',
  importCustomslist: 'import_customslist',
  importOperatorlist: 'import_operatorlist',
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
  goodsUserDetailByFriend: 'getGoodsUserDetailbyFriend',
  reportList: 'report_list',
  alipay: 'alipay',
  alipayDispatchOrder: 'alipayDispatchOrder',
  alipayDispatch: 'alipayDispatch',
  alipayImportOrder: 'alipayImportOrder',
  orderConfigFee: 'orderConfigFee',

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


  reportFriendList: 'report_friend_list',
  reportOrderList: 'report_order_list',


  releaseUserLogin: 'releaseUserLogin',
  releaseUserDetail: 'releaseUserDetail',
  releaseUserUpdate: 'releaseUserUpdate',
  releaseUserCreate: 'releaseUserCreate',
  releaseOrderCreate: 'releaseOrderCreate',
  releaseOrderList: 'releaseOrderList',
  releaseBoxST: 'releaseBoxST',
  releaseCompanyList: 'releaseCompanyList',
  releaseOrderBatchUpdate: 'releaseOrderBatchUpdate',
  releaseCompanyCreate: 'releaseCompanyCreate',
  releaseCompanyUpdate: 'releaseCompanyUpdate',
  releaseCompanyDelete: 'releaseCompanyDelete',
  releaseUserList: 'releaseUserList',
  releaseOrderUpdate: 'releaseOrderUpdate',
  releaseNoteList: 'releaseNoteList',
  releaseNoteDelete: 'releaseNoteDelete',
  releaseNoteUpdate: 'releaseNoteUpdate',
  releaseNoteCreate: 'releaseNoteCreate',
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
yonglongApp.filter('boxVolReg',function () {
  return str;
  // return function (str) {
  //   if(str=='0' || str==0){
  //     return '20'
  //   }else if(str=='1' || str==1){
  //     return '40'
  //   }else if(str=='2' || str==2){
  //     return '45'
  //   }
  // }
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

yonglongApp.filter('releaseStatus',function () {
  return function (str) {
    var result = '';
    switch (str){
      case 0:
        result = '新业务';
        break;
      case 1:
        result = '放单中';
        break;
      case 2:
        result = '已完成';
        break;
      case 3:
        result = '已拒绝';
        break;
      case 4:
        result = '没预配';
        break;
      case 5:
        result = '处理中';
        break;
      case 6:
        result = '爆仓';
        break;
      case 7:
        result = '船期早';
        break;
    }
    return result;
  }
});

yonglongApp.filter('releaseStatusAmount',function () {
  return function (str) {
    var result = '';
    switch (str){
      case 0:
        result = '初始';
        break;
      case 1:
        result = '已结';
        break;
      case 2:
        result = '未结';
        break;
    }
    return result;
  }
});
yonglongApp.filter('releaseSalePoint',function(){
  return function(str){
    switch(str){
      case 1:
        return '浦东';
        case 2:
        return '浦西';
    }
  }
});

yonglongApp.service('alipayService',['$timeout','interfaceService','rescode',
  function ($timeout,interfaceService,rescode) {

  this.alipay = function (result,config_fee) {
    console.log('alipayService');
    interfaceService.alipay({id:result.id},function (data,headers,config) {
      console.log("response:"+JSON.stringify(data));
      if(data.rescode==rescode.SUCCESS){
        if(data.data.orderAmount>0){
          swal({
            title: "确认付款吗?",
            text: "您即将付款"+data.data.orderAmount+"元！\n其中将扣除 " +config_fee +"元手续费",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,去支付!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          }, function(){
            var $hiddenPanel = $('#payForm');
            $hiddenPanel.html(data.data.sHtmlText);
            $hiddenPanel.find('form').submit();
            // $timeout(function () {
            //   $hiddenPanel.find('form').submit();
            // },100);
          });
        }
      }
    });
  }

    this.alipayDispatchOrder = function (result,config_fee) {
      console.log('alipayDispatchOrder');
      interfaceService.alipayDispatchOrder({id:result.id},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          if(data.data.orderAmount>0){
            swal({
              title: "确认付款吗?",
              text: "您即将付款"+data.data.orderAmount+"元！\n其中将扣除 " +config_fee +"元手续费",
              type: "warning",
              showCancelButton: true,
              cancelButtonText: "取消",
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "是的,去支付!",
              closeOnConfirm: false,
              showLoaderOnConfirm: true,
            }, function(){
              var $hiddenPanel = $('#payForm');
              $hiddenPanel.html(data.data.sHtmlText);
              $hiddenPanel.find('form').submit();
            });
          }
        }
      });
    }

    // 预录付款
    this.alipayImportOrder = function (id) {
      console.log('alipayImportOrder');
      interfaceService.alipayImportOrder({id:id},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          if(data.data.orderAmount>0){
            var $hiddenPanel = $('#payForm');
            $hiddenPanel.html(data.data.sHtmlText);
            $hiddenPanel.find('form').submit();
          }
        }
      });
    }


    this.alipayDispatch = function (id,httpList) {
      console.log('alipayDispatchOrder');
      interfaceService.alipayDispatch({id:id},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(httpList){
          $timeout(function () {
            httpList();
          },500);
        }
        if(data.rescode==rescode.SUCCESS){
          if(data.data.orderAmount>0){
            var $hiddenPanel = $('#payForm');
            $hiddenPanel.html(data.data.sHtmlText);
            $hiddenPanel.find('form').submit();
            // swal({
            //   title: "确认付款吗?",
            //   text: "您即将付款"+data.data.orderAmount+"元！",
            //   type: "warning",
            //   showCancelButton: true,
            //   cancelButtonText: "取消",
            //   confirmButtonColor: "#DD6B55",
            //   confirmButtonText: "是的,去支付!",
            //   closeOnConfirm: false,
            //   showLoaderOnConfirm: true,
            // }, function(){
            //   var $hiddenPanel = $('<div style="display:none;"></div>');
            //   $hiddenPanel.html(data.data.sHtmlText);
            //   $hiddenPanel.find('form').submit();
            // });
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
  this.getBoxVolReg = function () {
    return diyData.boxVolReg;
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

  this.getReportTypeN1 = function () {
    return diyData.reportTypeN1;
  }
  this.getReportTypeN2 = function () {
    return diyData.reportTypeN2;
  }

  this.getTemperatureUnit = function () {
    return diyData.temperatureUnit;
  }

  this.getPrerecordType = function () {
    return diyData.prerecordType;
  }
  this.getPackaddressType = function () {
    return diyData.packaddressType;
  }
  this.getPassengerlinerType = function () {
    return diyData.passengerlinerType;
  }
  this.getImpexpsignType = function () {
    return diyData.impexpsignType;
  }
  this.getCalltypeType = function () {
    return diyData.calltypeType;
  }
  this.getCallmanType = function () {
    return diyData.callmanType;
  }
  this.getShiptypeType = function () {
    return diyData.shiptypeType;
  }
  this.getMarinepollutionType = function () {
    return diyData.marinepollutionType;
  }

  this.getSizetypeData = function () {
    return diyData.sizetypeData;
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

yonglongApp.service('dateService',function () {

  this.getCurrentDate = function () {
    var myDate = new Date();
    var month = myDate.getMonth()+1;
    // console.log(myDate.getFullYear()+"-"+month+"-"+myDate.getDate());
    return myDate.getFullYear()+"-"+month+"-"+myDate.getDate();
  }
  this.getCurrentDate2 = function () {
    var myDate = new Date();
    var month = myDate.getMonth()+1;
    // console.log(myDate.getFullYear()+"-"+month+"-"+myDate.getDate());
    var strMonth = month;
    var strDate = myDate.getDate();
    if(month<10){
      strMonth = "0"+month;
    }
    if(myDate.getDate()<10){
      strDate = "0"+myDate.getDate();
    }
    return myDate.getFullYear()+""+strMonth+""+strDate;
  }


  this.getLastMonthDate = function () {
    var myDate = new Date();
    myDate.setMonth(myDate.getMonth()-1);
    var month = myDate.getMonth()+1;
    // console.log(myDate.getFullYear()+"-"+month+"-"+myDate.getDate());
    return myDate.getFullYear()+"-"+month+"-"+myDate.getDate();
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
          },
          error: {
            'fileSize': '文件不能大于{{ value }}',
            'imageFormat': '文件格式不正确',
            'fileExtension':'文件类型不正确，请提交{{ value }}格式的文件',
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

  // 1.8 订单发布或取消发布
  this.companyPublishOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyPublishOrder,params,success,error);
  }

  //  新建预录
  this.createImportOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.createImportOrder,params,success,error);
  }

  // 预录列表
  this.importOrderList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.importOrderList,params,success,error);
  }
  // 导出预录列表
  this.importOrderZip = function (params,success,error) {
    this.doHttpMethod(URL_CONS.importOrderZip,params,success,error);
  }

  // 船舶信息
  this.importShiplist = function (params,success,error) {
    this.doHttpMethod(URL_CONS.importShiplist,params,success,error);
  }
  // 海关代码
  this.importCustomslist = function (params,success,error) {
    this.doHttpMethod(URL_CONS.importCustomslist,params,success,error);
  }
  // 箱经营人
  this.importOperatorlist = function (params,success,error) {
    this.doHttpMethod(URL_CONS.importOperatorlist,params,success,error);
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
  // 2.8 指派方详情
  this.goodsUserDetailByFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.goodsUserDetailByFriend,params,success,error);
  }
  // 6.1 订单
  this.reportList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.reportList,params,success,error);
  }

  // 8.1 订单查询-支付前
  this.alipay = function (params,success,error) {
    this.doHttpMethod(URL_CONS.alipay,params,success,error);
  }
  // 8.2 已接订单-派单费用支付
  this.alipayDispatchOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.alipayDispatchOrder,params,success,error);
  }
  // 8.3 已接订单-派单费用支付
  this.alipayDispatch = function (params,success,error) {
    this.doHttpMethod(URL_CONS.alipayDispatch,params,success,error);
  }

  //  预录-派单费用支付
  this.alipayImportOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.alipayImportOrder,params,success,error);
  }

  // 获取支付手续费
  this.orderConfigFee = function (params,success,error) {
    this.doHttpMethod(URL_CONS.orderConfigFee,params,success,error);
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



    // 报表
    // 2 外发订单(承运方/管理员)
    this.reportFriendList = function (params,success,error) {
      this.doHttpMethod(URL_CONS.reportFriendList,params,success,error);
    }
    // 2 外接订单(承运方/管理员)
    this.reportOrderList = function (params,success,error) {
      this.doHttpMethod(URL_CONS.reportOrderList,params,success,error);
    }



    // 以下是放箱接口
    // 2.放箱用户登录
    this.releaseUserLogin = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseUserLogin,params,success,error);
    }

    // 2.进入修改用户（用户详情）
    this.releaseUserDetail = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseUserDetail,params,success,error);
    }

    // 3.修改用户
    this.releaseUserUpdate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseUserUpdate,params,success,error);
    }
    // 1.创建用户
    this.releaseUserCreate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseUserCreate,params,success,error);
    }


    // 2.创建放箱信息（委托书）
    this.releaseOrderCreate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseOrderCreate,params,success,error);
    }

    // 5.放箱列表查询接口
    this.releaseOrderList = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseOrderList,params,success,error);
    }
    // 5.费用和箱型数量统计
    this.releaseBoxST = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseBoxST,params,success,error);
    }


    // 4.船公司列表接口
    this.releaseCompanyList = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseCompanyList,params,success,error);
    }
    // 4.批量修改放箱
    this.releaseOrderBatchUpdate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseOrderBatchUpdate,params,success,error);
    }


    // 4.创建船公司
    this.releaseCompanyCreate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseCompanyCreate,params,success,error);
    }
    // 修改船公司
    this.releaseCompanyUpdate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseCompanyUpdate,params,success,error);
    }
    this.releaseCompanyDelete = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseCompanyDelete,params,success,error);
    }



    // 4.客户列表（可查所有用户列表）
    this.releaseUserList = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseUserList,params,success,error);
    }

    // 4.修改放箱信息
    this.releaseOrderUpdate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseOrderUpdate,params,success,error);
    }
    // 公告列表
    this.releaseNoteList = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseNoteList,params,success,error);
    }

    // 删除公告
    this.releaseNoteDelete = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseNoteDelete,params,success,error);
    }
    // 修改公告
    this.releaseNoteUpdate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseNoteUpdate,params,success,error);
    }
    // 创建公告
    this.releaseNoteCreate = function (params,success,error) {
      this.doHttpMethod(URL_CONS.releaseNoteCreate,params,success,error);
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
  };
  this.releaseLogout = function (role) {
    $rootScope.loginUser = undefined;
    $cookies.remove('yltUser');
    if(role){
      $state.go('releaselogin');
    }else{
      window.location.href = 'index.html';
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
        jQuery('.mydatetimepicker').datetimepicker({
          language: 'zh-CN',
          autoclose: true,
          todayBtn: true,
          format: "yyyy-mm-dd hh:ii",
          todayHighlight: true,
          minuteStep: 10,
          pickerPosition: "top-left"
        });
      },
      showPrerecordDatePicker:function () {
        jQuery('.mydatepicker').datepicker({
          language: 'zh-CN',
          autoclose: true,
          format: "yyyymmdd",
          todayHighlight: true
        });
      },
      showDotDatePicker:function () {
        jQuery('.mydatepicker').datepicker({
          language: 'zh-CN',
          autoclose: true,
          format: "yyyy.mm.dd",
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
  this.sendCodeToast = function (flag,str) {
    if(flag){
      this.toastSuccess({
        heading: '发送成功',
        text: '验证码发送成功,请查看您的短信收件箱，输入有效验证码，并完成表单。',
      })
    }else{
      if(str){
        this.toastWarning({
          heading: '发送失败',
          text: str,
        });
      }else{
        this.toastWarning({
          heading: '发送失败',
          text: '验证码发送失败,请查看您的网络设置并重试。',
        });
      }

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
yonglongApp.controller('userAllReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS','dateService',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS,dateService) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReport;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
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

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });

    var getCurrentDate = function () {
      $scope.queryData.startTime = dateService.getLastMonthDate();
      $scope.queryData.endTime = dateService.getCurrentDate();
    }

    getCurrentDate();
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
        console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.cashList = data.data.listCash;
          $scope.listCashDispatch = data.data.listCashDispatch;

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
        var idx = $scope.cashListDispatchCheckbox.indexOf(result);
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

    $scope.goodsUserDetailByFriend = function (friendId) {
      var param = {
        friendId:friendId
      }
      interfaceService.goodsUserDetailByFriend(param,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
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

    getListBankCard();
  }]);

yonglongApp.controller('userEditOrderController',['$scope','$stateParams','$state','showDatePickerProvider','URL_CONS','baseDataService','interfaceService','rescode',
  function ($scope,$stateParams,$state,showDatePickerProvider,URL_CONS,baseDataService,interfaceService,rescode) {

    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();

    $scope.orderDetail = {
      id:$stateParams.orderId,
      shippingName:'',
      shippingNumber:'',
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
      items:0,
      goodsPackage:'',
      orderLinkName:'',
      orderLinkMobile:'',
      extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}],
      billList:[]

    }

    $scope.valid={
      grossWeight:false
    }

    $scope.$watch('orderDetail.grossWeight',function () {
      if($scope.orderDetail.grossWeight>0){
        $scope.valid.grossWeight = true;
      }else{
        $scope.valid.grossWeight = false;
      }
    });

    $scope.getValid = function () {
      // return $scope.valid.grossWeight;
      return true;
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
                confirmButtonText:"已接订单",
              },function () {
                $state.go('main.userinner.hasget_order');
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
yonglongApp.controller('userFriendListReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS','baseDataService',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS,baseDataService) {
    showDatePickerProvider.showDatePicker();
    $scope.reportTypeN = baseDataService.getReportTypeN2();

    $scope.reportType = 0;

    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
      $('#formToken2').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReportOfFriend;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
      acter:'',
      pageno:1,
      pagesize:20,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.reportFriendList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results = data.data;
          }
        }
      });
    }


    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:20,
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });

    //  以下是第二个列表

    document.getElementById("reportForm2").action= URL_CONS.exportReportOfOrder;
    $scope.reportExport2 = function () {
      document.getElementById("reportForm2").submit();
    }


    $scope.results2={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList2 = function () {
      interfaceService.reportOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results2 = data.data;
          }
        }
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        if($scope.reportType==0){
          httpList();
        }else{
          httpList2();
        }
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      if($scope.reportType==0){
        httpList();
      }else{
        httpList2();
      }
    }


    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime2').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime2').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender2').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer2').val($scope.queryData.acter);
    });

    $scope.$watch('reportType',function () {
      $scope.queryList(true);
    });


    httpList();
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

yonglongApp.controller('userHasgetOrderController',['$scope','$state','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$state,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode) {
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
        type: "input",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "下一步!",
        closeOnConfirm: false,
        inputPlaceholder: "请输入箱号"
      }, function(inputValue){
        if (inputValue === false){

        }else if (inputValue === "") {
          swal.showInputError("请输入箱号!");
        }else{
          swal({
            title: "确认送到吗?",
            text: "您即将确认送到此订单!",
            type: "input",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的，确认!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            inputPlaceholder: "请输入封号"
          }, function(inputValue2) {
            if (inputValue2 === false) {

            } else if (inputValue2 === "") {
              swal.showInputError("请输入封号!");
            } else {

              var tempData = {
                orderId:orderId,
                containerNo:inputValue,
                sealNo:inputValue2,
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
            }
          });
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

    $scope.editOrder = function (id) {
      if(id){
        $state.go('main.userinner.edit_order',{orderId:id});
      }
    }

    httpList();

  }]);

yonglongApp.controller('userHasgetOrderController2',['$scope','$state','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$state,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode) {
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
        type: "input",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "下一步!",
        closeOnConfirm: false,
        inputPlaceholder: "请输入箱号"
      }, function(inputValue){
        if (inputValue === false){

        }else if (inputValue === "") {
          swal.showInputError("请输入箱号!");
        }else{
          swal({
            title: "确认送到吗?",
            text: "您即将确认送到此订单!",
            type: "input",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的，确认!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            inputPlaceholder: "请输入封号"
          }, function(inputValue2) {
            if (inputValue2 === false) {

            } else if (inputValue2 === "") {
              swal.showInputError("请输入封号!");
            } else {

              var tempData = {
                orderId:orderId,
                containerNo:inputValue,
                sealNo:inputValue2,
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
            }
          });
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

    $scope.editOrder = function (id) {
      if(id){
        $state.go('main.userinner.edit_order',{orderId:id});
      }
    }

    httpList();

  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('userOrderListReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReportOfOrder;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
      acter:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.reportOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results = data.data;
          }
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

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:10,
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });

    httpList();
  }]);

yonglongApp.controller('userRegisterController',['$scope','$state','$cookies','dropifyProvider','interfaceService','rescode','baseDataService','validateService','toastService','cookiesService',
  function ($scope,$state,$cookies,dropifyProvider,interfaceService,rescode,baseDataService,validateService,toastService,cookiesService) {
    dropifyProvider.dropify();
    $scope.showTerms=function () {
      $('#terms').modal('show');
    }
    $scope.showTerms2 = function() {
      $('#terms2').modal('show');
    };

    $scope.containerVType = baseDataService.getBoxVolReg();


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
      busContainer:0,
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

    $scope.valid = {
      repass:true,
      checkbox:false
    }
    // 判断重复密码
    $scope.checkPassword = function () {
      $scope.valid.repass = $scope.reg.password == $scope.reg.passwordconfirm;
    }

    var files = [$scope.regfile5,$scope.regfile1,$scope.regfile2,$scope.regfile3,$scope.regfile4];

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.userRegister($scope.reg,files,function (data,headers,config) {
          console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            $scope.loginUser = data.data;
            $cookies.put('yltUserMName', $scope.reg.memberName, cookiesService.cookiesDate());
            $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());
            $state.go('main.userinner.wanner_order');
          }else if (data.rescode == rescode.AGAIN_PHONE) {
            swal('错误','手机号码被注册','error');
          } else if (data.rescode == rescode.WRONG_PHONE) {
            swal('错误','手机号格式不正确','error');
          } else if (data.rescode == rescode.WRONG_CODE) {
            swal('错误','验证码错误','error');
          } else if (data.rescode == rescode.AGAIN_USERNAME) {
            swal('错误','用户名已被注册','error');
          } else if (data.rescode == rescode.AGAIN_EMAIL) {
            swal('错误','邮箱已被注册','error');
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

    $scope.containerVType = baseDataService.getBoxVolReg();

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
yonglongApp.controller('userWannerOrderController',['$scope','$timeout','$interval','$location','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,$interval,$location,showDatePickerProvider,baseDataService,interfaceService,rescode) {
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

    var httpList = function (callback) {
      interfaceService.userListGetorder($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));

        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
        if(callback){
          callback();
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
              text:data.resdesc,
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

    $scope.countUp = 10;
    var timePromise = function () {
      $scope.countUp = 10;
      var tempInterval = $interval(function() {
        if($location.url()!='/main/userinner/wanner_order'){
          $interval.cancel(tempInterval);
          tempInterval = undefined;
        }
        if ($scope.countUp <= 0) {
          $interval.cancel(tempInterval);
          tempInterval = undefined;
          interfaceService.showLoading('自动查询');
          httpList(timePromise);
        } else {
          $scope.countUp--;
        }
      }, 1000);
    }

    httpList(timePromise);

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

yonglongApp.controller('userWithdrawManageController',['$scope','$rootScope','$interval', 'interfaceService', 'rescode','toastService',
  function ($scope,$rootScope,$interval, interfaceService, rescode,toastService) {

    $scope.params = {
      bankCardNo:'',
      bankCardOwner:'',
      bankName:'',
      mobileCode:''
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

    $scope.del = function(result) {
      if ($rootScope.loginUser) {
        if ($rootScope.loginUser.mobilePhone) {
          var mobilePhone = $rootScope.loginUser.mobilePhone;
          var mobilePhoneStr = mobilePhone.substring(0, 3) + '****' + mobilePhone.substring(8, 11);

          swal({
            title: "确定删除吗?",
            text: "您即将删除" + result.bankCardOwner + "的账户!\n确认后会向"+mobilePhoneStr+"的手机号发送一条验证码。",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,发送!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            animation: "slide-from-top",
          }, function () {

            // 发送验证码
            var params = {
              codetype: 3,
              mobilePhone: mobilePhone
            };
            interfaceService.sendcode(params, function(data, headers, config) {
              if (data.rescode == rescode.SUCCESS) {
                console.log("response:" + JSON.stringify(data));
                toastService.sendCodeToast(true);

                //确认删除
                swal({
                    title: "确定删除吗",
                    text: "您即将删除" + result.bankCardOwner + "的账户!",
                    type: "input",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    cancelButtonText: "取消",
                    confirmButtonText: "是的,删除!",
                    animation: "slide-from-top",
                    showLoaderOnConfirm: true,
                    inputPlaceholder: "请输入收到的验证码"
                  },
                  function(inputValue){
                    if (inputValue === false){
                      swal.showInputError("请输入收到的验证码!");
                      // sweetAlert.close();
                    }else if (inputValue === "") {
                      swal.showInputError("请输入收到的验证码!");
                    }else{
                      var param = {
                        id: result.id,
                        mobileCode: inputValue
                      };
                      interfaceService.delBankCard(param, function (data, headers, config) {
                        console.log("response:" + JSON.stringify(data));
                        if (data.rescode == rescode.SUCCESS) {
                          swal({
                            title: "删除成功成功！",
                            text: "已成功删除此提现账户。",
                            type: "success",
                            confirmButtonText: "确定",
                          }, function () {
                            httpList();
                          });
                        }
                      });
                    }
                  });
                //确认删除

              }
            });
            // 发送验证码
          });

        }
      }
    };

    $scope.showAddBankCard = function () {
      $('#add-bank-card').modal('show');
    }

    //添加提现帐号
    $scope.onSubmit = function ($valid) {
      if($valid){
        interfaceService.addBankCard($scope.params,function (data,headers,config) {
          console.log("response:"+JSON.stringify(data));
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
          }else if(data.rescode == rescode.HAS_BANK){
            swal('绑卡出错','已经绑定过银行卡，换卡请先解绑!','error');
          }else{
            swal({
              title: "创建失败",
              text: data.resdesc,
              type: "error",
              confirmButtonText: "确定",
              closeOnConfirm: true,

            })
          }
        });

      }else{

      }
    }

    //发送验证码 银行卡创建
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function() {
      if ($rootScope.loginUser) {
        if ($rootScope.loginUser.mobilePhone) {
          var mobilePhone = $rootScope.loginUser.mobilePhone;
          var mobilePhoneStr = mobilePhone.substring(0, 3) + '****' + mobilePhone.substring(8, 11);
          swal({
            title: "发送验证码?",
            text: "即将往手机号为" + mobilePhoneStr + "的手机发送一条验证码短信!",
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
              codetype: 4,
              mobilePhone: mobilePhone
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
                toastService.sendCodeToast(false,data.resdesc);
                $scope.validCodeFlag = true;
                $scope.validCodeText = '发送验证码';
              }
            });
          });
        }
      }
    };

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
    $scope.orderDetail = {
      shippingName:'',
      shippingNumber:'',
      shippingDate:'',
      containerNo:'',
      sealNo:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      transitPort:'',
      destPort:'',
      orderType:0,
      containerVType:0,
      containerSType:0,
      containerVol:1,
      grossWeight:0,
      note:'',
      shippingFee:0,
      referenceShippingFee:0,
      shippingSn:'',
      items:0,
      goodsPackage:'',
      orderStatus:0,
      orderLinkName:'',
      orderLinkMobile:'',
      extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}],

      billList:[{"billNo":"","grossWeight":0,"id":0,"items":1,"sizeDesc":""}]
    }

    var calBillList = function () {
      for(var i=0;i<$scope.orderDetail.billList.length;i++){
        if($scope.orderDetail.billList[i].billNo == '' &&
          $scope.orderDetail.billList[i].sizeDesc == '' &&
          $scope.orderDetail.billList[i].grossWeight == 0 &&
          $scope.orderDetail.billList[i].items == 0
        ){
          $scope.orderDetail.billList.splice(i,1);
        }
      }
    }

    $scope.initStr = '上下车费;待时费;动卫检;坏污箱移箱费;预进港;落箱费';

    $scope.valid={
      grossWeight:false
    }

    $scope.$watch('orderDetail.grossWeight',function () {
      if($scope.orderDetail.grossWeight>0){
        $scope.valid.grossWeight = true;
      }else{
        $scope.valid.grossWeight = false;
      }
    });

    $scope.getValid = function () {
      // return $scope.valid.grossWeight;
      return true;
    }

    $scope.switchOrderStatus = function (orderStatus) {
      $scope.orderDetail.orderStatus = orderStatus;
    }
    //提交表单
    $scope.onSubmit = function($valid,form){
      // console.log('--->'+$valid);
      // calBillList();
      for(var index in $scope.orderDetail.billList){
        var temp = $scope.orderDetail.billList[index];
        if(isNaN(temp.grossWeight) || temp.grossWeight<=0){
          swal({
            title:"错误！",
            text:"毛重不能为空并且大于0",
            type:"error",
            confirmButtonText:"确定"
          });
          return;
        }
        if(isNaN(temp.items) || temp.items<=0 || temp.items%1!=0){
          swal({
            title:"错误！",
            text:"件数为大于0的整数",
            type:"error",
            confirmButtonText:"确定"
          });
          return;
        }
      }
      if($valid){
        if ($scope.orderDetail.orderStatus==1){
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
                $scope.reset(form);
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
        }else if ($scope.orderDetail.orderStatus == 0){
          swal({
            title: "确定保存订单吗?",
            text: "您即将保存一份新的订单!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,保存!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            animation: "slide-from-top",
          }, function(){
            interfaceService.companyCreateOrder($scope.orderDetail,function (data,headers,config) {
              console.log(JSON.stringify(data));
              if(data.rescode==rescode.SUCCESS){
                swal({
                  title:"保存成功！",
                  text:"已成功保存订单。",
                  type:"success",
                  showCancelButton: true,
                  cancelButtonText: "继续创建",
                  confirmButtonText:"订单查询",
                },function () {
                  $state.go('main.companyinner.query_order');
                });
                $scope.reset(form);
              }else{
                swal({
                  title:"保存失败！",
                  text:"请重新执行此操作。",
                  type:"error",
                  confirmButtonText:"确定"
                });
              }
            });
          });
        }

      }else{
        // console.log("$valid:"+$valid);
      }
    };

    $scope.reset = function (theForm) {
      $scope.orderDetail ={
        shippingName:'',
        shippingNumber:'',
        shippingDate:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        transitPort:'',
        destPort:'',
        orderType:0,
        containerVType:0,
        containerSType:0,
        containerVol:1,
        grossWeight:0,
        note:'',
        shippingFee:0,
        referenceShippingFee:0,
        shippingSn:'',
        items:0,
        goodsPackage:'',
        orderStatus:0,
        orderLinkName:'',
        orderLinkMobile:'',
        extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}],
        billList:[{"billNo":"","grossWeight":0,"id":0,"items":1,"sizeDesc":""}]

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

  // $scope.$watch('orderDetail.shippingDate',function () {
  //   console.log('====>!!  '+$scope.orderDetail.shippingDate);
  //
  // });




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
        var idx = $scope.cashListDispatchCheckbox.indexOf(result);
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

    $scope.goodsUserDetailByFriend = function (friendId) {
      var param = {
        friendId:friendId
      }
      interfaceService.goodsUserDetailByFriend(param,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
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
      shippingNumber:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      transitPort:'',
      destPort:'',
      orderType:0,
      containerVType:0,
      containerSType:0,
      containerVol:1,
      grossWeight:0,
      note:'',
      shippingFee:0,
      referenceShippingFee:0,
      shippingSn:'',
      items:0,
      goodsPackage:'',
      orderLinkName:'',
      orderLinkMobile:'',
      extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}],
      billList:[]

    }

    $scope.valid={
      grossWeight:false
    }

    $scope.$watch('orderDetail.grossWeight',function () {
      if($scope.orderDetail.grossWeight>0){
        $scope.valid.grossWeight = true;
      }else{
        $scope.valid.grossWeight = false;
      }
    });

    $scope.getValid = function () {
      // return $scope.valid.grossWeight;
      return true;
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
      for(var index in $scope.orderDetail.billList){
        var temp = $scope.orderDetail.billList[index];
        if(isNaN(temp.grossWeight) || temp.grossWeight<=0){
          swal({
            title:"错误！",
            text:"毛重不能为空并且大于0",
            type:"error",
            confirmButtonText:"确定"
          });
          return;
        }
        if(isNaN(temp.items) || temp.items<=0 || temp.items%1!=0){
          swal({
            title:"错误！",
            text:"件数为大于0的整数",
            type:"error",
            confirmButtonText:"确定"
          });
          return;
        }
      }
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
                confirmButtonText:"外发订单",
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
yonglongApp.controller('hasgetOrderController',['$scope','$state','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode','alipayService',
  function ($scope,$state,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode,alipayService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();
    $scope.configFee = 0;

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
        console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
        $timeout(function () {
          getOrderConfigFee();
        },50);
      });
    }

    var getOrderConfigFee = function () {
      interfaceService.orderConfigFee({},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.configFee = data.data.configFee;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      console.log(""+$valid);
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

    // 派单费用支付
    $scope.alipay = function (result) {
      alipayService.alipayDispatchOrder(result,$scope.configFee);
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
          if (data.data){
            $scope.friendList = data.data;
            if ($scope.friendList.pageData != null){
              for(var i=0;i<$scope.friendList.pageData.length;i++){
                $scope.myFriendsIdArray.push($scope.friendList.pageData[i]);
              }
              console.log('获取好友列表'+$scope.friendList.pageData.length);
              $('#dispatch-car').modal('show')
            }
          }else {
            swal("请先添加至少一位好友!")
          }
        }else {
          swal("请求失败!", data.resdesc, "warning")
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
            // console.log('--->'+JSON.stringify(data));
            if(data.rescode == rescode.SUCCESS){
              swal({
                title:"指派成功！",
                text:"指派车辆成功。",
                type:"success",
                confirmButtonText:"确定"
              },function () {
                alipayService.alipayDispatch(data.data.id,httpList);
                $('#dispatch-car').modal('hide');
              });
            }else {
              swal("失败!", data.resdesc , "warning");
            }
          });
        });
    }

    $scope.editOrder = function (id) {
      if(id){
        $state.go('main.companyinner.edit_order',{orderId:id});
      }
    }

    $scope.over = function (orderId) {
      swal({
        title: "确认送到吗?",
        text: "您即将确认送到此订单!",
        type: "input",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "下一步!",
        closeOnConfirm: false,
        inputPlaceholder: "请输入箱号"
      }, function(inputValue){
        if (inputValue === false){

        }else if (inputValue === "") {
          swal.showInputError("请输入箱号!");
        }else{
          swal({
            title: "确认送到吗?",
            text: "您即将确认送到此订单!",
            type: "input",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的，确认!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            inputPlaceholder: "请输入封号"
          }, function(inputValue2) {
            if (inputValue2 === false) {

            } else if (inputValue2 === "") {
              swal.showInputError("请输入封号!");
            } else {

              var tempData = {
                orderId:orderId,
                containerNo:inputValue,
                sealNo:inputValue2,
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
            }
          });
        }
      });
    }


  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('queryOrderController',['$scope','$state','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode','alipayService',
  function ($scope,$state,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode,alipayService) {
    showDatePickerProvider.showDatePicker();
    //
    // $('.tablist a').click(function (e) {
    //   e.preventDefault();
    //   $(this).tab('show');
    // })

    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();
    $scope.configFee = 0;
    $scope.queryData = {
      orderStatus:-1,
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

    $scope.clickTab = function (index) {
      $scope.queryData.pageno = 1;
      $scope.queryData.orderStatus = index;
      interfaceService.showLoading('正在查询');
      httpList();
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
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
        $timeout(function () {
          getOrderConfigFee();
        },50);
      });
    }

    var getOrderConfigFee = function () {
      interfaceService.orderConfigFee({},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.configFee = data.data.configFee;
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
      alipayService.alipay(result,$scope.configFee);
    }


    // 发布／取消发布
    $scope.publishOrder = function (orderId,orderStatus) {
      var title = '确认发布吗?';
      var text = '此订单即将发布?';
      var confirmText = '是的,确定发布';
      var reTitle = '发布成功';
      var reText = '此订单发布成功';
      if(orderStatus==0){
        title = '确认取消发布吗';
        text = '此订单即将取消发布';
        confirmText = '是的,取消发布';
        reTitle = '取消发布成功';
        reText = '此订单已经取消发布';
      }

      swal({
          title: title,
          text: text,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: confirmText,
          cancelButtonText: "取消",
          closeOnConfirm: false
        },
        function(){
          var params = {
            orderId:orderId,
            orderStatus:orderStatus
          }
          interfaceService.companyPublishOrder(params,function (data,headers,config) {
            console.log('--->'+JSON.stringify(data));
            if(data.rescode == rescode.SUCCESS){
              swal({
                title:reTitle,
                text:reText,
                type:"success",
                confirmButtonText:"确定"
              },function () {
                httpList();
              });
            }else {
              swal("失败!", data.resdesc , "warning");
            }
          });
        });
    }

    // 制定车辆
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
          if (data.data){
            $scope.friendList = data.data;
            if ($scope.friendList.pageData != null){
              for(var i=0;i<$scope.friendList.pageData.length;i++){
                $scope.myFriendsIdArray.push($scope.friendList.pageData[i]);
              }
              console.log('获取好友列表'+$scope.friendList.pageData.length);
              $('#dispatch-car').modal('show')
            }
          }else {
            swal("请先添加至少一位好友!")
          }
        }else {
          swal("请求失败!", data.resdesc, "warning")
        }
      });
    }

    // 指定车辆
    $scope.selectedOid = function () {
      // console.log('指定车辆==>  '+JSON.stringify($scope.dispatchCarParams));
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
            // console.log('--->'+JSON.stringify(data));
            if(data.rescode == rescode.SUCCESS){
              swal({
                title:"指派成功！",
                text:"指派车辆成功。",
                type:"success",
                confirmButtonText:"确定"
              },function () {
                alipayService.alipayDispatch(data.data.id,httpList);
                $('#dispatch-car').modal('hide');
              });
            }else {
              swal("失败!", data.resdesc , "warning");
            }
          });
        });
    }

    $scope.over = function (orderId) {
      swal({
        title: "确认送到吗?",
        text: "您即将确认送到此订单!",
        type: "input",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "下一步!",
        closeOnConfirm: false,
        inputPlaceholder: "请输入箱号"
      }, function(inputValue){
        if (inputValue === false){

        }else if (inputValue === "") {
          swal.showInputError("请输入箱号!");
        }else{
          swal({
            title: "确认送到吗?",
            text: "您即将确认送到此订单!",
            type: "input",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的，确认!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            inputPlaceholder: "请输入封号"
          }, function(inputValue2) {
            if (inputValue2 === false) {

            } else if (inputValue2 === "") {
              swal.showInputError("请输入封号!");
            } else {

              var tempData = {
                orderId:orderId,
                containerNo:inputValue,
                sealNo:inputValue2,
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
            }
          });
        }
      });
    }

    httpList();


}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('receiveReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReportOfOrder;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }


    var httpList = function () {
      interfaceService.reportOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results = data.data;
          }
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

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:10,
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });

    httpList();
}]);

yonglongApp.controller('registerCompanyController', ['$scope', '$state', '$interval', '$cookies', 'dropifyProvider', 'interfaceService', 'rescode', 'validateService', 'toastService', 'cookiesService',
  function($scope, $state, $interval, $cookies, dropifyProvider, interfaceService, rescode, validateService, toastService, cookiesService) {
    dropifyProvider.dropify();
    $scope.showTerms = function() {
      $('#terms').modal('show');
    };
    $scope.showTerms2 = function() {
      $('#terms2').modal('show');
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

    $scope.valid = {
      repass:true,
      checkbox:false
    }
    // 判断重复密码
    $scope.checkPassword = function () {
      $scope.valid.repass = $scope.reg.password == $scope.reg.passwordconfirm;
    }



    var files = [$scope.regfile1, $scope.regfile2, $scope.regfile3];

    $scope.onSubmit = function($valid) {
      if ($valid) {
        interfaceService.companyRegister($scope.reg, files, function(data, headers, config) {
          console.log(JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            $scope.loginUser = data.data;
            $cookies.put('yltComMName', $scope.reg.memberName, cookiesService.cookiesDate());
            $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());
            $state.go('main.companyinner.create_order');
          } else if (data.rescode == rescode.AGAIN_PHONE) {
            swal('错误','手机号码被注册','error');
          } else if (data.rescode == rescode.WRONG_PHONE) {
            swal('错误','手机号格式不正确','error');
          } else if (data.rescode == rescode.WRONG_CODE) {
            swal('错误','验证码错误','error');
          } else if (data.rescode == rescode.AGAIN_USERNAME) {
            swal('错误','用户名已被注册','error');
          } else if (data.rescode == rescode.AGAIN_EMAIL) {
            swal('错误','邮箱已被注册','error');
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
yonglongApp.controller('reportFriendController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReportOfFriend;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:true,
      sender:'',
      acter:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.reportFriendList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results = data.data;
          }
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

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:10,
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });

    httpList();
  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('reportOrderController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS','baseDataService',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS,baseDataService) {
    showDatePickerProvider.showDatePicker();

    $scope.reportTypeN = baseDataService.getReportTypeN1();

    $scope.reportType = 0;


    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
      $('#formToken2').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReportOfOrder;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:true,
      sender:'',
      acter:'',
      pageno:1,
      pagesize:20,
    }


    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.reportOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results = data.data;
          }
        }
      });
    }


    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:20,
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });

    //  以下是第二个列表
    document.getElementById("reportForm2").action= URL_CONS.exportReportOfFriend;
    $scope.reportExport2 = function () {
      document.getElementById("reportForm2").submit();
    }


    $scope.results2={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList2 = function () {
      interfaceService.reportFriendList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results2 = data.data;
          }
        }
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        if($scope.reportType==0){
          httpList();
        }else{
          httpList2();
        }
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      if($scope.reportType==0){
        httpList();
      }else{
        httpList2();
      }

    }


    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime2').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime2').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender2').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer2').val($scope.queryData.acter);
    });


    $scope.$watch('reportType',function () {
      $scope.queryList(true);
    });




    httpList();
  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('sendReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS','dateService',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS,dateService) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReport;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:true,
      sender:'',
      acter:'',
      pageno:1,
      pagesize:10,
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

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });

    var getCurrentDate = function () {
      $scope.queryData.startTime = dateService.getLastMonthDate();
      $scope.queryData.endTime = dateService.getCurrentDate();
    }

    getCurrentDate();
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
yonglongApp.controller('wannerOrderController',['$scope','$timeout','$interval','$location','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,$interval,$location,showDatePickerProvider,baseDataService,interfaceService,rescode) {
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

    var httpList = function (callback) {
      interfaceService.companyListGetorder($scope.queryData,function (data,headers,config) {
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
        if(callback){
          callback();
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


    $scope.countUp = 10;
    var timePromise = function () {
      $scope.countUp = 10;
      var tempInterval = $interval(function() {
        if($location.url()!='/main/companyinner/wanner_order'){
          $interval.cancel(tempInterval);
          tempInterval = undefined;
        }
        if ($scope.countUp <= 0) {
          $interval.cancel(tempInterval);
          tempInterval = undefined;
          interfaceService.showLoading('自动查询');
          httpList(timePromise);
        } else {
          $scope.countUp--;
        }
      }, 1000);
    }

    httpList(timePromise);

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
yonglongApp.controller('withdrawManageController', ['$scope','$rootScope','$interval', 'interfaceService', 'rescode','toastService',
  function($scope,$rootScope,$interval, interfaceService, rescode,toastService) {

    $scope.params = {
      bankCardNo: '',
      bankCardOwner: '',
      bankName: '',
      mobileCode:''
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
      if ($rootScope.loginUser) {
        if ($rootScope.loginUser.mobilePhone) {
          var mobilePhone = $rootScope.loginUser.mobilePhone;
          var mobilePhoneStr = mobilePhone.substring(0, 3) + '****' + mobilePhone.substring(8, 11);

          swal({
            title: "确定删除吗?",
            text: "您即将删除" + result.bankCardOwner + "的账户!\n确认后会向"+mobilePhoneStr+"的手机号发送一条验证码。",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,发送!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            animation: "slide-from-top",
          }, function () {

            // 发送验证码
            var params = {
              codetype: 3,
              mobilePhone: mobilePhone
            };
            interfaceService.sendcode(params, function(data, headers, config) {
              if (data.rescode == rescode.SUCCESS) {
                console.log("response:" + JSON.stringify(data));
                toastService.sendCodeToast(true);

                //确认删除
                swal({
                    title: "确定删除吗",
                    text: "您即将删除" + result.bankCardOwner + "的账户!",
                    type: "input",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    cancelButtonText: "取消",
                    confirmButtonText: "是的,删除!",
                    animation: "slide-from-top",
                    showLoaderOnConfirm: true,
                    inputPlaceholder: "请输入收到的验证码"
                  },
                  function(inputValue){
                    if (inputValue === false){
                      swal.showInputError("请输入收到的验证码!");
                      // sweetAlert.close();
                    }else if (inputValue === "") {
                      swal.showInputError("请输入收到的验证码!");
                    }else{
                      var param = {
                        id: result.id,
                        mobileCode: inputValue
                      };
                      interfaceService.delBankCard(param, function (data, headers, config) {
                        console.log("response:" + JSON.stringify(data));
                        if (data.rescode == rescode.SUCCESS) {
                          swal({
                            title: "删除成功成功！",
                            text: "已成功删除此提现账户。",
                            type: "success",
                            confirmButtonText: "确定",
                          }, function () {
                            httpList();
                          });
                        }
                      });
                    }
                  });
                //确认删除

              }
            });
            // 发送验证码
          });

        }
      }
    };

    $scope.showAddBankCard = function() {
      $('#add-bank-card').modal('show');
    };

    //添加提现帐号
    $scope.onSubmit = function($valid) {
      if ($valid) {
        interfaceService.addBankCard($scope.params, function(data, headers, config) {
          console.log("response:"+JSON.stringify(data));
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
          }else{
            swal({
              title: "创建失败",
              text: data.resdesc,
              type: "error",
              confirmButtonText: "确定",
              closeOnConfirm: true,

            })
          }

        });

      } else {

      }
    };

    //发送验证码 银行卡创建
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function() {
      if ($rootScope.loginUser) {
        if ($rootScope.loginUser.mobilePhone) {
          var mobilePhone = $rootScope.loginUser.mobilePhone;
          var mobilePhoneStr = mobilePhone.substring(0, 3) + '****' + mobilePhone.substring(8, 11);
          swal({
            title: "发送验证码?",
            text: "即将往手机号为" + mobilePhoneStr + "的手机发送一条验证码短信!",
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
              codetype: 4,
              mobilePhone: mobilePhone
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
                toastService.sendCodeToast(false,data.resdesc);
                $scope.validCodeFlag = true;
                $scope.validCodeText = '发送验证码';
              }
            });
          });
        }
      }
    };



    httpList();
  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('adminAllReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS','dateService',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS,dateService) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReport;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
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

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });


    var getCurrentDate = function () {
      $scope.queryData.startTime = dateService.getLastMonthDate();
      $scope.queryData.endTime = dateService.getCurrentDate();
    }

    getCurrentDate();
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
        console.log("response:"+JSON.stringify(data));
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

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });


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

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('adminFriendListReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS','baseDataService',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS,baseDataService) {
    showDatePickerProvider.showDatePicker();
    $scope.reportTypeN = baseDataService.getReportTypeN2();

    $scope.reportType = 0;
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
      $('#formToken2').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReportOfFriend;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
      acter:'',
      pageno:1,
      pagesize:20,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.reportFriendList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results = data.data;
          }
        }
      });
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:20,
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });


    // 以下是第二个列表
    document.getElementById("reportForm2").action= URL_CONS.exportReportOfOrder;
    $scope.reportExport2 = function () {
      document.getElementById("reportForm2").submit();
    }


    $scope.results2={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList2 = function () {
      interfaceService.reportOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results2 = data.data;
          }
        }
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        if($scope.reportType==0){
          httpList();
        }else{
          httpList2();
        }
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      if($scope.reportType==0){
        httpList();
      }else{
        httpList2();
      }

    }


    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime2').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime2').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender2').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer2').val($scope.queryData.acter);
    });

    $scope.$watch('reportType',function () {
      $scope.queryList(true);
    });

    httpList();
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

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('adminOrderListReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReportOfOrder;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
      acter:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.reportOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results = data.data;
          }
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

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:10,
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });

    httpList();
  }]);

yonglongApp.controller('adminRoleController',['$rootScope','$scope','$cookies','$state','logoutService',
  function ($rootScope,$scope,$cookies,$state,logoutService) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='admin'){
      console.log('没有admin权限');
      $state.go('adminlogin');
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
        closeOnConfirm: true,
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
        console.log("response:"+JSON.stringify(data));
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

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });

    httpList();

  }]);

yonglongApp.controller('adminWithdrawListController',['$scope','showDatePickerProvider','interfaceService','rescode','loadingService','URL_CONS',
  function ($scope,showDatePickerProvider,interfaceService,rescode,loadingService,URL_CONS) {
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


    document.getElementById("reportForm").action= URL_CONS.exportRefund;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });

    httpList();

  }]);

yonglongApp.controller('prerecordController',['$scope','$state','$location','showDatePickerProvider','interfaceService','rescode','alipayService',
  function ($scope,$state,$location,showDatePickerProvider,interfaceService,rescode,alipayService) {
    showDatePickerProvider.showDatePicker();

    var backurl = "shell.html#!/main/companyinner/prerecord";
    if($location.url()=='/main/userinner/prerecord'){
      backurl = "shell.html#!/main/userinner/prerecord";
    }else if($location.url()=='/main/admin/prerecord'){
      backurl = "shell.html#!/main/admin/prerecord";
    }


      $scope.orderDetail = {
      "backurl":backurl,
      "aftersuper": "",
      "beforesuper": "",
      "boxinfo": "",
      "boxno": "",
      "boxoperator": "",
      "boxoperatorcode": "",
      "callinfo": "",
      "callman": "",
      "callno": "",
      "calltype": "",
      "cargocode": "",
      "cargodesc": "",
      "cargono": "",
      "customscode": "",
      "dangerousgrade": "",
      "dangerouslabel": "",
      "deliverycode": "",
      "deliveryport": "",
      "destport": "",
      "destportcode": "",
      "detailaddress": "",
      "emergencyno": "",
      "equipmentorder": "",
      "fileurl": "1",
      "firstaidno": "",
      "flashpoint": "",
      "hignsuper": "",
      "imdgpage": "",
      "imono": "",
      "impexpsign": "",
      "inletwharf": "",
      "items": "",
      "leftsuper": "",
      "licensenumber": "",
      "loadingport": "",
      "loadingportcode": "",
      "marinepollution": "",
      "mark": "",
      "orderinfo": "",
      "ordersn": "",
      "packaddress": "",
      "packagecode": "",
      "packagetype": "",
      "packman": "",
      "passengerliner": "",
      "remark": "",
      "rightsuper": "",
      "secdangerousgrade": "",
      "secdangerouslabel": "",
      "secemergencyno": "",
      "secfirstaidno": "",
      "secflashpoint": "",
      "secimdgpage": "",
      "secmarinepollution": "",
      "secunnumber": "",
      "shipcall": "",
      "shipnationcode": "",
      "shippingdate": "",
      "shippname": "",
      "shippno": "",
      "shiptype": "",
      "size": "",
      "sizetype": "",
      "smokebox": "",
      "statusinfo": "",
      "temperature": "",
      "temperaturemax": "",
      "temperaturemin": "",
      "temperatureunit": "",
      "transitport": "",
      "transitportcode": "",
      "unnumber": "",
      "weight": ""
    }

    //提交表单
    $scope.onSubmit = function($valid,form){
      console.log('--->'+$valid);
      console.log($scope.orderDetail.orderStatus);
      if($valid){
        swal({
          title: "确定预录吗?",
          text: "您即将预录一条信息!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,确定!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          interfaceService.createImportOrder($scope.orderDetail,function (data,headers,config) {
            console.log(JSON.stringify(data));
            if(data.rescode==rescode.SUCCESS){
              swal({
                title:"创建成功！",
                text:"2秒后自动跳转付款。",
                type:"success",
                timer:2000,
                showConfirmButton: false
              },function () {
                // $state.go('main.companyinner.query_order');
                alipayService.alipayImportOrder(data.data.id);
              });
              // $scope.reset(form);
            }else{
              swal({
                title:"预录失败！",
                text:data.resdesc,
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
        "backurl":backurl,
        "aftersuper": "",
        "beforesuper": "",
        "boxinfo": "",
        "boxno": "",
        "boxoperator": "",
        "boxoperatorcode": "",
        "callinfo": "",
        "callman": "",
        "callno": "",
        "calltype": "",
        "cargocode": "",
        "cargodesc": "",
        "cargono": "",
        "customscode": "",
        "dangerousgrade": "",
        "dangerouslabel": "",
        "deliverycode": "",
        "deliveryport": "",
        "destport": "",
        "destportcode": "",
        "detailaddress": "",
        "emergencyno": "",
        "equipmentorder": "",
        "fileurl": "1",
        "firstaidno": "",
        "flashpoint": "",
        "hignsuper": "",
        "imdgpage": "",
        "imono": "",
        "impexpsign": "",
        "inletwharf": "",
        "items": "",
        "leftsuper": "",
        "licensenumber": "",
        "loadingport": "",
        "loadingportcode": "",
        "marinepollution": "",
        "mark": "",
        "orderinfo": "",
        "ordersn": "",
        "packaddress": "",
        "packagecode": "",
        "packagetype": "",
        "packman": "",
        "passengerliner": "",
        "remark": "",
        "rightsuper": "",
        "secdangerousgrade": "",
        "secdangerouslabel": "",
        "secemergencyno": "",
        "secfirstaidno": "",
        "secflashpoint": "",
        "secimdgpage": "",
        "secmarinepollution": "",
        "secunnumber": "",
        "shipcall": "",
        "shipnationcode": "",
        "shippingdate": "",
        "shippname": "",
        "shippno": "",
        "shiptype": "",
        "size": "",
        "sizetype": "",
        "smokebox": "",
        "statusinfo": "",
        "temperature": "",
        "temperaturemax": "",
        "temperaturemin": "",
        "temperatureunit": "",
        "transitport": "",
        "transitportcode": "",
        "unnumber": "",
        "weight": ""
      }

      theForm.$setPristine();
      theForm.$setUntouched();
    }





  }]);

yonglongApp.controller('prerecordListController',['$scope','showDatePickerProvider','interfaceService','rescode','loadingService',
  function ($scope,showDatePickerProvider,interfaceService,rescode,loadingService) {
    showDatePickerProvider.showDatePicker();
    $scope.queryData = {
      startTime:'',
      endTime:'',
      pageno:1,
      pagesize:20,
      downloadstatus:-1
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
      interfaceService.importOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
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


    $scope.detail = function (result) {
      $scope.detailResult = result;
      $('#bus-user-detail-modal').modal('show');
    }


    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        pageno:1,
        pagesize:20
      }
    }


    $scope.reportExport = function (downloadstatus) {
      interfaceService.showLoading();
      $scope.queryData.downloadstatus = downloadstatus;
      interfaceService.importOrderZip($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          // $scope.results = data.data;
          window.location.href = data.data.zipurl;
        }
      });
    }

    httpList();

  }]);

yonglongApp.controller('prerecordNewController',['$scope','$state','$timeout','$location','showDatePickerProvider','interfaceService','rescode','alipayService','baseDataService','dateService',
  function ($scope,$state,$timeout,$location,showDatePickerProvider,interfaceService,rescode,alipayService,baseDataService,dateService) {
    showDatePickerProvider.showPrerecordDatePicker();

    $scope.temperatureUnit = baseDataService.getTemperatureUnit();
    $scope.prerecordType = baseDataService.getPrerecordType();
    $scope.packaddressType = baseDataService.getPackaddressType();
    $scope.passengerlinerType = baseDataService.getPassengerlinerType();
    $scope.impexpsignType = baseDataService.getImpexpsignType();
    $scope.calltypeType = baseDataService.getCalltypeType();
    $scope.callmanType = baseDataService.getCallmanType();
    $scope.shiptypeType = baseDataService.getShiptypeType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.marinepollutionType = baseDataService.getMarinepollutionType();
    $scope.sizetypeData = baseDataService.getSizetypeData();
    var backurl = "shell.html#!/main/companyinner/prerecord";
    if($location.url()=='/main/userinner/prerecord'){
      backurl = "shell.html#!/main/userinner/prerecord";
    }else if($location.url()=='/main/admin/prerecord'){
      backurl = "shell.html#!/main/admin/prerecord";
    }

    $scope.orderDetail = {
      "backurl":backurl,

      "temperature": "",
      "temperatureunit": "C",
      "loadingport": "SHANGHAI",
      "dangerousgrade": "",
      "boxno": "",
      "shippname": "",
      "shipcall": "",
      "loadingportcode": "CNSHA",
      "transitportcode": "",
      "destport": "",
      "destportcode": "",
      "flashpoint": "",
      "unnumber": 0,
      "imdgpage": "",
      "inletwharf": "",
      "sizetype": "22G1",
      "statusinfo": "8",
      "boxoperatorcode": "",
      "customscode": "2200",
      "callno": "",
      "calltype": "",
      "callman": "",
      "shiptype": "",
      "shippingdate": dateService.getCurrentDate2(),
      "packman": "",
      "licensenumber": "",
      "smokebox": 0,
      "equipmentorder": "",
      "packaddress":"SN",
      "detailaddress": "",
      "remark": "",
      "passengerliner":"Y",
      "impexpsign":"E",
      "containerVType":0,
      "containerSType":0,
      "marinepollution":"N",
      "callnoList":[{"callman":"CA","callno":"","calltype":"M","id":0}],
      "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":1,"items":0,"packagecode":"CN","packagetype":"","weight":0,"size":0,"cargodesc":"PLUSH TOYS","mark":"NM","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":"N"}],
      "shipnationcode":"",
      "beforesuper":0,
      "aftersuper":0,
      "rightsuper":0,
      "leftsuper":0,
      "hignsuper":0,
      "temperaturemin":"",
      "temperaturemax":"",
      "dangerouslabel":"",
      "emergencyno":"",
      "firstaidno":"",
      "allitems":0,
      "allweight":0,
      "allsize":0,
      "allweight2":0,
    }



    $scope.reset = function (theForm) {
      $scope.orderDetail ={
        "backurl":backurl,

        "temperature": "",
        "temperatureunit": "C",
        "loadingport": "SHANGHAI",
        "dangerousgrade": "",
        "boxno": "",
        "shippname": "",
        "shipcall": "",
        "loadingportcode": "CNSHA",
        "transitportcode": "",
        "destport": "",
        "destportcode": "",
        "flashpoint": "",
        "unnumber": 0,
        "imdgpage": "",
        "inletwharf": "",
        "sizetype": "22G1",
        "statusinfo": "8",
        "boxoperatorcode": "",
        "customscode": "2200",
        "callno": "",
        "calltype": "",
        "callman": "",
        "shiptype": "",
        "shippingdate": dateService.getCurrentDate2(),
        "packman": "",
        "licensenumber": "",
        "smokebox": 0,
        "equipmentorder": "",
        "packaddress":"SN",
        "detailaddress": "",
        "remark": "",
        "passengerliner":"Y",
        "impexpsign":"E",
        "containerVType":0,
        "containerSType":0,
        "marinepollution":"N",
        "callnoList":[{"callman":"CA","callno":"","calltype":"M","id":0}],
        "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":1,"items":0,"packagecode":"CN","packagetype":"","weight":0,"size":0,"cargodesc":"PLUSH TOYS","mark":"NM","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":"N"}],
        "shipnationcode":"",
        "beforesuper":0,
        "aftersuper":0,
        "rightsuper":0,
        "leftsuper":0,
        "hignsuper":0,
        "temperaturemin":"",
        "temperaturemax":"",
        "dangerouslabel":"",
        "emergencyno":"",
        "firstaidno":"",
        "allitems":0,
        "allweight":0,
        "allsize":0,
        "allweight2":0,
      }

      theForm.$setPristine();
      theForm.$setUntouched();
    }

    $scope.openAdditional = function () {
      $('#additional').modal('show');
    }


    // 箱状改变
    $scope.statusinfoChange = function () {
      if($scope.orderDetail.statusinfo == '4'){
        // 箱状态为空箱，请确认
        swal({
          title: "确认信息",
          text: "箱状态为空箱，请确认!",
          type: "warning",
          confirmButtonText: "确认"
        });
      }
    }

    // 尺寸类型
    $scope.sizetypeChange = function () {
      // console.log("==>  "+$scope.sizetypeData[$scope.orderDetail.containerSType][$scope.orderDetail.containerVType]);
      $scope.orderDetail.sizetype = $scope.sizetypeData[$scope.orderDetail.containerSType][$scope.orderDetail.containerVType];
    }
    // 尺寸类型

    // 箱经营人
    var importOperatorlist = function () {
      interfaceService.importOperatorlist({},function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.operatorlist = data.data.dataList;
        }else{

        }
        $timeout(queryCustomslist,20);
      });
    }
    // 箱经营人


    // 海关代码
    var queryCustomslist = function () {
      interfaceService.importCustomslist({},function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.customslist = data.data.customsList;
        }else{

        }
      });
    }
    var autoCustoms = function ($model) {
      if($model){
        $scope.orderDetail.boxoperator = $model.boxoperator;
      }else{
        $scope.orderDetail.boxoperator = '';
      }
    }
    $scope.customsOnSelect = function ($item, $model, $label) {
      $scope.orderDetail.boxoperatorcode = $label;
      autoCustoms($model);
    }
    $scope.customsOnChange = function () {
      autoCustoms();
    }


    // 船名级联
    var queryShipping = function () {
      var param = {
        shippname:$scope.orderDetail.shippname
      }
      interfaceService.importShiplist(param,function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.tshippname = data.data.dataList;
        }else{

        }
      });
    }

    var autoShippname = function ($model) {
      if($model){
        $scope.orderDetail.shippno = $model.shippno;
        $scope.orderDetail.imono = $model.imono;
        $scope.orderDetail.shipcall = $model.shipcall;
        $scope.select.transitportList = $model.transitportList;
        $scope.select.inletwharfList = $model.inletwharfList;
      }else{
        $scope.orderDetail.shippno = '';
        $scope.orderDetail.imono = '';
        $scope.orderDetail.shipcall = '';
        $scope.orderDetail.transitportcode = '';
        $scope.orderDetail.transitport = '';
        $scope.orderDetail.inletwharf = '';
        $scope.select = {
          transitportcode:[],
          transitportList:[],
          inletwharfList:[]
        }
      }
    }

    $scope.onTransitportcodeChange = function () {
      $scope.orderDetail.transitportcode = $scope.select.transitportcode.transitportcode;
      $scope.orderDetail.transitport = $scope.select.transitportcode.transitport;
    }

    $scope.shippnameOnSelect = function ($item, $model, $label) {
      // console.log('$item:'+$item);
      // console.log('$model:'+$model);
      // console.log('$label:'+$label);
      // $scope.tmodel = $model;
      $scope.orderDetail.shippname = $label;
      autoShippname($model);
    }

    $scope.shippnameOnChange = function () {
      queryShipping();
      autoShippname();
    }
    // 船名级联


    // 表单验证
    var validForm = function ($valid) {

      if($scope.select==undefined || $scope.select.transitportList==undefined || $scope.select.transitportList.length<=0){
        swal('错误','请选择船名','error');
        return false;
      }else if($scope.orderDetail.boxno=='') {
        swal('错误', '请输入箱号', 'error');
        return false;
      }else if($scope.orderDetail.loadingportcode=='') {
        swal('错误', '装港代码不能为空', 'error');
        return false;
      }else if($scope.orderDetail.destport=='') {
        swal('错误', '目的港不能为空', 'error');
        return false;
      }else if($scope.orderDetail.transitportcode=='') {
        swal('错误', '请选择卸港代码', 'error');
        return false;
      }else if($scope.orderDetail.inletwharf=='') {
        swal('错误', '请选择进箱码头', 'error');
        return false;
      }else if($scope.orderDetail.boxoperatorcode==''){
        swal('错误', '请选择箱经营人代码', 'error');
        return false;
      }else if($scope.orderDetail.customscode==''){
        swal('错误', '请选择海关代码', 'error');
        return false;
      }else if($scope.orderDetail.callnoList[0].callno==''){
        swal('错误', '请选输入封志号，如果没有封志，请输入NONE', 'error');
        return false;
      }else if($scope.orderDetail.shippingdate==''){
        swal('错误', '请选择装箱日期', 'error');
        return false;
      }else if(isNaN($scope.orderDetail.smokebox) || $scope.orderDetail.smokebox<=0){
        swal('错误', '箱皮重为大于0的数字', 'error');
        return false;
      }else{
        var flag = true;
        for(var index in $scope.orderDetail.billList){
          var bill = $scope.orderDetail.billList[index];
          if(bill.ordersn==''){
            swal('错误', '请输入提单号', 'error');
            flag = false;
            break;
          }else if(bill.packagecode=='' && bill.packagetype==''){
            swal('错误', '包装代码和包装类型至少填入一项', 'error');
            flag = false;
            break;
          }else if(isNaN(bill.items) || bill.items<=0){
            swal('错误', '件数为大于0的数字', 'error');
            flag = false;
            break;
          }else if(isNaN(bill.weight) || bill.weight<=0){
            swal('错误', '货重为大于0的数字', 'error');
            flag = false;
            break;
          }else if(isNaN(bill.size) || bill.size<=0){
            swal('错误', '尺码为大于0的数字', 'error');
            flag = false;
            break;
          }else if(bill.cargodesc==''){
            swal('错误', '请输入货物描述', 'error');
            flag = false;
            break;
          }else if(bill.mark==''){
            swal('错误', '请输入唛头描述', 'error');
            flag = false;
            break;
          }
          bill.deliveryport = $scope.orderDetail.destport;
          // else if(bill.deliverycode=='' && bill.deliveryport==''){
          //   swal('错误', '交货地和交货地代码至少填入一项', 'error');
          //   flag = false;
          //   break;
          // }
        }
        return flag;
      }

    }

    //提交表单
    $scope.onSubmit = function($valid,form){

      if(validForm($valid)){//验证成功
        swal({
          title: "确定预录吗?",
          text: "您即将预录一条信息!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,确定!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          interfaceService.createImportOrder($scope.orderDetail,function (data,headers,config) {
            // console.log(JSON.stringify(data));
            if(data.rescode==rescode.SUCCESS){
              swal({
                title:"创建成功！",
                text:"2秒后自动跳转付款。",
                type:"success",
                timer:2000,
                showConfirmButton: false
              },function () {
                // $state.go('main.companyinner.query_order');
                alipayService.alipayImportOrder(data.data.id);
              });
              // $scope.reset(form);
            }else{
              swal({
                title:"预录失败！",
                text:data.resdesc,
                type:"error",
                confirmButtonText:"确定"
              });
            }
          });
        });
      }
    };

    $scope.numberChange = function () {
      var allItems = 0;
      var allWeight = 0;
      var allSizes = 0;
      for(var index in $scope.orderDetail.billList) {
        var bill = $scope.orderDetail.billList[index];
        if(!isNaN(bill.items)&& bill.items>0){
          allItems += bill.items;
        }
        if(!isNaN(bill.weight)&& bill.weight>0){
          allWeight += bill.weight;
        }
        if(!isNaN(bill.size)&& bill.size>0){
          allSizes += bill.size;
        }
      }
      $scope.orderDetail.allitems = allItems;
      $scope.orderDetail.allweight = allWeight;
      $scope.orderDetail.allsize = allSizes;
      if(!isNaN($scope.orderDetail.smokebox) && $scope.orderDetail.smokebox>0){
        $scope.orderDetail.allweight2 = $scope.orderDetail.smokebox+allWeight;
      }
    }

    // 读数据
    importOperatorlist();
  }]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseCompanyCreateController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {

    $scope.detail = {
      companyName:'',
      companyCode:''
    }

    $scope.onSubmit = function($valid) {
      if ($valid) {
        swal({
          title: "确定创建船公司信息吗?",
          text: "您即将创建一条船公司信息!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          interfaceService.releaseCompanyCreate($scope.detail, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              var resetData = {
                companyName:'',
                companyCode:''
              }
              $scope.detail = resetData;
              swal({
                title: "创建成功！",
                text: "已成功创建了船公司信息。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {

              });
            }else{
              swal({
                title:'出错',
                text:data.resdesc,
                type:'error',
                confirmButtonText: "确定",
              });
            }
          });
        });
      } else {
        console.log("$valid:" + $valid);
      }
    };


    $scope.reset = function () {
      var resetData = {
        companyName:'',
        companyCode:''
      }
      $scope.detail = resetData;
    }

  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseCompanyListController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {


   $scope.require = {
     companyCode:'',
     companyEngName:'',
     companyName:'',
     pageno:1,
     pagesize:20,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.require.pagesize
    }



    var httpRequest = function () {
      interfaceService.releaseOrderList($scope.require, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;
        }else{
          swal({
            title:'出错',
            text:data.resdesc,
            type:'error',
            confirmButtonText: "确定",
          });
        }
      });
    };

    // 查询船公司列表
    var httpCompanyList = function (callback) {
      interfaceService.releaseCompanyList($scope.require, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;

        }
        if(callback){
          $timeout(callback,20);
        }
      });
    }

    $scope.switchPage = function (page) {
      $scope.require.pageno = page;
      interfaceService.showLoading('正在查询');
      httpCompanyList();
    }

    $scope.onSubmit = function () {
      interfaceService.showLoading('正在查询');
      httpCompanyList();
    }

    $scope.companyResult = {
      companyCode:'',
      companyEngName:'',
      companyName:'',
      remark:'',
    };

    $scope.createCompany = function (result) {
      if(result!=undefined){
        $scope.companyResult = result;
      }else{
        $scope.companyResult = {
          companyCode:'',
          companyEngName:'',
          companyName:'',
          remark:'',
        };
      }
      $('#modify-company').modal('show');
    }

    $scope.deleteCompany = function (id) {
      if(id!=undefined && id>0){
        swal({
          title: "确定删除船公司信息吗?",
          text: "您即将删除船公司信息!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,删除!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          var p = {
            id:id
          }
          interfaceService.releaseCompanyDelete(p, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              $('#modify-company').modal('hide');
              swal({
                title: "删除成功！",
                text: "已成功删除了船公司信息。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {
                interfaceService.showLoading('正在查询');
                httpCompanyList();
              });
            }else{
              swal({
                title:'出错',
                text:data.resdesc,
                type:'error',
                confirmButtonText: "确定",
              });
            }
          });
        });
      }
    }
    $scope.onCompanySubmit = function ($valid) {
      if($valid){
        if($scope.companyResult.id!=undefined){
          swal({
            title: "确定修改船公司信息吗?",
            text: "您即将修改船公司信息!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,修改!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseCompanyUpdate($scope.companyResult, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $('#modify-company').modal('hide');
                $timeout(httpCompanyList,50);
                swal({
                  title: "修改成功！",
                  text: "已成功修改了船公司信息。",
                  type: "success",
                  confirmButtonText: "确定",
                }, function() {

                });
              }else{
                swal({
                  title:'出错',
                  text:data.resdesc,
                  type:'error',
                  confirmButtonText: "确定",
                });
              }
            });
          });
        }else{
          swal({
            title: "确定创建船公司信息吗?",
            text: "您即将创建一条船公司信息!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,创建!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseCompanyCreate($scope.companyResult, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $('#modify-company').modal('hide');
                $timeout(httpCompanyList,50);
                swal({
                  title: "创建成功！",
                  text: "已成功创建了船公司信息。",
                  type: "success",
                  confirmButtonText: "确定",
                }, function() {

                });
              }else{
                swal({
                  title:'出错',
                  text:data.resdesc,
                  type:'error',
                  confirmButtonText: "确定",
                });
              }
            });
          });
        }
      }
    }

    httpCompanyList();


  }
]);

yonglongApp.controller('releaseLoginController',['$scope','$rootScope','$cookies','$state','interfaceService','rescode','cookiesService',
  function ($scope,$rootScope,$cookies,$state,interfaceService,rescode,cookiesService) {


    var initAdminForm = function () {
      var adminMName = $cookies.get('yltReleaseMName');
      var adminIsReme = $cookies.get('yltReleaseIsReme');
      var adminPass = $cookies.get('yltReleasePass');

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

      interfaceService.releaseUserLogin($scope.admin,function (data,headers,config) {
        console.log(JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $rootScope.loginUser = data.data;

          $cookies.put('yltReleaseMName',$scope.admin.memberName,cookiesService.cookiesDate());
          if($scope.admin.isRemember){
            $cookies.put('yltReleaseIsReme','true',cookiesService.cookiesDate());
            $cookies.put('yltReleasePass',$scope.admin.password,cookiesService.cookiesDate());
          }else{
            $cookies.put('yltReleaseIsReme','false',cookiesService.cookiesDate());
            $cookies.remove('yltReleasePass');
          }
          $cookies.putObject('yltUser',$rootScope.loginUser,cookiesService.cookiesDate());
          $state.go('main.release.order_create');
        }else{
          doSwal(data.rescode);
        }
      });
    }

    initAdminForm();
}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseNoteListController', ['$scope','$timeout','$rootScope','showDatePickerProvider', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope,showDatePickerProvider, interfaceService, rescode,baseDataService) {

    showDatePickerProvider.showDotDatePicker();

   $scope.require = {
     title:'',
     createEndTime:'',
     createStartTime:'',
     showType:0,
     pageno:1,
     pagesize:20,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.require.pagesize
    }

    // 查询船公司列表
    var httpCompanyList = function (callback) {
      interfaceService.releaseNoteList($scope.require, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;

        }
        if(callback){
          $timeout(callback,20);
        }
      });
    }

    $scope.switchPage = function (page) {
      $scope.require.pageno = page;
      interfaceService.showLoading('正在查询');
      httpCompanyList();
    }

    $scope.onSubmit = function () {
      interfaceService.showLoading('正在查询');
      httpCompanyList();
    }

    $scope.clickTab = function (showType) {
      $scope.require.showType = showType;
      interfaceService.showLoading('正在查询');
      httpCompanyList();
    }

    $scope.companyResult = {
      title:'',
      content:'',
      showType:0,
    };

    $scope.createCompany = function (result) {
      if(result!=undefined){
        $scope.companyResult = result;
      }else{
        $scope.companyResult = {
          title:'',
          content:'',
          showType:0,
        };
      }
      $('#modify-company').modal('show');
    }

    $scope.deleteCompany = function (id) {
      if(id!=undefined && id>0){
        swal({
          title: "确定删除公告吗?",
          text: "您即将删除公告!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,删除!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          var p = {
            id:id
          }
          interfaceService.releaseNoteDelete(p, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              $('#modify-company').modal('hide');
              swal({
                title: "删除成功！",
                text: "已成功删除了公告。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {
                interfaceService.showLoading('正在查询');
                httpCompanyList();
              });
            }else{
              swal({
                title:'出错',
                text:data.resdesc,
                type:'error',
                confirmButtonText: "确定",
              });
            }
          });
        });
      }
    }
    $scope.onCompanySubmit = function ($valid) {
      if($valid){
        if($scope.companyResult.id!=undefined){
          swal({
            title: "确定修改公告吗?",
            text: "您即将修改公告!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,修改!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseNoteUpdate($scope.companyResult, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $('#modify-company').modal('hide');
                $timeout(httpCompanyList,50);
                swal({
                  title: "修改成功！",
                  text: "已成功修改了公告。",
                  type: "success",
                  confirmButtonText: "确定",
                }, function() {

                });
              }else{
                swal({
                  title:'出错',
                  text:data.resdesc,
                  type:'error',
                  confirmButtonText: "确定",
                });
              }
            });
          });
        }else{
          swal({
            title: "确定创建公告吗?",
            text: "您即将创建一条公告!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,创建!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseNoteCreate($scope.companyResult, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $('#modify-company').modal('hide');
                $timeout(httpCompanyList,50);
                swal({
                  title: "创建成功！",
                  text: "已成功创建了公告。",
                  type: "success",
                  confirmButtonText: "确定",
                }, function() {

                });
              }else{
                swal({
                  title:'出错',
                  text:data.resdesc,
                  type:'error',
                  confirmButtonText: "确定",
                });
              }
            });
          });
        }
      }
    }
    $scope.allCheckbox = [];
    // 停用
    $scope.isAllSelected = function(result){
      return $scope.allCheckbox.indexOf(result)>=0;
    }
    $scope.updateAllCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.allCheckbox.push(result);
        $scope.companyResult.showType = 1;
      }else{
        var idx = $scope.allCheckbox.indexOf(result);
        $scope.allCheckbox.splice(idx,1);
        $scope.companyResult.showType = 0;
      }
    };

    httpCompanyList();


  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseOrderCreateController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {

    var loginUser = $rootScope.loginUser;

    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();

    $scope.salePoint = [
      {id:1,name:'浦东'},
      {id:2,name:'浦西'}
    ];

    $scope.vtype1 = '20';
    $scope.stype1 = 'GP';
    $scope.boxnum1 = null;

    $scope.vtype2 = '20';
    $scope.stype2 = 'GP';
    $scope.boxnum2 = null;

    $scope.vtype3 = '20';
    $scope.stype3 = 'GP';
    $scope.boxnum3 = null;

    $scope.detail = {
      billno:'',
      boxdesc:'',
      customerName:loginUser.customerName,
      customerNumber:'',
      customerid:loginUser.customerid,
      remark:'',
      salePoint:loginUser.salePoint,
      saleid:0,
      shipname:'',
      shipno:''
    };


    $scope.reset = function () {
      var detail = {
        billno:'',
        boxdesc:'',
        customerName:loginUser.customerName,
        customerNumber:'',
        customerid:loginUser.customerid,
        remark:'',
        salePoint:loginUser.salePoint,
        saleid:0,
        shipname:'',
        shipno:''
      }
      $scope.detail = detail;

      $scope.vtype1 = '20';
      $scope.stype1 = 'GP';
      $scope.boxnum1 = null;

      $scope.vtype2 = '20';
      $scope.stype2 = 'GP';
      $scope.boxnum2 = null;

      $scope.vtype3 = '20';
      $scope.stype3 = 'GP';
      $scope.boxnum3 = null;
    }





    $scope.calBoxDesc = function () {
      var str = '';
      if($scope.boxnum1!=null && $scope.boxnum1>0){
        str += $scope.boxnum1+"X"+$scope.vtype1+$scope.stype1;
      }
      if($scope.boxnum2!=null && $scope.boxnum2>0){
        if(str.length>0){
          str += " ";
        }
        str += $scope.boxnum2+"X"+$scope.vtype2+$scope.stype2;
      }
      if($scope.boxnum3!=null && $scope.boxnum3>0){
        if(str.length>0){
          str += " ";
        }
        str += $scope.boxnum3+"X"+$scope.vtype3+$scope.stype3;
      }
      $scope.detail.boxdesc = str;
    }


    $scope.onSubmit = function($valid) {
      if ($valid) {
        if($scope.detail.boxdesc==''){
          swal({
            title:'错误',
            text:'箱型箱量的数量至少输入一项',
            type:'error',
            confirmButtonText:'确定'
          });
          return;
        }else if($scope.detail.billno==''){
          swal({
            title:'错误',
            text:'提单号必填',
            type:'error',
            confirmButtonText:'确定'
          });
          return;
        }
        swal({
          title: "确定创建委托书吗?",
          text: "您即将创建委托书!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          interfaceService.releaseOrderCreate($scope.detail, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              swal({
                title: "创建成功！",
                text: "已成功创建了委托书。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {});
            }else{
              swal({
                title:'出错',
                text:data.resdesc,
                type:'error',
                confirmButtonText: "确定",
              });
            }
          });
        });
      } else {
        console.log("$valid:" + $valid);
      }
    };


  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseOrderListController', ['$scope','$timeout','$cookies','$rootScope','$interval','$location', 'interfaceService', 'rescode','baseDataService','showDatePickerProvider','cookiesService',
  function($scope,$timeout,$cookies,$rootScope,$interval,$location, interfaceService, rescode,baseDataService,showDatePickerProvider,cookiesService) {
    showDatePickerProvider.showDotDatePicker();

    var loginUser = $rootScope.loginUser;

    $scope.pagesizeList = [
      {size:20,name:'20'},
      {size:30,name:'30'},
      {size:40,name:'40'},
    ];

    $scope.salePoint = [
      {id:-1,name:'全部'},
      {id:1,name:'浦东'},
      {id:2,name:'浦西'}
    ];

    $scope.statusAmount = [
      {id:-1,name:'全部'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];

    $scope.statusAmountDetail = [
      {id:0,name:'初始'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];

    $scope.status = [
      {id:-1,name:'全部'},
      {id:0,name:'新业务'},
      {id:1,name:'放单中'},
      {id:2,name:'已完成'},
      {id:3,name:'已拒绝'},
      {id:4,name:'没预配'},
      {id:6,name:'爆仓'},
      {id:5,name:'处理中'},
      {id:7,name:'船期早'},
    ];

    $scope.statusDetail = [
      {id:0,name:'新业务'},
      {id:1,name:'放单中'},
      {id:2,name:'已完成'},
      {id:3,name:'已拒绝'},
      {id:4,name:'没预配'},
      {id:6,name:'爆仓'},
      {id:5,name:'处理中'},
      {id:7,name:'船期早'},
    ];



   $scope.require = {
     applyEndTime:'',
     applyStartTime:'',
     billno:'',
     companyid:0,
     customerid:0,
     finishEndTime:'',
     finishStartTime:'',
     orderNumber:'',
     pageno:1,
     pagesize:20,
     saleName:'',
     salePoint:-1,
     status:-1,
     statusAmount:-1,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 1,
      pageSize : $scope.require.pagesize
    };

    var releaseBoxST = function (callback) {
      interfaceService.releaseBoxST({}, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          if(data.data!=undefined && data.data!=null){
            $scope.releaseBoxSTData = data.data;
          }
        }else{
          swal({
            title:'出错',
            text:data.resdesc,
            type:'error',
            confirmButtonText: "确定",
          });
        }
        if(callback){
          $timeout(callback,20);
        }
      });
    }
    $scope.switchPage = function (page) {
      $scope.require.pageno = page;
      interfaceService.showLoading('正在查询');
      httpRequest();
    }
    $scope.pagesizeChange = function () {
      $scope.require.pageno = 1;
      interfaceService.showLoading('正在查询');
      httpRequest();
    }


    var httpRequest = function (callback) {
      interfaceService.releaseOrderList($scope.require, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;
          $scope.allCheckbox = [];
          $scope.idCheckbox = [];
        }else{
          swal({
            title:'出错',
            text:data.resdesc,
            type:'error',
            confirmButtonText: "确定",
          });
        }
        if(callback){
          callback();
        }
      });
    };

    $scope.refreshList = function () {
      interfaceService.showLoading('正在加载...');
      httpRequest();
    }


    // 查询船公司列表
    var httpCompanyList = function (callback) {
      var params = {
        companyCode:'',
        companyName:''
      }
      $scope.companyList = [
        {
          "companyCode": "测试代码",
          "companyName": "全部",
          "id": 0
        }
      ];
      $scope.companyList2 = [];

      interfaceService.releaseCompanyList(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          for(var index in data.data.pageData){
            $scope.companyList.push(data.data.pageData[index]);
            $scope.companyList2.push(data.data.pageData[index]);
          }
        }
        if(callback){
          $timeout(callback,20);
        }
      });
    };


    var httpCustomerList = function (callback) {
      var params = {
        customerName:'',
        salePoint:-1,
        userType:0
      }
      $scope.customerList = [
        {
          customerName:'全部',
          id:0
        }
      ];
      interfaceService.releaseUserList(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          if(data.data != undefined && data.data !=null){
            for(var index in data.data.pageData){
              $scope.customerList.push(data.data.pageData[index]);
            }
          }
        }
        $timeout(function () {
          // httpRequest(timePromise);//这里是倒计时
          httpRequest();
        },20);
      });
    };


    $scope.lineDblClick = function (result) {
      console.log(JSON.stringify(result));
      $scope.detail = result;
      $scope.detail.finishTime = '';
      $('#modify-order').modal('show');
    };

    // 修改订单
    $scope.orderUpdate = function () {
      swal({
        title: "确定修改放箱信息吗?",
        text: "您即将修改放箱信息!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,确定!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },function () {
        interfaceService.releaseOrderUpdate($scope.detail, function(data, headers, config) {
          console.log(JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            swal({
              title: "修改成功！",
              text: "已成功修改了放箱信息。",
              type: "success",
              confirmButtonText: "确定",
            }, function() {
              $('#modify-order').modal('hide');
            });
          }else{
            swal({
              title:'出错',
              text:data.resdesc,
              type:'error',
              confirmButtonText: "确定",
            });
          }
        });
      });
    }


    // 选择列表中的复选框
    $scope.idCheckbox = [];//需要批量配置的id
    $scope.allCheckbox = [];//全选
    $scope.isSelected = function(result){
      return $scope.idCheckbox.indexOf(result)>=0;
    }
    $scope.updateCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.idCheckbox.push(result);
        if($scope.idCheckbox.length==$scope.results.pageData.length){
          $scope.allCheckbox = ['all'];
        }
      }else{
        var idx = $scope.idCheckbox.indexOf(result);
        $scope.idCheckbox.splice(idx,1);
        if($scope.idCheckbox.length<$scope.results.pageData.length){
          $scope.allCheckbox = [];
        }
      }
    }

    // 全选
    $scope.isAllSelected = function(result){
      return $scope.allCheckbox.indexOf(result)>=0;
    }
    $scope.updateAllCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.allCheckbox.push(result);
        $scope.idCheckbox = [];
        var tempData = $scope.results.pageData.concat();
        for(var index in tempData){
          $scope.idCheckbox.push(tempData[index].id);
        }
        // $scope.idCheckbox = $scope.results.pageData.concat();
      }else{
        var idx = $scope.allCheckbox.indexOf(result);
        $scope.allCheckbox.splice(idx,1);
        $scope.idCheckbox = [];
      }
    };
    // 选择列表中的复选框

    $scope.countUp = 10;
    var timePromise = function () {
      $scope.countUp = 10;
      var tempInterval = $interval(function() {
        if($location.url()!='/main/release/order_list'){
          $interval.cancel(tempInterval);
          tempInterval = undefined;
        }
        if ($scope.countUp <= 0) {
          $interval.cancel(tempInterval);
          tempInterval = undefined;
          interfaceService.showLoading('自动查询');
          httpRequest(timePromise);
        } else {
          $scope.countUp--;
        }
      }, 1000);
    }



    // 复制到剪贴板
    var clipboard = new Clipboard('.clipboard');

    clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      e.clearSelection();
      swal({
        title: "复制成功！",
        text: "已成功复制了表格数据到剪贴板。",
        type: "success",
        confirmButtonText: "确定",
      }, function() {

      });
    });

    clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
    // 复制到剪贴板

    var getCheckBoxItemIds = function() {
      var tempIds = [];
      for(var indexTemp in $scope.idCheckbox){
        tempIds.push($scope.idCheckbox[indexTemp]);
      }
      return tempIds;
    }
    /**
     * 批量修改状态
     * @param  {[type]} status [description]
     * @return {[type]}        [description]
     */
    $scope.batchUpdateStatus = function(type,status) {
      if($scope.idCheckbox.length<=0){
        swal({
          title:'出错',
          text:'请选择放箱数据',
          type:'error',
          confirmButtonText: "确定",
        });
        return;
      }

      if(type==1){//修改状态
        $scope.batchParams = {
          status:status,
          ids:getCheckBoxItemIds()
        }
      }else if(type==2){//修改费用状态
        $scope.batchParams = {
          statusAmount:status,
          ids:getCheckBoxItemIds()
        }
      }
      swal({
        title: "确定批量修改放箱信息吗?",
        text: "您即将批量修改放箱信息!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,修改!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },function () {
        interfaceService.releaseOrderBatchUpdate($scope.batchParams, function(data, headers, config) {
          console.log(JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            $timeout(httpRequest,20);
            swal({
              title: "修改成功！",
              text: "已成功批量修改了放箱信息。",
              type: "success",
              confirmButtonText: "确定",
            }, function() {

            });
          }else{
            swal({
              title:'出错',
              text:data.resdesc,
              type:'error',
              confirmButtonText: "确定",
            });
          }
        });
      });

    }
    $scope.batchIndex = 1;
    $scope.batchUpdate = function (index) {
      if($scope.idCheckbox.length<=0){
        swal({
          title:'出错',
          text:'请选择放箱数据',
          type:'error',
          confirmButtonText: "确定",
        });
        return;
      }
      $scope.batchIndex = index;

      var tempcompanyid = 0;
      if(index==2){
        if($scope.companyList2!=undefined && $scope.companyList2!=null && $scope.companyList2.length>0){
          tempcompanyid = $scope.companyList2[0].id;
        }
      }

      $scope.batchParams = {
        amountDocument:0,
        amountService:0,
        companyid:tempcompanyid,
        applyTime:'',
        ids:getCheckBoxItemIds()
      }

      $('#mul-modify-order').modal('show');


    }

    $scope.doBatchUpdate = function () {
      swal({
        title: "确定批量修改放箱信息吗?",
        text: "您即将批量修改放箱信息!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,修改!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },function () {
        interfaceService.releaseOrderBatchUpdate($scope.batchParams, function(data, headers, config) {
          console.log(JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            $timeout(httpRequest,20);
            $('#mul-modify-order').modal('hide');
            swal({
              title: "修改成功！",
              text: "已成功批量修改了放箱信息。",
              type: "success",
              confirmButtonText: "确定",
            }, function() {

            });
          }else{
            swal({
              title:'出错',
              text:data.resdesc,
              type:'error',
              confirmButtonText: "确定",
            });
          }
        });
      });
    }

    $scope.printDetail = function () {
      var print = {
        d:[],
        c:'',
        s:$scope.require.applyStartTime,
        e:$scope.require.applyEndTime,
      };

      for(var index3 in $scope.customerList){
        var temp3 = $scope.customerList[index3];
        if(temp3.id==$scope.require.customerid){
          print.c = temp3.customerName;
          break;
        }
      }

      for(var index1 in $scope.results.pageData){
        var temp1 = $scope.results.pageData[index1];
        for(var index2 in $scope.idCheckbox){
          var temp2 = $scope.idCheckbox[index2];
          if(temp1.id==temp2){
            var tempPrint = {
              b:temp1.billno,
              x:temp1.boxdesc,
              d:temp1.amountDocument,
              s:temp1.amountService,
            }
            print.d.push(tempPrint);
          }
        }
      }
      $cookies.putObject('rPrint',print,cookiesService.cookiesDate());
      // console.log("==> print:"+JSON.stringify(print));
      var link = "release_print.html";
      window.open(link);
    }

    $scope.noteRequire = {
      title:'',
      createEndTime:'',
      createStartTime:'',
      showType:0,
      pageno:1,
      pagesize:1,
    };
    $scope.noteResult = {
      currPageNum : 1,
      totalPages : 1,
      pageSize : $scope.noteRequire.pagesize
    }
    var httpNoteList = function(flag){

      interfaceService.releaseNoteList($scope.noteRequire, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.noteResult = data.data;
          if($scope.noteResult.totalRows>0){
            if(flag){
              $('#note-alert').modal('show');
            }
          }else{
            $('#note-alert').modal('hide');
          }
        }
        if(flag){
          $timeout(function(){
            releaseBoxST(function () {
              httpCompanyList(httpCustomerList);
            });
          },20);
        }
      });
    }
    $scope.nextNote = function(){
      $scope.noteRequire.pageno++;
      httpNoteList();
    }

    $scope.preNote = function(){
      $scope.noteRequire.pageno--;
      httpNoteList();
    }

    httpNoteList(true);

}
]);

yonglongApp.controller('releaseRoleController',['$rootScope','$scope','$cookies','$state','logoutService',
  function ($rootScope,$scope,$cookies,$state,logoutService) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='release'){
      console.log('没有release权限');
      $state.go('releaselogin');
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
        closeOnConfirm: true,
      },function () {
        logoutService.releaseLogout('release');
      });
    }

}]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseUserDetailController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode',
  function($scope,$timeout,$rootScope, interfaceService, rescode) {

  $scope.salePoint = [
    {id:1,name:'浦东'},
    {id:2,name:'浦西'}
  ];


    $scope.detail = {
      customerName: '',
      customerNumber: '',
      id: '',
      linkAddress: '',
      linkFox: '',
      linkMobile: '',
      linkName: '',
      remark: '',
      salePoint: 1,
      userName: '',
      userType: 0,
    };

    var initPass = function () {
      $scope.detail.passwordOld = '';
      $scope.detail.passwordNew = '';
      $scope.detail.passwordConfirm = '';
      $scope.val.passOld = true;
      $scope.val.passConfirm = true;
      $scope.val.flag = false;
    }

    var getUserInfo = function() {
      interfaceService.releaseUserDetail({id:$rootScope.loginUser.userid}, function(data, headers, config) {
        console.log(JSON.stringify(data));
        $scope.detail = data.data;
        initPass();
      });
    };


    $scope.onSubmit = function($valid) {
      if ($valid) {
        if(!$scope.val.passOld){
          swal({
            title:'出错',
            text:'修改密码，旧密码不能为空!',
            type:'error',
            confirmButtonText:'确定'
          });
          return;
        }
        if(!$scope.val.passConfirm){
          swal({
            title:'出错',
            text:'修改密码，两次输入密码不一致!',
            type:'error',
            confirmButtonText:'确定'
          });
          return;
        }
        swal({
          title: "确定修改个人资料吗?",
          text: "您即将修改个人资料!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,修改!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          interfaceService.releaseUserUpdate($scope.detail, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              swal({
                title: "修改成功！",
                text: "已成功修改个人信息。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {});
            }else{
              swal({
                title:'出错',
                text:data.resdesc,
                type:'error',
                confirmButtonText: "确定",
              });
            }
          });
        });
      } else {
        console.log("$valid:" + $valid);
      }
    };

    $scope.getUserInfo =function () {
      getUserInfo();
    };

    $scope.val = {
      passOld:true,
      passNew:true,
      passConfirm:true,
      flag:false // 需要不需要校验
    }

    $scope.passValid = function (flag) {
      if(flag){
        $scope.val.flag = true;
      }

      if($scope.val.flag){
        if($scope.detail.passwordNew!=''){
          $scope.val.passOld = $scope.detail.passwordOld!='';
          $scope.val.passConfirm = $scope.detail.passwordConfirm == $scope.detail.passwordNew;
        }else{
          $scope.val.flag = false;
          $scope.val.passOld = true;
          $scope.val.passConfirm = true;
        }
      }
    };


    getUserInfo();

  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseUserListController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {


   $scope.require = {
     customerName:'',
     salePoint:-1,
     userType:0,
     pageno:1,
     pagesize:20,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.require.pagesize
    }


    $scope.switchPage = function (page) {
      $scope.require.pageno = page;
      interfaceService.showLoading('正在查询');
      httpRequest();
    }
    var httpRequest = function () {
      interfaceService.showLoading();
      interfaceService.releaseUserList($scope.require, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;
        }else{
          swal({
            title:'出错',
            text:data.resdesc,
            type:'error',
            confirmButtonText: "确定",
          });
        }
      });
    };

    $scope.customerNameEnter = function(e) {
      var keycode = window.event?e.keyCode:e.which;
      if(keycode==13){
          httpRequest();
      }
    }

    $scope.refresh = function(){
      httpRequest();
    }
    httpRequest();

  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('comReleaseOrderCreateController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {

    var loginUser = $rootScope.loginUser;

    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();

    $scope.salePoint = [
      {id:1,name:'浦东'},
      {id:2,name:'浦西'}
    ];

    $scope.vtype1 = '20';
    $scope.stype1 = 'GP';
    $scope.boxnum1 = null;

    $scope.vtype2 = '20';
    $scope.stype2 = 'GP';
    $scope.boxnum2 = null;

    $scope.vtype3 = '20';
    $scope.stype3 = 'GP';
    $scope.boxnum3 = null;

    $scope.detail = {
      billno:'',
      boxdesc:'',
      customerName:loginUser.customerName,
      customerNumber:'',
      customerid:loginUser.customerid,
      remark:'',
      salePoint:loginUser.salePoint,
      saleid:0,
      shipname:'',
      shipno:''
    };


    $scope.reset = function () {
      var detail = {
        billno:'',
        boxdesc:'',
        customerName:loginUser.customerName,
        customerNumber:'',
        customerid:loginUser.customerid,
        remark:'',
        salePoint:loginUser.salePoint,
        saleid:0,
        shipname:'',
        shipno:''
      }
      $scope.detail = detail;

      $scope.vtype1 = '20';
      $scope.stype1 = 'GP';
      $scope.boxnum1 = null;

      $scope.vtype2 = '20';
      $scope.stype2 = 'GP';
      $scope.boxnum2 = null;

      $scope.vtype3 = '20';
      $scope.stype3 = 'GP';
      $scope.boxnum3 = null;
    }





    $scope.calBoxDesc = function () {
      var str = '';
      if($scope.boxnum1!=null){
        str += $scope.boxnum1+"X"+$scope.vtype1+$scope.stype1;
      }
      if($scope.boxnum2!=null){
        if(str.length>0){
          str += " ";
        }
        str += $scope.boxnum2+"X"+$scope.vtype2+$scope.stype2;
      }
      if($scope.boxnum3!=null){
        if(str.length>0){
          str += " ";
        }
        str += $scope.boxnum3+"X"+$scope.vtype3+$scope.stype3;
      }
      $scope.detail.boxdesc = str;
    }


    $scope.onSubmit = function($valid) {
      if ($valid) {

        swal({
          title: "确定创建委托书吗?",
          text: "您即将创建委托书!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          interfaceService.releaseOrderCreate($scope.detail, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              swal({
                title: "创建成功！",
                text: "已成功创建了委托书。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {});
            }else{
              swal({
                title:'出错',
                text:data.resdesc,
                type:'error',
                confirmButtonText: "确定",
              });
            }
          });
        });
      } else {
        console.log("$valid:" + $valid);
      }
    };


  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('comReleaseOrderListController', ['$scope','$timeout','$cookies','$rootScope','$interval','$location', 'interfaceService', 'rescode','baseDataService','showDatePickerProvider','cookiesService',
  function($scope,$timeout,$cookies,$rootScope,$interval,$location, interfaceService, rescode,baseDataService,showDatePickerProvider,cookiesService) {
    showDatePickerProvider.showDotDatePicker();

    $scope.pagesizeList = [
      {size:20,name:'20'},
      {size:30,name:'30'},
      {size:40,name:'40'},
    ];

    $scope.salePoint = [
      {id:-1,name:'全部'},
      {id:1,name:'浦东'},
      {id:2,name:'浦西'}
    ];

    $scope.statusAmount = [
      {id:-1,name:'全部'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];

    $scope.statusAmountDetail = [
      {id:0,name:'初始'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];

    $scope.status = [
      {id:-1,name:'全部'},
      {id:0,name:'新业务'},
      {id:1,name:'放单中'},
      {id:2,name:'已完成'},
      {id:3,name:'已拒绝'},
      {id:4,name:'没预配'},
      {id:6,name:'爆仓'},
      {id:5,name:'处理中'},
      {id:7,name:'船期早'},
    ];

    $scope.statusDetail = [
      {id:0,name:'新业务'},
      {id:1,name:'放单中'},
      {id:2,name:'已完成'},
      {id:3,name:'已拒绝'},
      {id:4,name:'没预配'},
      {id:6,name:'爆仓'},
      {id:5,name:'处理中'},
      {id:7,name:'船期早'},
    ];



   $scope.require = {
     applyEndTime:'',
     applyStartTime:'',
     billno:'',
     companyid:0,
     customerid:0,
     finishEndTime:'',
     finishStartTime:'',
     orderNumber:'',
     pageno:1,
     pagesize:20,
     saleName:'',
     salePoint:-1,
     status:-1,
     statusAmount:-1,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 1,
      pageSize : $scope.require.pagesize
    };


    $scope.switchPage = function (page) {
      $scope.require.pageno = page;
      interfaceService.showLoading('正在查询');
      httpRequest();
    }
    $scope.pagesizeChange = function () {
      $scope.require.pageno = 1;
      interfaceService.showLoading('正在查询');
      httpRequest();
    }

    var httpRequest = function (callback) {
      interfaceService.releaseOrderList($scope.require, function(data, headers, config) {
        console.log("results:"+JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;
          $scope.allCheckbox = [];
          $scope.idCheckbox = [];
        }else{
          swal({
            title:'出错',
            text:data.resdesc,
            type:'error',
            confirmButtonText: "确定",
          });
        }
        if(callback){
          callback();
        }
      });
    };

    $scope.refreshList = function () {
      interfaceService.showLoading('正在加载...');
      httpRequest();
    }


    // 查询船公司列表
    var httpCompanyList = function (callback) {
      var params = {
        companyCode:'',
        companyName:''
      }
      $scope.companyList = [
        {
          "companyCode": "测试代码",
          "companyName": "全部",
          "id": 0
        }
      ];
      $scope.companyList2 = [];

      interfaceService.releaseCompanyList(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          for(var index in data.data.pageData){
            $scope.companyList.push(data.data.pageData[index]);
            $scope.companyList2.push(data.data.pageData[index]);
          }
        }
        if(callback){
          $timeout(callback,20);
        }
      });
    };


    var httpCustomerList = function (callback) {
      var params = {
        customerName:'',
        salePoint:-1,
        userType:0
      }
      $scope.customerList = [
        {
          customerName:'全部',
          id:0
        }
      ];
      interfaceService.releaseUserList(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          if(data.data != undefined && data.data !=null){
            for(var index in data.data.pageData){
              $scope.customerList.push(data.data.pageData[index]);
            }
          }
        }
        $timeout(function () {
          // httpRequest(timePromise);
          httpRequest();
        },20);
      });
    };




    // 选择列表中的复选框
    $scope.idCheckbox = [];//需要批量配置的id
    $scope.allCheckbox = [];//全选
    $scope.isSelected = function(result){
      return $scope.idCheckbox.indexOf(result)>=0;
    }
    $scope.updateCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.idCheckbox.push(result);
        if($scope.idCheckbox.length==$scope.results.pageData.length){
          $scope.allCheckbox = ['all'];
        }
      }else{
        var idx = $scope.idCheckbox.indexOf(result);
        $scope.idCheckbox.splice(idx,1);
        if($scope.idCheckbox.length<$scope.results.pageData.length){
          $scope.allCheckbox = [];
        }
      }
    }

    // 全选
    $scope.isAllSelected = function(result){
      return $scope.allCheckbox.indexOf(result)>=0;
    }
    $scope.updateAllCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.allCheckbox.push(result);
        $scope.idCheckbox = [];
        var tempData = $scope.results.pageData.concat();
        for(var index in tempData){
          $scope.idCheckbox.push(tempData[index].id);
        }
        // $scope.idCheckbox = $scope.results.pageData.concat();
      }else{
        var idx = $scope.allCheckbox.indexOf(result);
        $scope.allCheckbox.splice(idx,1);
        $scope.idCheckbox = [];
      }
    };
    // 选择列表中的复选框

    $scope.countUp = 10;
    var timePromise = function () {
      $scope.countUp = 10;
      var tempInterval = $interval(function() {
        if($location.url()!='/main/companyinner/com_order_list' && $location.url()!='/main/userinner/com_order_list'){
          $interval.cancel(tempInterval);
          tempInterval = undefined;
        }
        if ($scope.countUp <= 0) {
          $interval.cancel(tempInterval);
          tempInterval = undefined;
          interfaceService.showLoading('自动查询');
          httpRequest(timePromise);
        } else {
          $scope.countUp--;
        }
      }, 1000);
    }


    $scope.printDetail = function () {
      var print = {
        d:[],
        c:'',
        s:$scope.require.applyStartTime,
        e:$scope.require.applyEndTime,
      };

      for(var index3 in $scope.customerList){
        var temp3 = $scope.customerList[index3];
        if(temp3.id==$scope.require.customerid){
          print.c = temp3.customerName;
          break;
        }
      }

      for(var index1 in $scope.results.pageData){
        var temp1 = $scope.results.pageData[index1];
        for(var index2 in $scope.idCheckbox){
          var temp2 = $scope.idCheckbox[index2];
          if(temp1.id==temp2){
            var tempPrint = {
              b:temp1.billno,
              x:temp1.boxdesc,
              d:temp1.amountDocument,
              s:temp1.amountService,
            }
            print.d.push(tempPrint);
          }
        }
      }
      $cookies.putObject('rPrint',print,cookiesService.cookiesDate());
      // console.log("==> print:"+JSON.stringify(print));
      var link = "release_print.html";
      window.open(link);
    }


    $scope.noteRequire = {
      title:'',
      createEndTime:'',
      createStartTime:'',
      showType:0,
      pageno:1,
      pagesize:1,
    };
    $scope.noteResult = {
      currPageNum : 1,
      totalPages : 1,
      pageSize : $scope.noteRequire.pagesize
    }
    var httpNoteList = function(flag){

      interfaceService.releaseNoteList($scope.noteRequire, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.noteResult = data.data;
          if($scope.noteResult.totalRows>0){
            if(flag){
              $('#note-alert').modal('show');
            }
          }else{
            $('#note-alert').modal('hide');
          }
        }
        if(flag){
          $timeout(function(){
            httpCompanyList(httpCustomerList);
          },20);
        }
      });
    }
    $scope.nextNote = function(){
      $scope.noteRequire.pageno++;
      httpNoteList();
    }

    $scope.preNote = function(){
      $scope.noteRequire.pageno--;
      httpNoteList();
    }

    httpNoteList(true);
  }
]);

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('comReleaseUserDetailController', ['$scope','$timeout','$rootScope','$cookies','$location','cookiesService', 'interfaceService', 'rescode',
  function($scope,$timeout,$rootScope,$cookies,$location,cookiesService, interfaceService, rescode) {

  $scope.salePoint = [
    {id:1,name:'浦东'},
    {id:2,name:'浦西'}
  ];

  var sourceType = 1;
    if($location.url()=='/main/companyinner/com_user_detail'){
      sourceType = 1;
    }else if($location.url()=='/main/userinner/com_user_detail'){
      sourceType = 2;
    }

    $scope.detail = {
      customerName: '',
      customerNumber: '',
      id: '',
      linkAddress: '',
      linkFox: '',
      linkMobile: '',
      linkName: '',
      remark: '',
      password: '-1',
      salePoint: 1,
      userName: '',
      userType: 0,
      sourceType:sourceType
    };


    var getUserInfo = function() {
      if($rootScope.loginUser.releaseType==0){
        $scope.detail.userName = $rootScope.loginUser.memberName;
        $scope.detail.customerName = $rootScope.loginUser.companyName;


      }else if($rootScope.loginUser.releaseType==1){
        interfaceService.releaseUserDetail({id:$rootScope.loginUser.releaseUserid}, function(data, headers, config) {
          console.log(JSON.stringify(data));
          $scope.detail = data.data;
        });
      }
    };

    $scope.onSubmit = function($valid) {
      if ($valid) {
        if($rootScope.loginUser.releaseType==0){
          swal({
            title: "确定初始化放箱资料吗?",
            text: "您即将初始化放箱资料!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,确定!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseUserCreate($scope.detail, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $rootScope.loginUser.releaseType = 1;
                $rootScope.loginUser.releaseUserid = data.data.id;
                $rootScope.loginUser.customerid = data.data.id;
                $rootScope.loginUser.customerName = data.data.customerName;
                $rootScope.loginUser.salePoint = data.data.salePoint;
                $rootScope.loginUser.userType = data.data.userType;
                $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());

                swal({
                  title: "初始化成功！",
                  text: "已成功初始化放箱资料。",
                  type: "success",
                  confirmButtonText: "确定",
                }, function() {});
              }else{
                swal({
                  title:'出错',
                  text:data.resdesc,
                  type:'error',
                  confirmButtonText: "确定",
                });
              }
            });
          });
        }else{
          swal({
            title: "确定修改个人资料吗?",
            text: "您即将修改个人资料!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,修改!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseUserUpdate($scope.detail, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                swal({
                  title: "修改成功！",
                  text: "已成功修改个人信息。",
                  type: "success",
                  confirmButtonText: "确定",
                }, function() {});
              }else{
                swal({
                  title:'出错',
                  text:data.resdesc,
                  type:'error',
                  confirmButtonText: "确定",
                });
              }
            });
          });
        }
      } else {
        console.log("$valid:" + $valid);
      }
    };

    $scope.getUserInfo =function () {
      getUserInfo();
    };



    getUserInfo();

  }
]);

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
          var tempmobilePhone = mobilePhone.substring(0, 3) + '****' + mobilePhone.substring(8, 11);
          swal({
            title: "发送验证码?",
            text: "即将往手机号为" + tempmobilePhone + "的手机发送一条验证码短信!",
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

yonglongApp.directive('orderInner',['$compile',function($compile){
  return{
    restrict: 'AE',
    replace: true,
    scope: {
      resultList:'='
    },
    templateUrl: 'template/directive/create_order_inner.html',
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
        $scope.resultList.push({"billNo":"","grossWeight":0,"id":0,"items":1,"sizeDesc":""});
      };

      $scope.deleteItem = function (item) {
        for(var i=0;i<$scope.resultList.length;i++){
          if($scope.resultList[i].billNo==item.billNo) {
            $scope.resultList.splice(i,1);
            break;
          }
        }

      }
    }
  }
}]);

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

yonglongApp.directive('prerecordInner',['$compile','baseDataService',function($compile,baseDataService){
  return{
    restrict: 'AE',
    replace: true,
    scope: {
      billList:'=',
      statusInfo:'=',
      numberChange:'='
    },
    templateUrl: 'template/directive/prerecord_inner.html',
    controller: function($scope){
      $scope.marinepollutionType = baseDataService.getMarinepollutionType();

      $scope.addExtra = function(){
        if($scope.statusInfo!='7'){
          swal({
            title: "确认信息",
            text: "非拼箱只能输入一票提单!",
            type: "warning",
            confirmButtonText: "确认"
          });
        }else{
          var no = $scope.billList.length+1;
          $scope.billList.push(
            {"ordersn":"","deliverycode":"","deliveryport":"","cargono":no,"items":1,"packagecode":"CN","packagetype":"","weight":0,"size":0,"cargodesc":"PLUSH TOYS","mark":"NM","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":"N"}
          );
        }
      };

      var cleanItem = function () {
        for(var i=1;i<$scope.billList.length;i++){
          $scope.billList.splice(i,1);
          i--;
        }
        $scope.numberChange();
      }

      $scope.$watch('statusInfo',function () {
        if($scope.statusInfo != '7'){
          cleanItem();
        }
      })

      $scope.canNotdeleteItem = function () {
        swal('错误', '至少包含一组数据', 'error');
      }
      $scope.deleteItem = function (item) {
        for(var i=0;i<$scope.billList.length;i++){
          if($scope.billList[i].ordersn==item.ordersn) {
            $scope.billList.splice(i,1);
            break;
          }
        }

        for(var i=0;i<$scope.billList.length;i++){
          $scope.billList[i].cargono = i+1;
        }

      }
    }
  }
}]);

yonglongApp.directive('showShipHeader', ['$templateRequest', '$compile', '$parse','$filter', function($templateRequest, $compile, $parse,$filter) {
  return {
    scope: {
      matchId:'@',
    },
    templateUrl:'template/typeahead/ship_header.html',
    link: function(scope, element, attrs) {
      scope.show = scope.matchId.indexOf("-option-0") > 0;
    }
  };
}]);
//
yonglongApp.directive('showCustomsHeader', ['$templateRequest', '$compile', '$parse','$filter', function($templateRequest, $compile, $parse,$filter) {
  return {
    scope: {
      matchId:'@',
    },
    templateUrl:'template/typeahead/customs_header.html',
    link: function(scope, element, attrs) {
      scope.show = scope.matchId.indexOf("-option-0") > 0;
    }
  };
}]);
yonglongApp.directive('showBoxoperatorHeader', ['$templateRequest', '$compile', '$parse','$filter', function($templateRequest, $compile, $parse,$filter) {
  return {
    scope: {
      matchId:'@',
    },
    templateUrl:'template/typeahead/boxoperator_header.html',
    link: function(scope, element, attrs) {
      scope.show = scope.matchId.indexOf("-option-0") > 0;
    }
  };
}]);




yonglongApp.directive('terms',function () {
  return{
    restrict: 'AE',
    replace: true,
    templateUrl: 'template/directive/terms.html'
  }
});

yonglongApp.directive('termsPay',function () {
  return{
    restrict: 'AE',
    replace: true,
    templateUrl: 'template/directive/terms_pay.html'
  }
});

yonglongApp.directive('termsuser',function () {
  return{
    restrict: 'AE',
    replace: true,
    templateUrl: 'template/directive/terms_user.html'
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
    .state('main.release.note_list',{//公告管理
      url:'/note_list',
      views: {
        'content@main': {
          templateUrl: 'template/release/note_list.html',
          controller: 'releaseNoteListController'
        }
      }
    })
    .state('main.release.user_list',{//客户列表
      url:'/user_list',
      views: {
        'content@main': {
          templateUrl: 'template/release/user_list.html',
          controller: 'releaseUserListController'
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
    })
    // 用户放箱
    .state('main.userinner.com_user_detail',{//用户资料管理
      url:'/com_user_detail',
      views: {
        'content@main': {
          templateUrl: 'template/release/user/com_user_detail.html',
          controller: 'comReleaseUserDetailController'
        }
      }
    })
    .state('main.userinner.com_order_create',{//创建放箱信息（委托书）
      url:'/com_order_create',
      views: {
        'content@main': {
          templateUrl: 'template/release/user/com_order_create.html',
          controller: 'comReleaseOrderCreateController'
        }
      }
    })
    .state('main.userinner.com_order_list',{//放箱列表查询接口
      url:'/com_order_list',
      views: {
        'content@main': {
          templateUrl: 'template/release/user/com_order_list.html',
          controller: 'comReleaseOrderListController'
        }
      }
    })    // 用户放箱;






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
    })
    // 用户放箱
    .state('main.companyinner.com_user_detail',{//用户资料管理
      url:'/com_user_detail',
      views: {
        'content@main': {
          templateUrl: 'template/release/user/com_user_detail.html',
          controller: 'comReleaseUserDetailController'
        }
      }
    })
    .state('main.companyinner.com_order_create',{//创建放箱信息（委托书）
      url:'/com_order_create',
      views: {
        'content@main': {
          templateUrl: 'template/release/user/com_order_create.html',
          controller: 'comReleaseOrderCreateController'
        }
      }
    })
    .state('main.companyinner.com_order_list',{//放箱列表查询接口
      url:'/com_order_list',
      views: {
        'content@main': {
          templateUrl: 'template/release/user/com_order_list.html',
          controller: 'comReleaseOrderListController'
        }
      }
    })    // 用户放箱
    ;

}]);
