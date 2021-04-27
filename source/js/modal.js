const orderLink = document.querySelector('.button-order');
const modalPopup = document.querySelector('.modal');
const closePopup = document.querySelector('.form-choice__button');

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


