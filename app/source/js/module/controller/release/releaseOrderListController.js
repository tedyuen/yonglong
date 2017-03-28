/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseOrderListController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService','showDatePickerProvider',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService,showDatePickerProvider) {
    showDatePickerProvider.showDotDatePicker();

    var loginUser = $rootScope.loginUser;


    $scope.salePoint = [
      {id:-1,name:'全部'},
      {id:1,name:'浦东'},
      {id:2,name:'浦西'}
    ];

    $scope.statusAmount = [
      {id:-1,name:'全部'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];

    $scope.statusAmountDetail = [
      {id:0,name:'初始'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];

    $scope.status = [
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

    $scope.statusDetail = [
      {id:0,name:'新业务'},
      {id:1,name:'放单中'},
      {id:2,name:'已完成'},
      {id:3,name:'已拒绝'},
      {id:4,name:'没预配'},
      {id:6,name:'爆仓'},
      {id:5,name:'处理中'},
      {id:7,name:'船期早'},
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
      totalPages : 1,
      pageSize : $scope.require.pagesize
    };

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

    $scope.refreshList = function () {
      interfaceService.showLoading('正在加载...');
      httpRequest();
    }


    // 查询船公司列表
    var httpCompanyList = function (callback) {
      var params = {
        companyCode:'',
        companyName:''
      }
      $scope.companyList = [
        {
          "companyCode": "测试代码",
          "companyName": "全部",
          "id": 0
        }
      ];
      interfaceService.releaseCompanyList(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          for(var index in data.data.pageData){
            $scope.companyList.push(data.data.pageData[index]);
          }
        }
        if(callback){
          $timeout(callback,20);
        }
      });
    };


    var httpCustomerList = function (callback) {
      var params = {
        customerName:'',
        salePoint:-1,
        userType:0
      }
      $scope.customerList = [
        {
          customerName:'全部',
          id:0
        }
      ];
      interfaceService.releaseUserList(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          if(data.data != undefined && data.data !=null){
            for(var index in data.data.pageData){
              $scope.customerList.push(data.data.pageData[index]);
            }
          }
        }
        $timeout(function () {
          httpRequest();
        },20);
        if(callback){
          $timeout(callback,20);
        }
      });
    };


    $scope.lineDblClick = function (result) {
      console.log(JSON.stringify(result));
      $scope.detail = result;
      $scope.detail.finishTime = '';
      $('#modify-order').modal('show');
    };

    // 修改订单
    $scope.orderUpdate = function () {
      swal({
        title: "确定修改放箱信息吗?",
        text: "您即将修改放箱信息!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,确定!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
      },function () {
        interfaceService.releaseOrderUpdate($scope.detail, function(data, headers, config) {
          console.log(JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            swal({
              title: "修改成功！",
              text: "已成功修改了放箱信息。",
              type: "success",
              confirmButtonText: "确定",
            }, function() {
              $('#modify-order').modal('hide');
            });
          }else{
            swal({
              title:'出错',
              text:data.resdesc,
              type:'error',
              confirmButtonText: "确定",
            });
          }
        });
      });
    }


    // 选择列表中的复选框
    $scope.idCheckbox = [];//需要批量配置的id
    $scope.allCheckbox = [];//全选
    $scope.isSelected = function(result){
      return $scope.idCheckbox.indexOf(result)>=0;
    }
    $scope.updateCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.idCheckbox.push(result);
        if($scope.idCheckbox.length==$scope.results.pageData.length){
          $scope.allCheckbox = ['all'];
        }
      }else{
        var idx = $scope.idCheckbox.indexOf(result);
        $scope.idCheckbox.splice(idx,1);
        if($scope.idCheckbox.length<$scope.results.pageData.length){
          $scope.allCheckbox = [];
        }
      }
    }

    // 全选
    $scope.isAllSelected = function(result){
      return $scope.allCheckbox.indexOf(result)>=0;
    }
    $scope.updateAllCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.allCheckbox.push(result);
        $scope.idCheckbox = $scope.results.pageData.concat();
      }else{
        var idx = $scope.allCheckbox.indexOf(result);
        $scope.allCheckbox.splice(idx,1);
        $scope.idCheckbox = [];
      }
    };
    // 选择列表中的复选框



    httpCompanyList(httpCustomerList);
  }
]);
