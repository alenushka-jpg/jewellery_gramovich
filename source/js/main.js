'use strict';

(function () {
  var loginButtons = document.querySelectorAll('.js-open-login');
  var loginModal = document.querySelector('.login-modal');
  var closeLogin = document.querySelector('.js-close-login');
  var name = document.querySelector('[name=email-name]');
  var overlay = document.querySelectorAll('.overlay');
  var header = document.querySelector('.page-header');
  var burger = document.querySelector('.page-header__burger');
  var navigationPopup = document.querySelector('.page-header__popup');

  // Открывает модальное окно логин

  function showLoginModal() {
    loginModal.classList.add('login-modal--open');
  }

  function closeLoginModal() {
    loginModal.classList.remove('login-modal--open');
  }

  function bodyHidden() {
    document.body.style.overflow = 'hidden';
  }

  function visibleBody() {
    document.body.style.overflow = 'visible';
  }

  function onOpenClick() {
    showLoginModal();
    bodyHidden();
    name.focus();
  }

  function onCloseClick() {
    closeLoginModal();
    visibleBody()
  }

  for (var i = 0; i < loginButtons.length; i++) {
    var element = loginButtons[i];

    element.addEventListener('click', function () {
      onOpenClick();
    });
  }

  //Открывает выпадающее меню

  function showNavigation() {
    navigationPopup.classList.toggle('page-header__popup--open');
  }

  function onClickToggle() {
    showNavigation();
    header.classList.toggle('page-header--open');
    bodyHidden();
  }

  burger.addEventListener('click', onClickToggle);

  // Закрывает модалки при нажатии esc
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      onCloseClick();
      onClickToggle()
    }
  });

  // Закрывает модалки при нажатии на overlay
  overlay.forEach(function (v) {
    v.addEventListener('click', function () {
      onCloseClick();
    });
  });

  closeLogin.addEventListener('click', onCloseClick);
})();
