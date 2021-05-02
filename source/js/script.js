const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const orderLink = document.querySelectorAll('.button-order');
const modalPopup = document.querySelector('.modal');
const closePopup = document.querySelector('.form-choice__button');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

for (let i = 0; i < orderLink.length; i++) {
  orderLink[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPopup.classList.add('modal-show');
  })
};

closePopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalPopup.classList.remove('modal-show');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
    }
  }
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 16
  }, {
      searchControlProvider: 'yandex#search'
  }),

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'ул. Большая Конюшенная, д. 19/8, офис 101',
      balloonContent: [
        '<div class="map__balloon">',
        '<img src="../img/mishka-logo-mobile.svg" alt="Логотип магазина">',
        '<p>Милые штуки ручной работы</p>',
        '</div>'
      ].join('')
  }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-33, -100]
  })

  myMap.geoObjects
      .add(myPlacemark);
});
