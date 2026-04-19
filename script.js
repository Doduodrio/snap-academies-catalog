const cardColumns = [
    document.getElementById('card-column-0'),
    document.getElementById('card-column-1'),
    document.getElementById('card-column-2')
];

const mainpage       = document.getElementById('mainpage');
const cardTemplate   = document.getElementById('card-template');

const fullDisplay    = document.getElementById('full-display');
const mainImage      = fullDisplay.querySelector('.main-image img');
const closeButton    = fullDisplay.querySelector('.close-button');
const displaySidebar = fullDisplay.querySelector('.sidebar');
const zoom           = fullDisplay.querySelector('.zoom');
const zoomOutButton  = fullDisplay.querySelectorAll('.zoom button')[0];
const zoomInButton   = fullDisplay.querySelectorAll('.zoom button')[1];
const prevButton     = fullDisplay.querySelector('.previous-button');
const nextButton     = fullDisplay.querySelector('.next-button');
const displayFooter  = document.getElementById('display-footer');

const sortButton     = document.getElementById('sort-button');
const sortMenu       = document.getElementById('sort-menu');

const cardData = {
    'dpr_ian_mito': {
        'title': 'DPR IAN Mito',
        'timestamp': '2026-02-16T06:07:44.996Z',
        'description': 'A monochrome portrait of the artist DPR IAN as his character MITO.',
        'id': 'dpr_ian_mito',
        'src': 'dpr_ian_mito.png',
        'likes': 54,
        'views': 336,
        'height': 64,
        'width': 64,
        'colors': 4
    },
    'dpr_ian': {
        'title': 'DPR IAN',
        'timestamp': '2025-11-01T07:22:10.996Z',
        'description': 'A portrait of my favorite artist, DPR IAN, in an outfit for his SAINT album.',
        'id': 'dpr_ian',
        'src': 'dpr_ian.png',
        'likes': 300,
        'views': 1972,
        'height': 144,
        'width': 144,
        'colors': 14
    },
    'halloween_gbc_sprites': {
        'title': 'Halloween GBC Sprites',
        'timestamp': '2025-06-23T07:59:10.996Z',
        'description': 'Sprites and portraits of little Halloween characters.',
        'id': 'halloween_gbc_sprites',
        'src': 'halloween_gbc_sprites.png',
        'likes': 54,
        'views': 457,
        'height': 152,
        'width': 152,
        'colors': 5
    },
    'v': {
        'title': 'V',
        'timestamp': '2025-06-03T02:17:47.996Z',
        'description': 'V from BTS as he appeared on a Vogue Korea magazine cover.',
        'id': 'v',
        'src': 'v.png',
        'likes': 81,
        'views': 656,
        'height': 144,
        'width': 160,
        'colors': 10
    },
    'hands_study': {
        'title': 'Hands Study',
        'timestamp': '2024-11-22T16:25:39.996Z',
        'description': 'I wanted to get better at drawing hands, so I drew a bunch of them in different angles.',
        'id': 'hands_study',
        'src': 'hands_study.png',
        'likes': 662,
        'views': 5446,
        'height': 184,
        'width': 184,
        'colors': 4
    },
    'may': {
        'title': 'May',
        'timestamp': '2024-04-14T00:37:56.996Z',
        'description': 'May from Pokémon Ruby/Sapphire, drawn with my 4-color Red Bean Paste palette.',
        'id': 'may',
        'src': 'may.png',
        'likes': 67,
        'views': 716,
        'height': 100,
        'width': 90,
        'colors': 4
    },
    'clockworkgrn_portraits': {
        'title': 'clockworkgrn Portraits',
        'timestamp': '2024-07-24T07:08:26.996Z',
        'description': "I drew my friend clockworkgrn's original characters for Art Fight 2024!",
        'id': 'clockworkgrn_portraits',
        'src': 'clockworkgrn_portraits.png',
        'likes': 63,
        'views': 743,
        'height': 188,
        'width': 188,
        'colors': 4
    },
    'advance': {
        'title': 'Advance Wars!',
        'timestamp': '2023-08-29T04:41:09.996Z',
        'description': 'Nine 32x32 portraits of characters from Advance Wars, drawn with my 4-color Red Bean Paste palette.',
        'id': 'advance',
        'src': 'advance.png',
        'likes': 197,
        'views': 2172,
        'height': 227,
        'width': 256,
        'colors': 4
    },
    'ranger': {
        'title': 'Pokémon Ranger',
        'timestamp': '2023-06-23T01:06:18.996Z',
        'description': 'A 56x56 sprite of a Pokémon ranger in the style of Gameboy Color games.',
        'id': 'ranger',
        'src': 'ranger.png',
        'likes': 35,
        'views': 329,
        'height': 56,
        'width': 56,
        'colors': 4
    }
}

