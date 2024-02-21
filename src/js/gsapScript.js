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
    
	const Scroll = new function() {
	let sections
	let page
	let main
	let tl
	let win
	
	// Init
	this.init = () => {
		sections = document.querySelectorAll('.panel')
		page = document.querySelector('.section-wrapper')
		main = document.querySelector('.swipe-section')
		win = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.setupTimeline()
		this.setupScrollTrigger()
		window.addEventListener('resize', this.onResize)
	}
	
	// Setup ScrollTrigger
	this.setupScrollTrigger = () => {
		page.style.height = (this.getTotalScroll() + win.h) + 'px'
		
		ScrollTrigger.create({
			id: 'mainScroll',
			trigger: '.swipe-section',
			animation: tl,
			pin: true,
			scrub: true,
			snap: {
				snapTo: (value) => {
					
					let labels = Object.values(tl.labels)
					
					const snapPoints = labels.map(x => x / tl.totalDuration());
					const proximity = 0.1
					
					console.log(tl.labels , tl.totalDuration(), labels, snapPoints)
					
					for (let i = 0; i < snapPoints.length; i++) {
						if (value > snapPoints[i] - proximity && value < snapPoints[i] + proximity) {
							return snapPoints[i]
						}
					}
				},
				duration: { min: 0.2, max: 0.6 },
			},
			start: 'top top',
			end: '+=' + this.getTotalScroll(),
		})
	}
	
	// Setup timeline
	this.setupTimeline = () => {
		tl = gsap.timeline()
		tl.addLabel("label-initial")
		
		sections.forEach((section, index) => {
			const nextSection = sections[index+1]
			if (!nextSection) return

			tl.to(nextSection, {
				y: -1 * nextSection.offsetHeight,
				duration: nextSection.offsetHeight,
				ease: 'linear',
			})
			.addLabel(`label${index}`)
		})
	}
	
	// On resize
	this.onResize = () => {
		win = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.reset()
	}
	
	// Reset
	this.reset = () => {
		if (typeof ScrollTrigger.getById('mainScroll') === 'object') {
			ScrollTrigger.getById('mainScroll').kill()
		}
		
		if (typeof tl === 'object') {
			tl.kill()
			tl.seek(0)
		}
		
		document.body.scrollTop = document.documentElement.scrollTop = 0
		this.init()
	}
	
	// Get total scroll
	this.getTotalScroll = () => {
		let totalScroll = 0
		sections.forEach(section => {
			totalScroll += section.offsetHeight
		})
		totalScroll -= win.h
		return totalScroll
	}
}

Scroll.init()
})

