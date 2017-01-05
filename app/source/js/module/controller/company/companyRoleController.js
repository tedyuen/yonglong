yonglongApp.controller('companyRoleController',['$rootScope','$scope','$cookies','logoutService',
  function ($rootScope,$scope,$cookies,logoutService) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='company'){
      console.log('没有company权限');
      window.location.href = 'index.html';
    }

    $scope.logout = function () {
      swal({
        title: "退出登录?",
        text: "是否要退出登录!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,注销!",
        closeOnConfirm: false,
      },function () {
        logoutService.logout();
      });
    }
}]);
