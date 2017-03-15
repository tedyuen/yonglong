yonglongApp.controller('prerecordListController',['$scope','showDatePickerProvider','interfaceService','rescode','loadingService',
  function ($scope,showDatePickerProvider,interfaceService,rescode,loadingService) {
    showDatePickerProvider.showDatePicker();
    $scope.queryData = {
      startTime:'',
      endTime:'',
      pageno:1,
      pagesize:20,
      downloadstatus:-1
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    var httpList = function () {
      interfaceService.importOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }


    $scope.detail = function (result) {
      $scope.detailResult = result;
      $('#bus-user-detail-modal').modal('show');
    }


    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        pageno:1,
        pagesize:20
      }
    }


    $scope.reportExport = function (downloadstatus) {
      interfaceService.showLoading();
      $scope.queryData.downloadstatus = downloadstatus;
      interfaceService.importOrderZip($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          // $scope.results = data.data;
          window.location.href = data.data.zipurl;
        }
      });
    }

    httpList();

  }]);
