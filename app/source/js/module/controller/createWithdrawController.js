/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('createWithdrawController',['$scope','$timeout','interfaceService','showDatePickerProvider','rescode',
  function ($scope,$timeout,interfaceService,showDatePickerProvider,rescode) {
    showDatePickerProvider.showDatePicker();

    $scope.cashListCheckbox = [];//需要提现的订单
    $scope.cashListDispatchCheckbox = [];//需要提现的指派订单
    $scope.params={
      bankNo:'-1',
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
        console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.cashList = data.data.listCash;
          $scope.listCashDispatch = data.data.dataDispatch;

        }
      });
    }
    var getListBankCard = function () {
      console.log(321);

      interfaceService.listBankCard({},function (data,headers,config) {
        console.log(123);
        console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.listBankCards = data.data;
        }
        $timeout(getCashList,50);
      });
    }



    $scope.changeBankCard= function () {
      console.log("card!!!");
    }

    $scope.busUserDetail = function (userId) {
      // console.log("===> "+userId);
      var param={
          orderId:userId
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

    //
    // $scope.onSubmit = function($valid){
    //   if($valid){
    //
    //
    //   }
    // }

    getListBankCard();
}]);
