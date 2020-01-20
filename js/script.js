$(document).ready(function(){

  $('.menu_right li').hover(function(e){
    e.preventDefault();
    $(this).children('ul').toggleClass('hidden_show');
  });


});
