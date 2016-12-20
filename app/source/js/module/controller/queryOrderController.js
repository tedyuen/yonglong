/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('queryOrderController',['$scope','showDatePickerProvider','baseDataService','interfaceService',
  function ($scope,showDatePickerProvider,baseDataService,interfaceService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.queryData = {
      goodsMemberId: 67,
      startTime:'',
      endTime:'',
      orderSn:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      containerVType:'0',
      containerSType:'0',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:20,
      totalpages:0
    }

    $scope.queryList = function ($valid) {
      if($valid){
        console.log("request:"+JSON.stringify($scope.queryData));

        interfaceService.companyOrderList($scope.queryData,function (data,headers,config) {
          console.log("response:"+JSON.stringify(data));
          $scope.results = JSON.parse(data.data);

        });

      }else{

      }
    }

}]);
