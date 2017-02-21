yonglongApp.controller('userUpdateInfoController',['$scope','$state','$timeout','dropifyProvider','interfaceService','rescode','baseDataService',
  function ($scope,$state,$timeout,dropifyProvider,interfaceService,rescode,baseDataService) {
    // dropifyProvider.dropify();
    $scope.showTerms=function () {
      $('#terms').modal('show');
    }

    $scope.containerVType = baseDataService.getBoxVolReg();

    $scope.reg={
      memberName:'',
      password:'',
      passwordconfirm:'',
      companyName:'',
      companyLinker:'',
      drivingLicence:'',
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
      name:'drivingLicenceFile',
      file:'',
    }
    $scope.regfile2 = {
      name:'roadLicenceFile',
      file:'',
    }
    $scope.regfile3 = {
      name:'roadLicenceAttachFile',
      file:'',
    }
    $scope.regfile4 = {
      name:'carPicFile',
      file:'',
    }
    $scope.regfile5 = {
      name:'nameCardFile',
      file:'',
    }

    var files = [$scope.regfile5,$scope.regfile1,$scope.regfile2,$scope.regfile3,$scope.regfile4];

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.userUpdateInfo($scope.reg,files,function (data,headers,config) {
          // console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"修改成功！",
              text:"已成功修改个人信息。",
              type:"success",
              confirmButtonText:"确定",
            },function () {
            });
          }
        });
      }else{
        console.log("$valid:"+$valid);
      }
    };


    $scope.getUserInfo = function () {
      interfaceService.userUserinfo({},function (data,headers,config) {
        console.log(JSON.stringify(data));
        $scope.reg = data.data;
        $timeout(function () {
          dropifyProvider.dropify();
        },10);
      })
    };
    $scope.getUserInfo();

  }]);
