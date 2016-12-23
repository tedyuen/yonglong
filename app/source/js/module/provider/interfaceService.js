yonglongApp.service('interfaceService',['httpService','URL_CONS','sessionService',function (httpService,URL_CONS,sessionService) {

  this.doHttp = function (url,sub,params,success,error) {
    var base = {
      token:sessionService.getSession().token
    }
    jQuery.extend(params,sub);
    jQuery.extend(params,base);
    // console.log(JSON.stringify(params));
    var request = {
      json:params
    }
    console.log("request json str:-->  "+request.json);
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

  this.doHttpMethod = function (method,params,success,error) {
    var sub = {
      method:method,
    };
    this.doHttp(URL_CONS.serverUrl,sub,params,success,error);
  }

  this.doFileHttpMethod = function (method,params,success,error) {
    var sub = {
      method:method,
    };
    this.doHttp(URL_CONS.serverFileUrl,sub,params,success,error);
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
  this.companyUpdateinfo = function (params,files,success,error) {
    // this.doFileHttpMethod(URL_CONS.companyUpdateinfo,params,success,error);
    var sub = {
      method:URL_CONS.companyUpdateinfo,
    };

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
    console.log("request json str:-->  "+request.json);
    var _opts = jQuery.extend({
      timeout : 'getError404Timeout'
    },null);
    // _opts.url = URL_CONS.serverUrl+"/"+sub.method;
    _opts.url = URL_CONS.serverFileUrl;
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


}]);
