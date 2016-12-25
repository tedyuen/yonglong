/**
 * Created by tedyuen on 16-12-13.
 */
yonglongApp.provider('showDatePickerProvider',function () {
  this.$get = function () {
    return {
      showDatePicker:function () {
        // console.log('showdatepicker');
        jQuery('.mydatepicker').datepicker({
          language: 'zh-CN',
          autoclose: true,
          format: "yyyy-mm-dd",
          todayHighlight: true
        });
      }
    }
  }
});
