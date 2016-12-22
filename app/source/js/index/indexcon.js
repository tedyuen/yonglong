global.$ = global.jQuery = require('jquery');
require('bootstrap');

var $navbarLis = $(".navbar-nav > li");

// index
// 导航栏点击事件
$navbarLis.on("click",function(){
  var last = $navbarLis.length - 1;
  var activeS = $(this).hasClass("active");
  var index = $(this).index();
  if (last == index || activeS) return;

  $navbarLis.each(function(i, ele){
    var active = $(ele).hasClass("active");
    if(active){
      $(ele).removeClass("active");
      $(ele).find("div").animate({left: "-100%"}, 100);
    }
  });
  $(this).addClass("active");
  var div = $(this).find("div");
  div.animate({left: "0"},100);
  $(this).find("div").show();

});

// 鼠标移出
$navbarLis.on("mouseleave",function(){
  var active = $(this).hasClass("active");
  if(!active) {
    $(this).find("div").stop();
    $(this).find("div").animate({left: "-100%"}, 100);
  }
});

// 鼠标进入
$navbarLis.on("mouseenter",function(){
  var active = $(this).hasClass("active");
  if(!active){
    var div = $(this).find("div");
    div.stop();
    div.animate({left: "0"}, 100);
    $(this).find("div").show();
  }
});
var $navTabsLis = $(".nav-tabs > li");
var service = {
  // 已登录点击tab颜色切换
  loggedTabs : function(){
    $navTabsLis.each(function(i, ele){
      if($(ele).hasClass("active")){
        $(ele).find("a").css({background:"#ffffff", color:"#65717a"})
      }else{
        $(ele).find("a").css({background:"#65717a", color:"#ffffff"})
      }
    });
  }
};
service.loggedTabs();
// 发货方|承运方 点击事件
$navTabsLis.on("click",function(){
  var active = $(this).hasClass("active");
  if(!active){
    $(".nav-tabs").find(".active").removeClass("active");
    $(this).addClass("active");
    service.loggedTabs();
  }
});
