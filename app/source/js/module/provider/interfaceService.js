yonglongApp.service('interfaceService',['httpService','URL_CONS','sessionService','rescode',
  function (httpService,URL_CONS,sessionService,rescode) {

  this.doHttp = function (url,sub,params,success,error,files) {
    var base = {
      // token:sessionService.getSession().token
    }
    if(sessionService.getSession() != undefined){
      base = {
        token:sessionService.getSession().token
      }
    }
    jQuery.extend(params,sub);
    jQuery.extend(params,base);
    // console.log(JSON.stringify(params));
    var request = {
      json:params,
      files:files
    }
    // console.log("request json str:-->  "+request.json);
    var _opts = jQuery.extend({
      timeout : 'getError404Timeout'
    },null);
    // _opts.url = URL_CONS.serverUrl+"/"+sub.method;
    _opts.url = url;
    _opts.method = 'POST';
    _opts.data = request;
    // _opts.params = request;
    _opts.success = function (data,headers,config,status) {
      if(data.rescode==rescode.ERROR_TOKEN){

        swal({
          title: "登录失效",
          text: "您的登录已经失效，请前往重新登录!",
          type: "error",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "前往登录!",
          closeOnConfirm: false
        },function () {
          window.location.href = 'index.html';
        });
      }
      if(success){
        // swal('success','success','success');
        success(data,headers,config,status);
      }
    };
    _opts.error = function (data,headers,config,status) {
      swal('错误','网络请求失败，请重试！','error');
      if(error){
        error(data,headers,config,status);
      }
    };
    httpService.http(_opts);
  }


  this.doHttpMethod = function (method,params,success,error,files) {
    var sub = {
      method:method,
    };
    if(files){
      this.doHttp(URL_CONS.serverFileUrl,sub,params,success,error,files);
    }else{
      this.doHttp(URL_CONS.serverUrl,sub,params,success,error);
    }
  }


  // 创建订单
  this.companyCreateOrder = function (params,success,error) {
    var sub = {
      method:URL_CONS.companyCreateOrder,
      orderStatus:1,
      orderCreditRank:5
    };
    this.doHttp(URL_CONS.serverUrl,sub,params,success,error);
  }

  // 1.2 订单列表
  this.companyOrderList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyOrderList,params,success,error);
  }

  // 1.3 订单详情
  this.companyDetailOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyDetailOrder,params,success,error);
  }

  // 1.5 订单删除
  this.deleteOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.deleteOrder,params,success,error);
  }
  // 1.6 我要接单列表
  this.companyListGetorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyListGetorder,params,success,error);
  }
  // 1.7 已接订单列表
  this.companyListMyorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyListMyorder,params,success,error);
  }

  // 2.1 注册
  this.companyRegister = function (params,files,success,error) {
    this.doHttpMethod(URL_CONS.companyRegister,params,success,error,files);
  }

  // 2.2 查看个人信息
  this.companyUserinfo = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyUserinfo,params,success,error);
  }

  // 2.3 更新用户信息
  this.companyUpdateinfo = function (params,files,success,error) {
    this.doHttpMethod(URL_CONS.companyUpdateinfo,params,success,error,files);
  }
  // 2.4 接单方详情
  this.companyUserDetail = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyUserDetail,params,success,error);
  }

  // 2.5承运方详情
  this.busUserDetail = function (params,success,error) {
    this.doHttpMethod(URL_CONS.busUserDetail,params,success,error);
  }

  // 3.1 接单
  this.fleetTakeOfferOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.fleetTakeOfferOrder,params,success,error);
  }
  // 3.3 订单取消
  this.cancelOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.cancelOrder,params,success,error);
  }

  // 4.1好友分页列表
  this.companyListFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyListFriend,params,success,error);
  }
  // 4.2通过手机号查询车主
  this.companyListBusowners = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyListBusowners,params,success,error);
  }
  // 4.3新增好友
  this.companyAddFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyAddFriend,params,success,error);
  }
  // 4.4解除好友关系
  this.companyDelFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.companyDelFriend,params,success,error);
  }
  // 5.1个人账户信息
  this.accountInfo = function (params,success,error) {
    this.doHttpMethod(URL_CONS.accountInfo,params,success,error);
  }
  // 5.2 添加提现账户
  this.addBankCard = function (params,success,error) {
    this.doHttpMethod(URL_CONS.addBankCard,params,success,error);
  }

  // 5.3 提现账户列表
  this.listBankCard = function (params,success,error) {
    this.doHttpMethod(URL_CONS.listBankCard,params,success,error);
  }
  // 5.4 删除提现账户
  this.delBankCard = function (params,success,error) {
    this.doHttpMethod(URL_CONS.delBankCard,params,success,error);
  }
  // 5.5 提现列表
  this.listRefundApply = function (params,success,error) {
    this.doHttpMethod(URL_CONS.listRefundApply,params,success,error);
  }
  // 5.6 创建提现工单
  this.addRefundApply = function (params,success,error) {
    this.doHttpMethod(URL_CONS.addRefundApply,params,success,error);
  }
  // 5.7 创建工单-查询订单
  this.cashList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.cashList,params,success,error);
  }

  // 6.1 订单
  this.reportList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.reportList,params,success,error);
  }


  /////----- ------  以下是user接口
  // b1.1 我要接单列表
  this.userListGetorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userListGetorder,params,success,error);
  }
  // B1.2 已接订单列表
  this.userListMyorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userListMyorder,params,success,error);
  }
  // B1.3 已接指派订单列表
  this.userListDispatchorder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userListDispatchorder,params,success,error);
  }



  // b2.1 注册
  this.userRegister = function (params,files,success,error) {
    this.doHttpMethod(URL_CONS.userRegister,params,success,error,files);
  }
  // B2.2 查看个人信息
  this.userUserinfo = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userUserinfo,params,success,error);
  }
  this.userUpdateInfo = function (params,files,success,error) {
    this.doHttpMethod(URL_CONS.userUpdateInfo,params,success,error,files);
  }

  // b3.1 接单
  this.userTakeOfferOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userTakeOfferOrder,params,success,error);
  }
  // b3.2 确认送到哦啊
  this.userOverOfferOrder = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userOverOfferOrder,params,success,error);
  }

  // b4.1好友分页列表
  this.userListFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userListFriend,params,success,error);
  }
  // b4.2好友请求通过/拒绝
  this.userEditFriend = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userEditFriend,params,success,error);
  }


  // B7.1 发车费列表
  this.userDispatchList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.userDispatchList,params,success,error);
  }


  ///  以下是管理员接口
  // A11.1 登录
  this.adminLogin = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminLogin,params,success,error);
  }

  // A1.1 订单列表
  this.adminGetOrderList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminGetOrderList,params,success,error);
  }

  // A2.1 承运方会员列表
  this.adminGetBusUserList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminGetBusUserList,params,success,error);
  }
  // A2.2 发货方会员列表
  this.adminGetGoodsUserList = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminGetGoodsUserList,params,success,error);
  }


  // A2.3 会员审核通过/取消
  this.adminAuditSysMember = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminAuditSysMember,params,success,error);
  }



  // A3.1 提现列表
  this.adminListSysRefund = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminListSysRefund,params,success,error);
  }
  // A3.2 提现通过审核
  this.adminAuditSysRefund = function (params,success,error) {
    this.doHttpMethod(URL_CONS.adminAuditSysRefund,params,success,error);
  }

    // 12.1 编辑文章
    this.articleEdit = function (params,files,success,error) {
      this.doHttpMethod(URL_CONS.articleEdit,params,success,error,files);
    }
    // 12.3 文章列表
    this.articleList = function (params,success,error) {
      this.doHttpMethod(URL_CONS.articleList,params,success,error);
    }

    // 12.3 删除文章
    this.articleDelete = function (params,success,error) {
      this.doHttpMethod(URL_CONS.articleDelete,params,success,error);
    }

    // 12.3 文章详情
    this.articleDetail = function (params,success,error) {
      this.doHttpMethod(URL_CONS.articleDetail,params,success,error);
    }




}]);
