const allArticle = [
    {
        'image-url': 'img/article-01.png',
        'brand': 'Louis Vuitton',
        'name': 'Темно-сині джинси Louis Vuitton',
        'price': '5 499',
        'sale': '3 799',
        'geo': 'Херсон',
        'seller-photo': 'img/seller-1.png',
        'seller-name': 'LoveBrand',
        'top': 'img/icons/top.png',
    },

    {
        'image-url': 'img/article-02.png',
        'brand': 'Thom Browne',
        'name': 'Чорний піджак Thom Browne',
        'price': '11 999',
        'sale': '8 599',
        'geo': 'Хмельницький',
        'seller-photo': 'img/seller-2.png',
        'seller-name': 'SellForMen',
        'top': 'img/icons/top.png',
    },

    {
        'image-url': 'img/article-03.png',
        'brand': 'Canali',
        'name': 'Вовняний піджак Canali',
        'price': '4 999',
        'sale': '2 599',
        'geo': 'Хмельницький',
        'seller-photo': 'img/seller-2.png',
        'seller-name': 'SellForMen',
        'top': 'img/icons/no-top.png',
    },

    {
        'image-url': 'img/article-04.png',
        'brand': 'Louis Vuitton',
        'name': 'Клатч Louis Vuitton Limelight',
        'price': '4 999',
        'sale': '3 499',
        'geo': 'Дніпро',
        'seller-photo': 'img/user.png',
        'seller-name': 'BrandDear',
        'top': 'img/icons/no-top.png',
    },

    {
        'image-url': 'img/article-05.png',
        'brand': 'Elena Ghiselini',
        'organic': 'img/icons/organic.png',
        'name': 'Сумка з декором Elena Ghiselini',
        'price': '1 999',
        'sale': '1 599',
        'geo': 'Дніпро',
        'seller-photo': 'img/user.png',
        'seller-name': 'BrandDear',
        'top': 'img/icons/no-top.png',
    },

    {
        'image-url': 'img/article-06.png',
        'brand': 'Acne',
        'name': 'Бомпер Acne на блискавці',
        'price': '5 999',
        'sale': '4 199',
        'geo': 'Київ',
        'seller-photo': 'img/seller-3.png',
        'seller-name': 'AlexAlex',
        'top': 'img/icons/no-top.png',
    },

    {
        'image-url': 'img/article-07.png',
        'brand': 'Gucci',
        'name': 'Довга сукня Gucci',
        'price': '11 999',
        'sale': '8 599',
        'geo': 'Рівне',
        'seller-photo': 'img/seller-4.png',
        'seller-name': 'SellBuy',
        'top': 'img/icons/no-top.png',
    },

    {
        'image-url': 'img/article-08.png',
        'brand': 'Chanel',
        'name': 'Помаранчевий бомпер Woolrich',
        'price': '1 999',
        'sale': '1 599',
        'geo': 'Кропивницький',
        'seller-photo': 'img/seller-5.png',
        'seller-name': 'DevaSofia',
        'top': 'img/icons/no-top.png',
    },

    {
        'image-url': 'img/article-09.png',
        'brand': 'Hache',
        'name': 'Салатове пальто Hache',
        'price': '5 999',
        'sale': '4 199',
        'geo': 'Київ',
        'seller-photo': 'img/seller-1.png',
        'seller-name': 'LoveBrand',
        'top': 'img/icons/no-top.png',
    },
]

let cardsList = document.querySelector('#cards-list');
let cardTemplate = document.querySelector('#card-template').innerHTML;

let burgerMenu = document.querySelector('#burger-menu');
let burgerLine = document.querySelector('#burger-line');
let burgerContent = document.querySelector('#burger-content');

let sliderFilterPrice = document.querySelector('#slider-price');
let priceValueFrom = document.querySelector('#price-from');
let priceValueTo = document.querySelector('#price-to');

//cards
function addArticle() {
    for (let i = 0; i < allArticle.length; i++) {
        const articleItem = allArticle[i];
        let html = Mustache.render(cardTemplate, articleItem);
        cardsList.insertAdjacentHTML("beforeend", html);
    }
}
addArticle();

//burger
burgerLine.addEventListener('click', activeBurger)
function activeBurger () {
    burgerContent.classList.toggle('active');
    document.querySelector('body').classList.toggle('overflow-hidden');
}

//price
if(sliderFilterPrice) {
    noUiSlider.create(sliderFilterPrice, {
        start: [980, 20465],
        connect: true,
        step: 10,
        range: {
            'min': 10,
            'max': 40000
        },
    });

    let priceValue = [priceValueFrom, priceValueTo];

    sliderFilterPrice.noUiSlider.on('update', function (values, handle) {
        priceValue[handle].textContent = Math.round(values[handle]);
    })
}

