/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('hasgetOrderController',['$scope','$state','$timeout','showDatePickerProvider','baseDataService','interfaceService','rescode','alipayService',
  function ($scope,$state,$timeout,showDatePickerProvider,baseDataService,interfaceService,rescode,alipayService) {
    showDatePickerProvider.showDatePicker();
    $scope.orderType = baseDataService.getOrderTypeN();
    $scope.containerVType = baseDataService.getBoxVolN();
    $scope.containerSType = baseDataService.getBoxTypeN();
    $scope.configFee = 0;

    $scope.queryData = {
      orderSn:'',
      startTime:'',
      endTime:'',
      originPort:'',
      loadingPort:'',
      returnPort:'',
      orderType:'-1',
      containerVType:'-1',
      containerSType:'-1',
      goodsMemberName:'',
      busMemberName:'',
      pageno:1,
      pagesize:20,
    }


    $scope.results={
      currPageNum : 1,
      totalPages : 0,
      pageSize : $scope.queryData.pagesize
    }

    var httpList = function () {
      interfaceService.companyListMyorder($scope.queryData,function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;
        }
        $timeout(function () {
          getOrderConfigFee();
        },50);
      });
    }

    var getOrderConfigFee = function () {
      interfaceService.orderConfigFee({},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.configFee = data.data.configFee;
        }
      });
    }

    // 表单查询订单列表
    $scope.queryList = function ($valid) {
      console.log(""+$valid);
      if($valid){
        interfaceService.showLoading('正在查询');
        httpList();
      }else{

      }
    }

    // 分页
    $scope.switchPage = function (page) {
      interfaceService.showLoading('正在查询');
      $scope.queryData.pageno = page;
      httpList();
    }


    $scope.busUserDetail = function (userId,type) {
      // console.log("===> "+userId);
      switch (type){
        case 0:param={
          userId:userId
        };
          break;
        case 1:param={
          orderId:userId
        }
      }
      interfaceService.busUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 0;
          $('#bus-user-detail-modal').modal('show');
        }
      });
    }

    $scope.companyUserDetail = function (userId) {
      console.log('===> ');
      var param = {
        userId:userId
      }
      interfaceService.companyUserDetail(param,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          $scope.busUserDetailResult = data.data;
          $scope.busUserDetailResult.resultType = 1;
          $('#bus-user-detail-modal').modal('show');
        }

      });
    }


    $scope.cancelOrder = function (orderId) {
      swal({
        title: "确定取消吗?",
        text: "您即将取消这份订单!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,取消!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function(){
        var tempData = {
          orderId:orderId
        }
        interfaceService.cancelOrder(tempData,function (data,headers,config) {
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"取消成功！",
              text:"此订单已取消。",
              type:"success",
              confirmButtonText:"确定"
            },function () {
              httpList();
            });
          }else{
            swal({
              title:"取消失败！",
              text:"请重新执行此操作。",
              type:"error",
              confirmButtonText:"确定"
            });
          }
        });

      });

    }

    $scope.detail = function (id) {
      $scope.detailOrderId = id;
      $('#order-detail').modal('show');
    }

    $scope.printDetail = function () {
      if($scope.detailOrderId){
        var link = 'table_print.html#!?id='+$scope.detailOrderId;
        window.open(link);
      }
    }

    $scope.reset = function () {
      $scope.queryData = {
        orderSn:'',
        startTime:'',
        endTime:'',
        originPort:'',
        loadingPort:'',
        returnPort:'',
        orderType:'-1',
        containerVType:'-1',
        containerSType:'-1',
        goodsMemberName:'',
        busMemberName:'',
        pageno:1,
        pagesize:20,
      }
    }

    // 派单费用支付
    $scope.alipay = function (result) {
      alipayService.alipayDispatchOrder(result,$scope.configFee);
    }

    httpList();

    $scope.companyListFriend = function (orderId) {
      console.log('请求好友列表');
      $scope.dispatchCarParams={
        dispatchFee:undefined,
        fid:'',
        offerOrderMoney:undefined,
        orderId:orderId
      }
      $scope.myFriendsIdArray = [];
      // $scope.dispatchCarParams.orderId = orderId;

      var friendStatus = {
        status:1
      };
      interfaceService.companyListFriend(friendStatus,function (data,headers,config) {
        console.log('--->'+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          if (data.data){
            $scope.friendList = data.data;
            if ($scope.friendList.pageData != null){
              for(var i=0;i<$scope.friendList.pageData.length;i++){
                $scope.myFriendsIdArray.push($scope.friendList.pageData[i]);
              }
              console.log('获取好友列表'+$scope.friendList.pageData.length);
              $('#dispatch-car').modal('show')
            }
          }else {
            swal("请先添加至少一位好友!")
          }
        }else {
          swal("请求失败!", data.resdesc, "warning")
        }
      });
    }

      // 指定车辆
    $scope.selectedOid = function () {
      console.log('指定车辆==>  '+JSON.stringify($scope.dispatchCarParams));
      swal({
          title: "确认指派吗？",
          text: "此订单即将指派车辆!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,确定指派!",
          cancelButtonText: "取消",
          closeOnConfirm: false
        },
        function(){
          interfaceService.fleetDispatchOrder($scope.dispatchCarParams,function (data,headers,config) {
            // console.log('--->'+JSON.stringify(data));
            if(data.rescode == rescode.SUCCESS){
              swal({
                title:"指派成功！",
                text:"指派车辆成功。",
                type:"success",
                confirmButtonText:"确定"
              },function () {
                alipayService.alipayDispatch(data.data.id,httpList);
                $('#dispatch-car').modal('hide');
              });
            }else {
              swal("失败!", data.resdesc , "warning");
            }
          });
        });
    }

    $scope.editOrder = function (id) {
      if(id){
        $state.go('main.companyinner.edit_order',{orderId:id});
      }
    }

    $scope.over = function (orderId) {
      swal({
        title: "确认送到吗?",
        text: "您即将确认送到此订单!",
        type: "input",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "下一步!",
        closeOnConfirm: false,
        inputPlaceholder: "请输入箱号"
      }, function(inputValue){
        if (inputValue === false){

        }else if (inputValue === "") {
          swal.showInputError("请输入箱号!");
        }else{
          swal({
            title: "确认送到吗?",
            text: "您即将确认送到此订单!",
            type: "input",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的，确认!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            inputPlaceholder: "请输入封号"
          }, function(inputValue2) {
            if (inputValue2 === false) {

            } else if (inputValue2 === "") {
              swal.showInputError("请输入封号!");
            } else {

              var tempData = {
                orderId:orderId,
                containerNo:inputValue,
                sealNo:inputValue2,
              }
              interfaceService.userOverOfferOrder(tempData,function (data,headers,config) {
                if(data.rescode==rescode.SUCCESS){
                  swal({
                    title:"确认成功！",
                    text:"此订单已确认送到。",
                    type:"success",
                    confirmButtonText:"确定"
                  },function () {
                    httpList();
                  });
                }else{
                  swal({
                    title:"确认失败！",
                    text:"请重新执行此操作。",
                    type:"error",
                    confirmButtonText:"确定"
                  });
                }
              });
            }
          });
        }
      });
    }


  }]);
