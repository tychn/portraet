//ScrollMagic
var controller = new ScrollMagic.Controller();

// function adjust(){
//   // var add100 = 0;
//   // if ((parseInt($(window).width()/100)) > 11){
//   //   add100 = 0;
//   // } else {
//   //   add100 = 11 - (parseInt($(window).width()/100));
//   // }
//   // dis = $("#d-block").offset().top - 2200 - add100*100;
//   dis = $("#d-block").offset().top - 1935;
//   // dis2 = $("#piano").offset().top - $("#design").offset().top + 1275;
//   dis2 = $("#piano").offset().top - 1695;
//   if (dis2 < 2700){
//     dis2 += 350;
//   }
//
//   if (dis > 1700){
//     dis -= 400;
//   }
  //console.log(dis);
  //console.log(dis2);
//}

var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 200,	y: -20},
						{x: 310,	y: 10}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
            {x: 510,	y: 80},
            {x: 620,	y: -60},
            {x: 500,	y: -100},
            {x: 380,	y: 20},
            {x: 500,	y: 60},
            {x: 600,	y: 20},
            {x: 650,	y: 35}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 690,	y: 80},
						{x: 800,	y: 180},
						{x: $(window).width() + 300,	y: 50},
					]
			}
		};

    var controllerleaf = new ScrollMagic.Controller();

		// create tween
		var tweenleaf = new TimelineMax()
			.add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

		// build scene
		var sceneleaf = new ScrollMagic.Scene({triggerElement: "", duration: 500, offset: 100})
						.setPin("#target")
						.setTween(tweenleaf)
						.addTo(controller);


  // adjust();


  if ($(window).width() > 0) {
    var scene1Fade = new TweenMax.fromTo("#wave", 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone});
    var smscene1a = new ScrollMagic.Scene({duration: 200})
      .setTween(scene1Fade)
      .addTo(controller);

  }



  var tweenHeroFade = new TweenMax.fromTo(".hero-1", 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone});

  var tweenHeroSlow = new TweenMax.fromTo(".hero-1", 1, {y: 0}, {y:250, ease: Linear.easeNone});


  // build scene
  var smscene3 = new ScrollMagic.Scene({duration: 400})
    .setTween(tweenHeroFade)
    .addTo(controller);

  var smscene3a = new ScrollMagic.Scene({duration: 400})
    .setTween(tweenHeroSlow)
    .addTo(controller);


  var scene = new ScrollMagic.Scene({triggerElement: "#stop1", triggerHook: 'onLeave', duration: 400})
  	.setPin("#bigwords")
  	.addTo(controller);

  // new ScrollMagic.Scene({triggerElement: "#stop1", triggerHook: 'onLeave', offset: 200})
  // 					.setClassToggle("#resume", "active") // add class toggle
  // 					.addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#stop3", triggerHook: 'onLeave', offset: 100})
  					.setClassToggle("#portrait", "active") // add class toggle
  					.addTo(controller);

  var graphdown1 = new TimelineMax ()
    .add([
      TweenMax.to("#designer", 1, {y:3000, ease: Circ.easeInOut}),
      TweenMax.to("#pianist", 1, {y:3000, ease: Circ.easeInOut}),
      TweenMax.to("#head", 1, {y:-435, ease: Circ.easeInOut}),
      TweenMax.to("#resume", 1, {y:-170, ease: Circ.easeInOut})
    ]);


  var smscene3b = new ScrollMagic.Scene({triggerElement: "#stop1", duration: 400, triggerHook: 'onLeave', reverse:true})
    .setTween(graphdown1)
    .addTo(controller);

//text disappear after going down
  new ScrollMagic.Scene({triggerElement: "#stop2", triggerHook: 'onEnter'})
  					.setClassToggle("#designer", "active") // add class toggle
  					.addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#stop2", triggerHook: 'onEnter'})
  					.setClassToggle("#pianist", "active") // add class toggle
  					.addTo(controller);
//designer 2 pin
  var scene = new ScrollMagic.Scene({triggerElement: "#stop2", triggerHook: '0.2',  duration: 320})
    .setPin("#designer2")
    .addTo(controller);

//iam down
  var iamdown2 = new TweenMax.to(".iam2", 1, {y: 770, ease: Circ.easeInout});
  var iamdown2sc = new ScrollMagic.Scene({triggerElement: "#stop2", triggerHook: '0.8', duration: 300, reverse:true})
    .setTween(iamdown2)
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#stop2", triggerHook: '0.8'})
  		.setClassToggle(".iam2", "activeOn") // add class toggle
  		.addTo(controller);
//graphdown 2
  var graphdown2 = new TimelineMax ()
    .add([
      // TweenMax.to("#pianist", 1, {y:dis2, ease: Circ.easeInOut}),
      TweenMax.to("#head", 1, {y:0, ease: Circ.easeInOut}),
      TweenMax.to("#heart", 1, {x: 390, ease: Circ.easeInOut}),
    ]);

  var smscene3c = new ScrollMagic.Scene({triggerElement: "#stop2", triggerHook: '0.3', duration: 400, reverse:true})
    .setTween(graphdown2)
    .addTo(controller);

//pianist 2 pin
  var scene = new ScrollMagic.Scene({triggerElement: "#stop3", triggerHook: '0.1', duration: 300})
    .setPin("#pianist2")
    .addTo(controller);
