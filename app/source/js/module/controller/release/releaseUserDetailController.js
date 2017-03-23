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


    $scope.onSubmit = function($valid) {
      if ($valid) {
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
    }

    $scope.passValid = function () {
      if($scope.detail.passwordNew!=''){
        if($scope.detail.passwordOld==''){
          $scope.val.passOld = false;
        }

      }
    };


    getUserInfo();

  }
]);
