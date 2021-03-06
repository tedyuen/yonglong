yonglongApp.controller('editOrderController',['$scope','$stateParams','$state','showDatePickerProvider','URL_CONS','baseDataService','interfaceService','rescode',
  function ($scope,$stateParams,$state,showDatePickerProvider,URL_CONS,baseDataService,interfaceService,rescode) {

    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();

    $scope.orderDetail = {
      id:$stateParams.orderId,
      shippingName:'',
      shippingNumber:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      transitPort:'',
      destPort:'',
      orderType:0,
      containerVType:0,
      containerSType:0,
      containerVol:1,
      grossWeight:0,
      note:'',
      shippingFee:0,
      referenceShippingFee:0,
      shippingSn:'',
      items:0,
      goodsPackage:'',
      orderLinkName:'',
      orderLinkMobile:'',
      extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}],
      billList:[]

    }

    $scope.valid={
      grossWeight:false
    }

    $scope.$watch('orderDetail.grossWeight',function () {
      if($scope.orderDetail.grossWeight>0){
        $scope.valid.grossWeight = true;
      }else{
        $scope.valid.grossWeight = false;
      }
    });

    $scope.getValid = function () {
      // return $scope.valid.grossWeight;
      return true;
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
      for(var index in $scope.orderDetail.billList){
        var temp = $scope.orderDetail.billList[index];
        if(isNaN(temp.grossWeight) || temp.grossWeight<=0){
          swal({
            title:"错误！",
            text:"毛重不能为空并且大于0",
            type:"error",
            confirmButtonText:"确定"
          });
          return;
        }
        if(isNaN(temp.items) || temp.items<=0 || temp.items%1!=0){
          swal({
            title:"错误！",
            text:"件数为大于0的整数",
            type:"error",
            confirmButtonText:"确定"
          });
          return;
        }
      }
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
                confirmButtonText:"外发订单",
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
