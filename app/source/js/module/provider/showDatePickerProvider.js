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
        jQuery('.mydatetimepicker').datetimepicker({
          language: 'zh-CN',
          autoclose: true,
          todayBtn: true,
          format: "yyyy-mm-dd hh:ii",
          todayHighlight: true,
          minuteStep: 10,
          pickerPosition: "top-left"
        });
      },
      showPrerecordDatePicker:function () {
        jQuery('.mydatepicker').datepicker({
          language: 'zh-CN',
          autoclose: true,
          format: "yyyymmdd",
          todayHighlight: true
        });
      },
      showDotDatePicker:function () {
        jQuery('.mydatepicker').datepicker({
          language: 'zh-CN',
          autoclose: true,
          format: "yyyy.mm.dd",
          todayHighlight: true
        });
      }
    }
  }
});
