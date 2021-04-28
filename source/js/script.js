const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const orderLink = document.querySelector('.button-order');
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

orderLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalPopup.classList.add('modal-show');
});

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
