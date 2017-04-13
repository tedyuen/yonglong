/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('comReleaseUserDetailController', ['$scope','$timeout','$rootScope','$cookies','$location','cookiesService', 'interfaceService', 'rescode',
  function($scope,$timeout,$rootScope,$cookies,$location,cookiesService, interfaceService, rescode) {

  $scope.salePoint = [
    {id:1,name:'浦东'},
    {id:2,name:'浦西'}
  ];

  var sourceType = 1;
    if($location.url()=='/main/companyinner/com_user_detail'){
      sourceType = 1;
    }else if($location.url()=='/main/userinner/com_user_detail'){
      sourceType = 2;
    }

    $scope.detail = {
      customerName: '',
      customerNumber: '',
      id: '',
      linkAddress: '',
      linkFox: '',
      linkMobile: '',
      linkName: '',
      remark: '',
      password: '-1',
      salePoint: 1,
      userName: '',
      userType: 0,
      sourceType:sourceType
    };


    var getUserInfo = function() {
      if($rootScope.loginUser.releaseType==0){
        $scope.detail.userName = $rootScope.loginUser.memberName;
        $scope.detail.customerName = $rootScope.loginUser.companyName;


      }else if($rootScope.loginUser.releaseType==1){
        interfaceService.releaseUserDetail({id:$rootScope.loginUser.releaseUserid}, function(data, headers, config) {
          console.log(JSON.stringify(data));
          $scope.detail = data.data;
        });
      }
    };

    $scope.onSubmit = function($valid) {
      if ($valid) {
        if($rootScope.loginUser.releaseType==0){
          swal({
            title: "确定初始化放箱资料吗?",
            text: "您即将初始化放箱资料!",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,确定!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },function () {
            interfaceService.releaseUserCreate($scope.detail, function(data, headers, config) {
              console.log(JSON.stringify(data));
              if (data.rescode == rescode.SUCCESS) {
                $rootScope.loginUser.releaseType = 1;
                $rootScope.loginUser.releaseUserid = data.data.id;
                $rootScope.loginUser.customerid = data.data.id;
                $rootScope.loginUser.customerName = data.data.customerName;
                $rootScope.loginUser.salePoint = data.data.salePoint;
                $rootScope.loginUser.userType = data.data.userType;
                $cookies.putObject('yltUser', $scope.loginUser, cookiesService.cookiesDate());

                swal({
                  title: "初始化成功！",
                  text: "已成功初始化放箱资料。",
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
        }else{
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
        }
      } else {
        console.log("$valid:" + $valid);
      }
    };

    $scope.getUserInfo =function () {
      getUserInfo();
    };



    getUserInfo();

  }
]);
