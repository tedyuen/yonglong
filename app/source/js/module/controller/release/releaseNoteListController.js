/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseNoteListController', ['$scope','$timeout','$rootScope','showDatePickerProvider', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope,showDatePickerProvider, interfaceService, rescode,baseDataService) {

    showDatePickerProvider.showDotDatePicker();

   $scope.require = {
     title:'',
     createEndTime:'',
     createStartTime:'',
     showType:0,
     pageno:1,
     pagesize:20,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.require.pagesize
    }

    // 查询船公司列表
    var httpCompanyList = function (callback) {
      interfaceService.releaseNoteList($scope.require, function(data, headers, config) {
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

    $scope.clickTab = function (showType) {
      $scope.require.showType = showType;
      interfaceService.showLoading('正在查询');
      httpCompanyList();
    }

    $scope.companyResult = {
      title:'',
      content:'',
      showType:0,
    };

    $scope.createCompany = function (result) {
      if(result!=undefined){
        $scope.companyResult = result;
      }else{
        $scope.companyResult = {
          title:'',
          content:'',
          showType:0,
        };
      }
      $('#modify-company').modal('show');
    }

    $scope.deleteCompany = function (id) {
      if(id!=undefined && id>0){
        swal({
          title: "确定删除公告吗?",
          text: "您即将删除公告!",
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
          interfaceService.releaseNoteDelete(p, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              $('#modify-company').modal('hide');
              swal({
                title: "删除成功！",
                text: "已成功删除了公告。",
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
            title: "确定修改公告吗?",
            text: "您即将修改公告!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,修改!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseNoteUpdate($scope.companyResult, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $('#modify-company').modal('hide');
                $timeout(httpCompanyList,50);
                swal({
                  title: "修改成功！",
                  text: "已成功修改了公告。",
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
            title: "确定创建公告吗?",
            text: "您即将创建一条公告!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,创建!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseNoteCreate($scope.companyResult, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $('#modify-company').modal('hide');
                $timeout(httpCompanyList,50);
                swal({
                  title: "创建成功！",
                  text: "已成功创建了公告。",
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
    $scope.allCheckbox = [];
    // 停用
    $scope.isAllSelected = function(result){
      return $scope.allCheckbox.indexOf(result)>=0;
    }
    $scope.updateAllCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.allCheckbox.push(result);
        $scope.companyResult.showType = 1;
      }else{
        var idx = $scope.allCheckbox.indexOf(result);
        $scope.allCheckbox.splice(idx,1);
        $scope.companyResult.showType = 0;
      }
    };

    httpCompanyList();


  }
]);
