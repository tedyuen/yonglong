yonglongApp.controller('userCreateWithdrawController',['$scope','$timeout','$state','interfaceService','showDatePickerProvider','rescode',
  function ($scope,$timeout,$state,interfaceService,showDatePickerProvider,rescode) {
    showDatePickerProvider.showDatePicker();

    $scope.cashListCheckbox = [];//需要提现的订单
    $scope.cashListDispatchCheckbox = [];//需要提现的指派订单
    $scope.params={
      bankNo:null,
      orderIds:'',
      refundMoney:0
    }
    var updateParams = function () {
      var temp;
      $scope.params.refundMoney = 0;
      $scope.params.orderIds = '';
      for(temp in $scope.cashListCheckbox){
        $scope.params.refundMoney+=$scope.cashListCheckbox[temp].moneyPaid;
        $scope.params.orderIds += $scope.cashListCheckbox[temp].id+',';
      }
      for(temp in $scope.cashListDispatchCheckbox){
        $scope.params.refundMoney+=$scope.cashListDispatchCheckbox[temp].moneyPaid + $scope.cashListDispatchCheckbox[temp].offerOrderPaid;
        $scope.params.orderIds += '-->'+$scope.cashListDispatchCheckbox[temp].id+',';
      }
    }

    var getCashList = function () {
      interfaceService.cashList({},function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.cashList = data.data.listCash;
          $scope.listCashDispatch = data.data.dataDispatch;

        }
      });
    }
    var getListBankCard = function () {
      interfaceService.listBankCard({},function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.listBankCards = data.data;
        }
        $timeout(getCashList,50);
      });
    }

    $scope.changeBankCard= function () {
      console.log("card!!!");
    }

    $scope.companyUserDetail = function (userId) {
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

    // 复选cashlist

    $scope.isSelected = function(result){
      return $scope.cashListCheckbox.indexOf(result)>=0;
    }
    $scope.isDispatchSelected = function(result){
      return $scope.cashListDispatchCheckbox.indexOf(result)>=0;
    }


    $scope.updateCashListCBSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.cashListCheckbox.push(result);
      }else{
        var idx = $scope.cashListCheckbox.indexOf(result);
        $scope.cashListCheckbox.splice(idx,1);
      }
      updateParams();
    }

    $scope.updateCashListDispatchCBSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.cashListDispatchCheckbox.push(result);
      }else{
        var idx = $scope.cashListCheckbox.indexOf(result);
        $scope.cashListDispatchCheckbox.splice(idx,1);
      }
      updateParams();
    }

    $scope.onSubmit = function(){
      if($scope.params.bankNo==null){
        swal({
          title: "请选择卡号?",
          text: "请选择提现的银行卡卡号!",
          type: "error",
          confirmButtonText: "好!",
          closeOnConfirm: true
        });
      }else if($scope.params.refundMoney==0){
        swal({
          title: "请选择需要提现的订单?",
          text: "请选择需要提现的订单!",
          type: "error",
          confirmButtonText: "好!",
          closeOnConfirm: true
        });
      }else{
        swal({
          title: "确定创建提现订单吗?",
          text: "您即将创建一份新提现的订单!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
          animation: "slide-from-top",
        }, function(){
          interfaceService.addRefundApply($scope.params,function (data,headers,config) {
            // console.log("response:"+JSON.stringify(data));
            if(data.rescode == rescode.SUCCESS){
              swal({
                title:"创建成功！",
                text:"已成功创建提现订单。",
                type:"success",
                showCancelButton: true,
                cancelButtonText: "继续创建",
                confirmButtonText:"前往提现列表",
              },function (confirm) {
                if(confirm){
                  $state.go('main.companyinner.withdraw_list');
                }else{
                  $scope.params={
                    bankNo:null,
                    orderIds:'',
                    refundMoney:0
                  }
                  getListBankCard();
                }
              });
            }
          });
        });
      }
    }

    getListBankCard();
  }]);
