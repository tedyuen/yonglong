/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('comReleaseOrderListController', ['$scope','$timeout','$cookies','$rootScope','$interval','$location', 'interfaceService', 'rescode','baseDataService','showDatePickerProvider','cookiesService',
  function($scope,$timeout,$cookies,$rootScope,$interval,$location, interfaceService, rescode,baseDataService,showDatePickerProvider,cookiesService) {
    showDatePickerProvider.showDotDatePicker();


    $scope.salePoint = [
      {id:-1,name:'全部'},
      {id:1,name:'浦东'},
      {id:2,name:'浦西'}
    ];

    $scope.statusAmount = [
      {id:-1,name:'全部'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];

    $scope.statusAmountDetail = [
      {id:0,name:'初始'},
      {id:1,name:'已结'},
      {id:2,name:'未结'},
    ];

    $scope.status = [
      {id:-1,name:'全部'},
      {id:0,name:'新业务'},
      {id:1,name:'放单中'},
      {id:2,name:'已完成'},
      {id:3,name:'已拒绝'},
      {id:4,name:'没预配'},
      {id:6,name:'爆仓'},
      {id:5,name:'处理中'},
      {id:7,name:'船期早'},
    ];

    $scope.statusDetail = [
      {id:0,name:'新业务'},
      {id:1,name:'放单中'},
      {id:2,name:'已完成'},
      {id:3,name:'已拒绝'},
      {id:4,name:'没预配'},
      {id:6,name:'爆仓'},
      {id:5,name:'处理中'},
      {id:7,name:'船期早'},
    ];



   $scope.require = {
     applyEndTime:'',
     applyStartTime:'',
     billno:'',
     companyid:0,
     customerid:0,
     finishEndTime:'',
     finishStartTime:'',
     orderNumber:'',
     pageno:1,
     pagesize:20,
     saleName:'',
     salePoint:-1,
     status:-1,
     statusAmount:-1,
   };

    $scope.results={
      currPageNum : 1,
      totalPages : 1,
      pageSize : $scope.require.pagesize
    };


    $scope.switchPage = function (page) {
      $scope.require.pageno = page;
      interfaceService.showLoading('正在查询');
      httpRequest();
    }


    var httpRequest = function (callback) {
      interfaceService.releaseOrderList($scope.require, function(data, headers, config) {
        console.log("results:"+JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.results = data.data;
          $scope.allCheckbox = [];
          $scope.idCheckbox = [];
        }else{
          swal({
            title:'出错',
            text:data.resdesc,
            type:'error',
            confirmButtonText: "确定",
          });
        }
        if(callback){
          callback();
        }
      });
    };

    $scope.refreshList = function () {
      interfaceService.showLoading('正在加载...');
      httpRequest();
    }


    // 查询船公司列表
    var httpCompanyList = function (callback) {
      var params = {
        companyCode:'',
        companyName:''
      }
      $scope.companyList = [
        {
          "companyCode": "测试代码",
          "companyName": "全部",
          "id": 0
        }
      ];
      $scope.companyList2 = [];

      interfaceService.releaseCompanyList(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          for(var index in data.data.pageData){
            $scope.companyList.push(data.data.pageData[index]);
            $scope.companyList2.push(data.data.pageData[index]);
          }
        }
        if(callback){
          $timeout(callback,20);
        }
      });
    };


    var httpCustomerList = function (callback) {
      var params = {
        customerName:'',
        salePoint:-1,
        userType:0
      }
      $scope.customerList = [
        {
          customerName:'全部',
          id:0
        }
      ];
      interfaceService.releaseUserList(params, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          if(data.data != undefined && data.data !=null){
            for(var index in data.data.pageData){
              $scope.customerList.push(data.data.pageData[index]);
            }
          }
        }
        $timeout(function () {
          httpRequest(timePromise);
        },20);
      });
    };




    // 选择列表中的复选框
    $scope.idCheckbox = [];//需要批量配置的id
    $scope.allCheckbox = [];//全选
    $scope.isSelected = function(result){
      return $scope.idCheckbox.indexOf(result)>=0;
    }
    $scope.updateCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.idCheckbox.push(result);
        if($scope.idCheckbox.length==$scope.results.pageData.length){
          $scope.allCheckbox = ['all'];
        }
      }else{
        var idx = $scope.idCheckbox.indexOf(result);
        $scope.idCheckbox.splice(idx,1);
        if($scope.idCheckbox.length<$scope.results.pageData.length){
          $scope.allCheckbox = [];
        }
      }
    }

    // 全选
    $scope.isAllSelected = function(result){
      return $scope.allCheckbox.indexOf(result)>=0;
    }
    $scope.updateAllCheckboxSelect = function ($event,result) {
      var checkbox = $event.target ;
      var checked = checkbox.checked ;
      if(checked){
        $scope.allCheckbox.push(result);
        $scope.idCheckbox = [];
        var tempData = $scope.results.pageData.concat();
        for(var index in tempData){
          $scope.idCheckbox.push(tempData[index].id);
        }
        // $scope.idCheckbox = $scope.results.pageData.concat();
      }else{
        var idx = $scope.allCheckbox.indexOf(result);
        $scope.allCheckbox.splice(idx,1);
        $scope.idCheckbox = [];
      }
    };
    // 选择列表中的复选框

    $scope.countUp = 10;
    var timePromise = function () {
      $scope.countUp = 10;
      var tempInterval = $interval(function() {
        if($location.url()!='/main/companyinner/com_order_list' && $location.url()!='/main/userinner/com_order_list'){
          $interval.cancel(tempInterval);
          tempInterval = undefined;
        }
        if ($scope.countUp <= 0) {
          $interval.cancel(tempInterval);
          tempInterval = undefined;
          interfaceService.showLoading('自动查询');
          httpRequest(timePromise);
        } else {
          $scope.countUp--;
        }
      }, 1000);
    }


    $scope.printDetail = function () {
      var print = {
        d:[],
        c:'',
        s:$scope.require.applyStartTime,
        e:$scope.require.applyEndTime,
      };

      for(var index3 in $scope.customerList){
        var temp3 = $scope.customerList[index3];
        if(temp3.id==$scope.require.customerid){
          print.c = temp3.customerName;
          break;
        }
      }

      for(var index1 in $scope.results.pageData){
        var temp1 = $scope.results.pageData[index1];
        for(var index2 in $scope.idCheckbox){
          var temp2 = $scope.idCheckbox[index2];
          if(temp1.id==temp2){
            var tempPrint = {
              b:temp1.billno,
              x:temp1.boxdesc,
              d:temp1.amountDocument,
              s:temp1.amountService,
            }
            print.d.push(tempPrint);
          }
        }
      }
      $cookies.putObject('rPrint',print,cookiesService.cookiesDate());
      // console.log("==> print:"+JSON.stringify(print));
      var link = "release_print.html";
      window.open(link);
    }


    $scope.noteRequire = {
      title:'',
      createEndTime:'',
      createStartTime:'',
      showType:0,
      pageno:1,
      pagesize:1,
    };
    $scope.noteResult = {
      currPageNum : 1,
      totalPages : 1,
      pageSize : $scope.noteRequire.pagesize
    }
    var httpNoteList = function(flag){

      interfaceService.releaseNoteList($scope.noteRequire, function(data, headers, config) {
        console.log(JSON.stringify(data));
        if (data.rescode == rescode.SUCCESS) {
          $scope.noteResult = data.data;
          if($scope.noteResult.totalRows>0){
            if(flag){
              $('#note-alert').modal('show');
            }
          }else{
            $('#note-alert').modal('hide');
          }
        }
        if(flag){
          $timeout(function(){
            httpCompanyList(httpCustomerList);
          },20);
        }
      });
    }
    $scope.nextNote = function(){
      $scope.noteRequire.pageno++;
      httpNoteList();
    }

    $scope.preNote = function(){
      $scope.noteRequire.pageno--;
      httpNoteList();
    }

    httpNoteList(true);
  }
]);