const sortFunctions = [
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp), // newest
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp), // oldest
    (a, b) => b.likes - a.likes,                             // most liked
    (a, b) => b.views - a.views                              // most viewed
];

var currentCards = [];
var currentCardIndex = 0;

var imageScale = [20, 40, 60, 85, 100];
var imageScaleIndex = 3;

// add cards to card columns
function addCards(e, cards) {
    if (!cards) {
        cards = Object.values(cardData);
        cards.sort(sortFunctions[0]);
    }

    currentCards = [];
    for (let c=0; c<cards.length; c++) {
        const card = cards[c];
        const newCard = cardTemplate.cloneNode(true);
        newCard.setAttribute('id', card.id);
        newCard.setAttribute('style', '');

        // set card image
        const cardImage = newCard.querySelector('img');
        cardImage.setAttribute('src', `./assets/${card.src}`);
        cardImage.setAttribute('alt', card.id);

        // set card stats
        newCard.querySelectorAll('p')[0].textContent = card.views;
        newCard.querySelectorAll('p')[1].textContent = card.likes;
        newCard.querySelectorAll('p')[2].textContent = new Date(card.timestamp).toLocaleDateString();

        newCard.querySelector('h4').textContent = card.title;

        newCard.addEventListener('click', displayCard);

        cardColumns[c%3].appendChild(newCard);
        currentCards.push(card);
    }
    console.log(currentCards);
}

function displayCard(e, card) {
    if (!card) {
        // function called by clicking on a card
        card = cardData[this.id];
        currentCardIndex = currentCards.findIndex((c) => c.id === this.id);
        updateArrowButtons();

        // align display to screen
        fullDisplay.setAttribute('style', `top: ${window.scrollY}px`);

        // lock screen
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.setAttribute('style', 'overflow: hidden;');
        mainpage.setAttribute('style', `padding-right: ${scrollbarWidth+16}px;`);
    }

    // set display image
    mainImage.setAttribute('src', `./assets/${card.src}`);
    mainImage.setAttribute('alt', `./assets/${card.id}`);

    // set card info
    fullDisplay.querySelector('h2').textContent = card.title;
    fullDisplay.querySelectorAll('p')[0].textContent = card.views;
    fullDisplay.querySelectorAll('p')[1].textContent = card.likes;

    const timestamp = fullDisplay.querySelector('time');
    timestamp.setAttribute('datetime', card.timestamp);
    timestamp.textContent = new Date(card.timestamp).toLocaleDateString();
    
    fullDisplay.querySelectorAll('p')[2].textContent = card.description;
}

function hideDisplay(e) {
    // only hide if background or close button was clicked
    if (e.target === fullDisplay || e.target === fullDisplay.querySelector('.main-image') || closeButton.contains(e.target)) {
        fullDisplay.setAttribute('style', 'display: none;');

        // allow scrolling again
        document.body.setAttribute('style', '');
        mainpage.setAttribute('style', '');
    }
}

