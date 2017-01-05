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

  // $scope.company = {
  //   memberName:'',
  //   password:'',
  //   isRemember:true
  // }

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

    // $cookies.remove('yltUser');

    $scope.loginUser = $cookies.getObject('yltUser');
    // console.log();


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
        // $cookies.put('yltRole',$scope.companyLoginResult.role);
        // $cookies.put('yltCompanyName',$scope.companyLoginResult.companyName);
        // $cookies.put('yltMemberName',$scope.companyLoginResult.memberName);
        // $cookies.put('yltToken',$scope.companyLoginResult.token);
        // $cookies.put('yltEmail',$scope.companyLoginResult.email);
        // $cookies.put('yltMobilePhone',$scope.companyLoginResult.mobilePhone);


      }
    });

    // document.cookie = "yonglongRole="+role;
    // if(role=='company'){
    //   window.location.href = 'shell.html#!/main/companyinner/create_order';
    // }else if(role=='user'){
    //   window.location.href = 'shell.html#!/main/userinner/wanner_order';
    // }
  }

  initCompanyForm();

}]);
