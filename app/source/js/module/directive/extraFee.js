yonglongApp.directive('extraFee',['$compile',function($compile){
  return{
    restrict: 'AE',
    replace: true,
    scope: {
      initStr:'=',
      resultList:'='
    },
    templateUrl: 'template/directive/extra_fee.html',
    controller: function($scope){
      $scope.resultList = [];
      console.log($scope.initStr);
      var strArray = $scope.initStr.split(';');
      for(var n in strArray){
        $scope.resultList.push({
          feeName:strArray[n],
          feeValue:0,
          id:0,
          sort:0,
          isInit:true
        });
      }

      $scope.addExtra = function(){
        swal({
          title: "新增",
          text: "您即将新增一项额外费用",
          type: "input",
          showCancelButton: true,
          closeOnConfirm: false,
          cancelButtonText: "取消",
          confirmButtonText: "是的,新增!",
          animation: "slide-from-top",
          inputPlaceholder: "输入额外费用的名称"
        },
        function(inputValue){
          if (inputValue === false){

          }else if (inputValue === "") {
            swal.showInputError("请输入额外费用的名称!");
            // swal('错误','额外费用名称不能为空！','error');
            // return false
          }else{
            $scope.$apply(function () {
              $scope.resultList.push({
                feeName:inputValue,
                feeValue:0,
                id:0,
                sort:0,
                isInit:false
              });
            });
            sweetAlert.close();
          }


        });
      };

      $scope.deleteItem = function (item) {
        for(var i=0;i<$scope.resultList.length;i++){
          if($scope.resultList[i].feeName==item.feeName) {
            $scope.resultList.splice(i,1);
            break;
          }
        }
        // swal({
        //   title: "删除额外费用",
        //   text: "您即将删除一项额外费用",
        //   type: "info",
        //   showCancelButton: true,
        //   cancelButtonText: "取消",
        //   confirmButtonText: "是的,删除!",
        // },
        // function(){
        //
        // });

      }
    }
  }
}]);
