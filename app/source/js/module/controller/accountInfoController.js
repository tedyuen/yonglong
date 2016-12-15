/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('accountInfoController',['$scope','countupProvider',
  function ($scope,countupProvider) {
    countupProvider.countup();

  }
]);
