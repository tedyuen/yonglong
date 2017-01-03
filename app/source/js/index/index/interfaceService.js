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
    _opts.url = URL_CONS.serverUrl+"/"+sub.method;
    // _opts.url = url;
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

}]);
