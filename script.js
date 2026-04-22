const cardColumns = [
    document.getElementById('card-column-0'),
    document.getElementById('card-column-1'),
    document.getElementById('card-column-2')
];

const mainpage       = document.getElementById('mainpage');
const cardTemplate   = document.getElementById('card-template');

const fullDisplay    = document.getElementById('full-display');
const mainImage      = fullDisplay.querySelector('.main-image img');
const infoButton     = fullDisplay.querySelector('.info-button');
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
const colorsOperator = document.getElementById('colors-operator');
const colorsInput    = document.getElementById('colors-input');
const sizeOperator   = document.getElementById('size-operator');
const widthInput     = document.getElementById('width-input');
const heightInput    = document.getElementById('height-input');
const searchBar      = document.getElementById('search-bar');

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
        'colors': ['#040404', '#1f1f1f', '#2d2b2b', '#464545', '#535151', '#5f5d5d', '#7a7878', '#939292', '#b0adad', '#cdc8c8', '#fdf7f7']
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
        'colors': ['#000000', '#160f1f', '#321b2d', '#463641', '#786a6a', '#997e7a', '#c09b93', '#c4ada7', '#baaca9', '#69283e', '#804355', '#aa7273', '#171f36', '#3c3e55', '#5a6f80']
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
        'colors': ['#472828', '#945646', '#f78c45', '#ffe9c7', '#ecd5b7']
    },
    'v': {
        'title': 'V',
        'timestamp': '2025-06-03T02:17:47.996Z',
        'description': 'V from BTS as he appeared on a Vogue Korea magazine cover.',
        'id': 'v',
        'src': 'v.png',
        'likes': 81,
        'views': 656,
        'height': 160,
        'width': 144,
        'colors': ['#000000', '#92b4a6', '#ddebde', '#643e29', '#8a5e3d', '#a17858', '#c79c77', '#dfb288', '#fad0b1', '#874841']
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
        'colors': ['#000000', '#77778f', '#cfa7af', '#ffffff']
    },
    'may': {
        'title': 'May',
        'timestamp': '2024-04-14T00:37:56.996Z',
        'description': 'May from Pokémon Ruby/Sapphire, drawn with my 4-color Red Bean Paste palette.',
        'id': 'may',
        'src': 'may.png',
        'likes': 67,
        'views': 716,
        'height': 90,
        'width': 100,
        'colors': ['#1a1a1a', '#7a525f', '#d19494', '#faefeb']
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
        'colors': ['#1a1a1a', '#7a525f', '#d19494', '#faefeb']
    },
    'advance': {
        'title': 'Advance Wars!',
        'timestamp': '2023-08-29T04:41:09.996Z',
        'description': 'Nine 32x32 portraits of characters from Advance Wars, drawn with my 4-color Red Bean Paste palette.',
        'id': 'advance',
        'src': 'advance.png',
        'likes': 197,
        'views': 2172,
        'height': 256,
        'width': 227,
        'colors': ['#1a1a1a', '#7a525f', '#d19494', '#faefeb']
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
        'colors': ['#000000', '#b04828', '#c89060', '#ffffff']
    },
    'hey': {
        'title': 'Hey',
        'timestamp': '2025-05-13T05:42:00.267Z',
        'description': 'A small 1-bit portrait that I use as my profile picture!',
        'id': 'hey',
        'src': 'hey.png',
        'likes': 42,
        'views': 394,
        'height': 32,
        'width': 32,
        'colors': ['#1a1a1a', '#f2e9d9']
    },
    'totoro': {
        'title': 'Totoro',
        'timestamp': '2023-12-31T21:24:54.267Z',
        'description': 'A sprite of Totoro drawn in the style of Gameboy Color games!',
        'id': 'totoro',
        'src': 'totoro.png',
        'likes': 102,
        'views': 1027,
        'height': 56,
        'width': 56,
        'colors': ['#000000', '#77778f', '#cfa7af', '#ffffff']
    },
    'toriyama': {
        'title': 'Akira Toriyama',
        'timestamp': '2024-04-14T20:19:14.267Z',
        'description': 'Portrait of Akira Toriyama (1955 - 2024), the creator of Dragon Ball.',
        'id': 'toriyama',
        'src': 'toriyama.png',
        'likes': 540,
        'views': 4782,
        'height': 180,
        'width': 120,
        'colors': ['#000000', '#202020', '#303030', '#404040', '#505050', '#606060', '#707070', '#808080', '#909090', '#a0a0a0', '#b0b0b0', '#c0c0c0', '#d0d0d0', '#e0e0e0', '#f0f0f0', '#ffffff']
    },
    'happy_day': {
        'title': 'Happy Day!',
        'timestamp': '2023-06-16T07:48:10.267Z',
        'description': "A 1-bit animation of a desk. There's a cat too!",
        'id': 'happy_day',
        'src': 'happy_day.gif',
        'likes': 49,
        'views': 601,
        'height': 184,
        'width': 200,
        'colors': ['#1a1a1a', '#f2e9d9']
    },
    'blobby': {
        'title': 'Blob of... something?',
        'timestamp': '2023-08-18T04:24:59.267Z',
        'description': 'Some sort of fleshy octopus creature. It stares at you ominously...',
        'id': 'blobby',
        'src': 'blobby.png',
        'likes': 46,
        'views': 511,
        'height': 56,
        'width': 56,
        'colors': ['#000000', '#77778f', '#cfa7af', '#ffffff']
    },
    'craniac': {
        'title': 'Craniac',
        'timestamp': '2023-09-18T03:05:57.267Z',
        'description': 'Craniac - The ROBBER Pokemon. Craniacs rob people without being noticed using their long, thin beaks and keep stolen goods in their beloved cloth sacks. Where they get their cloth sacks is unknown.',
        'id': 'craniac',
        'src': 'craniac.png',
        'likes': 71,
        'views': 578,
        'height': 56,
        'width': 56,
        'colors': ['#000000', '#77778f', '#cfa7af', '#ffffff']
    },
    'gb_walk': {
        'title': 'Gameboy Walking Sprites',
        'timestamp': '2023-07-24T01:31:34.267Z',
        'description': 'Walking animations of me and people I know, in the style of Gameboy Pokémon sprites!',
        'id': 'gb_walk',
        'src': 'gb_walk.gif',
        'likes': 62,
        'views': 691,
        'height': 168,
        'width': 120,
        'colors': ['#114f79', '#f79ab7', '#fff0f2', '#fee3e9']
    },
    'slam': {
        'title': 'Slamcake',
        'timestamp': '2022-06-05T19:08:05.675Z',
        'description': 'A little pancake Pokémon that I made with the help of some of my friends! This was also one of the first pixel art drawings I made that I was actually proud of.',
        'id': 'slam',
        'src': 'slam.png',
        'likes': 170,
        'views': 1522,
        'height': 64,
        'width': 64,
        'colors': ['#000000', '#40403f', '#8a4c2a', '#9a613c', '#c59057', '#db5d23', '#b0491c', '#cb6200', '#dc8222', '#eac264', '#fff8d8']
    },
    'montblanc': {
        'title': 'Montblanc',
        'timestamp': '2024-06-10T23:26:17.675Z',
        'description': 'A sprite of Montblanc from Final Fantasy: Tactics Advance in a Gameboy style.',
        'id': 'montblanc',
        'src': 'montblanc.png',
        'likes': 56,
        'views': 659,
        'height': 56,
        'width': 56,
        'colors': ['#000000', '#77778f', '#cfa7af', '#ffffff']
    }
}

