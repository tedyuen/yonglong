/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller("mainController",['$rootScope','$scope','$timeout',function ($rootScope,$scope,$timeout) {
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
