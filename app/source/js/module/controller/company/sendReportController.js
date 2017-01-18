/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('sendReportController',['$scope','$timeout','sessionService','showDatePickerProvider','interfaceService','rescode',
  function ($scope,$timeout,sessionService,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    if(sessionService.getSession() != undefined){
      $('#formToken').val(sessionService.getSession().token);
    }
    $scope.queryData = {
      startTime:'',
      endTime:'',
      owner:true,
      sender:'',
    }

    var httpList = function () {
      interfaceService.reportList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode = rescode.SUCCESS){
          $scope.flist = data.data.flist;
          $scope.list = data.data.list;
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

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        owner:true,
        sender:'',
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
