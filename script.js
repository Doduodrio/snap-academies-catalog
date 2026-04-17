const cardColumns = [
    document.getElementById('card-column-0'),
    document.getElementById('card-column-1'),
    document.getElementById('card-column-2')
];
const cardTemplate = document.getElementById('card-template');

const cardData = {
    'DPR IAN Mito': {
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
    'DPR IAN': {
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
    'Halloween GBC Sprites': {
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
    'V': {
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
    'Hands Study': {
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
    'May': {
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
    'clockworkgrn Portraits': {
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
    'Advance Wars!': {
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
    'Pokémon Ranger': {
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

// add cards to card columns
function addCards() {
    let i=0;
    for (let c in cardData) {
        const newCard = cardTemplate.cloneNode(true);
        newCard.setAttribute('id', cardData[c].id);
        newCard.setAttribute('style', '');

        const cardImage = newCard.querySelector('img');
        cardImage.setAttribute('src', `./assets/${cardData[c].src}`);
        cardImage.setAttribute('alt', cardData[c].id);

        newCard.querySelector('h4').textContent = cardData[c].title;

        newCard.querySelectorAll('p')[0].textContent = cardData[c].views;
        newCard.querySelectorAll('p')[1].textContent = cardData[c].likes;

        cardColumns[i++%3].appendChild(newCard);
    }
}

document.addEventListener("DOMContentLoaded", addCards);