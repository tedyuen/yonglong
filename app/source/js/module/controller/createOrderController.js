/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('createOrderController',['$scope','$timeout','showDatePickerProvider','URL_CONS','baseDataService','interfaceService',
  function ($scope,$timeout,showDatePickerProvider,URL_CONS,baseDataService,interfaceService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.orderDetail ={
      shippingName:'awef',
      shippingDate:'2016年12月08日',
      originPort:'aawef',
      loadingPort:'awf',
      returnPort:'awef',
      transitPort:'awef',
      destPort:'awef',
      orderType:'0',
      containerVType:'0',
      containerSType:'0',
      containerVol:323,
      grossWeight:234,
      note:'awef',
      shippingFee:'34',
      extraFee:'332',
      referenceShippingFee:'23',
      shippingSn:'awefewaf'
    }

    //提交表单
    $scope.onSubmit = function($valid){
      if($valid){

        $('#table-preview').modal('show');
        $(".modal-content").css("width","80%")



        console.log("url:"+URL_CONS.createOrder);
        interfaceService.companyCreateOrder($scope.orderDetail,function (data,headers,config) {
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(config));

        });
      }else{
        console.log("$valid:"+$valid);
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
