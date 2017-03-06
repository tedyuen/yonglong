yonglongApp.service('dateService',function () {

  this.getCurrentDate = function () {
    var myDate = new Date();
    var month = myDate.getMonth()+1;
    // console.log(myDate.getFullYear()+"-"+month+"-"+myDate.getDate());
    return myDate.getFullYear()+"-"+month+"-"+myDate.getDate();
  }
  this.getCurrentDate2 = function () {
    var myDate = new Date();
    var month = myDate.getMonth()+1;
    // console.log(myDate.getFullYear()+"-"+month+"-"+myDate.getDate());
    var strMonth = month;
    var strDate = myDate.getDate();
    if(month<10){
      strMonth = "0"+month;
    }
    if(myDate.getDate()<10){
      strDate = "0"+myDate.getDate();
    }
    return myDate.getFullYear()+""+strMonth+""+strDate;
  }


  this.getLastMonthDate = function () {
    var myDate = new Date();
    myDate.setMonth(myDate.getMonth()-1);
    var month = myDate.getMonth()+1;
    // console.log(myDate.getFullYear()+"-"+month+"-"+myDate.getDate());
    return myDate.getFullYear()+"-"+month+"-"+myDate.getDate();
  }

});
