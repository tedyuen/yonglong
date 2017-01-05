yonglongApp.controller('userRoleController',['$rootScope','$scope','$cookies','logoutService',
  function ($rootScope,$scope,$cookies,logoutService) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='user'){
      console.log('没有user权限');
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
