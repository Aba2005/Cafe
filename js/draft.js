let cards = document.querySelectorAll('.card');
let postsMoreInfo = document.querySelectorAll('.more-info');
let postsInfoCloseButton = document.querySelector('.close')
let cardsAmount = document.querySelectorAll('.card-amount');
let topics = document.querySelectorAll('.topic');
let body = document.querySelector('body');
const data = ['Tea', 'Hot Coffee', 'Ice Coffee', 'Mohito', 'Lemonade', 'Milkshakes', 'Juices', 'Cakes'];

topics[0].addEventListener('click', Tea);
topics[1].addEventListener('click', Hot_coffee);
topics[2].addEventListener('click', Ice_coffee);
topics[3].addEventListener('click', Mohito);
topics[4].addEventListener('click', Lemonade);
topics[5].addEventListener('click', Milkshakes);
topics[6].addEventListener('click', Juices);
topics[7].addEventListener('click', Cakes);

function Tea() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(0).textContent === 'Tea') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }
}

function Hot_coffee() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(0).textContent === 'Hot Coffee') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }
}

function Ice_coffee() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(0).textContent === 'Ice Coffee') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }
}

function Mohito() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(0).textContent === 'Mohito') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }

}

function Lemonade() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(0).textContent === 'Lemonade') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }

}

function Milkshakes() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(0).textContent === 'Milkshakes') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }

}

function Juices() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(0).textContent === 'Juices') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }

}

function Cakes() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(0).textContent === 'Cakes') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }

}