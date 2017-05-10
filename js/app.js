
window.addEventListener('load', function () {
    let ShopView = require('./views/shop');
    let ShopModel = require('./models/shop');

    let shop = new ShopModel();
    shop.total = 0;
    shop.tires = 2;
    shop.paint = 'red';
    shop.exhaust = false; // broken
    shop.horsepower = 120;
    shop.mpg = 33;

    let view = new ShopView({
        el: document.querySelector('main'),
        model: shop,
    });

    view.render();

    setupButtons(shop);
});

function setupButtons(model) {
    let tireBtn = document.querySelector('#fix-tire');
    let paintBtn = document.querySelector('#fix-paint');
    let exhaustBtn = document.querySelector('#fix-exhaust');
    let hpBtn = document.querySelector('#fix-horsepower');
    let mpgBtn = document.querySelector('#fix-mpg');

    tireBtn.addEventListener('click', function () {
        model.fixTire();
    });

    paintBtn.addEventListener('click', function () {
        model.paintCar();
    });

    exhaustBtn.addEventListener('click', function () {
        model.fixExhaust();
    });

    hpBtn.addEventListener('click', function () {
        model.boostHp();
    });

    mpgBtn.addEventListener('click', function () {
        model.boostMpg();
    });
}