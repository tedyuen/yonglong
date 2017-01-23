/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('userFriendListReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode','URL_CONS',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode,URL_CONS) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
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
      pagesize:10,
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

    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:false,
        sender:'',
        acter:'',
        pageno:1,
        pagesize:10,
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

    httpList();
  }]);
