yonglongApp.directive('prerecordInner',['$compile',function($compile){
  return{
    restrict: 'AE',
    replace: true,
    scope: {
      resultList:'='
    },
    templateUrl: 'template/directive/prerecord_inner.html',
    controller: function($scope){
      // $scope.resultList = [];
      // console.log($scope.initStr);
      // var strArray = $scope.initStr.split(';');
      // for(var n in strArray){
      //   $scope.resultList.push({
      //     feeName:strArray[n],
      //     feeValue:0,
      //     id:0,
      //     sort:0,
      //     isInit:true
      //   });
      // }

      $scope.addExtra = function(){
        // $scope.resultList.push({"billNo":"","grossWeight":0,"id":0,"items":0,"sizeDesc":""});
      };

      $scope.deleteItem = function (item) {
        for(var i=0;i<$scope.resultList.length;i++){
          if($scope.resultList[i].billNo==item.billNo) {
            $scope.resultList.splice(i,1);
            break;
          }
        }

      }
    }
  }
}]);
