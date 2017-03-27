/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('releaseOrderCreateController', ['$scope','$timeout','$rootScope', 'interfaceService', 'rescode','baseDataService',
  function($scope,$timeout,$rootScope, interfaceService, rescode,baseDataService) {

    var loginUser = $rootScope.loginUser;

    $scope.containerVType = baseDataService.getBoxVol();
    $scope.containerSType = baseDataService.getBoxType();

    $scope.salePoint = [
      {id:1,name:'浦东'},
      {id:2,name:'浦西'}
    ];

    $scope.vtype1 = '20';
    $scope.stype1 = 'GP';
    $scope.boxnum1 = null;

    $scope.vtype2 = '20';
    $scope.stype2 = 'GP';
    $scope.boxnum2 = null;

    $scope.vtype3 = '20';
    $scope.stype3 = 'GP';
    $scope.boxnum3 = null;

    $scope.detail = {
      billno:'',
      boxdesc:'',
      customerName:loginUser.customerName,
      customerNumber:'',
      customerid:loginUser.customerid,
      remark:'',
      salePoint:loginUser.salePoint,
      saleid:0,
      shipname:'',
      shipno:''
    };


    $scope.reset = function () {
      var detail = {
        billno:'',
        boxdesc:'',
        customerName:loginUser.customerName,
        customerNumber:'',
        customerid:loginUser.customerid,
        remark:'',
        salePoint:loginUser.salePoint,
        saleid:0,
        shipname:'',
        shipno:''
      }
      $scope.detail = detail;

      $scope.vtype1 = '20';
      $scope.stype1 = 'GP';
      $scope.boxnum1 = null;

      $scope.vtype2 = '20';
      $scope.stype2 = 'GP';
      $scope.boxnum2 = null;

      $scope.vtype3 = '20';
      $scope.stype3 = 'GP';
      $scope.boxnum3 = null;
    }





    $scope.calBoxDesc = function () {
      var str = '';
      if($scope.boxnum1!=null){
        str += $scope.boxnum1+"X"+$scope.vtype1+$scope.stype1;
      }
      if($scope.boxnum2!=null){
        if(str.length>0){
          str += " ";
        }
        str += $scope.boxnum2+"X"+$scope.vtype2+$scope.stype2;
      }
      if($scope.boxnum3!=null){
        if(str.length>0){
          str += " ";
        }
        str += $scope.boxnum3+"X"+$scope.vtype3+$scope.stype3;
      }
      $scope.detail.boxdesc = str;
    }


    $scope.onSubmit = function($valid) {
      if ($valid) {

        swal({
          title: "确定创建委托书吗?",
          text: "您即将创建委托书!",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "是的,创建!",
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
        },function () {
          interfaceService.releaseOrderCreate($scope.detail, function(data, headers, config) {
            console.log(JSON.stringify(data));
            if (data.rescode == rescode.SUCCESS) {
              swal({
                title: "创建成功！",
                text: "已成功创建了委托书。",
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


  }
]);
