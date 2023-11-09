const cardStates = ['', 'card__content_tech'];

const cadrButtonClickHandler = (e) => {
    e.preventDefault();
    const container = e.target.closest('.card__content');
    
    if(container.classList.contains(cardStates[1])) {
        container.classList.remove(cardStates[1]);
        container.classList.add(cardStates[2]);
    }else if (container.classList.contains(cardStates[2])){
        container.classList.remove(cardStates[2]);
    }else if(window.innerWidth < 1440){
        container.classList.add(cardStates[1]);
    }else{
        container.classList.add(cardStates[2]);
    }
}

const cards = document.querySelectorAll('.card__technologies');

const cardMouseOutHandler = function() {
    this.closest(".card__content").classList.remove('card__content_active');
    this.removeEventListener("mouseout", cardMouseOutHandler);
}

const cardMouseOverHandler = function() {
    this.closest(".card__content").classList.add('card__content_active');
    this.addEventListener('mouseout', cardMouseOutHandler);
}

cards.forEach(card => {
    card.addEventListener('mouseover', cardMouseOverHandler);
    card.closest(".card__content").querySelector('button').addEventListener('click', cadrButtonClickHandler);
})
