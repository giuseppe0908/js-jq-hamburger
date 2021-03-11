//far comparire hamburgher anche in versione lg
var hamburger = $(".header-right a i.fa-bars");
var hamburger_menu = $(".hamburger-menu");

  hamburger.click(function(){
    hamburger_menu.addClass("active");
});
var chiusura = $(".hamburger-menu .close > i.fa-times");
 chiusura.click(function(){
     hamburger_menu.removeClass("active");
});
