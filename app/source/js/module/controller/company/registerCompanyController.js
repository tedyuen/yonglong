yonglongApp.controller('registerCompanyController',['$scope','$state','dropifyProvider','interfaceService','rescode',
  function ($scope,$state,dropifyProvider,interfaceService,rescode) {
    dropifyProvider.dropify();
    $scope.showTerms=function () {
      $('#terms').modal('show');
    }

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
      address:''
    }
    $scope.regfile1 = {
      name:'nameCardFile',
      file:'',
    }
    $scope.regfile2 = {
      name:'nameCardBackFile',
      file:'',
    }
    $scope.regfile3 = {
      name:'licenceFile',
      file:'',
    }
    var files = [$scope.regfile1,$scope.regfile2,$scope.regfile3];

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.companyRegister($scope.reg,files,function (data,headers,config) {
          console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            $state.go('main.companyinner.create_order');
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
