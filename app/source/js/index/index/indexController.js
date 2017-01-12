ylIndex.controller('indexController', ['$scope', '$cookies', 'interfaceService', 'rescode', 'cookiesService',
  function($scope, $cookies, interfaceService, rescode, cookiesService) {

    // 发货方初始化
    var initCompanyForm = function() {
      var comMName = $cookies.get('yltComMName');
      var comIsReme = $cookies.get('yltComIsReme');
      var comPass = $cookies.get('yltComPass');

      console.log("comMName:" + comMName);

      if (comMName === undefined) {
        comMName = '';
      }
      if (comPass === undefined) {
        comPass = '';
      }
      if (comIsReme === undefined) {
        comIsReme = 'false';
        comPass = '';
      } else {
        if (comIsReme === 'false') {
          comPass = '';
        }
      }

      $scope.company = {
        memberName: comMName,
        password: comPass,
        isRemember: comIsReme == 'true'
      };
    };

    // 承运方初始化
    var initUserForm = function() {
      var userMName = $cookies.get('yltUserMName');
      var userIsReme = $cookies.get('yltUserIsReme');
      var userPass = $cookies.get('yltUserPass');

      if (userMName === undefined) {
        userMName = '';
      }
      if (userPass === undefined) {
        userPass = '';
      }
      if (userIsReme === undefined) {
        userIsReme = 'false';
        userPass = '';
      } else {
        if (userIsReme == 'false') {
          userPass = '';
        }
      }

      $scope.user = {
        memberName: userMName,
        password: userPass,
        isRemember: userIsReme == 'true'
      };
    };

    var doSwal = function(code) {
      if (code == rescode.UNKNOW_USER) {
        swal('错误', '帐号不存在', 'warning');
      } else if (code == rescode.ERROR_PASSWORD) {
        swal('错误', '密码不正确', 'warning');
      }
    };

    $scope.goBackground = function() {
      if ($scope.loginUser && $scope.loginUser.token) {
        if ($scope.loginUser.role == 'company') {
          window.location.href = 'shell.html#!/main/companyinner/create_order';
        } else if ($scope.loginUser.role == 'user') {
          window.location.href = 'shell.html#!/main/userinner/wanner_order';
        }
      }
    };

    $scope.logoutUser = function() {
      $scope.loginUser = undefined;
      $cookies.remove('yltUser');
    };


    $scope.onLoginCompany = function($valid) {
      if ($valid.companyMemberName.$invalid) {
        swal('错误', '帐号不能为空', 'warning');
        return;
      }

      if ($valid.companyPassword.$invalid) {
        swal('错误', '密码不能为空', 'warning');
        return;
      }
      interfaceService.companyLogin($scope.company, function(data, headers, config) {
        // console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.loginUser = data.data;

          $cookies.put('yltComMName', $scope.company.memberName, cookiesService.cookiesDate());
          if ($scope.company.isRemember) {
            $cookies.put('yltComIsReme', 'true', cookiesService.cookiesDate());
            $cookies.put('yltComPass', $scope.company.password, cookiesService.cookiesDate());
          } else {
            $cookies.put('yltComIsReme', 'false', cookiesService.cookiesDate());
            $cookies.remove('yltComPass');
          }
          $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());
        } else {
          doSwal(data.rescode);
        }
      });
    };

    // 承运方登录
    $scope.onLoginUser = function($valid) {
      if ($valid.userMemberName.$invalid) {
        swal('错误', '帐号不能为空', 'warning');
        return;
      }

      if ($valid.userPassword.$invalid) {
        swal('错误', '密码不能为空', 'warning');
        return;
      }
      interfaceService.userLogin($scope.user, function(data, headers, config) {
        // console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.loginUser = data.data;

          $cookies.put('yltUserMName', $scope.user.memberName, cookiesService.cookiesDate());
          if ($scope.user.isRemember) {
            $cookies.put('yltUserIsReme', 'true', cookiesService.cookiesDate());
            $cookies.put('yltUserPass', $scope.user.password, cookiesService.cookiesDate());
          } else {
            $cookies.put('yltUserIsReme', 'false', cookiesService.cookiesDate());
            $cookies.remove('yltUserPass');
          }
          $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());
        } else {
          doSwal(data.rescode);
        }
      });
    };


    initCompanyForm();
    initUserForm();
    $scope.loginUser = $cookies.getObject('yltUser');


    var getArticleIndex = function() {
      var params = {
        num: 4
      };
      interfaceService.getArticleIndex(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.articleResults = data.data;
        } else {

        }
      });
    };

    getArticleIndex();


    $scope.goResetPassword = function(role) {
      window.location.href = 'shell.html#!/forget_password/' + role;
    };

    $scope.keydown = function(e, role, form) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        if (role === 0) {
          $scope.onLoginCompany(form);
        } else if (role == 1) {
          $scope.onLoginUser(form);
        }
      }
    };
  }
]);
