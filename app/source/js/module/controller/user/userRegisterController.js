yonglongApp.controller('userRegisterController',['$scope','$state','dropifyProvider','interfaceService','rescode','baseDataService','validateService','toastService',
  function ($scope,$state,dropifyProvider,interfaceService,rescode,baseDataService,validateService,toastService) {
    dropifyProvider.dropify();
    $scope.showTerms=function () {
      $('#terms').modal('show');
    }

    $scope.containerVType = baseDataService.getBoxVol();



    $scope.reg={
      memberName:'',
      password:'',
      passwordconfirm:'',
      companyName:'',
      companyLinker:'',
      email:'',
      mobilePhone:'',
      tel:'',
      licence:'',
      nameCard:'',
      nameCardBack:'',
      mobileCode:'',
      address:'',
      carNumber:'',
      busContainer:null,
    }
    $scope.regfile1 = {
      name:'drivingLicence',
      file:'',
    }
    $scope.regfile2 = {
      name:'roadLicence',
      file:'',
    }
    $scope.regfile3 = {
      name:'roadLicenceAttach',
      file:'',
    }
    $scope.regfile4 = {
      name:'carPic',
      file:'',
    }
    $scope.regfile5 = {
      name:'nameCard',
      file:'',
    }

    var files = [$scope.regfile5,$scope.regfile1,$scope.regfile2,$scope.regfile3,$scope.regfile4];

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.userRegister($scope.reg,files,function (data,headers,config) {
          console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            $state.go('main.userinner.wanner_order');
          }else if(data.rescode==rescode.AGAIN_PHONE){
            // 手机号码被注册
          }else if(data.rescode==rescode.EMPTY_SMS_CODE){
            // 验证码不能为空
          }
        });
      }else{
        console.log("$valid:"+$valid);
      }
    };

    //发送验证码
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function () {
      var validMobile = validateService.mobile($scope.reg.mobilePhone,true);
      if(validMobile.result && $scope.validCodeFlag){
        var second = 60;
        $scope.validCodeFlag = false;
        $scope.validCodeText = '正在发送...';

        var params = {
          codetype:0,
          mobilePhone:$scope.reg.mobilePhone
        }
        interfaceService.sendcode(params,function (data,headers,config) {
          console.log(JSON.stringify(data));

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
