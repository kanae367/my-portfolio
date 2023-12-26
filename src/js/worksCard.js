(() => {
const cadrButtonClickHandler = (e) => {
    e.preventDefault();
    const container = e.target.closest('.card__content');
    container.classList.toggle('card__content_tech');
}

const cardMouseOutHandler = function() {
    this.closest(".card__content").classList.remove('card__content_active');
    this.removeEventListener("mouseout", cardMouseOutHandler);
}

const cardMouseOverHandler = function() {
    this.closest(".card__content").classList.add('card__content_active');
    this.addEventListener('mouseout', cardMouseOutHandler);
}

const cards = document.querySelectorAll('.card__technologies');
cards.forEach(card => {
    card.addEventListener('mouseover', cardMouseOverHandler);
    card.closest(".card__content").querySelector('button').addEventListener('click', cadrButtonClickHandler);
})
})();