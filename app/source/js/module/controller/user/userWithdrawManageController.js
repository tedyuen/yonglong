yonglongApp.controller('userWithdrawManageController',['$scope','interfaceService','rescode',
  function ($scope,interfaceService,rescode) {

    $scope.params = {
      bankCardNo:'',
      bankCardOwner:'',
      bankName:''
    }

    var httpList = function () {
      interfaceService.listBankCard({},function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode == rescode.SUCCESS){
          $scope.results = data.data;

          console.log($scope.results.dataList.length);
        }
      });
    }

    $scope.del = function (result) {
      swal({
        title: "确定删除吗?",
        text: "您即将删除"+result.bankCardOwner+"的账户!",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: "取消",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是的,删除!",
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
        animation: "slide-from-top",
      }, function(){
        var param = {
          id:result.id
        }
        interfaceService.delBankCard(param,function (data,headers,config) {
          // console.log("response:"+JSON.stringify(data));
          if(data.rescode == rescode.SUCCESS){
            swal({
              title:"删除成功成功！",
              text:"已成功删除此提现账户。",
              type:"success",
              confirmButtonText:"确定",
            },function () {
              httpList();
            });
          }
        });
      });
    }

    $scope.showAddBankCard = function () {
      $('#add-bank-card').modal('show');
    }

    //添加提现帐号
    $scope.onSubmit = function ($valid) {
      if($valid){
        interfaceService.addBankCard($scope.params,function (data,headers,config) {
          // console.log("response:"+JSON.stringify(data));
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
