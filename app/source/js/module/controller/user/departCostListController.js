yonglongApp.controller('departCostListController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {
    $scope.queryData = {
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }

    var httpList = function () {
      interfaceService.userDispatchList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }


    httpList();

}]);
