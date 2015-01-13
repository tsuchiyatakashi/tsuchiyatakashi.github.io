$(function(){
  $('.index-navigation').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href.replace(/(.*)#/, "#"));
      var position = target.offset().top - 64;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
