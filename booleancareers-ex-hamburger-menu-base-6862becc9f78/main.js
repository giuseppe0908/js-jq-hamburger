//far comparire hamburgher anche in versione lg
var hamburger = $(".fa-bars");
var hamburger_menu = $(".hamburger-menu");

  hamburger.click(function(){
    hamburger_menu.toggle("active");
});
var chiusura = $(".fa-times");
 chiusura.click(function(){
     hamburger_menu.hide();
   });
