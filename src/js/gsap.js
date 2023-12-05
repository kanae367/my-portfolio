gsap.registerPlugin(ScrollTrigger);

let panels = document.querySelectorAll('.panel');
let swiperSection = document.querySelector('.swipe-section');
let aboutSection = document.querySelector('.about');

window.addEventListener('resize', () => {
    let mql = window.matchMedia("(max-width: 1279px)");
    
    if(mql.matches){
        panels.forEach(item => item.style = '');
        swiperSection.style = '';
        aboutSection.style = '';
    }
})

let mm = gsap.matchMedia();

mm.add("(min-width: 1280px)", () => {

    let sections = gsap.utils.toArray(".about__slide");
    
    let scrollTween = gsap.to(sections, {
        xPercent: (i) => -100 * i,
        duration: (i) => 0.5 * i,
        ease: "none",
        scrollTrigger: {
            trigger: ".about",
            pin: true,
            scrub: .1,
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
    
//works
    let currentIndex = 0;
    let animating;
    let swipePanels = gsap.utils.toArray(".works__card");
    
    // set z-index levels for the swipe panels
    let reversedPanels = [...swipePanels].reverse();
    reversedPanels.forEach((panel, index) => {
        gsap.set(panel, { zIndex: index });
    });
    
    // create an observer and disable it to start
    let intentObserver = ScrollTrigger.observe({
        type: "wheel,touch",
        onUp: () => !animating && gotoPanel(currentIndex - 1, false),
        onDown: () => !animating && gotoPanel(currentIndex + 1, true),
        tolerance: 10,
        preventDefault: true
    });
    intentObserver.disable();
    
    // handle the panel swipe animations
    function gotoPanel(index, isScrollingDown) {
        animating = true;
        // return to normal scroll if we're at the end or back up to the start
        if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
            intentObserver.disable();
            return;
        }
    
        let target = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index];
        gsap.to(target, {
            yPercent: isScrollingDown ? -100 : 0,
            duration: 0.75,
            onComplete: () => (animating = false)
        });
    
        currentIndex = index;
    }
    
    // pin swipe section and initiate observer
    ScrollTrigger.create({
        trigger: ".swipe-section",
        pin: true,
        start: "top top",
        onEnter: () => {
            intentObserver.enable();
            gotoPanel(currentIndex + 1, true);
        },
        onEnterBack: () => {
            intentObserver.enable();
            gotoPanel(currentIndex - 1, false);
        }
    });
})
