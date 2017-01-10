yonglongApp.controller('adminEditNewsController',['$scope','$stateParams','$timeout','dropifyProvider','interfaceService','rescode',
  function ($scope,$stateParams,$timeout,dropifyProvider,interfaceService,rescode) {
    console.log("newsId: "+$stateParams.newsId);

    $scope.reg = {
      id:$stateParams.newsId,
      title:'',
      note:'',
      linkurl:'',
      thumbImg:''
    }

    $scope.regfile1 = {
      name:'thumbImgFile',
      file:'',
    }

    var files = [$scope.regfile1];

    var httpList = function () {
      var params = {
        id:$scope.reg.id
      }
      interfaceService.articleDetail(params,function (data,headers,config) {
        // console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS) {
          $scope.reg = data.data;
        }
        $timeout(function () {
          dropifyProvider.dropify();
        },10);

      });
    }

    $scope.onSubmit = function($valid){
      if($valid){
        interfaceService.articleEdit($scope.reg,files,function (data,headers,config) {
          console.log(JSON.stringify(data));
          if(data.rescode==rescode.SUCCESS){
            swal({
              title:"编辑成功！",
              text:"已成功编辑此条新闻。",
              type:"success",
              confirmButtonText:"确定",
            },function () {
              httpList();
            });
          }
        });
      }else{
        console.log("$valid:"+$valid);
      }
    };

    if($scope.reg.id!=0){
      httpList();
    }else{
      dropifyProvider.dropify();
    }

  }]);
