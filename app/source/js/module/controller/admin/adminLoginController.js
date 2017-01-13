yonglongApp.controller('adminLoginController',['$scope','$rootScope','$cookies','$state','interfaceService','rescode','cookiesService',
  function ($scope,$rootScope,$cookies,$state,interfaceService,rescode,cookiesService) {


    var initAdminForm = function () {
      var adminMName = $cookies.get('yltAdminMName');
      var adminIsReme = $cookies.get('yltAdminIsReme');
      var adminPass = $cookies.get('yltAdminPass');

      console.log(adminMName);

      if(adminMName==undefined){
        adminMName = '';
      }
      if(adminPass==undefined){
        adminPass = '';
      }
      if(adminIsReme==undefined){
        adminIsReme = 'false';
        adminPass = '';
      }else{
        if(adminIsReme=='false'){
          adminPass = '';
        }
      }

      $scope.admin = {
        memberName:adminMName,
        password:adminPass,
        isRemember:adminIsReme=='true'
      }
    }

    var doSwal = function (code) {
      if(code == rescode.UNKNOW_USER){
        swal('错误','帐号不存在','warning');
      }else if(code == rescode.ERROR_PASSWORD){
        swal('错误','密码不正确','warning');
      }
    }


    $scope.onLoginAdmin = function ($valid) {
      if($valid.adminMemberName.$invalid){
        swal('错误','帐号不能为空','warning');
        return;
      }

      if($valid.adminPassword.$invalid){
        swal('错误','密码不能为空','warning');
        return;
      }

      interfaceService.adminLogin($scope.admin,function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $rootScope.loginUser = data.data;

          $cookies.put('yltAdminMName',$scope.admin.memberName,cookiesService.cookiesDate());
          if($scope.admin.isRemember){
            $cookies.put('yltAdminIsReme','true',cookiesService.cookiesDate());
            $cookies.put('yltAdminPass',$scope.admin.password,cookiesService.cookiesDate());
          }else{
            $cookies.put('yltAdminIsReme','false',cookiesService.cookiesDate());
            $cookies.remove('yltAdminPass');
          }
          $cookies.putObject('yltUser',$rootScope.loginUser,cookiesService.cookiesDate());
          $state.go('main.admin.order_list');
        }else{
          doSwal(data.rescode);
        }
      });
    }

    initAdminForm();
}]);
