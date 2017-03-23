yonglongApp.controller('releaseRoleController',['$rootScope','$scope','$cookies','$state','logoutService',
  function ($rootScope,$scope,$cookies,$state,logoutService) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='release'){
      console.log('没有release权限');
      $state.go('releaselogin');
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
        closeOnConfirm: true,
      },function () {
        logoutService.releaseLogout('release');
      });
    }

}]);
