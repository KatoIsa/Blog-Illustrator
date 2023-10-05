const App = {

    cards: () => { // function renderes cards onto the page ...
        const cardParent = _.Select('.cardsSection'); 
        const cardData = [
            'Understanding Illustrator',
            'Master Adobe Illustrator',
        ]
        
        // populates the strings in cardData array into html element
        for (i = 0; i < cardData.length; i++) {
            const card = _.HTMLcreate('div');
            _.addClass(card, 'card');
            card.innerHTML = `
                <div class="Title">
                    <p>
                        ${cardData[i]}
                    </p>
                </div>
            `
            cardParent.appendChild(card); 
        }

    },
    RandomImageGenerator: () => { // adds ransom imsges to the grid lay out of the cards 
        const randomImages = [
            "../assets/IllustratorIcon.png",
        ];

        const randomImageElements = document.querySelectorAll(".GridLayOut .card");

        randomImageElements.forEach(function (element) {
            const randomIndex = Math.floor(Math.random() * randomImages.length);
            const randomImageUrl = randomImages[randomIndex];
            element.style.backgroundImage = `url(${randomImageUrl})`;
        });
    },
    removeRandomImages: () => { // is added to event listener, to clear images from the card
        const randomImageElements = document.querySelectorAll(".card");
        randomImageElements.forEach(function (element) {
            element.style.backgroundImage = `unset`;
        });
    },
    Topicnumber: () => { // adds numbers to card elements in an ordered list kind of manner.
        const cards = document.querySelectorAll('.card');
        const cardNumber = cards.length;

        const topicNumber = document.querySelector('.topicNumber');
        topicNumber.innerText = cardNumber;

        for (i = 0; i < cards.length; i++) {
                const numberingDiv = document.createElement('div');
                numberingDiv.classList.add('numberingDiv');

                numberingDiv.innerHTML = i + 1;
                cards[i].appendChild(numberingDiv)
        }
    },

    ViewType: () => { // handles the gridView and ListVIew buttons
        const ListView = _.Select('.ListViewType');
        const GridView = _.Select('.GridviewType');

        _.Event(ListView, 'click', () => {
            _.addClass(ListView, 'active');
            _.removeClass(GridView, 'active');
            _.removeClass(_.Select('.cardsSection'), 'GridLayOut');
            _.addClass(_.Select('.cardsSection'), 'ListLayout');
            _.Select('.ViewType .type').innerHTML = `<tt>List</tt>`;
            App.removeRandomImages();
        }, true)

        _.Event(GridView, 'click', () => {
            _.removeClass(ListView, 'active');
            _.addClass(GridView, 'active');
            _.removeClass(_.Select('.cardsSection'), 'ListLayout');
            _.addClass(_.Select('.cardsSection'), 'GridLayOut');
            _.Select('.ViewType .type').innerHTML = `<tt>Grid</tt>`;
            App.RandomImageGenerator();
        }, true)
    },
    RedirectToContentPage: () => { // adds redirect buttons which link content page to index
        const cards = document.querySelectorAll('.card');
        const link = ['./content1.html','./content2.html'];

        for (i = 0; i < cards.length; i++) {
                const button = _.HTMLcreate('div');
                _.addClass(button, 'redirectButton')
                button.innerHTML = `<a href=${link[i]}><span></span></a>`;

                cards[i].appendChild(button);
                _.Event(cards[i], 'mouseover', () => {
                    _.addClass(button, 'showButton');
                }, true);
                _.Event(cards[i], 'mouseout', () => {
                    _.removeClass(button, 'showButton');
                }, true);
        }
    },
    init: () =>{App.cards();App.Topicnumber();App.ViewType();App.RedirectToContentPage();}
}
App.init();


