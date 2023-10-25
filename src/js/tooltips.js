const images = document.querySelectorAll("img[data-tooltip]");
const tooltips = document.querySelectorAll(".tooltip");

images.forEach((item, index) => {
    Popper.createPopper(item, tooltips[index], { 
        placement: 'top'
    });
})