gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".about__slide");

let scrollTween = gsap.to(sections, {
  xPercent: (i) => -100 * i,
  duration: (i) => 0.5 * i,
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".about",
    pin: true,
    scrub: 0.1,
    snap: 1,
    end: "+=1000"
  }
});

gsap.to(".a", {
  scrollTrigger: {
    trigger: ".b",
    start: "left 75%",
    end: "left 50%",
    containerAnimation: scrollTween,
    scrub: true,
    toggleActions: "restart none reset none"
  },
  opacity: 0
})

const socials = document.querySelector('.socials');

document.addEventListener('scroll', (e) => {
  const aboutEndPoint = 2020;
  const scroll = e.target.documentElement.scrollTop;

  if(scroll > aboutEndPoint){
    socials.classList.add('scrolled');
  }else{
    socials.classList.remove('scrolled');
  }
})
