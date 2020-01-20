$(document).ready(function(){

  $('.menu_right li').hover(function(e){
    e.preventDefault();
    $(this).children('ul').toggleClass('hidden_show');
  });

  $('.it').mouseenter(function(e){
    e.preventDefault();
    $(this).children().children().children().eq(1).removeClass('hidden_i');
    $(this).children().children().children().eq(0).addClass('hidden_i');
  })

  $('.it').mouseleave(function(e){
    e.preventDefault();
    $(this).children().children().children().eq(0).removeClass('hidden_i');
    $(this).children().children().children().eq(1).addClass('hidden_i');
  })
});
