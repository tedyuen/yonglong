yonglongApp.service('alipayService',['$timeout','interfaceService','rescode',
  function ($timeout,interfaceService,rescode) {

  this.alipay = function (result,config_fee) {
    console.log('alipayService');
    interfaceService.alipay({id:result.id},function (data,headers,config) {
      console.log("response:"+JSON.stringify(data));
      if(data.rescode==rescode.SUCCESS){
        if(data.data.orderAmount>0){
          swal({
            title: "确认付款吗?",
            text: "您即将付款"+data.data.orderAmount+"元！\n其中将扣除 " +config_fee +"元手续费",
            type: "warning",
            showCancelButton: true,
            cancelButtonText: "取消",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的,去支付!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          }, function(){
            var $hiddenPanel = $('#payForm');
            $hiddenPanel.html(data.data.sHtmlText);
            $hiddenPanel.find('form').submit();
            // $timeout(function () {
            //   $hiddenPanel.find('form').submit();
            // },100);
          });
        }
      }
    });
  }

    this.alipayDispatchOrder = function (result,config_fee) {
      console.log('alipayDispatchOrder');
      interfaceService.alipayDispatchOrder({id:result.id},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          if(data.data.orderAmount>0){
            swal({
              title: "确认付款吗?",
              text: "您即将付款"+data.data.orderAmount+"元！\n其中将扣除 " +config_fee +"元手续费",
              type: "warning",
              showCancelButton: true,
              cancelButtonText: "取消",
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "是的,去支付!",
              closeOnConfirm: false,
              showLoaderOnConfirm: true,
            }, function(){
              var $hiddenPanel = $('#payForm');
              $hiddenPanel.html(data.data.sHtmlText);
              $hiddenPanel.find('form').submit();
            });
          }
        }
      });
    }

    // 预录付款
    this.alipayImportOrder = function (id) {
      console.log('alipayImportOrder');
      interfaceService.alipayImportOrder({id:id},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(data.rescode==rescode.SUCCESS){
          if(data.data.orderAmount>0){
            var $hiddenPanel = $('#payForm');
            $hiddenPanel.html(data.data.sHtmlText);
            $hiddenPanel.find('form').submit();
          }
        }
      });
    }


    this.alipayDispatch = function (id,httpList) {
      console.log('alipayDispatchOrder');
      interfaceService.alipayDispatch({id:id},function (data,headers,config) {
        console.log("response:"+JSON.stringify(data));
        if(httpList){
          $timeout(function () {
            httpList();
          },500);
        }
        if(data.rescode==rescode.SUCCESS){
          if(data.data.orderAmount>0){
            var $hiddenPanel = $('#payForm');
            $hiddenPanel.html(data.data.sHtmlText);
            $hiddenPanel.find('form').submit();
            // swal({
            //   title: "确认付款吗?",
            //   text: "您即将付款"+data.data.orderAmount+"元！",
            //   type: "warning",
            //   showCancelButton: true,
            //   cancelButtonText: "取消",
            //   confirmButtonColor: "#DD6B55",
            //   confirmButtonText: "是的,去支付!",
            //   closeOnConfirm: false,
            //   showLoaderOnConfirm: true,
            // }, function(){
            //   var $hiddenPanel = $('<div style="display:none;"></div>');
            //   $hiddenPanel.html(data.data.sHtmlText);
            //   $hiddenPanel.find('form').submit();
            // });
          }
        }
      });
    }

}])
