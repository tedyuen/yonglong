/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('createOrderController',['$scope','$timeout','$state','$compile','showDatePickerProvider','URL_CONS','baseDataService','interfaceService','rescode',
  function ($scope,$timeout,$state,$compile,showDatePickerProvider,URL_CONS,baseDataService,interfaceService,rescode) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.orderDetail = {
      shippingName:'',
      shippingNumber:'',
      shippingDate:'',
      containerNo:'',
      sealNo:'',
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
      orderStatus:0,
      orderLinkName:'',
      orderLinkMobile:'',
      extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}],

      billList:[{"billNo":"","grossWeight":0,"id":0,"items":1,"sizeDesc":""}]
    }

    var calBillList = function () {
      for(var i=0;i<$scope.orderDetail.billList.length;i++){
        if($scope.orderDetail.billList[i].billNo == '' &&
          $scope.orderDetail.billList[i].sizeDesc == '' &&
          $scope.orderDetail.billList[i].grossWeight == 0 &&
          $scope.orderDetail.billList[i].items == 0
        ){
          $scope.orderDetail.billList.splice(i,1);
        }
      }
    }

    $scope.initStr = '上下车费;待时费;动卫检;坏污箱移箱费;预进港;落箱费';

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

    $scope.switchOrderStatus = function (orderStatus) {
      $scope.orderDetail.orderStatus = orderStatus;
    }
    //提交表单
    $scope.onSubmit = function($valid,form){
      // console.log('--->'+$valid);
      // calBillList();
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
        if ($scope.orderDetail.orderStatus==1){
          swal({
            title: "确定创建订单吗?",
            text: "您即将创建一份新的订单!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,创建!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            animation: "slide-from-top",
          }, function(){
            interfaceService.companyCreateOrder($scope.orderDetail,function (data,headers,config) {
              console.log(JSON.stringify(data));
              if(data.rescode==rescode.SUCCESS){
                swal({
                  title:"创建成功！",
                  text:"已成功创建订单。",
                  type:"success",
                  showCancelButton: true,
                  cancelButtonText: "继续创建",
                  confirmButtonText:"订单查询",
                },function () {
                  $state.go('main.companyinner.query_order');
                });
                $scope.reset(form);
              }else{
                swal({
                  title:"创建失败！",
                  text:"请重新执行此操作。",
                  type:"error",
                  confirmButtonText:"确定"
                });
              }
            });
          });
        }else if ($scope.orderDetail.orderStatus == 0){
          swal({
            title: "确定保存订单吗?",
            text: "您即将保存一份新的订单!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,保存!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            animation: "slide-from-top",
          }, function(){
            interfaceService.companyCreateOrder($scope.orderDetail,function (data,headers,config) {
              console.log(JSON.stringify(data));
              if(data.rescode==rescode.SUCCESS){
                swal({
                  title:"保存成功！",
                  text:"已成功保存订单。",
                  type:"success",
                  showCancelButton: true,
                  cancelButtonText: "继续创建",
                  confirmButtonText:"订单查询",
                },function () {
                  $state.go('main.companyinner.query_order');
                });
                $scope.reset(form);
              }else{
                swal({
                  title:"保存失败！",
                  text:"请重新执行此操作。",
                  type:"error",
                  confirmButtonText:"确定"
                });
              }
            });
          });
        }

      }else{
        // console.log("$valid:"+$valid);
      }
    };

    $scope.reset = function (theForm) {
      $scope.orderDetail ={
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
        orderStatus:0,
        orderLinkName:'',
        orderLinkMobile:'',
        extrafeeList:[{"feeName":"上下车费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"待时费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"动卫检","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"坏污箱移箱费","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"预进港","feeValue":0,"id":0,"sort":0,"isInit":true},{"feeName":"落箱费","feeValue":0,"id":0,"sort":0,"isInit":true}],
        billList:[{"billNo":"","grossWeight":0,"id":0,"items":1,"sizeDesc":""}]

      }

      theForm.$setPristine();
      theForm.$setUntouched();
    }

//   //百度地图
    // $scope.offlineOpts = {retryInterval: 5000};
    //
    // var longitude = 121.506191;
    // var latitude = 31.245554;
    // $scope.mapOptions = {
    //   center: {
    //     longitude: longitude,
    //     latitude: latitude
    //   },
    //   zoom: 17,
    //   city: 'ShangHai',
    //   markers: [{
    //     longitude: longitude,
    //     latitude: latitude,
    //     icon: 'img/mappiont.png',
    //     width: 49,
    //     height: 60,
    //     title: 'Where',
    //     content: 'Put description here'
    //   }]
    // };

    // $scope.mapLoaded = function(map) {
    //   console.log(map);
    // };
  // $timeout(function() {
  //   $scope.mapOptions.center.longitude = 121.500885;
  //   $scope.mapOptions.center.latitude = 31.190032;
  //   $scope.mapOptions.markers[0].longitude = 121.500885;
  //   $scope.mapOptions.markers[0].latitude = 31.190032;
  // }, 5000);

  // $scope.$watch('orderDetail.shippingDate',function () {
  //   console.log('====>!!  '+$scope.orderDetail.shippingDate);
  //
  // });




}]);
