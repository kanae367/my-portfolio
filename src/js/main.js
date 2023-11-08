(() => {
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
})()
