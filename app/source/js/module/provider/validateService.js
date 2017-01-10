yonglongApp.service('validateService',['$rootScope',function ($rootScope) {

  this.mobile = function (mobile,swalFlag) {
    var code = {
      result:true,
      msg:'手机号正确'
    }
    if(mobile==null || mobile == undefined || mobile==''){
      code = {
        result:false,
        msg:'手机号不能为空'
      }
    }else if(mobile.length!=11 || isNaN(mobile)){
      code = {
        result:false,
        msg:'请输入11位有效的手机号码'
      }
    }else{
      // var myreg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,2,3,5-9]))\\d{8}$/;
      // if(!myreg.test(mobile)){
      //   code= {
      //     result:false,
      //     msg:'请输入有效的手机号码'
      //   }
      // }
    }

    if(swalFlag && !code.result){
      swal('验证',code.msg,'error');
    }
    return code;
  }




}])
