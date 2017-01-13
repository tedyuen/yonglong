yonglongApp.controller('forgetPasswordController',['$scope','$state','$stateParams','$interval','interfaceService','rescode','validateService','toastService',
  function ($scope,$state,$stateParams,$interval,interfaceService,rescode,validateService,toastService) {

    switch ($stateParams.role){
      case '0':
        $scope.roleText = '发货方';
        break;
      case '1':
        $scope.roleText = '承运方';
        break;
      case '2':
        $scope.roleText = '管理员';
        break;

    }

    $scope.params = {
      role:$stateParams.role,
      mobileCode:'',
      mobilePhone:undefined,
      newPassword:''
    }

    $scope.onResetPassword = function ($valid) {
      if($valid){
        interfaceService.resetPassword($scope.params,function (data,headers,config) {
          // console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"密码重置成功！",
              text:"新密码已通过短信发送至您的注册手机。",
              type:"success",
              showCancelButton: true,
              cancelButtonText: "确定",
              confirmButtonText:"前往登录",
            },function () {
              console.log("$stateParams.role: "+$stateParams.role);
              switch($stateParams.role){
                case '0'://company
                case '1'://user
                  window.location.href = 'index.html';
                  break;
                case '2':
                  console.log('go!!');
                  $state.go('adminlogin');
                  break;//admin
              }
            });
          }else{

          }
        });
      }
    }

    //发送验证码
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function () {
      var validMobile = validateService.mobile($scope.params.mobilePhone,true);
      if(validMobile.result && $scope.validCodeFlag){
        var second = 60;
        $scope.validCodeFlag = false;
        $scope.validCodeText = '正在发送...';

        var params = {
          codetype:1,
          mobilePhone:$scope.params.mobilePhone
        }
        interfaceService.sendcode(params,function (data,headers,config) {
          // console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            toastService.sendCodeToast(true);
            var timePromise = $interval(function () {
              if(second<=0){
                $interval.cancel(timePromise);
                timePromise = undefined;
                $scope.validCodeFlag = true;
                $scope.validCodeText = '重新发送验证码';
              }else{
                $scope.validCodeText = second+'秒后重新发送';
                second--;
              }
            },1000,65);

          }else{
            toastService.sendCodeToast(false);
            $scope.validCodeFlag = true;
            $scope.validCodeText = '发送验证码';
          }
        });
      }
    }

}]);
