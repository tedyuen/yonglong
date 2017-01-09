ylIndex.controller('newsController',['$scope','interfaceService','rescode',function ($scope,interfaceService,rescode) {
  var getArticleList = function () {
    var params = {
      pageno:1,
      pagesize:10
    }
    interfaceService.getArticleList(params,function (data,headers,config) {
      console.log(JSON.stringify(data));
      if(data.rescode == rescode.SUCCESS){
        $scope.articleResults = data.data;
      }else{

      }
    });
  }

  getArticleList();
}])
