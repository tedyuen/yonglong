yonglongApp.controller('adminCompanyListController',['$scope','showDatePickerProvider','interfaceService','rescode',
  function ($scope,showDatePickerProvider,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.queryData = {
      startTime:'',
      endTime:'',
      pageno:1,
      pagesize:20
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
      interfaceService.showLoading('正在查询');
      httpList();
    }

    var httpList = function () {
      interfaceService.adminGetGoodsUserList($scope.queryData,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.results = data.data;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        // console.log("request:"+JSON.stringify($scope.queryData));
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 查看用户账户状态
    $scope.gb = function (id,type,bankCardOwner) {
      var tempData = {
        id:id,
        type:type
      }
      interfaceService.accountInfo(tempData,function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.accountResult = data.data;
          $scope.accountResult.bankCardOwner = bankCardOwner;
          $scope.accountResult.type = type;
          $('#account-info-modal').modal('show');
        }
      });
    }

    //通过审核
    $scope.auditSysMember = function (id,type,ila) {
      var title = "确定通过审核吗";
      var text = "这位会员即将通过审核";
      var confirmButtonText = "是的,通过!";
      var resultTitle = "通过成功!";
      var resultText = "此会员已经通过审核。";
      if(ila==1){//通过

      }else if(ila==0){//取消
        title = "确定取消审核吗";
        text = "即将取消此会员已通过的审核";
        confirmButtonText = "是的,取消!";
        resultTitle = "取消成功!";
        resultText = "此会员已经取消通过的审核。";
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
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          id:id,
          isValidated:ila,
          type:type
        }
        interfaceService.adminAuditSysMember(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:resultTitle,
              text:resultText,
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"执行失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }



    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        pageno:1,
        pagesize:20
      }
    }

    $scope.$watch('queryData.startTime',function () {
      $('#formStartTime').val($scope.queryData.startTime);
    });
    $scope.$watch('queryData.endTime',function () {
      $('#formEndTime').val($scope.queryData.endTime);
    });


    httpList();

  }]);
