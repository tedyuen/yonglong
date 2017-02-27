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
  this.getBoxVolReg = function () {
    return diyData.boxVolReg;
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

  this.getTemperatureUnit = function () {
    return diyData.temperatureUnit;
  }

  this.getPrerecordType = function () {
    return diyData.prerecordType;
  }
  this.getPackaddressType = function () {
    return diyData.packaddressType;
  }
  this.getPassengerlinerType = function () {
    return diyData.passengerlinerType;
  }
  this.getImpexpsignType = function () {
    return diyData.impexpsignType;
  }
  this.getCalltypeType = function () {
    return diyData.calltypeType;
  }
  this.getCallmanType = function () {
    return diyData.callmanType;
  }
  this.getShiptypeType = function () {
    return diyData.shiptypeType;
  }
  this.getMarinepollutionType = function () {
    return diyData.marinepollutionType;
  }






  this.getPayStatusText = function (value) {
    if(value=='0'){
      return '未付款';
    }else if(value=='1'){
      return '已付款';
    }
  }
}]);
