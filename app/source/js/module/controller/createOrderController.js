/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('createOrderController',['$scope','$timeout','showDatePickerProvider','URL_CONS','diyData','interfaceService',
  function ($scope,$timeout,showDatePickerProvider,URL_CONS,diyData,interfaceService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = diyData.orderType;
    $scope.containerVType = diyData.boxVol;
    $scope.containerSType = diyData.boxType;
    $scope.orderDetail ={
      shippingName:'',
      shippingDate:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      transitPort:'',
      destPort:'',
      orderType:'0',
      containerVType:'0',
      containerSType:'0',
      containerVol:'',
      grossWeight:'',
      note:'',
      shippingFee:'',
      extraFee:'',
      referenceShippingFee:'',
      shippingSn:''
    }

    //提交表单
    $scope.onSubmit = function($valid){
      if($valid){
        console.log("url:"+URL_CONS.createOrder);
        interfaceService.createOrder($scope.orderDetail,function (data,headers,config) {
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
