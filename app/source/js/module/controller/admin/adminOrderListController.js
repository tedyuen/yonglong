yonglongApp.controller('adminOrderListController',['$scope','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,showDatePickerProvider,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();
    $scope.queryData = {
      startTime:'',
      endTime:'',
      orderSn:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:10,
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
      interfaceService.adminGetOrderList($scope.queryData,function (data,headers,config) {
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

    //删除订单
    $scope.delete = function (orderId) {
      swal({
        title: "确定删除吗?",
        text: "您即将删除这份订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,删除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.deleteOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"删除成功！",
              text:"此订单已删除。",
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


    $scope.busUserDetail = function (userId,type) {
      // console.log("===> "+userId);
      switch (type){
        case 0:param={
          userId:userId
        };
          break;
        case 1:param={
          orderId:userId
        }
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


    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        startTime:'',
        endTime:'',
        orderSn:'',
        shippingDate:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:10,
      }
    }

    httpList();

  }]);
