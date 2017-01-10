yonglongApp.controller('updatePasswordController',['$rootScope','$scope','$interval','interfaceService','rescode','toastService',
  function ($rootScope,$scope,$interval,interfaceService,rescode,toastService) {

    $scope.reg = {
      mobileCode:'',
      newPassword:'',
      repassword:'',
    }

    $scope.valid = {
      repass:true
    }


    $scope.checkPassword = function () {
      $scope.valid.repass = $scope.reg.newPassword==$scope.reg.repassword;
    }

    $scope.onSubmit = function ($valid) {
      if($valid){
        if(!$scope.valid.repass){
          swal('重复密码有误','两次输入的密码需要一致!','error');
          return;
        }
        interfaceService.updatePassword($scope.reg,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal('修改成功','修改密码成功!','success');
            $scope.reg = {
              mobileCode:'',
              newPassword:'',
              repassword:'',
            }
          }else{
            swal('修改密码出错','修改密码出错，请重新修改!','error');
            $scope.reg.mobileCode = '';
          }
        });
      }else{
        swal('提交内容不能为空','表单内红框部分的内容不能为空!','error');
      }
    }

    //发送验证码
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function () {
      if($rootScope.loginUser){
        if($rootScope.loginUser.mobilePhone){
          var mobilePhone = $rootScope.loginUser.mobilePhone;
          swal({
            title: "发送验证码?",
            text: "即将往手机号为"+mobilePhone+"的手机发送一条验证码短信!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,发送!",
          },function () {
            var second = 60;
            $scope.validCodeFlag = false;
            $scope.validCodeText = '正在发送...';
            var params = {
              codetype:2,
              mobilePhone:mobilePhone
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
          });
        }
      }
    }

}]);
