yonglongApp.directive('prerecordInner',['$compile','baseDataService',function($compile,baseDataService){
  return{
    restrict: 'AE',
    replace: true,
    scope: {
      billList:'=',
      statusInfo:'=',
    },
    templateUrl: 'template/directive/prerecord_inner.html',
    controller: function($scope){
      $scope.marinepollutionType = baseDataService.getMarinepollutionType();

      $scope.addExtra = function(){
        if($scope.statusInfo!='7'){
          swal({
            title: "确认信息",
            text: "非拼箱只能输入一票提单!",
            type: "warning",
            confirmButtonText: "确认"
          });
        }else{
          $scope.billList.push(
            {"ordersn":"","deliverycode":"","deliveryport":"","cargono":0,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":"N"}
          );
        }
      };

      var cleanItem = function () {
        for(var i=1;i<$scope.billList.length;i++){
          $scope.billList.splice(i,1);
          i--;
        }
      }

      $scope.$watch('statusInfo',function () {
        console.log($scope.billList.length);
        if($scope.statusInfo != '7'){
          cleanItem();
        }
      })

      $scope.deleteItem = function (item) {
        for(var i=0;i<$scope.billList.length;i++){
          if($scope.billList[i].ordersn==item.ordersn) {
            $scope.billList.splice(i,1);
            break;
          }
        }

      }
    }
  }
}]);
