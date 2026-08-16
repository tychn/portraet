var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#pin1", duration: 300, triggerHook: 'onLeave'})
						.setPin("#pin1")
						.addTo(controller);


var quoteFade = new TimelineMax ()
  .add([
    TweenMax.to("#quotes", 1, {autoAlpha: 0, ease: Linear.easeNone}),
  ]);

var smsceneQuoteFade = new ScrollMagic.Scene({triggerElement: "#pin1", offset: 400, duration: 200})
  .setTween(quoteFade)
  .addTo(controller);


var painFadeIn = new TimelineMax ()
  .add([
    TweenMax.to("#pain", 1, {autoAlpha: 1, ease: Linear.easeNone}),
  ]);
var smscenePainFadeIn = new ScrollMagic.Scene({triggerElement: "#pin1", offset: 400, duration: 200})
  .setTween(painFadeIn)
  .addTo(controller);
