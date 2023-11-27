(() => {
  AOS.init();
  
  document.querySelector('.preloader-container').classList.add('hide');
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
    if(window.scrollY > 600){
      mobileNav.classList.add('mobile-nav_active');
    }else{
      mobileNav.classList.remove('mobile-nav_active');
    }
  })

})()
