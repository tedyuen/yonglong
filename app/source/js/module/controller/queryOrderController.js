/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('queryOrderController',['$scope','showDatePickerProvider','baseDataService','interfaceService',
  function ($scope,showDatePickerProvider,baseDataService,interfaceService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();
    $scope.queryData = {
      goodsMemberId: 67,
      startTime:'',
      endTime:'',
      orderSn:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:10,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      httpList();
    }

    var httpList = function () {
      interfaceService.companyOrderList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.results = data.data;
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
    }

    httpList();
}]);
