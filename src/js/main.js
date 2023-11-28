(() => {
  AOS.init({
    duration: 500
  });
  
  const removePreloader = () => {
    const preloader = document.querySelector('.preloader-container');
    preloader.classList.add('hide');
    // preloader.remove();
  }
  
  removePreloader();

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

  const openNavButton = document.getElementById('nav-button');
  const navMenu = document.querySelector('.menu_nav');

  openNavButton.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  const openSocialsButton = document.getElementById('socials-button');
  const socialsMenu = document.querySelector('.menu_socials');

  openSocialsButton.addEventListener('click', () => {
    socialsMenu.classList.add('active');
  });

  const closeButtons = document.querySelectorAll('.close-button');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.menu').classList.remove('active');
    })
  });

  const mobileNav = document.querySelector('.mobile-nav');
  document.addEventListener('scroll', () => {
    if(window.scrollY > 100){
      mobileNav.classList.add('unseen');
    }else{
      mobileNav.classList.remove('unseen');
      mobileNav.classList.remove("transition-enable");
    }

    if(window.scrollY > 600){
      mobileNav.classList.add('mobile-nav_active');
      mobileNav.classList.add("transition-enable");
    }else{
      mobileNav.classList.remove('mobile-nav_active');
    }
  })

})()
