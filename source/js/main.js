var body = document.querySelector('.body');
var loginButtons = document.querySelectorAll('.js-open-login');
var loginModal = document.querySelector('.login-modal');
var closeLogin = document.querySelector('.js-close-login');
var name = document.querySelector('[name=email-name]');
var overlay = document.querySelectorAll('.overlay');
var header = document.querySelector('.page-header');
var burger = document.querySelector('.page-header__burger');
var navigationPopup = document.querySelector('.page-header__popup');
var filter = document.querySelector('.filter');
var filterButton = document.querySelector('.filter__button');
var filterClose = document.querySelector('.filter__button-close');
var filterOverlay = document.querySelector('.filter__overlay');
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
var pageFooter = document.querySelector('.page-footer');
var linksFooter = pageFooter.querySelectorAll('a');
var buttonFooter = pageFooter.querySelector('button');
var inputFooter = pageFooter.querySelector('input');
var breadcrumbs = document.querySelector('.catalog__slider');

  if (breadcrumbs) {
    var buttonsBread = breadcrumbs.querySelectorAll('button');
  }

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
    name.focus();
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

  function onOpenClick() {
    showLoginModal();

    if (loginModal !== 'login-modal--open' && window.outerWidth >= 1023) {
      bodyHidden();
    }
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

      localStorageData({
        userEmail: userEmail
      });
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

  function onCloseClick() {
    if (loginModal !== 'login-modal--open' && window.outerWidth >= 1023) {
      bodyVisible();
    }

    closeLoginModal();
  }

  function onCloseClickMobile() {
    closeLoginModal();
    // bodyHiddenMobile();
    if (navigationPopup !== 'page-header__popup--open' && loginModal !== 'login-modal--open') {
      bodyHidden();
    }
  }

  for (var i = 0; i < loginButtons.length; i++){
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
      onCloseClickMobile();
      onCloseClick();
      onClickCloseFilter();
    });
  });

  // Аккордеон вопросы

  questionsButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      item.parentNode.classList.toggle('questions__item--open');
    });
  });

  // Аккордеон фильтр

  filterButtons.forEach(function (array) {
    array.addEventListener('click', function () {
      var panel = array.nextElementSibling;
      var lastElement = array.lastElementChild;

      panel.classList.toggle('filter__accordion--active');
      lastElement.classList.toggle('filter__svg--active');
    });
  });

  // Открывает фильтр

  function showOverlay() {
    if (filter) {
      filter.classList.add('filter--open');
    }
  }

  function hiddenShowOverlay() {
    if (filter) {
      filter.classList.remove('filter--open');
    }
  }

  function showFilter() {
    filterOverlay.classList.add('filter__overlay--open');
    setBlur(buttonsBread);
    setBlur(linksFooter);
    buttonFooter.setAttribute('tabindex', '-1');
    inputFooter.setAttribute('tabindex', '-1');

  }

  function closeFilter() {
    if (filterOverlay) {
      filterOverlay.classList.remove('filter__overlay--open');
      removeBlur(buttonsBread);
      removeBlur(linksFooter);
      buttonFooter.removeAttribute('tabindex');
      inputFooter.removeAttribute('tabindex');
    }
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

  var catalogSwiper = document.querySelector('.new-jewelery__catalog');
  var breakpoint = window.matchMedia('(min-width: 768px)');

  let swiper;

  var initSwiper = () => {
    if (swiper) {
      swiper.destroy(true, true);
    }

    if (breakpoint.matches) {
      swiper = new Swiper(catalogSwiper, {
        loop: true,
        slidesPerView: 'auto',
        slidesPerGroup: 4,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          }
        },
      });
    } else {
      swiper = new Swiper(catalogSwiper, {
        slidesPerView: 'auto',
        slidesPerGroup: 2,

        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      });
    }
  };

  const initAdvantagesSlider = () => {
    if (catalogSwiper) {

      breakpoint.addListener(initSwiper);
      initSwiper();
    }
  };

window.addEventListener('DOMContentLoaded', () => {
  initAdvantagesSlider();
});
