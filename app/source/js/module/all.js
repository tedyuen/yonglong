/**
 * Created by tedyuen on 16-12-7.
 */
global.$ = global.jQuery = require('jquery');
require('bootstrap');
require('metismenu');
require('jquery-slimscroll');
require('jquery-toast-plugin');

// var LogUtil = require('./utils/LogUtil');
// var log = new LogUtil(true);//Set can out log.

require('bootstrap-datepicker');
require('./utils/bootstrap-datepicker');

require('angular');
require('angular-ui-router');

require('angular-baidu-map');//ZO2tPhGQIZk6M5QdHzLQPyBOGbSSGzwW

var yonglongApp = angular.module("myApp",['ui.router','baiduMap']);




$(document).ready(function () {
    $(function () {
        $(".preloader").fadeOut();
    });
    // Theme settings

});

!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(d.allowEvent(t)===!1)return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(1.4*e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;n=a[a.length-1];var o=n.getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=Date.now()-Number(n.getAttribute("data-hold")),l=350-u;0>l&&(l=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},l)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves-effect"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){e=e||{},"duration"in e&&(c.duration=e.duration),c.wrapInput(u(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);
/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('createOrderController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
  showDatePickerProvider.showDatePicker();

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
yonglongApp.controller('queryOrderController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


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
yonglongApp.controller('wannerOrderController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


}]);

/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.provider('showDatePickerProvider',function () {
  this.$get = function () {
    return {
      showDatePicker:function () {
        console.log('showdatepicker');
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
    .state('main.userinner.query_customer',{//客户下单
      url:'/customer_order',
      views: {
        'content@main': {
          templateUrl: 'template/userinner/query_customer.html',
          controller: 'customerOrderController'
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
    .state('main.companyinner.friend_manage',{//外发订单
      url:'/friend_manage',
      views: {
        'content@main': {
          templateUrl: 'template/companyinner/friend_manage.html',
          controller: 'friendManageController'
        }
      }
    })






}]);



