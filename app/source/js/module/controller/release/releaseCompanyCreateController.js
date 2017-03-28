/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseCompanyCreateController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {

    $scope.detail = {
      companyName:'',
      companyCode:''
    }

    $scope.onSubmit = function($valid) {
      if ($valid) {
        swal({
          title: "确定创建船公司信息吗?",
          text: "您即将创建一条船公司信息!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          interfaceService.releaseCompanyCreate($scope.detail, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              var resetData = {
                companyName:'',
                companyCode:''
              }
              $scope.detail = resetData;
              swal({
                title: "创建成功！",
                text: "已成功创建了船公司信息。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {

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
      } else {
        console.log("$valid:" + $valid);
      }
    };


    $scope.reset = function () {
      var resetData = {
        companyName:'',
        companyCode:''
      }
      $scope.detail = resetData;
    }

  }
]);
