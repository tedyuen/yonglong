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
