yonglongApp.provider('countupProvider',function () {
  this.$get = function () {
    return {
      countup:function () {
        // $(".counter").counterUp({
        //   delay: 100,
        //   time: 1200
        // });
      }
    }
  }
});