//iam2 down
  var iamdown2 = new TweenMax.to(".iam3", 1, {y:770, ease: Circ.easeInout});
  var iamdown2sc = new ScrollMagic.Scene({triggerElement: "#stop3", triggerHook: '0.4', duration: 300, reverse:true})
    .setTween(iamdown2)
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#stop3", triggerHook: '0.5'})
  		.setClassToggle(".iam3", "activeOn") // add class toggle
  		.addTo(controller);

//designer2 pin again
  new ScrollMagic.Scene({triggerElement: "#d2pintrigger", triggerHook: '0.62', duration: 800})
  		.setPin("#designer2") // add class toggle
  		.addTo(controller);

  var dsout = new TimelineMax ()
    .add([
      TweenMax.to("#desec", 1, {x: 2500, ease:Circ.easeInOut})
    ]);

  new ScrollMagic.Scene({triggerElement: "#stop2", triggerHook: 'onLeave', offset: 470, duration: 300, reverse: true})
      .setTween(dsout)
      .setPin("#desec")
  		.addTo(controller);

  var htout = new TimelineMax ()
    .add([
      TweenMax.to("#heart", 1, {x: -600, ease: Circ.easeInOut})
    ]);

  new ScrollMagic.Scene({triggerElement: "#stop2", triggerHook: 'onLeave', offset: 1080, duration: 600, reverse: true})
      .setTween(htout)
  		.addTo(controller);

  // new ScrollMagic.Scene({triggerElement: "#bigcontainer", triggerHook: '0.25', duration: 400, reverse: true})
  //     .setClassToggle("#desec", "active") // add class toggle
  // 		.addTo(controller);
  // new ScrollMagic.Scene({triggerElement: "#bigcontainer", triggerHook: '0.4', duration: 400, reverse: true})
  //     .setClassToggle("#heart", "active") // add class toggle
  //     .addTo(controller);

  var wipeAnimation = new TimelineMax()
			// animate to second panel	// move back in 3D space
			.to("#bigcontainer", 1,   {x: "-25%"})	// move in to first panel			// move back to origin in 3D space
			// animate to third panel
			.to("#bigcontainer", 1,   {x: "-50%"})
			// animate to forth panel
			.to("#bigcontainer", 1,   {x: "-75%"})
      .to("#bigcontainer", 1,   {x: "-100%"})

		// create scene to pin and link animation

	var yoffset = -($(window).height() / 2 - 140);
	console.log(yoffset);
		new ScrollMagic.Scene({
				triggerElement: "#pincontainer",
				triggerHook: "onLeave",
        offset: yoffset,
				duration: "700%"
			})
			.setPin("#pincontainer")
			.setTween(wipeAnimation)
			.addTo(controller);

  var textdown3 = new TimelineMax ()
    .add([
      TweenMax.to("#hand", 1, {y: 590, ease: Circ.easeInOut}),
    ]);

  var smscene3z = new ScrollMagic.Scene({triggerElement: "#stop3", triggerHook: '0.3', duration: 400, reverse:true})
    .setTween(textdown3)
    .addTo(controller);



  var portraitFade = new TimelineMax ()
    .add([
      TweenMax.to("#portrait", 1, {autoAlpha: 1, ease: Linear.easeNone}),
    ]);

  var smscenePortraitFade = new ScrollMagic.Scene({triggerElement: "#about", triggerHook: 'onLeave', duration: 200})
    .setTween(portraitFade)
    .addTo(controller);

  var handup = new TimelineMax ()
    .add([
      TweenMax.to("#hand", 1, {y: -590, ease: Circ.easeInOut}),
    ]);

  var handupsc = new ScrollMagic.Scene({triggerElement: "#about", triggerHook: 'onCenter', duration: 800, reverse:true})
    .setTween(handup)
    // .setClassToggle("#bigcontainer", "active")
    .addTo(controller);





  var smsceneLogo = new ScrollMagic.Scene({triggerElement: ".portfolio-container"})
    // trigger a velocity opaticy animation
    .setVelocity("#logo_small", {opacity: 1}, {duration: 200, easing:Elastic})
    .addTo(controller);

  var smsceneDivider2 = new ScrollMagic.Scene({triggerElement: "#portfolio", duration:1})
    // trigger a velocity opaticy animation
    .setTween(".divider", {y: "29px"})
    .addTo(controller);

  var smsceneDivider3 = new ScrollMagic.Scene({triggerElement: "#research", duration: 1})
    // trigger a velocity opaticy animation
    .setTween(".divider", {y: "55px", x:"20px"})
    .addTo(controller);

  var smsceneDivider4 = new ScrollMagic.Scene({triggerElement: "#design", duration: 1})
    // trigger a velocity opaticy animation
    .setTween(".divider", {y: "80px", x:"20px"})
    .addTo(controller);

  var smsceneDivider4 = new ScrollMagic.Scene({triggerElement: "#piano", duration: 1})
    // trigger a velocity opaticy animation
    .setTween(".divider", {y: "104px", x:"20px"})
    .addTo(controller);

  var smsceneDivider4 = new ScrollMagic.Scene({triggerElement: "#contact", duration: 1})
    // trigger a velocity opaticy animation
    .setTween(".divider", {y: "134px", x:"0px"})
    .addTo(controller);


$(window).resize(function() {
    location.reload();
});
