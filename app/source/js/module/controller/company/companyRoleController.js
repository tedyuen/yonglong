yonglongApp.controller('companyRoleController',['$rootScope','$cookies',
  function ($rootScope,$cookies) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='company'){
      console.log('没有company权限');
      window.location.href = 'index.html';
    }
}]);
