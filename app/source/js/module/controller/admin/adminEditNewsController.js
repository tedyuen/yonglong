yonglongApp.controller('adminEditNewsController',['$scope','$stateParams','dropifyProvider','interfaceService','rescode',
  function ($scope,$stateParams,dropifyProvider,interfaceService,rescode) {
    console.log("newsId: "+$stateParams.newsId);
    dropifyProvider.dropify();

    $scope.reg = {
      id:$stateParams.newsId,
      title:'',
      note:'',
      linkurl:'',
      thumbImg:''
    }

    $scope.regfile1 = {
      name:'nameCardFile',
      file:'',
    }

    var files = [$scope.regfile1];


    $scope.onSubmit = function($valid){
      if($valid){
        // interfaceService.companyUpdateinfo($scope.reg,files,function (data,headers,config) {
        //   // console.log(JSON.stringify(data));
        //   if(data.rescode==rescode.SUCCESS){
        //     swal({
        //       title:"修改成功！",
        //       text:"已成功修改个人信息。",
        //       type:"success",
        //       confirmButtonText:"确定",
        //     },function () {
        //     });
        //   }
        // });
      }else{
        console.log("$valid:"+$valid);
      }
    };

  }]);
