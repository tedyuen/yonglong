yonglongApp.service('loadingService',['$scope','$timeout',function ($scope,$timeout) {
  this.showLoading = function () {
    // $('#wrapper').block({
    //   message: '<h4><img src="images/pixel/busy.gif" /> 正在加载...</h4>'
    //   , css: {
    //     border: '1px solid #fff'
    //   }
    //   // css: {
    //   //   border: 'none',
    //   //   padding: '15px',
    //   //   backgroundColor: '#000',
    //   //   '-webkit-border-radius': '10px',
    //   //   '-moz-border-radius': '10px',
    //   //   opacity: .5,
    //   //   color: '#fff'
    //   // }
    // });
    // $timeout(function () {
    //   $('#wrapper').unblockUI;
    // },2000);
  }
  this.closeLoading = function () {
    $('#wrapper').unblockUI;
  }
}]);
