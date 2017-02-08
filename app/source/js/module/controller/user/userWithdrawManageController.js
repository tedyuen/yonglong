yonglongApp.controller('userWithdrawManageController',['$scope','$rootScope','$interval', 'interfaceService', 'rescode','toastService',
  function ($scope,$rootScope,$interval, interfaceService, rescode,toastService) {

    $scope.params = {
      bankCardNo:'',
      bankCardOwner:'',
      bankName:'',
      mobileCode:''
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

    $scope.del = function(result) {
      if ($rootScope.loginUser) {
        if ($rootScope.loginUser.mobilePhone) {
          var mobilePhone = $rootScope.loginUser.mobilePhone;
          var mobilePhoneStr = mobilePhone.substring(0, 3) + '****' + mobilePhone.substring(8, 11);

          swal({
            title: "确定删除吗?",
            text: "您即将删除" + result.bankCardOwner + "的账户!\n确认后会向"+mobilePhoneStr+"的手机号发送一条验证码。",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,发送!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
            animation: "slide-from-top",
          }, function () {

            // 发送验证码
            var params = {
              codetype: 3,
              mobilePhone: mobilePhone
            };
            interfaceService.sendcode(params, function(data, headers, config) {
              if (data.rescode == rescode.SUCCESS) {
                console.log("response:" + JSON.stringify(data));
                toastService.sendCodeToast(true);

                //确认删除
                swal({
                    title: "确定删除吗",
                    text: "您即将删除" + result.bankCardOwner + "的账户!",
                    type: "input",
                    showCancelButton: true,
                    closeOnConfirm: false,
                    cancelButtonText: "取消",
                    confirmButtonText: "是的,删除!",
                    animation: "slide-from-top",
                    showLoaderOnConfirm: true,
                    inputPlaceholder: "请输入收到的验证码"
                  },
                  function(inputValue){
                    if (inputValue === false){
                      swal.showInputError("请输入收到的验证码!");
                      // sweetAlert.close();
                    }else if (inputValue === "") {
                      swal.showInputError("请输入收到的验证码!");
                    }else{
                      var param = {
                        id: result.id,
                        mobileCode: inputValue
                      };
                      interfaceService.delBankCard(param, function (data, headers, config) {
                        console.log("response:" + JSON.stringify(data));
                        if (data.rescode == rescode.SUCCESS) {
                          swal({
                            title: "删除成功成功！",
                            text: "已成功删除此提现账户。",
                            type: "success",
                            confirmButtonText: "确定",
                          }, function () {
                            httpList();
                          });
                        }
                      });
                    }
                  });
                //确认删除

              }
            });
            // 发送验证码
          });

        }
      }
    };

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
          }else if(data.rescode == rescode.HAS_BANK){
            swal('绑卡出错','已经绑定过银行卡，换卡请先解绑!','error');
          }else{
            swal({
              title: "创建失败",
              text: data.resdesc,
              type: "error",
              confirmButtonText: "确定",
              closeOnConfirm: true,

            })
          }
        });

      }else{

      }
    }

    //发送验证码 银行卡创建
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function() {
      if ($rootScope.loginUser) {
        if ($rootScope.loginUser.mobilePhone) {
          var mobilePhone = $rootScope.loginUser.mobilePhone;
          var mobilePhoneStr = mobilePhone.substring(0, 3) + '****' + mobilePhone.substring(8, 11);
          swal({
            title: "发送验证码?",
            text: "即将往手机号为" + mobilePhoneStr + "的手机发送一条验证码短信!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,发送!",
          }, function() {
            var second = 60;
            $scope.validCodeFlag = false;
            $scope.validCodeText = '正在发送...';
            var params = {
              codetype: 4,
              mobilePhone: mobilePhone
            };
            interfaceService.sendcode(params, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                toastService.sendCodeToast(true);
                var timePromise = $interval(function() {
                  if (second <= 0) {
                    $interval.cancel(timePromise);
                    timePromise = undefined;
                    $scope.validCodeFlag = true;
                    $scope.validCodeText = '重新发送验证码';
                  } else {
                    $scope.validCodeText = second + '秒后重新发送';
                    second--;
                  }
                }, 1000, 65);

              } else {
                toastService.sendCodeToast(false,data.resdesc);
                $scope.validCodeFlag = true;
                $scope.validCodeText = '发送验证码';
              }
            });
          });
        }
      }
    };

    httpList();
  }]);
