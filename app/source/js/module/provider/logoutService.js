yonglongApp.service('logoutService',['$rootScope','$state','$cookies',function ($rootScope,$state,$cookies) {
  this.logout = function (role) {
    $rootScope.loginUser = undefined;
    $cookies.remove('yltUser');
    if(role){
      $state.go('adminlogin');
    }else{
      window.location.href = 'index.html';
    }
  }
}]);
