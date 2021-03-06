global.$ = global.jQuery = require('jquery');
require('bootstrap');

var goLogin = function (role) {
  document.cookie = "yonglongRole="+role;
  if(role=='company'){
    window.location.href = 'shell.html#!/main/companyinner/create_order';
  }else if(role=='user'){
    window.location.href = 'shell.html#!/main/userinner/wanner_order';
  }
}

var goRegister = function (role) {
  document.cookie = "yonglongRole="+role;
  if(role=='company'){
    window.location.href = 'shell.html#!/register_company';
  }else if(role=='user'){
    window.location.href = 'shell.html#!/register_user';
  }

}


$('.register-company').on('click',function () {
  goRegister('company');
});
$('.register-user').on('click',function () {
  goRegister('user');
});



var $navBarLis = $(".navbar-nav > li");

// index
// 导航栏点击事件
$navBarLis.on("click",function(){
  var last = $navBarLis.length - 1;
  var activeS = $(this).hasClass("active");
  var index = $(this).index();
  if (last == index || activeS) return;

  $navBarLis.each(function(i, ele){
    var active = $(ele).hasClass("active");
    if(active){
      $(ele).removeClass("active");
      $(ele).find("div").animate({left: "-100%"}, 100);
    }
  });
  $(this).addClass("active");
  var div = $(this).find("div");
  div.animate({left: "0"},100);
  $(this).find("div").show();

});

// 鼠标移出
$navBarLis.on("mouseleave",function(){
  var active = $(this).hasClass("active");
  if(!active) {
    $(this).find("div").stop();
    $(this).find("div").animate({left: "-100%"}, 100);
  }
});

// 鼠标进入
$navBarLis.on("mouseenter",function(){
  var active = $(this).hasClass("active");
  if(!active){
    var div = $(this).find("div");
    div.stop();
    div.animate({left: "0"}, 100);
    $(this).find("div").show();
  }
});
var $navTabsLis = $(".nav-tabs > li");
var service = {
  // 已登录点击tab颜色切换
  loggedTabs : function(){
    $navTabsLis.each(function(i, ele){
      if($(ele).hasClass("active")){
        $(ele).find("a").css({background:"#ffffff", color:"#65717a"});
        if(i == 0){
          $(ele).find("span").removeClass("user-default");
          $(ele).find("span").addClass("user-selected");
        }else{
          $(ele).find("span").removeClass("car-default");
          $(ele).find("span").addClass("car-selected");
        }
      }else{
        $(ele).find("a").css({background:"#65717a", color:"#ffffff"})
        if(i == 0){
          $(ele).find("span").removeClass("user-selected");
          $(ele).find("span").addClass("user-default");
        }else{
          $(ele).find("span").removeClass("car-selected");
          $(ele).find("span").addClass("car-default");
        }
      }

    });
  }
};
service.loggedTabs();
// 发货方|承运方 点击事件
$("#loginTab").find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  // 获取已激活的标签页的名称
  //var activeTab = $(e.target).text();
  //// 获取前一个激活的标签页的名称
  //var previousTab = $(e.relatedTarget).text();
  //$(".active-tab span").html(activeTab);
  //$(".previous-tab span").html(previousTab);
  //console.log("-->" + $(e.target).parent().html() + " active:" + active);
  //var isClick = $(e.target).attr("aria-expanded");
  //console.log("isClick: " + isClick);

  var active = $(e.target).parent().hasClass("active");
  if(active){
    $(".nav-tabs").find(".active").removeClass("active");
    $(e.target).parent().addClass("active");
    service.loggedTabs();
  }

});

require('sweetalert');
require('angular');
require('angular-cookies');
require('../../module/utils/JqueryEllipsis');

var ylIndex = angular.module("myApp",["ngCookies"]);
// var Mock = require('mockjs');




$(document).ready(function () {
    $(function () {
        $(".preloader").fadeOut();
    });
    // Theme settings

});

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
  serverUrl: 'http://120.26.65.65:8285/api/data',
  serverFileUrl: ' http://120.26.65.65:8285/api/file',
  // serverUrl: 'http://www.56elutong.com/api/data',
  // serverFileUrl: ' http://www.56elutong.com/api/file',
  testInterface: 'testInterface',
  companyLogin: 'company_login',
  userLogin: 'user_login',
  getArticleIndex: 'article_index',
  getArticleList: 'article_list',
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

