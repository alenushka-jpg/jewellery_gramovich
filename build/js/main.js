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
  var filterButton = document.querySelector('.filter__button');
  var filterClose = document.querySelector('.filter__button-close');
  var filterOverlay = document.querySelector('.filter__overlay');
  var filter = document.querySelector('.filter');
  var questionsButtons = document.querySelectorAll('.js-questions-button');
  var filterButtons = document.querySelectorAll('.filter__accordion-button');

  var bodyMain = document.querySelector('.body__main');
  var links = bodyMain.querySelectorAll('a');
  var inputs = bodyMain.querySelectorAll('input');
  var buttons = bodyMain.querySelectorAll('button');
  var labels = bodyMain.querySelectorAll('label');

  function setBlur(e) {
    e.forEach(function (v) {
      v.setAttribute('tabindex', '-1');
    });
  }

  function removeBlur(e) {
    e.forEach(function (v) {
      v.removeAttribute('tabindex');
    });
  }

  // Открывает модальное окно логин

  function showLoginModal() {
    loginModal.classList.add('login-modal--open');

    setBlur(links);
    setBlur(inputs);
    setBlur(buttons);
    setBlur(labels);

    // if (loginModal !== 'login-modal--open') {

    // }
  }

  function closeLoginModal() {
    loginModal.classList.remove('login-modal--open');
    removeBlur(links);
    removeBlur(inputs);
    removeBlur(buttons);
    removeBlur(labels);
  }

  function bodyHidden() {
    body.classList.add('body--hidden');
  }

  function bodyVisible() {
    body.classList.remove('body--hidden');
  }

  function onOpenClick() {
    showLoginModal();
    name.focus();

    if (loginModal !== 'login-modal--open' && window.outerWidth >= 1023) {
      bodyHidden();
    }
  }

  function onCloseClick() {
    closeLoginModal();
    bodyVisible();

    if (loginModal !== 'login-modal--open' && window.outerWidth >= 1023) {
      bodyVisible();
    }
  }

  function onCloseClickMobile() {
    closeLoginModal();
  }

  for (var i = 0; i < loginButtons.length; i++) {
    var element = loginButtons[i];

    element.addEventListener('click', function () {
      onOpenClick();
    });
  }

  if (closeLogin) {
    closeLogin.addEventListener('click', onCloseClick);
  }

  // Открывает выпадающее меню

  function showNavigation() {
    navigationPopup.classList.toggle('page-header__popup--open');
  }

  function showHeader() {
    header.classList.toggle('page-header--open');
  }

  function bodyHiddenMobile() {
    if (body !== 'body') {
      body.classList.toggle('body--hidden');
    }
  }

  function onClickToggle() {
    showNavigation();
    showHeader();
    bodyHiddenMobile();
  }

  burger.addEventListener('click', onClickToggle);

  // Закрывает модалки при нажатии esc
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      onCloseClick();
    }
  });

  // Закрывает модалки при нажатии на overlay
  overlay.forEach(function (v) {
    v.addEventListener('click', function () {
      if (loginModal !== 'login-modal--open' && window.outerWidth <= 1023) {
        onCloseClickMobile();
      }

      onCloseClick();
      onClickCloseFilter();
    });
  });

  // Аккордеон вопросы

  questionsButtons.forEach(function (item) {
    item.addEventListener('click', function() {
      item.parentNode.classList.toggle('questions__item--open');
    });
  });

  // Аккордеон фильтр

  filterButtons.forEach(function (array) {
    array.addEventListener('click', function() {
      var panel = this.nextElementSibling;
      panel.classList.toggle('filter__accordion--active');
    });
  });

  // Открывает фильтр

  function showOverlay() {
    filter.classList.add('filter--open');
  }

  function hiddenShowOverlay() {
    filter.classList.remove('filter--open');
  }

  function showFilter() {
    filterOverlay.classList.add('filter__overlay--open');
  }

  function closeFilter() {
    filterOverlay.classList.remove('filter__overlay--open');
  }

  function onClickFilter() {
    showFilter();
    bodyHidden();
    showOverlay();
  }

  function onClickCloseFilter() {
    closeFilter();
    bodyVisible();
    hiddenShowOverlay();
  }

  if (filterButton) {
    filterButton.addEventListener('click', onClickFilter);
  }

  if (filterClose) {
    filterClose.addEventListener('click', onClickCloseFilter);
  }

  // Закрывает модалки при нажатии esc
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      onClickCloseFilter();
    }
  });
})();
