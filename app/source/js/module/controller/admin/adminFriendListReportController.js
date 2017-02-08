/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('adminFriendListReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS','baseDataService',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS,baseDataService) {
    showDatePickerProvider.showDatePicker();
    $scope.reportTypeN = baseDataService.getReportTypeN2();

    $scope.reportType = 0;
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
      $('#formToken2').val(sessionService.getSession().token);
    }
    document.getElementById("reportForm").action= URL_CONS.exportReportOfFriend;
    $scope.reportExport = function () {
      document.getElementById("reportForm").submit();
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:false,
      sender:'',
      acter:'',
      pageno:1,
      pagesize:20,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.reportFriendList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results = data.data;
          }
        }
      });
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:20,
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer').val($scope.queryData.acter);
    });


    // 以下是第二个列表
    document.getElementById("reportForm2").action= URL_CONS.exportReportOfOrder;
    $scope.reportExport2 = function () {
      document.getElementById("reportForm2").submit();
    }


    $scope.results2={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList2 = function () {
      interfaceService.reportOrderList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          if(data.data){
            $scope.results2 = data.data;
          }
        }
      });
    }

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        if($scope.reportType==0){
          httpList();
        }else{
          httpList2();
        }
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      if($scope.reportType==0){
        httpList();
      }else{
        httpList2();
      }

    }


    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime2').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime2').val($scope.queryData.endTime);
    });
    $scope.$watch('queryData.sender',function () {
      $('#formSender2').val($scope.queryData.sender);
    });
    $scope.$watch('queryData.acter',function () {
      $('#formActer2').val($scope.queryData.acter);
    });

    $scope.$watch('reportType',function () {
      $scope.queryList(true);
    });

    httpList();
  }]);
