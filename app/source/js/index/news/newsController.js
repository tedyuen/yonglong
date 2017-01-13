ylIndex.controller('newsController',['$scope','interfaceService','rescode',function ($scope,interfaceService,rescode) {


  $scope.showCount = 5;
  var perCount = ($scope.showCount-1)/2;//前后各显示几个
  $scope.preShow = false;
  $scope.nextShow = false;
  $scope.pageParams = {
    pageno:1,
    pagesize:5
  }

  $scope.pageArray=[];
  $scope.selectPageArray=[];

  var changeData = function () {
    $scope.pageArray =[];
    $scope.selectPageArray=[];

    $scope.firstPage = {
      pageNum:1,
      isCurrent:$scope.articleResults.currPageNum==1,
      canClick:$scope.articleResults.currPageNum!=1
    }


    // console.log("perCount:"+perCount);
    // console.log("$scope.articleResults.currPageNum:"+$scope.articleResults.currPageNum);
    // console.log("scope.articleResults.totalPages:"+$scope.articleResults.totalPages);
    if(($scope.articleResults.totalPages-2) <= $scope.showCount){
      // console.log('全显示');
      $scope.preShow = false;
      $scope.nextShow = false;
    }else {
      // console.log('不全显示');
      $scope.preShow = (perCount+2)<$scope.articleResults.currPageNum;
      $scope.nextShow = (perCount+1)<($scope.articleResults.totalPages - $scope.articleResults.currPageNum);
    }
    console.log($scope.preShow);
    console.log($scope.nextShow);
    // console.log($scope.preShow+":"+$scope.nextShow);
    for(var i=2;i<$scope.articleResults.totalPages;i++){

    // for(var i=$scope.preShow?$scope.articleResults.currPageNum-perCount:2
    //   ;i<$scope.nextShow?($scope.articleResults.totalPages - $scope.articleResults.currPageNum + 1):$scope.articleResults.totalPages
    //   ;i++){
      var item = {
        pageNum:i,
        isCurrent:$scope.articleResults.currPageNum==i,
        canClick:$scope.articleResults.currPageNum!=i
      }
      $scope.pageArray.push(item);
    }

    if((($scope.articleResults.totalPages-2)>$scope.showCount)){
      for(var i=0;i<$scope.showCount;i++){
        if(($scope.articleResults.currPageNum>3)&($scope.articleResults.currPageNum<($scope.articleResults.totalPages-3))){
          // console.log('选择中间3个'+$scope.articleResults.currPageNum);
          // console.log($scope.articleResults.currPageNum-2+i);
          $scope.selectPageArray.push($scope.pageArray[$scope.articleResults.currPageNum-4+i])
        }else if($scope.articleResults.currPageNum<=3){
          // console.log('选择前3个');
          $scope.selectPageArray.push($scope.pageArray[i]);
        }else if($scope.articleResults.currPageNum>=($scope.articleResults.totalPages-3)){
          // console.log('选择后3个');
          $scope.selectPageArray.push($scope.pageArray[$scope.articleResults.totalPages-2-$scope.showCount+i]);
        }
      }
    }else{
      for(var i=0;i<$scope.pageArray.length;i++){
        $scope.selectPageArray.push($scope.pageArray[i]);
      }
    }


    if($scope.articleResults.totalPages!=1){
      $scope.lastPage = {
        pageNum:$scope.articleResults.totalPages,
        isCurrent:$scope.articleResults.currPageNum==$scope.articleResults.totalPages,
        canClick:$scope.articleResults.currPageNum!=$scope.articleResults.totalPages
      }
      console.log('最后一页'+'  '+'pageNum'+':'+($scope.articleResults.totalPages)+'---'+'isCurrent'+':'+($scope.articleResults.totalPages+1)+'---'+'canClick'+":"+$scope.articleResults.totalPages);
    }
  }


  var getArticleList = function () {

    interfaceService.getArticleList($scope.pageParams,function (data,headers,config) {
      console.log(JSON.stringify(data));
      if(data.rescode == rescode.SUCCESS){
        $scope.articleResults = data.data;
        // $scope.totalPages = $scope.articleResults.totalPages;
        changeData();

      }else{

      }
    });

  }

  getArticleList();

  $scope.switchPage = function (pageNum) {
    $scope.pageParams.pageno = pageNum;
    console.log('==>'+pageNum);
    getArticleList();
  }


  $scope.mySelfClick = function () {
    console.log('个人中心'+'---'+$scope.articleResults+'---'+$scope.articleResults.token);
    if($scope.articleResults && $scope.articleResults.token){
      console.log('if');
      if($scope.loginUser.role=='company'){
        window.location.href = 'shell.html#!/main/companyinner/create_order';
      }else if($scope.loginUser.role=='user'){
        window.location.href = 'shell.html#!/main/userinner/wanner_order';
      }
    }else {
      console.log('else');
    }
  }

}]);
