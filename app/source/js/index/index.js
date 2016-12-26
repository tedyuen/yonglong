global.$ = global.jQuery = require('jquery');
require('bootstrap');

var $navBarLis = $(".navbar-nav > li");

// index
// 导航栏点击事件
$navBarLis.on("click",function(){
  var last = $navBarLis.length - 1;
  var activeS = $(this).hasClass("active");
  var index = $(this).index();
  if (last == index || activeS) return;

  $navBarLis.each(function(i, ele){
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
$navBarLis.on("mouseleave",function(){
  var active = $(this).hasClass("active");
  if(!active) {
    $(this).find("div").stop();
    $(this).find("div").animate({left: "-100%"}, 100);
  }
});

// 鼠标进入
$navBarLis.on("mouseenter",function(){
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
        $(ele).find("a").css({background:"#ffffff", color:"#65717a"});
        if(i == 0){
          $(ele).find("span").removeClass("user-default");
          $(ele).find("span").addClass("user-selected");
        }else{
          $(ele).find("span").removeClass("car-default");
          $(ele).find("span").addClass("car-selected");
        }
      }else{
        $(ele).find("a").css({background:"#65717a", color:"#ffffff"})
        if(i == 0){
          $(ele).find("span").removeClass("user-selected");
          $(ele).find("span").addClass("user-default");
        }else{
          $(ele).find("span").removeClass("car-selected");
          $(ele).find("span").addClass("car-default");
        }
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
