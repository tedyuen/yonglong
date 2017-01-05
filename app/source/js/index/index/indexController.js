ylIndex.controller('indexController',['$scope','$cookies','interfaceService','rescode',function ($scope,$cookies,interfaceService,rescode) {
  $scope.testNum = 30001;


  $scope.forgetPassCompany = function () {
    $('#forget-password-company').modal('show');
    $scope.testNum = 200;
  }

  $scope.getCodeCompany = function () {
    console.log('getCodeCompany');

    var param = {
      phone:18716166778,
      vercode:4448
    }

    interfaceService.testInterface(param,function (data,headers,config) {
      console.log(JSON.stringify(data));
      if(data.rescode == rescode.SUCCESS){
        $scope.result = data.data;
      }
    });
  }

  // 发货方初始化
  var initCompanyForm = function () {
    var comMName = $cookies.get('yltComMName');
    var comIsReme = $cookies.get('yltComIsReme');
    var comPass = $cookies.get('yltComPass');

    console.log("comMName:"+comMName);

    if(comMName==undefined){
      comMName = '';
    }
    if(comPass==undefined){
      comPass = '';
    }
    if(comIsReme==undefined){
      comIsReme = 'false';
      comPass = '';
    }else{
      if(comIsReme=='false'){
        comPass = '';
      }
    }

    $scope.company = {
      memberName:comMName,
      password:comPass,
      isRemember:comIsReme=='true'
    }
  }

  // 承运方初始化
  var initUserForm = function () {
    var userMName = $cookies.get('yltUserMName');
    var userIsReme = $cookies.get('yltUserIsReme');
    var userPass = $cookies.get('yltUserPass');


    if(userMName==undefined){
      userMName = '';
    }
    if(userPass==undefined){
      userPass = '';
    }
    if(userIsReme==undefined){
      userIsReme = 'false';
      userPass = '';
    }else{
      if(userIsReme=='false'){
        userPass = '';
      }
    }

    $scope.user = {
      memberName:userMName,
      password:userPass,
      isRemember:userIsReme=='true'
    }
  }

  $scope.goBackground = function () {
    if($scope.loginUser && $scope.loginUser.token){
      if($scope.loginUser.role=='company'){
        window.location.href = 'shell.html#!/main/companyinner/create_order';
      }else if($scope.loginUser.role=='user'){
        window.location.href = 'shell.html#!/main/userinner/wanner_order';
      }
    }
  }

  $scope.logoutUser = function () {
    $scope.loginUser = undefined;
    $cookies.remove('yltUser');
  }


  $scope.onLoginCompany = function ($valid) {
    if($valid.companyMemberName.$invalid){
      console.log('用户名空');

      return;
    }

    if($valid.companyPassword.$invalid){
      console.log('密码空');

      return;
    }
    interfaceService.companyLogin($scope.company,function (data,headers,config) {
      console.log(JSON.stringify(data));
      if(data.rescode == rescode.SUCCESS){
        $scope.loginUser = data.data;

        $cookies.put('yltComMName',$scope.company.memberName);
        if($scope.company.isRemember){
          $cookies.put('yltComIsReme','true');
          $cookies.put('yltComPass',$scope.company.password);
        }else{
          $cookies.put('yltComIsReme','false');
          $cookies.remove('yltComPass');
        }
        $cookies.putObject('yltUser',$scope.loginUser);
      }
    });
  }

  // 承运方登录
  $scope.onLoginUser = function ($valid) {
    if($valid.userMemberName.$invalid){
      console.log('用户名空');

      return;
    }

    if($valid.userPassword.$invalid){
      console.log('密码空');

      return;
    }
    interfaceService.userLogin($scope.user,function (data,headers,config) {
      console.log(JSON.stringify(data));
      if(data.rescode == rescode.SUCCESS){
        $scope.loginUser = data.data;

        $cookies.put('yltUserMName',$scope.user.memberName);
        if($scope.user.isRemember){
          $cookies.put('yltUserIsReme','true');
          $cookies.put('yltUserPass',$scope.user.password);
        }else{
          $cookies.put('yltUserIsReme','false');
          $cookies.remove('yltUserPass');
        }
        $cookies.putObject('yltUser',$scope.loginUser);
      }
    });
  }


  initCompanyForm();
  initUserForm();
  $scope.loginUser = $cookies.getObject('yltUser');

}]);
