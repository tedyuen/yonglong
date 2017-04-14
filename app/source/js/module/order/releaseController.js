yonglongApp.controller('releaseController',['$scope','$cookies',
  function ($scope,$cookies) {

    $scope.rPrint = $cookies.getObject('rPrint');

    console.log(JSON.stringify($scope.rPrint));

    $scope.allD = 0;
    $scope.allS = 0;

    for(var index in $scope.rPrint.d){
      var temp = $scope.rPrint.d[index];
      $scope.allD += parseInt(temp.d);
      $scope.allS += parseInt(temp.s);
    }

}]);
