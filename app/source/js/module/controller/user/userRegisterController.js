yonglongApp.controller('userRegisterController',['$scope','$state','dropifyProvider','interfaceService','rescode','baseDataService',
  function ($scope,$state,dropifyProvider,interfaceService,rescode,baseDataService) {
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


  }]);
