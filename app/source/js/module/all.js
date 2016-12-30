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
require('sweetalert');

require('angular');
require('angular-ui-router');

require('angular-baidu-map');//ZO2tPhGQIZk6M5QdHzLQPyBOGbSSGzwW

var yonglongApp = angular.module("myApp",['ui.router','baiduMap']);

var Mock = require('mockjs');

var UiState = require('./utils/UiState');



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
    boxVolN: [{name: '不限', id: '-1', show: '不限'},{name: '20', id: '0', show: '短板车'}, {name: '40', id: '1', show: '12.6米'}],
    orderTypeN: [{name: '不限', id: '-1'},{name: '进口', id: '0'}, {name: '出口', id: '1'}, {name: '拖柜进洋山', id: '2'}],

  }
);

yonglongApp.constant('rescode', {
  SUCCESS:'0000',

  AGAIN_PHONE:'201002',
  EMPTY_SMS_CODE:'201004',
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
      // console.log(page);
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
        httpList();
      }else{

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
      // console.log(page);
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
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
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
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
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

    httpList();

  }]);

yonglongApp.controller('userRegisterController',['$scope','$state','dropifyProvider','interfaceService','rescode','baseDataService',
  function ($scope,$state,dropifyProvider,interfaceService,rescode,baseDataService) {
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


  }]);

yonglongApp.controller('userUpdateInfoController',['$scope','$state','dropifyProvider','interfaceService','rescode','baseDataService',
  function ($scope,$state,dropifyProvider,interfaceService,rescode,baseDataService) {
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
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
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

/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('createOrderController',['$scope','$timeout','$state','showDatePickerProvider','URL_CONS','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,$state,showDatePickerProvider,URL_CONS,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.orderDetail ={
      shippingName:'辽宁号',
      shippingDate:'2016-12-31',
      originPort:'洋山深水港',
      loadingPort:'大连港',
      returnPort:'天津港',
      transitPort:'外高桥港',
      destPort:'珠海港',
      orderType:'0',
      containerVType:'0',
      containerSType:'0',
      containerVol:200,
      grossWeight:500,
      note:'',
      shippingFee:'34',
      extraFee:'245',
      referenceShippingFee:'34',
      shippingSn:'AXJIE8737492J'
    }

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
            // console.log(JSON.stringify(data));
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
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
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
yonglongApp.controller('hasgetOrderController',['$scope','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode',
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
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
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
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }

    // 指定车辆
    $scope.selectedOid = function (orderId) {

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

    httpList();

  }]);

/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller("mainController",['$rootScope','$scope','$timeout',function ($rootScope,$scope,$timeout) {
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

/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('queryOrderController',['$scope','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,showDatePickerProvider,baseDataService,interfaceService,rescode) {
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
        // console.log("request:"+JSON.stringify($scope.queryData));
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
        httpList();
      }else{

      }
    }


    httpList();
}]);

yonglongApp.controller('registerCompanyController',['$scope','$state','dropifyProvider','interfaceService','rescode',
  function ($scope,$state,dropifyProvider,interfaceService,rescode) {
    dropifyProvider.dropify();
    $scope.showTerms=function () {
      $('#terms').modal('show');
    }

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
      address:''
    }
    $scope.regfile1 = {
      name:'nameCardFile',
      file:'',
    }
    $scope.regfile2 = {
      name:'nameCardBackFile',
      file:'',
    }
    $scope.regfile3 = {
      name:'licenceFile',
      file:'',
    }
    var files = [$scope.regfile1,$scope.regfile2,$scope.regfile3];

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.companyRegister($scope.reg,files,function (data,headers,config) {
          console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            $state.go('main.companyinner.create_order');
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


}]);

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
        httpList();
      }else{

      }
    }


    httpList();
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
      address:''
    }
    $scope.regfile1 = {
      name:'nameCardFile',
      file:'',
    }
    $scope.regfile2 = {
      name:'nameCardBackFile',
      file:'',
    }
    $scope.regfile3 = {
      name:'licenceFile',
      file:'',
    }
    var files = [$scope.regfile1,$scope.regfile2,$scope.regfile3];


    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.companyUpdateinfo($scope.reg,files,function (data,headers,config) {
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
      interfaceService.companyUserinfo({},function (data,headers,config) {
        console.log(JSON.stringify(data));
        $scope.reg = data.data;
      })
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
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
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
yonglongApp.controller('withdrawManageController',['$scope','interfaceService','rescode',
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

yonglongApp.factory('httpService', ['$http','$timeout','$q','URL_CONS',function ($http, $timeout, $q,URL_CONS) {
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

yonglongApp.service('interfaceService',['httpService','URL_CONS','sessionService',function (httpService,URL_CONS,sessionService) {

  this.doHttp = function (url,sub,params,success,error,files) {
    var base = {
      token:sessionService.getSession().token
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
          format: "yyyy-mm-dd",
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



