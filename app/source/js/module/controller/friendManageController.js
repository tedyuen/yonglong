/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('friendManageController',['$scope','interfaceService',
  function ($scope,interfaceService) {

    $scope.queryData = {
      startTime:'',
      endTime:'',
      orderType:'',
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

    // 通过手机查找联系人，请求参数
    $scope.busowner = {
      mobilePhone:''
    }
    $scope.addFriendId = {
      busMemberId:''
    };

    var httpList = function () {
      interfaceService.companyListFriend($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.results = data.data;
      });
    }

    var httpBusowner = function () {
      interfaceService.companyListBusowners($scope.busowner,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        $scope.busownerResults = data.data;
      });
    }

    // 表单查询好友列表
    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      // console.log(page);
      $scope.queryData.pageno = page;
      httpList();
    }

    // 通过手机查人
    $scope.getBusowner = function ($valid) {
      if($valid){
        httpBusowner();
      }else{

      }
    }

    // 添加好友
    $scope.addFriend = function () {
      if($scope.addFriendId.busMemberId!=''){
        interfaceService.companyAddFriend($scope.addFriendId,function (data,headers,config) {
          // console.log("response:"+JSON.stringify(data));
          if(data.rescode=="0000"){
            swal({
              title:"添加成功！",
              text:"已添加好友。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpBusowner();
              httpList();
            });
          }else{
            swal({
              title:"添加失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });
      }
    }

    $scope.delFriend = function (fid) {
      swal({
        title: "确定解除关系吗?",
        text: "您即将解除与该好友的关系!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,解除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        animation: "slide-from-top",
      }, function(){
        var param = {
          fid:fid
        }
        interfaceService.companyDelFriend(param,function (data,headers,config) {
          if(data.rescode=="0000"){
            swal({
              title:"解除成功！",
              text:"已解除好友关系。",
              type:"success",
              confirmButtonText:"确定",
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"解除失败！",
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
