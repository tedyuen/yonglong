yonglongApp.provider('countupProvider',function () {
  this.$get = function () {
    return {
      countup:function () {
        console.log('countup');
        // jQuery(".counter").counterUp({
        //   delay: 100,
        //   time: 1200
        // });
      }
    }
  }
});
