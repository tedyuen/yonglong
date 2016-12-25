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
      shippingName:'千里阳光号',
      shippingDate:'2016年12月31日',
      originPort:'伟大航路',
      loadingPort:'人鱼岛',
      returnPort:'司法岛',
      transitPort:'海军总部',
      destPort:'克罗可达尔',
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

        // $('#table-preview').modal('show');
        // $(".modal-content").css("width","80%")

        interfaceService.companyCreateOrder($scope.orderDetail,function (data,headers,config) {
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(config));

          $('#success-info').modal('show');

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
