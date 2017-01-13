global.$ = global.jQuery = require('jquery');
require('bootstrap');

var $listGroupItems = $("#news").find(".list-group > .list-group-item");

$listGroupItems.on("click",function(){

  var active = $(this).hasClass("active");
  if (active){ return; }

  $listGroupItems.each(function(i, ele){
    var eleActive = $(ele).hasClass("active");
    if(eleActive){
      $(ele).removeClass("active");
      var $groupItemIcon = $(ele).find(".group-item-icon");
      if(i == 0){
        $groupItemIcon.removeClass("enterprise-selected");
      }else if(i == 1){
        $groupItemIcon.removeClass("logistics-selected");
      }else if(i == 2){
        $groupItemIcon.removeClass("finance-selected");
      }
      return false; // 跳出当前循环
    }
  });
  $(this).addClass("active");
  var index = $(this).index();
  var $thisIcon = $(this).find(".group-item-icon");
  if(index == 0){
    $thisIcon.addClass("enterprise-selected");
  }else if(index == 1){
    $thisIcon.addClass("logistics-selected");
  }else if(index == 2){
    $thisIcon.addClass("finance-selected");
  }
});

require('sweetalert');
require('angular');
require('angular-cookies');
var ylIndex = angular.module("myApp",["ngCookies"]);

ylIndex.factory('httpService', ['$http','$timeout','$q',function ($http, $timeout, $q) {
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

ylIndex.constant('rescode', {
  SUCCESS:'0000',

  AGAIN_PHONE:'201002',
  EMPTY_SMS_CODE:'201004',
  UNKNOW_USER:'201008',//用户不存在
  ERROR_PASSWORD:'201009',//密码不正确
})

ylIndex.constant('URL_CONS', {
  // serverUrl:'http://192.168.0.25:8080/admin/api/data',
  // serverUrl:'http://192.168.0.25:8080/admin/api/data',
  // serverFileUrl:'http://192.168.0.25:8080/admin/api/file',
  serverUrl:'http://120.26.65.65:8285/adm/api/data',
  serverFileUrl:' http://120.26.65.65:8285/adm/api/file',

  testInterface:'testInterface',
  companyLogin:'company_login',
  userLogin:'user_login',
  getArticleIndex:'article_index',
  getArticleList:'article_list',
});

/**
 * Created by tedyuen on 17-1-3.
 */
ylIndex.service('interfaceService',['httpService','URL_CONS',function (httpService,URL_CONS) {

  this.doHttp = function (url,sub,params,success,error,files) {
    // var base = {
    //   token:sessionService.getSession().token
    // }
    jQuery.extend(params,sub);
    // jQuery.extend(params,base);
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


  this.testHttp = function (params,success,error) {
    var sub = {
      method:URL_CONS.testInterface
    };
    this.doHttp(URL_CONS.serverUrl,sub,params,success,error);
  }

  this.testInterface = function (params,success,error) {
    this.doHttpMethod(URL_CONS.testInterface,params,success,error);
  }

  // 11.1 登录
  this.companyLogin = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyLogin,params,success,error);
  }
  // B11.1 登录
  this.userLogin = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userLogin,params,success,error);
  }

  // 12.2 首页文章
  this.getArticleIndex = function (params,success,error) {
    this.doHttpMethod(URL_CONS.getArticleIndex,params,success,error);

  }

  //12.3文章列表
  this.getArticleList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.getArticleList,params,success,error);
  }
}]);

