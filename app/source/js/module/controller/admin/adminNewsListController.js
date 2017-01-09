yonglongApp.controller('adminNewsListController',['$scope','$timeout','$state','showDatePickerProvider','interfaceService','rescode',
  function ($scope,$timeout,$state,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.queryData = {
      pageno:1,
      pagesize:8
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
      httpList();
    }

    var httpList = function () {
      interfaceService.articleList($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;

          $timeout(function () {
            $('.news-note').ellipsis({
              row:2
            });
            $('.news-title').ellipsis({
              row:1
            });

          },10);

        }
      });
    }

    $scope.editNews = function (id) {
      $state.go('main.admin.edit_news',{newsId:id});
    }

    //通过审核
    $scope.deleteNews = function (id) {
      swal({
        title: "确定删除吗?",
        text: "您即将删除此条新闻!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,删除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          id:id
        }
        interfaceService.articleDelete(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"删除成功！",
              text:"此条新闻已经删除。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"删除失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }


    httpList();

  }]);
