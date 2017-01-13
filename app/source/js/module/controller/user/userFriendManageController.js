yonglongApp.controller('userFriendManageController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {

    $scope.queryData = {
      pageno:1,
      pagesize:20,
    }

    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }
    $scope.busownerResults={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }


    var httpList = function () {
      interfaceService.userListFriend($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.results = data.data;
      });
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }

    $scope.updateState = function (id,type) {
      var param = {
        id:id,
        status:1
      }
      var title = "确定通过请求吗？";
      var text = "您即将通过这位好友的请求！";
      var confirmButtonText = "是的,通过!";
      var successTitle = "好友添加成功!";
      var successText = "已经成功通过好友的添加请求!";
      var errorTitle = "执行失败!";
      switch (type){
        case 0://通过
          break;
        case 1://拒绝
          param.status = 9;
          title = "确定拒绝请求吗？";
          text = "您即将拒绝这位好友的请求！";
          confirmButtonText = "是的,拒绝!";
          successTitle = "好友拒绝成功!";
          successText = "已经成功拒绝好友的添加请求!";
          break;
      }

      swal({
        title: title,
        text: text,
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: confirmButtonText,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        animation: "slide-from-top",
      }, function(){
        interfaceService.userEditFriend(param,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:successTitle,
              text:successText,
              type:"success",
              confirmButtonText:"确定",
            },function () {
              httpList();
            });
          }else{
            swal({
              title:errorTitle,
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
