// yonglongApp.config(['$locationProvider', function($locationProvider) {
//   $locationProvider.html5Mode({
//     enable:true,
//     requireBase:false
//   });
// }]);
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
      interfaceService.companyDetailOrder(params,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }
    if($scope.orderId){
      getDetail($scope.orderId);
    }

}]);
