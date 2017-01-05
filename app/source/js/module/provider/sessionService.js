yonglongApp.service('sessionService',['$rootScope',function ($rootScope) {
  this.getSession = function () {
    // console.log("show token:"+eluser.token);
    console.log("show $rootScope token:"+$rootScope.loginUser.token);
    var session = {
      // token:eluser.token
      token:$rootScope.loginUser.token
    }
    return session;
  }
}]);
