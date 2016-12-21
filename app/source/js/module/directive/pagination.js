yonglongApp.directive('pagination',function () {
  return{
    restrict: 'AE',
    replace: true,
    scope:{
      pageSize:'=',
      totalPages:'=',
      currPage:'=',
      showCount:'=',
      switchPage:'='
    },
    templateUrl: 'template/directive/pagination.html',
    controller: function ($scope) {
      var changeData = function () {
        $scope.pageArray =[];
        var firstPage = {
          pageNum:1,
          isCurrent:$scope.currPage==1,
          canClick:$scope.currPage!=1
        }

        $scope.pageArray.push(firstPage);

        if($scope.showCount>=($scope.totalPages)){//全部显示
          for(var i=2;i<$scope.totalPages;i++){
            var item = {
              pageNum:i,
              isCurrent:$scope.currPage==i,
              canClick:$scope.currPage!=i
            }
            $scope.pageArray.push(item);
          }
        }

        if($scope.totalPages!=1){
          var lastPage = {
            pageNum:$scope.totalPages,
            isCurrent:$scope.currPage==$scope.totalPages,
            canClick:$scope.currPage!=$scope.totalPages
          }
          $scope.pageArray.push(lastPage);
        }
      }
      $scope.$watch('totalPages',changeData,true);
      $scope.$watch('currPage',changeData,true);

    }
  }
});
