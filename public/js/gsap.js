gsap.registerPlugin(ScrollTrigger);

  gsap.to("#video", { 
    scrollTrigger: {
        trigger: "#video",
        pin: true,   // pin the trigger element while active
        start: "top top+=80px", // when the top of the trigger hits the top of the viewport
        end: "+=300", // end after scrolling 500px beyond the start
        scrub: true,
        // onLeave: () => gsap.set('#video', {position:'fixed', y:80})
    },
    scale: 0.57, 
    duration: 2,
    ease: "none",
});

ScrollTrigger.create({
  trigger: '#pin',
  start: "bottom+=180px bottom",
  pin: true,
  pinSpacing: false,
})

var textWrapper = document.querySelector('.sticky-button__text');
var stickyBtn = document.querySelector ('.sticky-button__guy');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

function enterButton() {
  setTimeout(function(){ 
    anime.timeline({loop: false})
      .add({
        targets: '.sticky-button__text .letter',
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 40*i
      }).add({
        targets: '.sticky-button__text',
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, 1000);
};

gsap.to("#gear", {duration: 1, x: 100, y: 100, scale: 0.5, rotation: 180, skewX: 45});

stickyBtn.addEventListener('mouseenter', enterButton, false);
