global.$ = global.jQuery = require('jquery');
require('bootstrap');

var goLogin = function (role) {
  document.cookie = "yonglongRole="+role;
  if(role=='company'){
    window.location.href = 'shell.html#!/main/companyinner/create_order';
  }else if(role=='user'){
    window.location.href = 'shell.html#!/main/userinner/wanner_order';
  }
}

var goRegister = function (role) {
  document.cookie = "yonglongRole="+role;
  if(role=='company'){
    window.location.href = 'shell.html#!/register_company';
  }else if(role=='user'){
    window.location.href = 'shell.html#!/register_user';
  }

}

$('.login-company').on('click',function () {
  goLogin('company');
});
$('.login-user').on('click',function () {
  goLogin('user');
});
$('.register-company').on('click',function () {
  goRegister('company');
});
$('.register-user').on('click',function () {
  goRegister('user');
});



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
$("#loginTab").find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  // 获取已激活的标签页的名称
  //var activeTab = $(e.target).text();
  //// 获取前一个激活的标签页的名称
  //var previousTab = $(e.relatedTarget).text();
  //$(".active-tab span").html(activeTab);
  //$(".previous-tab span").html(previousTab);
  //console.log("-->" + $(e.target).parent().html() + " active:" + active);
  //var isClick = $(e.target).attr("aria-expanded");
  //console.log("isClick: " + isClick);

  var active = $(e.target).parent().hasClass("active");
  if(active){
    $(".nav-tabs").find(".active").removeClass("active");
    $(e.target).parent().addClass("active");
    service.loggedTabs();
  }

});





var $listGroupItems = $("#news").find(".list-group > .list-group-item");

$listGroupItems.on("click",function(){

  var active = $(this).hasClass("active");
  if (active){ return; }

  $listGroupItems.each(function(i, ele){
    var eleActive = $(ele).hasClass("active");
    if(eleActive){
      $(ele).removeClass("active");
      var $groupItemIcon = $(ele).find(".group-item-icon");
      if(i == 0){
        $groupItemIcon.removeClass("enterprise-selected");
      }else if(i == 1){
        $groupItemIcon.removeClass("logistics-selected");
      }else if(i == 2){
        $groupItemIcon.removeClass("finance-selected");
      }
      return false; // 跳出当前循环
    }
  });
  $(this).addClass("active");
  var index = $(this).index();
  var $thisIcon = $(this).find(".group-item-icon");
  if(index == 0){
    $thisIcon.addClass("enterprise-selected");
  }else if(index == 1){
    $thisIcon.addClass("logistics-selected");
  }else if(index == 2){
    $thisIcon.addClass("finance-selected");
  }
});
