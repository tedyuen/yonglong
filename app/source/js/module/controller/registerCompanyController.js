yonglongApp.controller('registerCompanyController',['$scope','dropifyProvider','interfaceService',
  function ($scope,dropifyProvider,interfaceService) {
    dropifyProvider.dropify();
    $scope.showTerms=function () {
      $('#terms').modal('show');
    }


}]);