ylIndex.controller('newsController',['$scope','interfaceService','rescode',function ($scope,interfaceService,rescode) {


  $scope.showCount = 5;
  var perCount = ($scope.showCount-1)/2;//前后各显示几个
  $scope.preShow = false;
  $scope.nextShow = false;
  $scope.pageParams = {
    pageno:1,
    pagesize:1
  }

  $scope.pageArray=[];
  $scope.selectPageArray=[];

  var changeData = function () {
    $scope.pageArray =[];
    $scope.selectPageArray=[];

    $scope.firstPage = {
      pageNum:1,
      isCurrent:$scope.articleResults.currPageNum==1,
      canClick:$scope.articleResults.currPageNum!=1
    }


    // console.log("perCount:"+perCount);
    // console.log("$scope.articleResults.currPageNum:"+$scope.articleResults.currPageNum);
    // console.log("scope.articleResults.totalPages:"+$scope.articleResults.totalPages);
    if(($scope.articleResults.totalPages-2) <= $scope.showCount){
      // console.log('全显示');
      $scope.preShow = false;
      $scope.nextShow = false;
    }else {
      // console.log('不全显示');
      $scope.preShow = (perCount+2)<$scope.articleResults.currPageNum;
      $scope.nextShow = (perCount+1)<($scope.articleResults.totalPages - $scope.articleResults.currPageNum);
    }
    console.log($scope.preShow);
    console.log($scope.nextShow);
    // console.log($scope.preShow+":"+$scope.nextShow);
    for(var i=2;i<$scope.articleResults.totalPages;i++){

    // for(var i=$scope.preShow?$scope.articleResults.currPageNum-perCount:2
    //   ;i<$scope.nextShow?($scope.articleResults.totalPages - $scope.articleResults.currPageNum + 1):$scope.articleResults.totalPages
    //   ;i++){
      var item = {
        pageNum:i,
        isCurrent:$scope.articleResults.currPageNum==i,
        canClick:$scope.articleResults.currPageNum!=i
      }
      $scope.pageArray.push(item);
    }

    if((($scope.articleResults.totalPages-2)>$scope.showCount)){
      for(var i=0;i<$scope.showCount;i++){
        if(($scope.articleResults.currPageNum>3)&($scope.articleResults.currPageNum<($scope.articleResults.totalPages-3))){
          // console.log('选择中间3个'+$scope.articleResults.currPageNum);
          // console.log($scope.articleResults.currPageNum-2+i);
          $scope.selectPageArray.push($scope.pageArray[$scope.articleResults.currPageNum-4+i])
        }else if($scope.articleResults.currPageNum<=3){
          // console.log('选择前3个');
          $scope.selectPageArray.push($scope.pageArray[i]);
        }else if($scope.articleResults.currPageNum>=($scope.articleResults.totalPages-3)){
          // console.log('选择后3个');
          $scope.selectPageArray.push($scope.pageArray[$scope.articleResults.totalPages-2-$scope.showCount+i]);
        }
      }
    }else{
      for(var i=0;i<$scope.pageArray.length;i++){
        $scope.selectPageArray.push($scope.pageArray[i]);
      }
    }


    if($scope.articleResults.totalPages!=1){
      $scope.lastPage = {
        pageNum:$scope.articleResults.totalPages,
        isCurrent:$scope.articleResults.currPageNum==$scope.articleResults.totalPages,
        canClick:$scope.articleResults.currPageNum!=$scope.articleResults.totalPages
      }
      console.log('最后一页'+'  '+'pageNum'+':'+($scope.articleResults.totalPages)+'---'+'isCurrent'+':'+($scope.articleResults.totalPages+1)+'---'+'canClick'+":"+$scope.articleResults.totalPages);
    }
  }


  var getArticleList = function () {

    interfaceService.getArticleList($scope.pageParams,function (data,headers,config) {
      console.log(JSON.stringify(data));
      if(data.rescode == rescode.SUCCESS){
        $scope.articleResults = data.data;
        // $scope.totalPages = $scope.articleResults.totalPages;
        changeData();

      }else{

      }
    });

  }

  getArticleList();

  $scope.switchPage = function (pageNum) {
    $scope.pageParams.pageno = pageNum;
    console.log('==>'+pageNum);
    getArticleList();
  }


  $scope.mySelfClick = function () {
    console.log('个人中心'+'---'+$scope.articleResults+'---'+$scope.articleResults.token);
    if($scope.articleResults && $scope.articleResults.token){
      console.log('if');
      if($scope.loginUser.role=='company'){
        window.location.href = 'shell.html#!/main/companyinner/create_order';
      }else if($scope.loginUser.role=='user'){
        window.location.href = 'shell.html#!/main/userinner/wanner_order';
      }
    }else {
      console.log('else');
    }
  }

  // $scope.goBackground = function () {
  //   if($scope.loginUser && $scope.loginUser.token){
  //     if($scope.loginUser.role=='company'){
  //       window.location.href = 'shell.html#!/main/companyinner/create_order';
  //     }else if($scope.loginUser.role=='user'){
  //       window.location.href = 'shell.html#!/main/userinner/wanner_order';
  //     }
  //   }
  // }

}]);
