yonglongApp.service('interfaceService',['httpService','URL_CONS',function (httpService,URL_CONS) {
  this.createOrder = function (data,success,error) {
    var _opts = jQuery.extend({
      timeout : 'getError404Timeout'
    },null);
    _opts.url = URL_CONS.createOrder;
    _opts.data = data;
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
