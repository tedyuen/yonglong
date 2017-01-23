yonglongApp.service('dateService',function () {

  this.getCurrentDate = function () {
    var myDate = new Date();
    var month = myDate.getMonth()+1;
    // console.log(myDate.getFullYear()+"-"+month+"-"+myDate.getDate());
    return myDate.getFullYear()+"-"+month+"-"+myDate.getDate();
  }

  this.getLastMonthDate = function () {
    var myDate = new Date();
    myDate.setMonth(myDate.getMonth()-1);
    var month = myDate.getMonth()+1;
    // console.log(myDate.getFullYear()+"-"+month+"-"+myDate.getDate());
    return myDate.getFullYear()+"-"+month+"-"+myDate.getDate();
  }

});
