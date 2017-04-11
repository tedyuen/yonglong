/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseCompanyListController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {


   $scope.require = {
     companyCode:'',
     companyEngName:'',
     companyName:'',
     pageno:1,
     pagesize:20,
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

    // 查询船公司列表
    var httpCompanyList = function (callback) {
      interfaceService.releaseCompanyList($scope.require, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;

        }
        if(callback){
          $timeout(callback,20);
        }
      });
    }

    $scope.switchPage = function (page) {
      $scope.require.pageno = page;
      interfaceService.showLoading('正在查询');
      httpCompanyList();
    }

    $scope.onSubmit = function () {
      interfaceService.showLoading('正在查询');
      httpCompanyList();
    }

    $scope.companyResult = {
      companyCode:'',
      companyEngName:'',
      companyName:'',
      remark:'',
    };

    $scope.createCompany = function (result) {
      if(result!=undefined){
        $scope.companyResult = result;
      }else{
        $scope.companyResult = {
          companyCode:'',
          companyEngName:'',
          companyName:'',
          remark:'',
        };
      }
      $('#modify-company').modal('show');
    }

    $scope.deleteCompany = function (id) {
      if(id!=undefined && id>0){
        swal({
          title: "确定删除船公司信息吗?",
          text: "您即将删除船公司信息!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,删除!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          var p = {
            id:id
          }
          interfaceService.releaseCompanyDelete(p, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              $('#modify-company').modal('hide');
              swal({
                title: "删除成功！",
                text: "已成功删除了船公司信息。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {
                interfaceService.showLoading('正在查询');
                httpCompanyList();
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
    }
    $scope.onCompanySubmit = function ($valid) {
      if($valid){
        if($scope.companyResult.id!=undefined){
          swal({
            title: "确定修改船公司信息吗?",
            text: "您即将修改船公司信息!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,修改!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseCompanyUpdate($scope.companyResult, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $('#modify-company').modal('hide');
                swal({
                  title: "修改成功！",
                  text: "已成功修改了船公司信息。",
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
        }else{
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
            interfaceService.releaseCompanyCreate($scope.companyResult, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $('#modify-company').modal('hide');
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
        }
      }
    }

    httpCompanyList();


  }
]);
