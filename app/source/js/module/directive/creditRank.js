yonglongApp.directive('creditRank',function () {
  return{
    restrict: 'A',
    replace: true,
    scope:{
      star:'@forStar'
    },
    template:'<div style="overflow:hidden;width:{{star * 16}}px;"><img src="images/stars.png"></div>'
  }
});
