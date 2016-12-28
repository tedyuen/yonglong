/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('withdrawManageController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {

    $scope.params = {
      bankCardNo:'',
      bankCardOwner:'',
      bankName:''
    }

    var httpList = function () {
      interfaceService.listBankCard({},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;

          console.log($scope.results.dataList.length);
        }
      });
    }

    $scope.del = function (id) {


    }

    $scope.showAddBankCard = function () {
      $('#add-bank-card').modal('show');
    }

    //添加提现帐号
    $scope.onSubmit = function ($valid) {
      if($valid){
        interfaceService.addBankCard($scope.params,function (data,headers,config) {
          console.log("response:"+JSON.stringify(data));
          if(data.rescode == rescode.SUCCESS){
            swal({
              title: "创建成功",
              text: "您已成功创建提现帐号!",
              type: "success",
              confirmButtonText: "完成",
              closeOnConfirm: true,

            },function () {
              $('#add-bank-card').modal('hide');
              httpList();
            })
          }
        });

      }else{

      }
    }

    httpList();
}]);
