yonglongApp.controller('registerCompanyController', ['$scope', '$state', '$interval', '$cookies', 'dropifyProvider', 'interfaceService', 'rescode', 'validateService', 'toastService', 'cookiesService',
  function($scope, $state, $interval, $cookies, dropifyProvider, interfaceService, rescode, validateService, toastService, cookiesService) {
    dropifyProvider.dropify();
    $scope.showTerms = function() {
      $('#terms').modal('show');
    };
    $scope.showTerms2 = function() {
      $('#terms2').modal('show');
    };


    $scope.reg = {
      memberName: '',
      password: '',
      passwordconfirm: '',
      companyName: '',
      companyLinker: '',
      email: '',
      mobilePhone: '',
      tel: '',
      licence: '',
      nameCard: '',
      nameCardBack: '',
      mobileCode: '',
      address: ''
    };
    $scope.regfile1 = {
      name: 'nameCardFile',
      file: '',
    };
    $scope.regfile2 = {
      name: 'nameCardBackFile',
      file: '',
    };
    $scope.regfile3 = {
      name: 'licenceFile',
      file: '',
    };

    $scope.valid = {
      repass:true,
      checkbox:false
    }
    // 判断重复密码
    $scope.checkPassword = function () {
      $scope.valid.repass = $scope.reg.password == $scope.reg.passwordconfirm;
    }



    var files = [$scope.regfile1, $scope.regfile2, $scope.regfile3];

    $scope.onSubmit = function($valid) {
      if ($valid) {
        interfaceService.companyRegister($scope.reg, files, function(data, headers, config) {
          console.log(JSON.stringify(data));
          if (data.rescode == rescode.SUCCESS) {
            $scope.loginUser = data.data;
            $cookies.put('yltComMName', $scope.reg.memberName, cookiesService.cookiesDate());
            $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());
            $state.go('main.companyinner.create_order');
          } else if (data.rescode == rescode.AGAIN_PHONE) {
            swal('错误','手机号码被注册','error');
          } else if (data.rescode == rescode.WRONG_PHONE) {
            swal('错误','手机号格式不正确','error');
          } else if (data.rescode == rescode.WRONG_CODE) {
            swal('错误','验证码错误','error');
          } else if (data.rescode == rescode.AGAIN_USERNAME) {
            swal('错误','用户名已被注册','error');
          } else if (data.rescode == rescode.AGAIN_EMAIL) {
            swal('错误','邮箱已被注册','error');
          }
        });
      } else {
        console.log("$valid:" + $valid);
      }
    };



    //发送验证码
    $scope.validCodeFlag = true;
    $scope.validCodeText = '发送验证码';
    $scope.sendCode = function() {
      var validMobile = validateService.mobile($scope.reg.mobilePhone, true);
      if (validMobile.result && $scope.validCodeFlag) {
        var second = 60;
        $scope.validCodeFlag = false;
        $scope.validCodeText = '正在发送...';

        var params = {
          codetype: 0,
          mobilePhone: $scope.reg.mobilePhone
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
            toastService.sendCodeToast(false);
            $scope.validCodeFlag = true;
            $scope.validCodeText = '发送验证码';
          }
        });
      }
    };


  }
]);
