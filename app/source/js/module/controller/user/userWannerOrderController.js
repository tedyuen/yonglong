/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('userWannerOrderController',['$scope','$timeout','$interval','$location','showDatePickerProvider','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,$interval,$location,showDatePickerProvider,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();

    $scope.queryData = {
      orderSn:'',
      orderStatus:'',
      startTime:'',
      endTime:'',
      originPort:'',
      loadingPort:'',
      shippingDate:'',
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

    var httpList = function (callback) {
      interfaceService.userListGetorder($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));

        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
        if(callback){
          callback();
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      $scope.queryData.pageno = page;
      interfaceService.showLoading('正在查询');
      httpList();
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


    $scope.takeOrder = function (orderId) {
      swal({
        title: "确认接单吗?",
        text: "您即将接收此订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,接单!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var param={
          orderId:orderId
        }
        interfaceService.userTakeOfferOrder(param,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"接单成功！",
              text:"此订单已接收完毕。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"接单失败！",
              text:data.resdesc,
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

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
        orderSn:'',
        orderStatus:'',
        startTime:'',
        endTime:'',
        originPort:'',
        loadingPort:'',
        shippingDate:'',
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

    $scope.countUp = 10;
    var timePromise = function () {
      $scope.countUp = 10;
      var tempInterval = $interval(function() {
        if($location.url()!='/main/userinner/wanner_order'){
          $interval.cancel(tempInterval);
          tempInterval = undefined;
        }
        if ($scope.countUp <= 0) {
          $interval.cancel(tempInterval);
          tempInterval = undefined;
          interfaceService.showLoading('自动查询');
          httpList(timePromise);
        } else {
          $scope.countUp--;
        }
      }, 1000);
    }

    httpList(timePromise);

  }]);
