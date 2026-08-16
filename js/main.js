
//MISC FUNCTIONS


function resizePortrait(){
  if (parseFloat($(window).height()) / $(window).width() < 0.75){
    $('#portrait').css({'height': 'calc(var(--vh) * 100)', 'width':'100%'});
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
});

// Mobile hamburger: bind immediately (script is after <nav> in the DOM).
// Kept outside document.ready so it is not blocked if smoothScroll fails.
(function () {
  var nav = document.querySelector('nav');
  var toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });

  nav.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('ul a');
    if (link) setOpen(false);
  });
})();

$(window).on('resize', function(){
  // sizeHeight();
  // verticalAlignText('.aboutText1');
});

// Keep page locked to vertical scroll on mobile (off-screen art otherwise pans sideways)
(function () {
  function lockHorizontalScroll() {
    if (window.scrollX !== 0) {
      window.scrollTo(0, window.scrollY);
    }
  }
  window.addEventListener('scroll', lockHorizontalScroll, { passive: true });
  window.addEventListener('orientationchange', lockHorizontalScroll);
})();



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
