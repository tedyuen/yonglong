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
      "aftersuper": "",
      "beforesuper": "",
      "boxinfo": "",
      "boxno": "",
      "boxoperator": "",
      "boxoperatorcode": "",
      "callinfo": "",
      "callman": "",
      "callno": "",
      "calltype": "",
      "cargocode": "",
      "cargodesc": "",
      "cargono": "",
      "customscode": "",
      "dangerousgrade": "",
      "dangerouslabel": "",
      "deliverycode": "",
      "deliveryport": "",
      "destport": "",
      "destportcode": "",
      "detailaddress": "",
      "emergencyno": "",
      "equipmentorder": "",
      "fileurl": "1",
      "firstaidno": "",
      "flashpoint": "",
      "hignsuper": "",
      "imdgpage": "",
      "imono": "",
      "impexpsign": "",
      "inletwharf": "",
      "items": "",
      "leftsuper": "",
      "licensenumber": "",
      "loadingport": "",
      "loadingportcode": "",
      "marinepollution": "",
      "mark": "",
      "orderinfo": "",
      "ordersn": "",
      "packaddress": "",
      "packagecode": "",
      "packagetype": "",
      "packman": "",
      "passengerliner": "",
      "remark": "",
      "rightsuper": "",
      "secdangerousgrade": "",
      "secdangerouslabel": "",
      "secemergencyno": "",
      "secfirstaidno": "",
      "secflashpoint": "",
      "secimdgpage": "",
      "secmarinepollution": "",
      "secunnumber": "",
      "shipcall": "",
      "shipnationcode": "",
      "shippingdate": "",
      "shippname": "",
      "shippno": "",
      "shiptype": "",
      "size": "",
      "sizetype": "",
      "smokebox": "",
      "statusinfo": "",
      "temperature": "",
      "temperaturemax": "",
      "temperaturemin": "",
      "temperatureunit": "",
      "transitport": "",
      "transitportcode": "",
      "unnumber": "",
      "weight": ""
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
        "aftersuper": "",
        "beforesuper": "",
        "boxinfo": "",
        "boxno": "",
        "boxoperator": "",
        "boxoperatorcode": "",
        "callinfo": "",
        "callman": "",
        "callno": "",
        "calltype": "",
        "cargocode": "",
        "cargodesc": "",
        "cargono": "",
        "customscode": "",
        "dangerousgrade": "",
        "dangerouslabel": "",
        "deliverycode": "",
        "deliveryport": "",
        "destport": "",
        "destportcode": "",
        "detailaddress": "",
        "emergencyno": "",
        "equipmentorder": "",
        "fileurl": "1",
        "firstaidno": "",
        "flashpoint": "",
        "hignsuper": "",
        "imdgpage": "",
        "imono": "",
        "impexpsign": "",
        "inletwharf": "",
        "items": "",
        "leftsuper": "",
        "licensenumber": "",
        "loadingport": "",
        "loadingportcode": "",
        "marinepollution": "",
        "mark": "",
        "orderinfo": "",
        "ordersn": "",
        "packaddress": "",
        "packagecode": "",
        "packagetype": "",
        "packman": "",
        "passengerliner": "",
        "remark": "",
        "rightsuper": "",
        "secdangerousgrade": "",
        "secdangerouslabel": "",
        "secemergencyno": "",
        "secfirstaidno": "",
        "secflashpoint": "",
        "secimdgpage": "",
        "secmarinepollution": "",
        "secunnumber": "",
        "shipcall": "",
        "shipnationcode": "",
        "shippingdate": "",
        "shippname": "",
        "shippno": "",
        "shiptype": "",
        "size": "",
        "sizetype": "",
        "smokebox": "",
        "statusinfo": "",
        "temperature": "",
        "temperaturemax": "",
        "temperaturemin": "",
        "temperatureunit": "",
        "transitport": "",
        "transitportcode": "",
        "unnumber": "",
        "weight": ""
      }

      theForm.$setPristine();
      theForm.$setUntouched();
    }





  }]);
