yonglongApp.controller('mainController',['$rootScope','$scope','$cookies','$timeout',function ($rootScope,$scope,$cookies,$timeout) {
  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      console.info(fromState + "->" + toState, toParams, fromParams);
    }
  )

  $timeout(function () {
    var uiState = new UiState();
    uiState.ready()
  },50);
}]);
