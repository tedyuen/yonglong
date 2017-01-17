yonglongApp.controller('editOrderController',['$scope','$stateParams','$state','showDatePickerProvider','URL_CONS','baseDataService','interfaceService','rescode',
  function ($scope,$stateParams,$state,showDatePickerProvider,URL_CONS,baseDataService,interfaceService,rescode) {

    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();

    $scope.orderDetail = {
      id:$stateParams.orderId,
      shippingName:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      transitPort:'',
      destPort:'',
      orderType:0,
      containerVType:0,
      containerSType:0,
      containerVol:0,
      grossWeight:0,
      note:'',
      shippingFee:0,
      referenceShippingFee:0,
      shippingSn:'',
      extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}]
    }

    var httpList = function () {
      console.log('==> '+$stateParams.orderId);
      if($stateParams.orderId){
        interfaceService.companyDetailOrder({orderId:$stateParams.orderId},function (data,headers,config) {
          console.log("response:"+JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS) {
            $scope.orderDetail = data.data;
            $scope.orderDetail.shippingDate = data.data.shippingDateStr;

          }
        });
      }
    }

    // 表单查询订单列表
    $scope.reset = function () {
      interfaceService.showLoading('正在重置');
      httpList();
    }

    //提交表单
    $scope.onSubmit = function($valid){
      if($valid){
        swal({
          title: "确定修改订单吗?",
          text: "您即将修改此订单!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,修改!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          console.log('$scope.orderDetail:  '+$scope.orderDetail);
          interfaceService.companyUpdateOrder($scope.orderDetail,function (data,headers,config) {
            console.log(JSON.stringify(data));
            if(data.rescode==rescode.SUCCESS){
              swal({
                title:"修改成功！",
                text:"已成功修改订单。",
                type:"success",
                showCancelButton: true,
                cancelButtonText: "确定",
                confirmButtonText:"订单查询",
              },function () {
                $state.go('main.companyinner.query_order');
              });
            }else{
              swal({
                title:"修改失败！",
                text:"请重新执行此操作。",
                type:"error",
                confirmButtonText:"确定"
              });
            }
          });
        });
      }else{
        // console.log("$valid:"+$valid);
      }
    };

    httpList();

}])
