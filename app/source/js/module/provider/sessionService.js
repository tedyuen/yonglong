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
