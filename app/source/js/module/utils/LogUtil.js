var LogUtil = function(flag) {
  this.flag = flag;

}

LogUtil.prototype.showLog = function(str){
  if(this.flag){
    console.log(str);
  }
}


module.exports = LogUtil;

