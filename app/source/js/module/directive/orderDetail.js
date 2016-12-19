yonglongApp.directive('orderdetail',function () {
  return{
    restrict: 'A',
    replace: true,
    // template:'<h1>hello world</h1>'
    templateUrl: 'template/directive/order_detail.html'
  }
});
