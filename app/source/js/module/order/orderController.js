yonglongApp.controller('orderController',['$scope','$rootScope','$cookies','$location','interfaceService','rescode',
  function ($scope,$rootScope,$cookies,$location,interfaceService,rescode) {

    $rootScope.loginUser = $cookies.getObject('yltUser');

    $scope.testNum = 3000;
    $scope.orderId = $location.search().id;

    // console.log("==>orderid: "+$location.search().id);

    var getDetail = function (orderId) {
      var params = {
        orderId:orderId
      }
      var success = function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      }
      interfaceService.companyDetailOrder(params,success);
    }
    if($scope.orderId){
      getDetail($scope.orderId);
    }

}]);