ylIndex.controller('indexController', ['$scope', '$cookies','$timeout', 'interfaceService', 'rescode', 'cookiesService',
  function($scope, $cookies,$timeout, interfaceService, rescode, cookiesService) {

    $('.line-3').ellipsis({
      row:3
    });

    // 发货方初始化
    var initCompanyForm = function() {
      var comMName = $cookies.get('yltComMName');
      var comIsReme = $cookies.get('yltComIsReme');
      var comPass = $cookies.get('yltComPass');

      console.log("comMName:" + comMName);

      if (comMName === undefined) {
        comMName = '';
      }
      if (comPass === undefined) {
        comPass = '';
      }
      if (comIsReme === undefined) {
        comIsReme = 'false';
        comPass = '';
      } else {
        if (comIsReme === 'false') {
          comPass = '';
        }
      }

      $scope.company = {
        memberName: comMName,
        password: comPass,
        isRemember: comIsReme == 'true'
      };
    };

    // 承运方初始化
    var initUserForm = function() {
      var userMName = $cookies.get('yltUserMName');
      var userIsReme = $cookies.get('yltUserIsReme');
      var userPass = $cookies.get('yltUserPass');

      if (userMName === undefined) {
        userMName = '';
      }
      if (userPass === undefined) {
        userPass = '';
      }
      if (userIsReme === undefined) {
        userIsReme = 'false';
        userPass = '';
      } else {
        if (userIsReme == 'false') {
          userPass = '';
        }
      }

      $scope.user = {
        memberName: userMName,
        password: userPass,
        isRemember: userIsReme == 'true'
      };
    };

    var doSwal = function(code) {
      if (code == rescode.UNKNOW_USER) {
        swal('错误', '帐号不存在', 'warning');
      } else if (code == rescode.ERROR_PASSWORD) {
        swal('错误', '密码不正确', 'warning');
      }
    };

    $scope.goBackground = function() {
      if ($scope.loginUser && $scope.loginUser.token) {
        if ($scope.loginUser.role == 'company') {
          window.location.href = 'shell.html#!/main/companyinner/create_order';
        } else if ($scope.loginUser.role == 'user') {
          window.location.href = 'shell.html#!/main/userinner/wanner_order';
        }
      }
    };

    $scope.logoutUser = function() {
      $scope.loginUser = undefined;
      $cookies.remove('yltUser');
    };


    $scope.onLoginCompany = function($valid) {
      if ($valid.companyMemberName.$invalid) {
        swal('错误', '帐号不能为空', 'warning');
        return;
      }

      if ($valid.companyPassword.$invalid) {
        swal('错误', '密码不能为空', 'warning');
        return;
      }
      interfaceService.companyLogin($scope.company, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.loginUser = data.data;

          $cookies.put('yltComMName', $scope.company.memberName, cookiesService.cookiesDate());
          if ($scope.company.isRemember) {
            $cookies.put('yltComIsReme', 'true', cookiesService.cookiesDate());
            $cookies.put('yltComPass', $scope.company.password, cookiesService.cookiesDate());
          } else {
            $cookies.put('yltComIsReme', 'false', cookiesService.cookiesDate());
            $cookies.remove('yltComPass');
          }
          $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());
        } else {
          doSwal(data.rescode);
        }
      });
    };

    // 承运方登录
    $scope.onLoginUser = function($valid) {
      if ($valid.userMemberName.$invalid) {
        swal('错误', '帐号不能为空', 'warning');
        return;
      }

      if ($valid.userPassword.$invalid) {
        swal('错误', '密码不能为空', 'warning');
        return;
      }
      interfaceService.userLogin($scope.user, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.loginUser = data.data;

          $cookies.put('yltUserMName', $scope.user.memberName, cookiesService.cookiesDate());
          if ($scope.user.isRemember) {
            $cookies.put('yltUserIsReme', 'true', cookiesService.cookiesDate());
            $cookies.put('yltUserPass', $scope.user.password, cookiesService.cookiesDate());
          } else {
            $cookies.put('yltUserIsReme', 'false', cookiesService.cookiesDate());
            $cookies.remove('yltUserPass');
          }
          $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());
        } else {
          doSwal(data.rescode);
        }
      });
    };


    initCompanyForm();
    initUserForm();
    $scope.loginUser = $cookies.getObject('yltUser');


    var getArticleIndex = function() {
      var params = {
        num: 4
      };
      interfaceService.getArticleIndex(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.articleResults = data.data;
          $timeout(function () {
            $('.line-2').ellipsis({
              row:2
            });
          },20);
        } else {

        }
      });
    };

    getArticleIndex();


    $scope.goResetPassword = function(role) {
      window.location.href = 'shell.html#!/forget_password/' + role;
    };

    $scope.keydown = function(e, role, form) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        if (role === 0) {
          $scope.onLoginCompany(form);
        } else if (role == 1) {
          $scope.onLoginUser(form);
        }
      }
    };
  }
]);

ylIndex.service('cookiesService',function () {
  this.cookiesDate = function () {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 60);
    return {'expires': expireDate.toUTCString()};
  }
});
