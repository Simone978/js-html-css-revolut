$(document).ready(function(){

  $('.menu_right li').click(function(e){
    e.preventDefault();
    $(this).children('ul').toggleClass('hidden_show');
  });


// Metodo artigianale per l'icona arrow
//   $('.it').mouseenter(function(e){
//     e.preventDefault();
//     $(this).children().children().children().eq(1).removeClass('hidden_i');
//     $(this).children().children().children().eq(0).addClass('hidden_i');
//   })
//
//   $('.it').mouseleave(function(e){
//     e.preventDefault();
//     $(this).children().children().children().eq(0).removeClass('hidden_i');
//     $(this).children().children().children().eq(1).addClass('hidden_i');
//   })
//

// Metodo più elegante per l'icona arrow
  $('.it').click(function(e){
    e.preventDefault();
    var icona1 = $(this).children().children().children().eq(1);
    var icona2 = $(this).children().children().children().eq(0);
    if(icona2.hasClass('hidden_i')==true){
      icona2.removeClass('hidden_i');
      icona1.addClass('hidden_i');
    }else{
    icona1.removeClass('hidden_i');
    icona2.addClass('hidden_i');
    }
  });

});
