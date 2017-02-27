yonglongApp.controller('prerecordNewController',['$scope','$state','$timeout','$location','showDatePickerProvider','interfaceService','rescode','alipayService','baseDataService',
  function ($scope,$state,$timeout,$location,showDatePickerProvider,interfaceService,rescode,alipayService,baseDataService) {
    showDatePickerProvider.showDatePicker();

    $scope.temperatureUnit = baseDataService.getTemperatureUnit();
    $scope.prerecordType = baseDataService.getPrerecordType();
    $scope.packaddressType = baseDataService.getPackaddressType();
    $scope.passengerlinerType = baseDataService.getPassengerlinerType();
    $scope.impexpsignType = baseDataService.getImpexpsignType();
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
      "statusinfo": "8",
      "boxoperatorcode": "",
      "customscode": "2200",
      "callno": "",
      "calltype": "",
      "callman": "",
      "shiptype": "",
      "shippingdate": "",
      "packman": "",
      "licensenumber": "",
      "smokebox": "",
      "equipmentorder": "",
      "packaddress":"SN",
      "detailaddress": "",
      "remark": "",
      "passengerliner":"Y",
      "impexpsign":"E",

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
        "statusinfo": "8",
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
        "packaddress":"SN",
        "detailaddress": "",
        "remark": "",
        "passengerliner":"Y",
        "impexpsign":"E",
        "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":0,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":""}],

      }

      theForm.$setPristine();
      theForm.$setUntouched();
    }

    $scope.openAdditional = function () {
      $('#additional').modal('show');
    }


    // 箱状改变
    $scope.statusinfoChange = function () {
      if($scope.orderDetail.statusinfo == '4'){
        // 箱状态为空箱，请确认
        swal({
          title: "确认信息",
          text: "箱状态为空箱，请确认!",
          type: "warning",
          confirmButtonText: "确认"
        });
      }
    }


    // 箱经营人
    var importOperatorlist = function () {
      interfaceService.importOperatorlist({},function (data,headers,config) {
        console.log(JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.operatorlist = data.data.dataList;
        }else{

        }
        $timeout(queryCustomslist,20);
      });
    }


    // 箱经营人


    // 海关代码
    var queryCustomslist = function () {
      interfaceService.importCustomslist({},function (data,headers,config) {
        // console.log(JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.customslist = data.data.customsList;
        }else{

        }
      });
    }
    var autoCustoms = function ($model) {
      if($model){
        $scope.orderDetail.boxoperator = $model.boxoperator;
      }else{
        $scope.orderDetail.boxoperator = '';
      }
    }
    $scope.customsOnSelect = function ($item, $model, $label) {
      $scope.orderDetail.boxoperatorcode = $label;
      autoCustoms($model);
    }
    $scope.customsOnChange = function () {
      autoCustoms();
    }


    // 船名级联
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
    // 船名级联




    // 读数据
    importOperatorlist();
  }]);
