yonglongApp.directive('orderdetail',function () {
  return{
    restrict: 'AE',
    replace: true,
    scope:{
      orderId:'='
    },
    template:'<div id="od-frame" class="table-responsive"></div>',
    controller:function ($scope) {
      // $scope.orderId
      $scope.$watch('orderId',function () {
        console.log("===>  orderId:"+$scope.orderId);
        $('#od-frame').html(
          '<iframe src="table_print.html#!?id='+$scope.orderId+'" frameborder="0" width="100%" height="500%" style="height:1050px;"></iframe>'
        );
      },true);
    }
  }
});
