yonglongApp.service('loadingService',['$timeout',function ($timeout) {
  this.showLoading = function (str) {
    var loadingText = "正在加载...";
    if(str!=undefined && str!=''){
      loadingText = str+"...";
    }
    $.blockUI({
      message: '<h4 id="own-block-text" style="color:white;"> '+loadingText+'</h4>'
      ,css: {
        border: 'none',
        padding: '15px',
        backgroundColor: '#000',
        '-webkit-border-radius': '10px',
        '-moz-border-radius': '10px',
        opacity: .5,
        color: '#fff'
      }
    });
    $timeout(function () {
      // $.unblockUI();
      $('#own-block-text').html('超时,点击关闭等待!');
      $('.blockOverlay').attr('title','点击关闭等待').click($.unblockUI);
    },5000);
  }
  this.closeLoading = function () {
    $.unblockUI();
  }
}]);
