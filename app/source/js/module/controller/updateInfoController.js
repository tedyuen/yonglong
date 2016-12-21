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
      companyAddress:''
    }

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.companyUpdateinfo($scope.reg,function (data,headers,config) {
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
      })
    };

    $scope.getUserInfo();

  }
]);
