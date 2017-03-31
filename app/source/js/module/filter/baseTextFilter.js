//结算状态
yonglongApp.filter('payStatusText',function () {
  return function (input) {
    if(input=='0'){
      return '未付款';
    }else if(input=='1'){
      return '已付款';
    }
  }
});

yonglongApp.filter('friendType',function () {
  return function (str) {
    if(str=='0'){
      return '未审核'
    }else if(str=='1'){
      return '审核通过'
    }else if(str=='9'){
      return '用户拒绝'
    }
  }
});

yonglongApp.filter('memberType',function () {
  return function (str) {
    if(str=='0'){
      return '货主'
    }else if(str=='1'){
      return '车主'
    }
  }
});


yonglongApp.filter('emptyText',function () {
  return function (str) {
    if(str==''){
      return '无'
    }else{
      return str;
    }
  }
});

yonglongApp.filter('moneyText',function () {
  return function (str) {
    return str+"元";
  }
})

yonglongApp.filter('atmStatus',function () {
  return function (str) {
    if(str=='1'){
      return '审核通过';
    }else{
      return '审核中';
    }
  }
});

yonglongApp.filter('boxVol',function () {
  return function (str) {
    if(str=='0' || str==0){
      return '20'
    }else if(str=='1' || str==1){
      return '40'
    }else if(str=='2' || str==2){
      return '45'
    }
  }
})
yonglongApp.filter('boxVolReg',function () {
  return str;
  // return function (str) {
  //   if(str=='0' || str==0){
  //     return '20'
  //   }else if(str=='1' || str==1){
  //     return '40'
  //   }else if(str=='2' || str==2){
  //     return '45'
  //   }
  // }
})

yonglongApp.filter('boxType',['diyData',function (diyData) {
  return function(str){
    var temp;
    for(temp in diyData.boxType){
      if(str==diyData.boxType[temp].id){
        return diyData.boxType[temp].name;
      }
    }
  }
}]);

yonglongApp.filter('orderType',['diyData',function (diyData) {
  return function(str){
    var temp;
    for(temp in diyData.orderType){
      if(str==diyData.orderType[temp].id){
        return diyData.orderType[temp].name;
      }
    }
  }
}])

//订单状态
yonglongApp.filter('orderStatusText',function () {
  return function (input) {
    var _bv = '';
    switch(input){
      case '1',1:
        _bv = '已审核';
        break;
      case '2',2:
        _bv = '待装箱';
        break;
      case '3',3:
        _bv = '已拼箱';
        break;
      case '8',8:
        _bv = '已取消';
        break;
      case '9',9:
        _bv = '完成';
        break;
      case '10',10:
        _bv = '待提箱';
        break;
      case '11',11:
        _bv = '待卸货';
        break;
      case '12',12:
        _bv = '待装货';
        break;
      case '13',13:
        _bv = '待进港';
        break;
      case '14',14:
        _bv = '待落箱';
        break;
      case '20',20:
        _bv = '待付款';
        break;
      case '21',21:
        _bv = '已付款';
        break;
      case '22',22:
        _bv = '部分支付';
        break;
      default:
        _bv = '未审核';
        break;
      case '101',101:
        _bv = '进行中';
        break;
    }
    return _bv;
  }
});

yonglongApp.filter('releaseStatus',function () {
  return function (str) {
    var result = '';
    switch (str){
      case 0:
        result = '新业务';
        break;
      case 1:
        result = '放单中';
        break;
      case 2:
        result = '已完成';
        break;
      case 3:
        result = '已拒绝';
        break;
      case 4:
        result = '没预配';
        break;
      case 5:
        result = '处理中';
        break;
      case 6:
        result = '爆仓';
        break;
      case 7:
        result = '船期早';
        break;
    }
    return result;
  }
});

yonglongApp.filter('releaseStatusAmount',function () {
  return function (str) {
    var result = '';
    switch (str){
      case 0:
        result = '初始';
        break;
      case 1:
        result = '已结';
        break;
      case 2:
        result = '未结';
        break;
    }
    return result;
  }
});





