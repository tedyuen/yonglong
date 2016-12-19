yonglongApp.service('interfaceService',['httpService','URL_CONS','sessionService',function (httpService,URL_CONS,sessionService) {
  this.doHttp = function (sub,params,success,error) {
    var base = {
      token:sessionService.getSession().token
    }
    jQuery.extend(params,sub);
    jQuery.extend(params,base);
    console.log(JSON.stringify(params));
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

  // 创建订单
  this.createOrder = function (params,success,error) {
    var sub = {
      method:URL_CONS.createOrder,
      orderStatus:1,
      orderCreditRank:5
    };
    // console.log(JSON.stringify(data));
    this.doHttp(sub,params,success,error);
  }


}]);
