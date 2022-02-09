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

  var emailLogin = document.querySelector('.js-email-login');
  var passwordLogin = document.querySelector('.js-email-password');
  var resultModal = document.querySelector('.js-result-modal');
  var submitbutton = document.querySelector('.js-login-submit');

  var bodyMain = document.querySelector('.body__main');
  var links = bodyMain.querySelectorAll('a');
  var inputs = bodyMain.querySelectorAll('input');
  var buttons = bodyMain.querySelectorAll('button');
  var labels = bodyMain.querySelectorAll('label');

  var breadcrumbs = document.querySelector('.catalog__slider');
  var buttonsBread = breadcrumbs.querySelectorAll('button');

  var pageFooter = document.querySelector('.page-footer');
  var linksFooter = pageFooter.querySelectorAll('a');
  var buttonFooter = pageFooter.querySelector('button');
  var inputFooter = pageFooter.querySelector('input');
  var labelFooter = pageFooter.querySelector('label');

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
  }

  function closeLoginModal() {
    loginModal.classList.remove('login-modal--open');
    removeBlur(links);
    removeBlur(inputs);
    removeBlur(buttons);
    removeBlur(labels);
  }


  function validation(email, password) {
    var valid = true;
    var newLocal = email.trim() === 0 || password === true;

    if (newLocal) {
      valid = false;
    } else {
      submitbutton.addEventListener('click', showQuestionsResult);
    }

    return valid;
  }

  function showQuestionsResult() {
    resultModal.style.display = 'flex';
  }

  function localStorageData(data) {
    localStorage.setItem('email', data.userEmail);
  }

  function onSubmitModalForm(e) {
    e.preventDefault();
    var userEmail = emailLogin.value;
    var userPassword = passwordLogin.value;

    if (validation(userEmail, userPassword)) {
      resultModal.style.display = 'flex';

      localStorageData ({
        userEmail: userEmail
      })
    }
  }

  if (loginModal) {
    loginModal.addEventListener('submit', onSubmitModalForm);
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
      var element = array.lastElementChild;

      panel.classList.toggle('filter__accordion--active');
      element.classList.toggle('filter__svg--active');
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
    setBlur(buttonsBread);
  }

  function closeFilter() {
    filterOverlay.classList.remove('filter__overlay--open');
    removeBlur(buttonsBread);
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
