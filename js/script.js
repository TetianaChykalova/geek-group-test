const topArticle = [
    {
        'image-url': 'img/article-01.png',
        'top': 'топ',
        'brand': 'Louis Vuitton',
        'name': 'Темно-сині джинси Louis Vuitton',
        'price': '5 499',
        'sale': '3 799',
        'geo': 'Херсон',
        'seller-photo': 'img/seller-1.png',
        'seller-name': 'LoveBrand',
    },

    {
        'image-url': 'img/article-02.png',
        'top': 'топ',
        'brand': 'Thom Browne',
        'name': 'Чорний піджак Thom Browne',
        'price': '11 999',
        'sale': '8 599',
        'geo': 'Хмельницький',
        'seller-photo': 'img/seller-2.png',
        'seller-name': 'SellForMen',
    },
]
const allArticle = [
    {
        'image-url': 'img/article-03.png',
        'brand': 'Canali',
        'name': 'Вовняний піджак Canali',
        'price': '4 999',
        'sale': '2 599',
        'geo': 'Хмельницький',
        'seller-photo': 'img/seller-2.png',
        'seller-name': 'SellForMen',
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
    },

    {
        'image-url': 'img/article-05.png',
        'brand': 'Elena Ghiselini',
        'eco': 'organic',
        'name': 'Сумка з декором Elena Ghiselini',
        'price': '1 999',
        'sale': '1 599',
        'geo': 'Дніпро',
        'seller-photo': 'img/user.png',
        'seller-name': 'BrandDear',
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
    },
]

let cardsList = document.querySelector('#cards-list');
let cardTemplate = document.querySelector('#card-template').innerHTML;
let cardTemplateTop = document.querySelector('#card-template-top').innerHTML;

//cards
function addTopArticle() {
    for (let i = 0; i < topArticle.length; i++) {
        const articleItem = topArticle[i];
        let html = Mustache.render(cardTemplateTop, articleItem);
        cardsList.insertAdjacentHTML("beforeend", html);
    }
}
addTopArticle();

function addArticle() {
    for (let i = 0; i < allArticle.length; i++) {
        const articleItem = allArticle[i];
        let html = Mustache.render(cardTemplate, articleItem);
        cardsList.insertAdjacentHTML("beforeend", html);
    }
}
addArticle();

//price
let filterPrice = document.getElementById("userPrice");
let filterPriceValue = document.getElementById("sidebar-price-value");
filterPriceValue.innerHTML = filterPrice.value;

filterPrice.oninput = function() {
    filterPriceValue.innerHTML = this.value;
}