const sortFunctions = {
    newest: (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
    oldest: (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
    liked:  (a, b) => b.likes - a.likes,
    viewed: (a, b) => b.views - a.views
};

const comparisons = {
    at_least: (a, b) => a >= b,
    exactly:  (a, b) => a == b,
    at_most:  (a, b) => a <= b
}

var currentCards = [];
var currentCardIndex = 0;

var imageScale = [20, 40, 60, 85, 100];
var imageScaleIndex = 3;

// add cards to card columns
function addCards(e, cards) {
    if (!cards) {
        cards = Object.values(cardData);
        cards.sort(sortFunctions['newest']);
    }

    if (cards.length > 0) {
        currentCards = [];
        let heights = [0, 0, 0];
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

            const minIndex = heights.indexOf(Math.min(...heights));
            cardColumns[minIndex].appendChild(newCard);
            heights[minIndex] += card.height/card.width*100;
            currentCards.push(card);
        }
    }
    else {
        const errorMessage = document.createElement('div');
        errorMessage.id = 'error-message';
        const errorImage = document.createElement('img');
        errorImage.setAttribute('src', './assets/duo_shrug.png');
        errorImage.setAttribute('alt', 'duo_shrug');
        const errorText = document.createElement('p');
        errorText.textContent = 'No drawings were found.';

        errorMessage.appendChild(errorImage);
        errorMessage.appendChild(errorText);
        cardColumns[1].appendChild(errorMessage);
    }
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
    fullDisplay.querySelectorAll('p')[3].textContent = `Colors: ${card.colors.length}, Size: ${card.width}x${card.height}`;

    const palette = fullDisplay.querySelector('.palette');
    palette.innerHTML = '';
    for (let i=0; i<card.colors.length; i++) {
        const newColor = document.createElement('div');
        newColor.setAttribute('class', 'color');
        newColor.setAttribute('style', `background-color: ${card.colors[i]};`);
        newColor.setAttribute('title', card.colors[i]);
        palette.appendChild(newColor);
    }
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
    if (displaySidebar.classList.contains('hidden')) {
        // show sidebar and shift image left
        displaySidebar.classList.remove('hidden');
        mainImage.setAttribute('style', `transform: translateX(-${displaySidebar.clientWidth/2+12}px);`);
        zoom.setAttribute('style', `transform: translateX(-${displaySidebar.clientWidth/2+12}px);`);
        nextButton.setAttribute('style', `transform: translateX(-${displaySidebar.clientWidth+24}px);`);
    }
    else {
        hideDisplaySidebar();
    }
}

function hideDisplaySidebar() {
    // hide sidebar and shift image right
    displaySidebar.classList.add('hidden');
    mainImage.setAttribute('style', '');
    zoom.setAttribute('style', '');
    nextButton.setAttribute('style', '');
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

var zoomTimeoutId = null;
function showZoomButtons() {
    for (let i=0; i<5; i++) {
        [displayFooter, prevButton, nextButton, infoButton, closeButton][i].classList.remove('transparent');
    }
    clearTimeout(zoomTimeoutId);
    zoomTimeoutId = setTimeout(() => {
        for (let i=0; i<5; i++) {
            [displayFooter, prevButton, nextButton, infoButton, closeButton][i].classList.add('transparent');
        }
    }, 2000);
}

function toggleSortMenu() {
    sortMenu.classList.toggle('hidden');
}

function hideSortMenu(e) {
    if (!(sortButton.contains(e.target) || sortMenu.contains(e.target))) {
        sortMenu.classList.add('hidden');
    }
}

function updateCards() {
    const updatedCards = Object.values(cardData).filter(
        // filter by search bar input
        (a) => a.title.toLowerCase().includes(searchBar.value.trim().toLowerCase())
    ).filter(
        // filter by color count
        (a) => +colorsInput.value.trim() ? comparisons[colorsOperator.value](a.colors.length, colorsInput.value) : true
    ).filter(
        // filter by drawing size
        (a) => (+widthInput.value.trim() ? comparisons[sizeOperator.value](a.width, widthInput.value) : true)
            && (+heightInput.value.trim() ? comparisons[sizeOperator.value](a.height, heightInput.value) : true)
    );
    // sort by selected sort order
    updatedCards.sort(sortFunctions[sortMenu.querySelector('input[type="radio"]:checked').value]);

    cardColumns[0].innerHTML = '';
    cardColumns[1].innerHTML = '';
    cardColumns[2].innerHTML = '';
    addCards(0, updatedCards);
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

var timeoutId = null;
function onInput(e) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(updateCards, 200);
}

function typeableKeyPressed(e) {
    if (e.key.length === 1 && !(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
        && document.activeElement !== colorsInput && document.activeElement !== widthInput
        && document.activeElement !== heightInput) {
        searchBar.focus();
    }
}

function generatePalette(colors) {
    const palette = document.createElement('div');
    palette.setAttribute('class', 'palette');
    for (let i=0; i<4; i++) {
        const newColor = document.createElement('div');
        newColor.setAttribute('class', 'color');
        newColor.setAttribute('style', `background-color: ${colors[i]}`);
        palette.appendChild(newColor);
    }
}

// add event listeners
document.addEventListener('DOMContentLoaded', addCards);
fullDisplay.addEventListener('click', hideDisplay);
fullDisplay.addEventListener('mousemove', showZoomButtons);

fullDisplay.querySelector('.info-button').addEventListener('click', toggleDisplaySidebar);
displaySidebar.querySelector('button').addEventListener('click', hideDisplaySidebar);

zoomOutButton.addEventListener('click', zoomOutDisplayImage);
zoomInButton.addEventListener('click', zoomInDisplayImage);

sortButton.addEventListener('click', toggleSortMenu);
document.addEventListener('click', hideSortMenu);

for (let i=0; i<4; i++) {
    sortMenu.querySelectorAll('input')[i].addEventListener('click', updateCards);
}

colorsOperator.addEventListener('input', onInput);
colorsInput.addEventListener('input', onInput);
sizeOperator.addEventListener('input', onInput);
widthInput.addEventListener('input', onInput);
heightInput.addEventListener('input', onInput);

searchBar.addEventListener('input', onInput);
document.addEventListener('keydown', typeableKeyPressed);

prevButton.addEventListener('click', previousDrawing);
nextButton.addEventListener('click', nextDrawing);

// generatePalette(['#ffffff', '#ff0000', '#00ff00', '#0000ff']);

// NOTE TO SELF:
// add dimensions and colors to sidebar details