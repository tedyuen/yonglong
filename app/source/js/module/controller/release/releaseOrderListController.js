/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseOrderListController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService','showDatePickerProvider',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();

    var loginUser = $rootScope.loginUser;


    $scope.salePoint = [
      {id:-1,name:'全部'},
      {id:1,name:'浦东'},
      {id:2,name:'浦西'}
    ];

    $scope.statusAmount = [
      {id:-1,name:'全部'},
      {id:0,name:'新业务'},
      {id:1,name:'放单中'},
      {id:2,name:'已完成'},
      {id:3,name:'已拒绝'},
      {id:4,name:'没预配'},
      {id:6,name:'爆仓'},
      {id:5,name:'处理中'},
      {id:7,name:'船期早'},
    ];

    $scope.status = [
      {id:-1,name:'全部'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];



   $scope.require = {
     applyEndTime:'',
     applyStartTime:'',
     billno:'',
     companyid:0,
     customerid:0,
     finishEndTime:'',
     finishStartTime:'',
     orderNumber:'',
     pageno:1,
     pagesize:20,
     saleName:'',
     salePoint:-1,
     status:-1,
     statusAmount:-1,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.require.pagesize
    }

    var httpRequest = function () {
      interfaceService.releaseOrderList($scope.require, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;
        }else{
          swal({
            title:'出错',
            text:data.resdesc,
            type:'error',
            confirmButtonText: "确定",
          });
        }
      });
    };

    httpRequest();

  }
]);
