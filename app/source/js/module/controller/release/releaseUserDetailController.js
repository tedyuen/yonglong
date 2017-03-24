/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseUserDetailController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode',
  function($scope,$timeout,$rootScope, interfaceService, rescode) {

  $scope.salePoint = [
    {id:1,name:'浦东'},
    {id:2,name:'浦西'}
  ];


    $scope.detail = {
      customerName: '',
      customerNumber: '',
      id: '',
      linkAddress: '',
      linkFox: '',
      linkMobile: '',
      linkName: '',
      remark: '',
      salePoint: 1,
      userName: '',
      userType: 0,
    };

    var initPass = function () {
      $scope.detail.passwordOld = '';
      $scope.detail.passwordNew = '';
      $scope.detail.passwordConfirm = '';
    }

    var getUserInfo = function() {
      interfaceService.releaseUserDetail({id:$rootScope.loginUser.userid}, function(data, headers, config) {
        console.log(JSON.stringify(data));
        $scope.detail = data.data;
        initPass();
      });
    };


    var validPass = function () {

    }


    $scope.onSubmit = function($valid) {
      if ($valid) {
        if(!$scope.val.passOld){
          swal({
            title:'出错',
            text:'修改密码，旧密码不能为空!',
            type:'error',
            confirmButtonText:'确定'
          });
          return;
        }
        if(!$scope.val.passConfirm){
          swal({
            title:'出错',
            text:'修改密码，两次输入密码不一致!',
            type:'error',
            confirmButtonText:'确定'
          });
          return;
        }
        swal({
          title: "确定修改个人资料吗?",
          text: "您即将修改个人资料!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,修改!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          interfaceService.releaseUserUpdate($scope.detail, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              swal({
                title: "修改成功！",
                text: "已成功修改个人信息。",
                type: "success",
                confirmButtonText: "确定",
              }, function() {});
            }else{
              swal({
                title:'出错',
                text:data.resdesc,
                type:'error',
                confirmButtonText: "确定",
              });
            }
          });
        });
      } else {
        console.log("$valid:" + $valid);
      }
    };

    $scope.getUserInfo =function () {
      getUserInfo();
    };

    $scope.val = {
      passOld:true,
      passNew:true,
      passConfirm:true,
      flag:false // 需要不需要校验
    }

    $scope.passValid = function (flag) {
      if(flag){
        $scope.val.flag = true;
      }

      if($scope.val.flag){
        if($scope.detail.passwordNew!=''){
          $scope.val.passOld = $scope.detail.passwordOld!='';
          $scope.val.passConfirm = $scope.detail.passwordConfirm == $scope.detail.passwordNew;
        }else{
          $scope.val.flag = false;
          $scope.val.passOld = true;
          $scope.val.passConfirm = true;
        }
      }
    };


    getUserInfo();

  }
]);
