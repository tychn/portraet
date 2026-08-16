
//MISC FUNCTIONS


function resizePortrait(){
  if (parseFloat($(window).height()) / $(window).width() < 0.75){
    $('#portrait').css({'height':'100vh', 'width':'100vw'});
  } else {
    $('#portrait').css({'height':'auto', 'width':'35vw'});
  }
};

// function verticalAlignText(element){
//   height = parseFloat($(window).height() - $(element).height())/2.0;
//   $(element).css('top', height);
// }

// function sizeHeight(){
//   rh = $("#r-block").height();
//   dh = $("#d-block").height();
//   $("#design").css({'margin-top': 200/rh *160 + 340});
//   $("#piano").css({'margin-top': 1/dh *80 + 1000/rh*200 + 260});
// }




//WINDOW AND DOCUMENT FUNCTIONS


$( window ).on( 'load', function(){
  $( '.load-screen' ).fadeOut( 'slow', function(){
    $( this ).remove();
  });
});

$(document).ready(function(){
  $('body').smoothScroll({
    delegateSelector: 'ul a'
  });
  // sizeHeight();
  // verticalAlignText('.aboutText1');
});

$(window).on('resize', function(){
  // sizeHeight();
  // verticalAlignText('.aboutText1');
});



//
// $(".pgrid").on('mouseenter', function(){
//   $(this).stop().fadeTo('fast',0.3);
//
// });
//
// $(".pgrid").on('mouseleave', function(){
//   $(this).stop().fadeTo('fast',1);
//
// });
