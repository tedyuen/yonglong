/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('createOrderController',['$scope','$timeout','$state','showDatePickerProvider','URL_CONS','baseDataService','interfaceService',
  function ($scope,$timeout,$state,showDatePickerProvider,URL_CONS,baseDataService,interfaceService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.orderDetail ={
      shippingName:'辽宁号',
      shippingDate:'2016-12-31',
      originPort:'洋山深水港',
      loadingPort:'大连港',
      returnPort:'天津港',
      transitPort:'外高桥港',
      destPort:'珠海港',
      orderType:'0',
      containerVType:'0',
      containerSType:'0',
      containerVol:200,
      grossWeight:500,
      note:'',
      shippingFee:'34',
      extraFee:'245',
      referenceShippingFee:'34',
      shippingSn:'AXJIE8737492J'
    }

    //提交表单
    $scope.onSubmit = function($valid){
      if($valid){

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
            // console.log(JSON.stringify(data));
            if(data.rescode=="0000"){
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
      }else{
        // console.log("$valid:"+$valid);
      }
    };


    //百度地图
  $scope.offlineOpts = {retryInterval: 5000};

  var longitude = 121.506191;
  var latitude = 31.245554;
  $scope.mapOptions = {
    center: {
      longitude: longitude,
      latitude: latitude
    },
    zoom: 17,
    city: 'ShangHai',
    markers: [{
      longitude: longitude,
      latitude: latitude,
      icon: 'img/mappiont.png',
      width: 49,
      height: 60,
      title: 'Where',
      content: 'Put description here'
    }]
  };

  $scope.mapLoaded = function(map) {
    console.log(map);
  };

  $timeout(function() {
    $scope.mapOptions.center.longitude = 121.500885;
    $scope.mapOptions.center.latitude = 31.190032;
    $scope.mapOptions.markers[0].longitude = 121.500885;
    $scope.mapOptions.markers[0].latitude = 31.190032;
  }, 5000);

}]);
