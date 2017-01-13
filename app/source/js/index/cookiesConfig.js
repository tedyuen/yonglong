ylIndex.service('cookiesService',function () {
  this.cookiesDate = function () {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 60);
    return {'expires': expireDate.toUTCString()};
  }
});
