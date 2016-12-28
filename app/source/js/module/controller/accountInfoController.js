/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('accountInfoController',['$scope','countupProvider','interfaceService',
  function ($scope,countupProvider,interfaceService) {
    // countupProvider.countup();
    $scope.result = {
      all: 0,
      canpos:0,
      pay:0,
      pos:0,
      posing:0
    }
    var refresh = function () {
      interfaceService.accountInfo({},function (data,headers,config) {
        // console.log(JSON.stringify(data));
        $scope.result = data.data;

      });

    }

    refresh();
  }
]);
