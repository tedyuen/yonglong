ylIndex.controller('indexController',['$scope','interfaceService','rescode',function ($scope,interfaceService,rescode) {
  $scope.testNum = 30001;


  $scope.forgetPassCompany = function () {
    $('#forget-password-company').modal('show');
    $scope.testNum = 200;
  }

  $scope.getCodeCompany = function () {
    console.log('getCodeCompany');

    var param = {
      phone:18716166778,
      vercode:4448
    }

    interfaceService.testInterface(param,function (data,headers,config) {
      console.log(JSON.stringify(data));
      if(data.rescode == rescode.SUCCESS){
        $scope.result = data.data;
      }
    });
  }



}]);
