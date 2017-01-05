yonglongApp.controller('userRoleController',['$rootScope','$cookies',
  function ($rootScope,$cookies) {
    $rootScope.loginUser = $cookies.getObject('yltUser');
    if($rootScope.loginUser==undefined || $rootScope.loginUser && $rootScope.loginUser.role!='user'){
      console.log('没有user权限');
      window.location.href = 'index.html';
    }
  }]);
