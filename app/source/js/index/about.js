//global.$ = global.jQuery = require('jquery');


var $listGroupItems = $("#about").find(".list-group > .list-group-item");

$listGroupItems.on("click",function(){

  var active = $(this).hasClass("active");
  if (active){ return; }

  $listGroupItems.each(function(i, ele){
    var eleActive = $(ele).hasClass("active");
    if(eleActive){
      $(ele).removeClass("active");
      var $groupItemIcon = $(ele).find(".group-item-icon");
      console.log("class: " + $groupItemIcon.hasClass("enterprise") + "  " + $groupItemIcon.hasClass("logistics") + "  " + $groupItemIcon.hasClass("finance"));
      if(i == 0){
        $groupItemIcon.removeClass("enterprise-selected");
      }else if(i == 1){
        $groupItemIcon.removeClass("logistics-selected");
      }else if(i == 2){
        $groupItemIcon.removeClass("finance-selected");
      }
      console.log("-----> " + i);
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

//// 鼠标移出
//$listGroupItems.on("mouseleave",function(){
//  var active = $(this).hasClass("active");
//  if(!active) {
//    $(this).css({background:"#efefef"});
//  }
//});
//
//// 鼠标进入
//$listGroupItems.on("mouseenter",function(){
//  var active = $(this).hasClass("active");
//  if(!active){
//    $(this).css({background:"#D1D1D1"});
//  }
//});
