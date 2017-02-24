yonglongApp.controller('prerecordNewController',['$scope','$state','$location','showDatePickerProvider','interfaceService','rescode','alipayService','baseDataService',
  function ($scope,$state,$location,showDatePickerProvider,interfaceService,rescode,alipayService,baseDataService) {
    showDatePickerProvider.showDatePicker();

    $scope.temperatureUnit = baseDataService.getTemperatureUnit();


    var backurl = "shell.html#!/main/companyinner/prerecord";
    if($location.url()=='/main/userinner/prerecord'){
      backurl = "shell.html#!/main/userinner/prerecord";
    }else if($location.url()=='/main/admin/prerecord'){
      backurl = "shell.html#!/main/admin/prerecord";
    }

    $scope.orderDetail = {
      "backurl":backurl,

      "temperature": "",
      "temperatureunit": "C",
      "loadingport": "SHANGHAI",
      "dangerousgrade": "",
      "boxno": "",
      "shippname": "",
      "loadingportcode": "CNSHA",
      "transitportcode": "",
      "destport": "",
      "destportcode": "",
      "flashpoint": "",
      "unnumber": 0,
      "imdgpage": "",
      "inletwharf": "",
      "sizetype": "",
      "statusinfo": "",
      "boxoperatorcode": "",
      "customscode": "",
      "callno": "",
      "calltype": "",
      "callman": "",
      "shiptype": "",
      "shippingdate": "",
      "packman": "",
      "licensenumber": "",
      "smokebox": "",
      "equipmentorder": "",
      "detailaddress": "",
      "remark": "",

      "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":0,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":""}],
    }

    //提交表单
    $scope.onSubmit = function($valid,form){
      console.log('--->'+$valid);
      console.log($scope.orderDetail.orderStatus);
      if($valid){
        swal({
          title: "确定预录吗?",
          text: "您即将预录一条信息!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,确定!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          interfaceService.createImportOrder($scope.orderDetail,function (data,headers,config) {
            console.log(JSON.stringify(data));
            if(data.rescode==rescode.SUCCESS){
              swal({
                title:"创建成功！",
                text:"2秒后自动跳转付款。",
                type:"success",
                timer:2000,
                showConfirmButton: false
              },function () {
                // $state.go('main.companyinner.query_order');
                alipayService.alipayImportOrder(data.data.id);
              });
              // $scope.reset(form);
            }else{
              swal({
                title:"预录失败！",
                text:data.resdesc,
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

    $scope.reset = function (theForm) {
      $scope.orderDetail ={
        "backurl":backurl,

        "temperature": "",
        "temperatureunit": "C",
        "loadingport": "SHANGHAI",
        "dangerousgrade": "",
        "boxno": "",
        "shippname": "",
        "loadingportcode": "CNSHA",
        "transitportcode": "",
        "destport": "",
        "destportcode": "",
        "flashpoint": "",
        "unnumber": 0,
        "imdgpage": "",
        "inletwharf": "",
        "sizetype": "",
        "statusinfo": "",
        "boxoperatorcode": "",
        "customscode": "",
        "callno": "",
        "calltype": "",
        "callman": "",
        "shiptype": "",
        "shippingdate": "",
        "packman": "",
        "licensenumber": "",
        "smokebox": "",
        "equipmentorder": "",
        "detailaddress": "",
        "remark": "",

        "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":0,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":""}],

      }

      theForm.$setPristine();
      theForm.$setUntouched();
    }

    var queryShipping = function () {
      var param = {
        shippname:$scope.orderDetail.shippname
      }
      interfaceService.importShiplist(param,function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.tshippname = data.data.dataList;
        }else{

        }
      });
    }


    // 船名级联
    var autoShippname = function ($model) {
      if($model){
        $scope.orderDetail.shippno = $model.shippno;
        $scope.orderDetail.imono = $model.imono;
        $scope.select.transitportList = $model.transitportList;
        $scope.select.inletwharfList = $model.inletwharfList;
      }else{
        $scope.orderDetail.shippno = '';
        $scope.orderDetail.imono = '';
        $scope.orderDetail.transitportcode = '';
        $scope.orderDetail.transitport = '';
        $scope.orderDetail.inletwharf = '';
        $scope.select = {
          transitportcode:[],
          transitportList:[],
          inletwharfList:[]
        }
      }
    }

    $scope.onTransitportcodeChange = function () {
      $scope.orderDetail.transitportcode = $scope.select.transitportcode.transitportcode;
      $scope.orderDetail.transitport = $scope.select.transitportcode.transitport;
    }

    $scope.shippnameOnSelect = function ($item, $model, $label) {
      // console.log('$item:'+$item);
      // console.log('$model:'+$model);
      // console.log('$label:'+$label);
      // $scope.tmodel = $model;
      $scope.orderDetail.shippname = $label;
      autoShippname($model);
    }

    $scope.shippnameOnChange = function () {
      // console.log('$onchange:');
      queryShipping();
      autoShippname();
    }

  }]);
