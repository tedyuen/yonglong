yonglongApp.directive('creditRank',function () {
  return{
    restrict: 'A',
    replace: true,
    template:'<div style="overflow:hidden;width:'+(16*parseInt(3))+'px;"><img src="images/stars.png"></div>'
  }
});
