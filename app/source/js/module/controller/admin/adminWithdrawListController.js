yonglongApp.controller('adminWithdrawListController',['$scope','showDatePickerProvider','interfaceService','rescode',
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
      httpList();
    }

    var httpList = function () {
      interfaceService.adminListSysRefund($scope.queryData,function (data,headers,config) {
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
    $scope.auditSysRefund = function (id) {
      swal({
        title: "确定通过审核吗?",
        text: "这份提现订单即将通过审核!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,通过!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          id:id
        }
        interfaceService.adminAuditSysRefund(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"通过成功！",
              text:"此提现订单已经通过审核。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"通过失败失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });
    }


    $scope.busUserDetail = function (userId) {
      var param={
        userId:userId
      }

      interfaceService.busUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 0;
          $('#bus-user-detail-modal').modal('show');
        }
      });
    }

    $scope.companyUserDetail = function (userId) {
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
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

    httpList();

  }]);
