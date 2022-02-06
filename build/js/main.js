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
  var body = document.querySelector('.body');

  // Открывает модальное окно логин

  function showLoginModal() {
    loginModal.classList.add('login-modal--open');
  }

  function closeLoginModal() {
    loginModal.classList.remove('login-modal--open');
  }

  function bodyHidden() {
    body.classList.add('body--hidden')
  }

  function bodyVisible() {
    body.classList.remove('body--hidden')
  }

  function onOpenClick() {
    showLoginModal();
    bodyHidden();
    name.focus();
  }

  function onCloseClick() {
    closeLoginModal();
    bodyHidden()
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

  function showHeader() {
    header.classList.toggle('page-header--open');
  }

  function onClickToggle() {
    showNavigation();
    showHeader();
    bodyVisible
  }

  burger.addEventListener('click', onClickToggle);

  // Закрывает модалки при нажатии esc
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      onCloseClick();
      onClickToggle();
      showHeader();
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
