(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    document.querySelector('.preloader-container').classList.add('hide')
    let sections = gsap.utils.toArray(".about__slide");

    let scrollTween = gsap.to(sections, {
        xPercent: (i) => -100 * i,
        duration: (i) => 0.5 * i,
        ease: "none",
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
})();