/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('sendReportController',['$scope','$timeout','showDatePickerProvider','interfaceService','rescode',
  function ($scope,$timeout,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();

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


    httpList();
}]);
