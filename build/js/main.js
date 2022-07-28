const body = document.querySelector('.body');
const loginButtons = document.querySelectorAll('.js-open-login');
const loginModal = document.querySelector('.login-modal');
const closeLogin = document.querySelector('.js-close-login');
const name = document.querySelector('[name=email-name]');
const overlay = document.querySelectorAll('.overlay');
const header = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');
const navigationPopup = document.querySelector('.page-header__popup');
const filter = document.querySelector('.filter');
const filterButton = document.querySelector('.filter__button');
const filterClose = document.querySelector('.filter__button-close');
const filterOverlay = document.querySelector('.filter__overlay');
const questionsButtons = document.querySelectorAll('.js-questions-button');
const filterButtons = document.querySelectorAll('.filter__accordion-button');
const emailLogin = document.querySelector('.js-email-login');
const passwordLogin = document.querySelector('.js-email-password');
const resultModal = document.querySelector('.js-result-modal');
const submitbutton = document.querySelector('.js-login-submit');
const bodyMain = document.querySelector('.body__main');
const links = bodyMain.querySelectorAll('a');
const inputs = bodyMain.querySelectorAll('input');
const buttons = bodyMain.querySelectorAll('button');
const labels = bodyMain.querySelectorAll('label');
const pageFooter = document.querySelector('.page-footer');
const linksFooter = pageFooter.querySelectorAll('a');
const buttonFooter = pageFooter.querySelector('button');
const inputFooter = pageFooter.querySelector('input');
const breadcrumbs = document.querySelector('.catalog__slider');

  if (breadcrumbs) {
    const buttonsBread = breadcrumbs.querySelectorAll('button');
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
    const valid = true;
    const newLocal = email.trim() === 0 || password === true;

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
    const userEmail = emailLogin.value;
    const userPassword = passwordLogin.value;

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

  for (const i = 0; i < loginButtons.length; i++) {
    const element = loginButtons[i];

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
      const panel = array.nextElementSibling;
      const lastElement = array.lastElementChild;

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

  const catalogSwiper = document.querySelector('.new-jewelery__catalog');
  const breakpoint = window.matchMedia('(max-width: 768px)');
  let swiper;

  const initSwiper = () => {
    if (swiper) {
      swiper.destroy(true, true);
    }

    swiper = new Swiper(serviceSwiper, {
      loop: true,
      slidesPerView: 'auto',

      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
          '<span class="' + totalClass + '"></span>';
        },
      },
    });
  };
