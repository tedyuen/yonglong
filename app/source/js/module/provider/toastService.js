yonglongApp.service('toastService',function () {

  this.toastSuccess = function (option) {
    $.toast({
      heading: option.heading,
      text: option.text,
      position: 'top-right',
      loaderBg:'#ff6849',
      icon: 'success',
      hideAfter: 2000,
      stack: 6
    });
  }
  this.toastWarning = function (option) {
    $.toast({
      heading: option.heading,
      text: option.text,
      position: 'top-right',
      loaderBg:'#ff6849',
      icon: 'warning',
      hideAfter: 2000,
      stack: 6
    });
  }

  //验证码发送
  this.sendCodeToast = function (flag,str) {
    if(flag){
      this.toastSuccess({
        heading: '发送成功',
        text: '验证码发送成功,请查看您的短信收件箱，输入有效验证码，并完成表单。',
      })
    }else{
      if(str){
        this.toastWarning({
          heading: '发送失败',
          text: str,
        });
      }else{
        this.toastWarning({
          heading: '发送失败',
          text: '验证码发送失败,请查看您的网络设置并重试。',
        });
      }

    }
  }

})
