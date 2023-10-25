gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector('.about__content');
const aboutSections = gsap.utils.toArray('.about__slide');

let scrollTween = gsap.to(aboutSections, {
    xPercent: -100 * (aboutSections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".about",
        pin: true,
        scrub: .1,
        end: "+=1000",
        snap: 1
    }
})

aboutSections.forEach(slide => {
  ScrollTrigger.create({
    trigger: slide,
    containerAnimation: scrollTween,
    start: "left 1%",
    toggleClass: "fading"
  })
});

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
