/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseUserListController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {


   $scope.require = {
     customerName:'',
     salePoint:-1,
     userType:0,
     pageno:1,
     pagesize:20,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.require.pagesize
    }


    $scope.switchPage = function (page) {
      $scope.require.pageno = page;
      interfaceService.showLoading('正在查询');
      httpRequest();
    }
    var httpRequest = function () {
      interfaceService.showLoading();
      interfaceService.releaseUserList($scope.require, function(data, headers, config) {
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

    $scope.customerNameEnter = function(e) {
      var keycode = window.event?e.keyCode:e.which;
      if(keycode==13){
          httpRequest();
      }
    }

    $scope.refresh = function(){
      httpRequest();
    }
    httpRequest();

  }
]);
