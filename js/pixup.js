var controller = new ScrollMagic.Controller();

var portraitFadeOut = new TweenMax.to(".caption-bg-gray, .caption-bg", 1, {autoAlpha: 0});

var smsenePortraitFadeOut = new ScrollMagic.Scene({triggerElement: ".content", triggerHook:"onLeave", duration: 500})
  .setTween(portraitFadeOut)
  .addTo(controller);
