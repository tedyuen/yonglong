yonglongApp.directive('prerecordInner',['$compile',function($compile){
  return{
    restrict: 'AE',
    replace: true,
    scope: {
      billList:'='
    },
    templateUrl: 'template/directive/prerecord_inner.html',
    controller: function($scope){

      $scope.addExtra = function(){
        $scope.billList.push(
          {"ordersn":"","deliverycode":"","deliveryport":"","cargono":0,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":""}
        );
      };

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
