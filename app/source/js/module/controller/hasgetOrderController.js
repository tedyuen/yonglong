/**
 * Created by tedyuen on 16-12-15.
 */
yonglongApp.controller('hasgetOrderController',['$scope','$timeout','showDatePickerProvider',
  function ($scope,$timeout,showDatePickerProvider) {
    showDatePickerProvider.showDatePicker();


}]);
