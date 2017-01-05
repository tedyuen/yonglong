yonglongApp.service('logoutService',['$rootScope','$cookies',function ($rootScope,$cookies) {
  this.logout = function () {
    $rootScope.loginUser = undefined;
    $cookies.remove('yltUser');
    window.location.href = 'index.html';
  }
}]);
