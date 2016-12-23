/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('updateInfoController',['$scope','dropifyProvider','interfaceService',
  function ($scope,dropifyProvider,interfaceService) {
    dropifyProvider.dropify();

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
        interfaceService.companyUpdateinfo($scope.reg,files,function (data,headers,config) {
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(config));

        });
      }else{
        console.log("$valid:"+$valid);
      }
    };


    $scope.getUserInfo = function () {
      interfaceService.companyUserinfo({},function (data,headers,config) {
        console.log(JSON.stringify(data));
        $scope.reg = data.data;
      })
    };
    $scope.getUserInfo();
  }
]);
