$(document).ready(function() {

  // Mobile nav
  $("#nav-toggle").click(function(evn){
    evn.preventDefault();
    $("#nav-toggle").css("display","none");
    $("nav").addClass("mobile-nav");
    $("#nav").css("display","block");
    $("#nav-close").css("display","block");
  });
  $("#nav-close").click(function(evn){
    evn.preventDefault();
    $("#nav-close").css("display","none");
    $("nav").removeClass("mobile-nav");
    $("#nav").css("display","none");
    $("#nav-toggle").css("display","block");
  });

});
