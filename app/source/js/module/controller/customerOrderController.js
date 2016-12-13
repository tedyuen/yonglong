/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.controller('customerOrderController',['showDatePickerProvider',function (showDatePickerProvider) {
  console.log('customerOrderController');
  showDatePickerProvider.showDatePicker();
}]);
