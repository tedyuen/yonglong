yonglongApp.controller('prerecordNewController',['$scope','$state','$timeout','$location','showDatePickerProvider','interfaceService','rescode','alipayService','baseDataService',
  function ($scope,$state,$timeout,$location,showDatePickerProvider,interfaceService,rescode,alipayService,baseDataService) {
    showDatePickerProvider.showPrerecordDatePicker();

    $scope.temperatureUnit = baseDataService.getTemperatureUnit();
    $scope.prerecordType = baseDataService.getPrerecordType();
    $scope.packaddressType = baseDataService.getPackaddressType();
    $scope.passengerlinerType = baseDataService.getPassengerlinerType();
    $scope.impexpsignType = baseDataService.getImpexpsignType();
    $scope.calltypeType = baseDataService.getCalltypeType();
    $scope.callmanType = baseDataService.getCallmanType();
    $scope.shiptypeType = baseDataService.getShiptypeType();
    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();
    $scope.marinepollutionType = baseDataService.getMarinepollutionType();
    $scope.sizetypeData = baseDataService.getSizetypeData();
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
      "shipcall": "",
      "loadingportcode": "CNSHA",
      "transitportcode": "",
      "destport": "",
      "destportcode": "",
      "flashpoint": "",
      "unnumber": 0,
      "imdgpage": "",
      "inletwharf": "",
      "sizetype": "22G1",
      "statusinfo": "8",
      "boxoperatorcode": "",
      "customscode": "2200",
      "callno": "",
      "calltype": "",
      "callman": "",
      "shiptype": "无",
      "shippingdate": "",
      "packman": "",
      "licensenumber": "",
      "smokebox": 0,
      "equipmentorder": "",
      "packaddress":"SN",
      "detailaddress": "",
      "remark": "",
      "passengerliner":"Y",
      "impexpsign":"E",
      "containerVType":0,
      "containerSType":0,
      "marinepollution":"N",
      "callnoList":[{"callman":"CA","callno":"NONE","calltype":"M","id":0}],
      "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":1,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":"N"}],
      "shipnationcode":"",
      "beforesuper":0,
      "aftersuper":0,
      "rightsuper":0,
      "leftsuper":0,
      "hignsuper":0,
      "temperaturemin":"",
      "temperaturemax":"",
      "dangerouslabel":"",
      "emergencyno":"",
      "firstaidno":"",
      "allitems":0,
      "allweight":0,
      "allsize":0,
      "allweight2":0,
    }



    $scope.reset = function (theForm) {
      $scope.orderDetail ={
        "backurl":backurl,

        "temperature": "",
        "temperatureunit": "C",
        "loadingport": "SHANGHAI",
        "dangerousgrade": "",
        "boxno": "",
        "shippname": "",
        "shipcall": "",
        "loadingportcode": "CNSHA",
        "transitportcode": "",
        "destport": "",
        "destportcode": "",
        "flashpoint": "",
        "unnumber": 0,
        "imdgpage": "",
        "inletwharf": "",
        "sizetype": "22G1",
        "statusinfo": "8",
        "boxoperatorcode": "",
        "customscode": "2200",
        "callno": "",
        "calltype": "",
        "callman": "",
        "shiptype": "无",
        "shippingdate": "",
        "packman": "",
        "licensenumber": "",
        "smokebox": 0,
        "equipmentorder": "",
        "packaddress":"SN",
        "detailaddress": "",
        "remark": "",
        "passengerliner":"Y",
        "impexpsign":"E",
        "containerVType":0,
        "containerSType":0,
        "marinepollution":"N",
        "callnoList":[{"callman":"CA","callno":"NONE","calltype":"M","id":0}],
        "billList":[{"ordersn":"","deliverycode":"","deliveryport":"","cargono":1,"items":0,"packagecode":"","packagetype":"","weight":0,"size":0,"cargodesc":"","mark":"","cargocode":0,"dangerousgrade":"","imdgpage":"","unnumber":0,"flashpoint":0,"dangerouslabel":"","emergencyno":"","firstaidno":"","marinepollution":"N"}],
        "shipnationcode":"",
        "beforesuper":0,
        "aftersuper":0,
        "rightsuper":0,
        "leftsuper":0,
        "hignsuper":0,
        "temperaturemin":"",
        "temperaturemax":"",
        "dangerouslabel":"",
        "emergencyno":"",
        "firstaidno":"",
        "allitems":0,
        "allweight":0,
        "allsize":0,
        "allweight2":0,
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

    // 尺寸类型
    $scope.sizetypeChange = function () {
      // console.log("==>  "+$scope.sizetypeData[$scope.orderDetail.containerSType][$scope.orderDetail.containerVType]);
      $scope.orderDetail.sizetype = $scope.sizetypeData[$scope.orderDetail.containerSType][$scope.orderDetail.containerVType];
    }
    // 尺寸类型

    // 箱经营人
    var importOperatorlist = function () {
      interfaceService.importOperatorlist({},function (data,headers,config) {
        // console.log(JSON.stringify(data));
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
        $scope.orderDetail.shipcall = $model.shipcall;
        $scope.select.transitportList = $model.transitportList;
        $scope.select.inletwharfList = $model.inletwharfList;
      }else{
        $scope.orderDetail.shippno = '';
        $scope.orderDetail.imono = '';
        $scope.orderDetail.shipcall = '';
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
      queryShipping();
      autoShippname();
    }
    // 船名级联


    // 表单验证
    var validForm = function ($valid) {

      if($scope.select==undefined || $scope.select.transitportList==undefined || $scope.select.transitportList.length<=0){
        swal('错误','请选择船名','error');
        return false;
      }else if($scope.orderDetail.boxno=='') {
        swal('错误', '请输入箱号', 'error');
        return false;
      }else if($scope.orderDetail.loadingportcode=='') {
        swal('错误', '装港代码不能为空', 'error');
        return false;
      }else if($scope.orderDetail.transitportcode=='') {
        swal('错误', '请选择卸港代码', 'error');
        return false;
      }else if($scope.orderDetail.inletwharf=='') {
        swal('错误', '请选择进箱码头', 'error');
        return false;
      }else if($scope.orderDetail.boxoperatorcode==''){
        swal('错误', '请选择箱经营人代码', 'error');
        return false;
      }else if($scope.orderDetail.customscode==''){
        swal('错误', '请选择海关代码', 'error');
        return false;
      }else if($scope.orderDetail.callnoList[0].callno==''){
        swal('错误', '请选输入封志号，如果没有封志，请输入NONE', 'error');
        return false;
      }else if($scope.orderDetail.shippingdate==''){
        swal('错误', '请选择装箱日期', 'error');
        return false;
      }else if(isNaN($scope.orderDetail.smokebox) || $scope.orderDetail.smokebox<=0){
        swal('错误', '箱皮重为大于0的数字', 'error');
        return false;
      }else{
        var flag = true;
        for(var index in $scope.orderDetail.billList){
          var bill = $scope.orderDetail.billList[index];
          if(bill.ordersn==''){
            swal('错误', '请输入提单号', 'error');
            flag = false;
            break;
          }else if(bill.deliverycode=='' && bill.deliveryport==''){
            swal('错误', '交货地和交货地代码至少填入一项', 'error');
            flag = false;
            break;
          }else if(bill.packagecode=='' && bill.packagetype==''){
            swal('错误', '包装代码和包装类型至少填入一项', 'error');
            flag = false;
            break;
          }else if(isNaN(bill.items) || bill.items<=0){
            swal('错误', '件数为大于0的数字', 'error');
            flag = false;
            break;
          }else if(isNaN(bill.weight) || bill.weight<=0){
            swal('错误', '货重为大于0的数字', 'error');
            flag = false;
            break;
          }else if(isNaN(bill.size) || bill.size<=0){
            swal('错误', '尺码为大于0的数字', 'error');
            flag = false;
            break;
          }else if(bill.cargodesc==''){
            swal('错误', '请输入货物描述', 'error');
            flag = false;
            break;
          }else if(bill.mark==''){
            swal('错误', '请输入唛头描述', 'error');
            flag = false;
            break;
          }
        }
        return flag;
      }

    }

    //提交表单
    $scope.onSubmit = function($valid,form){

      if(validForm($valid)){//验证成功
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
            // console.log(JSON.stringify(data));
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
      }
    };

    $scope.numberChange = function () {
      var allItems = 0;
      var allWeight = 0;
      var allSizes = 0;
      for(var index in $scope.orderDetail.billList) {
        var bill = $scope.orderDetail.billList[index];
        if(!isNaN(bill.items)&& bill.items>0){
          allItems += bill.items;
        }
        if(!isNaN(bill.weight)&& bill.weight>0){
          allWeight += bill.weight;
        }
        if(!isNaN(bill.size)&& bill.size>0){
          allSizes += bill.size;
        }
      }
      $scope.orderDetail.allitems = allItems;
      $scope.orderDetail.allweight = allWeight;
      $scope.orderDetail.allsize = allSizes;
      if(!isNaN($scope.orderDetail.smokebox) && $scope.orderDetail.smokebox>0){
        $scope.orderDetail.allweight2 = $scope.orderDetail.smokebox+allWeight;
      }
    }

    // 读数据
    importOperatorlist();
  }]);
