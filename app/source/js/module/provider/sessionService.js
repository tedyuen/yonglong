yonglongApp.service('sessionService',function () {
  this.getSession = function () {
    console.log("show token:"+eluser.token);
    var session = {
      token:eluser.token
    }
    return session;
  }
});
