ylIndex.controller('indexController',['$scope',function ($scope) {
  $scope.testNum = 30001;


  $scope.forgetPassCompany = function () {
    $('#forget-password-company').modal('show');
    $scope.testNum = 200;
  }

  $scope.getCodeCompany = function () {
    console.log('getCodeCompany');
  }



}]);