function toggleDisplaySidebar() {
    if (displaySidebar.getAttribute('style') === 'display: none;') {
        // show sidebar and shift image left
        displaySidebar.setAttribute('style', '');
        mainImage.setAttribute('style', `transform: translateX(-${displaySidebar.clientWidth/2+12}px);`);
        zoom.setAttribute('style', `transform: translateX(-${displaySidebar.clientWidth/2+12}px);`);
    }
    else {
        hideDisplaySidebar();
    }
}

function hideDisplaySidebar() {
    // hide sidebar and shift image right
    displaySidebar.setAttribute('style', 'display: none;');
    mainImage.setAttribute('style', '');
    zoom.setAttribute('style', '');
}

function zoomOutDisplayImage() {
    if (imageScaleIndex > 0) {
        mainImage.parentElement.setAttribute('style', `height: ${imageScale[--imageScaleIndex]}%;`);
        if (imageScaleIndex === 0) {
            // disable zoom out button if at smallest zoom
            zoomOutButton.classList.toggle('disabled');
        }
        else if (imageScaleIndex === imageScale.length-2) {
            // enable zoom in button if no longer at largest zoom
            zoomInButton.classList.toggle('disabled');
        }
    }
}

function zoomInDisplayImage() {
    if (imageScaleIndex < imageScale.length-1) {
        mainImage.parentElement.setAttribute('style', `height: ${imageScale[++imageScaleIndex]}%;`);
        if (imageScaleIndex === imageScale.length-1) {
            // disable zoom in button if at largest zoom
            zoomInButton.classList.toggle('disabled');
        }
        else if (imageScaleIndex === 1) {
            // enable zoom out button if no longer at smallest zoom
            zoomOutButton.classList.toggle('disabled');
        }
    }
}

function showZoomButtons() {
}

function toggleSortMenu() {
    sortMenu.classList.toggle('hidden');
}

function hideSortMenu(e) {
    if (!(sortButton.contains(e.target) || sortMenu.contains(e.target))) {
        sortMenu.classList.add('hidden');
    }
}

function sortCards() {
    const sortedCards = Object.values(cardData);
    sortedCards.sort(sortFunctions[this.value]);

    cardColumns[0].innerHTML = '';
    cardColumns[1].innerHTML = '';
    cardColumns[2].innerHTML = '';
    addCards(0, sortedCards);
}

function previousDrawing() {
    if (currentCardIndex > 0) {
        displayCard(0, currentCards[--currentCardIndex]);
        updateArrowButtons();
    }
}

function nextDrawing() {
    if (currentCardIndex < currentCards.length-1) {
        displayCard(0, currentCards[++currentCardIndex]);
        updateArrowButtons();
    }
}

function updateArrowButtons() {
    if (currentCardIndex === 0) {
        prevButton.classList.add('disabled');
    }
    if (currentCardIndex > 0) {
        prevButton.classList.remove('disabled');
    }
    if (currentCardIndex < currentCards.length-1) {
        nextButton.classList.remove('disabled');
    }
    if (currentCardIndex === currentCards.length-1) {
        nextButton.classList.add('disabled');
    }
}

// add event listeners
document.addEventListener('DOMContentLoaded', addCards);
fullDisplay.addEventListener('click', hideDisplay);

fullDisplay.querySelector('.info-button').addEventListener('click', toggleDisplaySidebar);
displaySidebar.querySelector('button').addEventListener('click', hideDisplaySidebar);

zoomOutButton.addEventListener('click', zoomOutDisplayImage);
zoomInButton.addEventListener('click', zoomInDisplayImage);

sortButton.addEventListener('click', toggleSortMenu);
document.addEventListener('click', hideSortMenu);

for (let i=0; i<4; i++) {
    sortMenu.querySelectorAll('input')[i].addEventListener('click', sortCards);
}

prevButton.addEventListener('click', previousDrawing);
nextButton.addEventListener('click', nextDrawing);

// NOTE TO SELF: add arrows to switch between drawings (use currentCards)
// also add filtering by dimensions and colors
// also add search bar
// also add dimensions and colors to sidebar details