yonglongApp.service('baseDataService',['diyData',function (diyData) {

  this.getOrderType = function () {
    return diyData.orderType;
  }

  this.getOrderTypeN = function () {
    return diyData.orderTypeN;
  }

  this.getBoxVol = function () {
    return diyData.boxVol;
  }

  this.getBoxType = function () {
    return diyData.boxType;
  }

  this.getBoxVolN = function () {
    return diyData.boxVolN;
  }

  this.getBoxTypeN = function () {
    return diyData.boxTypeN;
  }

  this.getReportTypeN1 = function () {
    return diyData.reportTypeN1;
  }
  this.getReportTypeN2 = function () {
    return diyData.reportTypeN2;
  }



  this.getPayStatusText = function (value) {
    if(value=='0'){
      return '未付款';
    }else if(value=='1'){
      return '已付款';
    }
  }
}]);
