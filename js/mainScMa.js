gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Keep ~60% of #hand visible; 40% hangs past the right edge (works with y tweens)
gsap.set("#hand", { xPercent: 35 });

// ScrollMagic triggerHook → ScrollTrigger start ("elementPos viewportPos")
function scrollStart(triggerHook, offset) {
  var hooks = { onLeave: 0, onCenter: 0.5, onEnter: 1 };
  var hook = typeof triggerHook === "string" ? hooks[triggerHook] : Number(triggerHook);
  if (isNaN(hook)) {
    hook = 0.5;
  }
  var viewport = hook * 100 + "%";
  var extra = "";
  if (offset) {
    extra = offset >= 0 ? "+=" + offset : String(offset);
  }
  return "top" + extra + " " + viewport;
}

// ScrollMagic setClassToggle with duration 0
function toggleClassOnPass(targets, className, trigger, triggerHook, offset) {
  ScrollTrigger.create({
    trigger: trigger,
    start: scrollStart(triggerHook, offset),
    onEnter: function () {
      gsap.utils.toArray(targets).forEach(function (el) {
        el.classList.add(className);
      });
    },
    onLeaveBack: function () {
      gsap.utils.toArray(targets).forEach(function (el) {
        el.classList.remove(className);
      });
    }
  });
}

var flightpath = {
  entry: [
    { x: 200, y: -20 },
    { x: 310, y: 10 }
  ],
  looping: [
    { x: 510, y: 80 },
    { x: 620, y: -60 },
    { x: 500, y: -100 },
    { x: 380, y: 20 },
    { x: 500, y: 60 },
    { x: 600, y: 20 },
    { x: 650, y: 35 }
  ],
  leave: [
    { x: 690, y: 80 },
    { x: 800, y: 180 },
    { x: window.innerWidth + 300, y: 50 }
  ]
};

var tweenleaf = gsap.timeline()
  .to("#plane", {
    duration: 1.2,
    motionPath: { path: flightpath.entry, autoRotate: true, curviness: 1.25, relative: false },
    ease: "power1.inOut"
  })
  .to("#plane", {
    duration: 2,
    motionPath: { path: flightpath.looping, autoRotate: true, curviness: 1.25, relative: false },
    ease: "power1.inOut"
  })
  .to("#plane", {
    duration: 1,
    motionPath: { path: flightpath.leave, autoRotate: true, curviness: 1.25, relative: false },
    ease: "power1.inOut"
  });

ScrollTrigger.create({
  animation: tweenleaf,
  start: 100,
  end: 600,
  pin: "#target",
  scrub: true
});

gsap.fromTo("#wave", { autoAlpha: 1 }, {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: 200,
    scrub: true
  }
});

gsap.fromTo(".hero-1", { autoAlpha: 1 }, {
  autoAlpha: 0,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: 400,
    scrub: true
  }
});

gsap.fromTo(".hero-1", { y: 0 }, {
  y: 250,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: 400,
    scrub: true
  }
});

ScrollTrigger.create({
  trigger: "#stop1",
  start: scrollStart("onLeave"),
  end: "+=400",
  pin: "#bigwords"
});

toggleClassOnPass("#portrait", "active", "#stop3", "onLeave", 100);

gsap.timeline({
  scrollTrigger: {
    trigger: "#stop1",
    start: scrollStart("onLeave"),
    end: "+=400",
    scrub: true
  }
})
  .to("#designer", { y: 3000, ease: "circ.inOut", duration: 1 }, 0)
  .to("#pianist", { y: 3000, ease: "circ.inOut", duration: 1 }, 0)
  .to("#head", { y: -435, ease: "circ.inOut", duration: 1 }, 0)
  .to("#resume", { y: -170, ease: "circ.inOut", duration: 1 }, 0);

toggleClassOnPass("#designer", "active", "#stop2", "onEnter");
toggleClassOnPass("#pianist", "active", "#stop2", "onEnter");

ScrollTrigger.create({
  trigger: "#stop2",
  start: scrollStart(0.2),
  end: "+=320",
  pin: "#designer2"
});

gsap.to(".iam2", {
  y: 770,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: "#stop2",
    start: scrollStart(0.8),
    end: "+=300",
    scrub: true
  }
});
toggleClassOnPass(".iam2", "activeOn", "#stop2", 0.8);

gsap.timeline({
  scrollTrigger: {
    trigger: "#stop2",
    start: scrollStart(0.3),
    end: "+=400",
    scrub: true
  }
})
  .to("#head", { y: 0, ease: "circ.inOut", duration: 1 }, 0)
  .to("#heart", { x: 390, ease: "circ.inOut", duration: 1 }, 0);

ScrollTrigger.create({
  trigger: "#stop3",
  start: scrollStart(0.1),
  end: "+=300",
  pin: "#pianist2"
});

gsap.to(".iam3", {
  y: 770,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: "#stop3",
    start: scrollStart(0.4),
    end: "+=300",
    scrub: true
  }
});
toggleClassOnPass(".iam3", "activeOn", "#stop3", 0.5);

// Leave from the on-screen position (x: 390), not from the tween's create-time x: 0
gsap.fromTo("#heart", { x: 390 }, {
  x: -600,
  ease: "circ.inOut",
  immediateRender: false,
  scrollTrigger: {
    trigger: "#designer2",
    start: scrollStart("onLeave", -100),
    end: "+=600",
    scrub: true
  }
});

gsap.to("#hand", {
  y: 590,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: "#trig2",
    start: scrollStart("onLeave", 200),
    end: "+=400",
    scrub: true
  }
});

gsap.to("#portrait", {
  autoAlpha: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "#about",
    start: scrollStart("onLeave"),
    end: "+=200",
    scrub: true
  }
});

// Exit from the on-screen y (590), not from create-time y: 0
gsap.fromTo("#hand", { y: 590 }, {
  y: -590,
  ease: "circ.inOut",
  immediateRender: false,
  scrollTrigger: {
    trigger: "#about",
    start: scrollStart("onCenter"),
    end: "+=800",
    scrub: true
  }
});

// Was ScrollMagic setVelocity; #logo_small may be absent — no-op if missing
if (document.querySelector("#logo_small")) {
  gsap.to("#logo_small", {
    opacity: 1,
    duration: 0.2,
    ease: "elastic",
    scrollTrigger: {
      trigger: ".portfolio-container",
      start: scrollStart("onCenter"),
      toggleActions: "play none none reverse"
    }
  });
}

gsap.to(".divider", {
  y: 29,
  ease: "none",
  scrollTrigger: {
    trigger: "#portfolio",
    start: scrollStart("onCenter"),
    end: "+=1",
    scrub: true
  }
});

gsap.to(".divider", {
  y: 55,
  x: 20,
  ease: "none",
  scrollTrigger: {
    trigger: "#research",
    start: scrollStart("onCenter"),
    end: "+=1",
    scrub: true
  }
});

gsap.to(".divider", {
  y: 80,
  x: 20,
  ease: "none",
  scrollTrigger: {
    trigger: "#design",
    start: scrollStart("onCenter"),
    end: "+=1",
    scrub: true
  }
});

gsap.to(".divider", {
  y: 104,
  x: 20,
  ease: "none",
  scrollTrigger: {
    trigger: "#piano",
    start: scrollStart("onCenter"),
    end: "+=1",
    scrub: true
  }
});

gsap.to(".divider", {
  y: 134,
  x: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#contact",
    start: scrollStart("onCenter"),
    end: "+=1",
    scrub: true
  }
});

$(window).resize(function () {
  location.reload();
});
