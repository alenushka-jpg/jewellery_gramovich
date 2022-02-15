'use strict';

(function () {
  var body = document.querySelector('.body');
  var loginButtons = document.querySelectorAll('.js-open-login');
  var loginModal = document.querySelector('.login-modal');
  var closeLogin = document.querySelector('.js-close-login');
  var name = document.querySelector('[name=email-name]');
  var overlay = document.querySelectorAll('.overlay');
  var header = document.querySelector('.page-header');
  var burger = document.querySelector('.page-header__burger');
  var navigationPopup = document.querySelector('.page-header__popup');

  var prevSlideButton = document.querySelector('.js-slider-prev');
  var nextSlideButton = document.querySelector('.js-slider-next');
  var slidesRack = document.querySelector('.js-rack');
  var sliderPagination = document.querySelector('.js-slider-pagination');

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
  var pageFooterForm = document.querySelector('.page-footer__email');
  var emailFooter = document.querySelector('.js-email-footer');
  var submitSubscription = document.querySelector('.submit-subscription');
  var subscriptionResult = document.querySelector('.page-footer__result');

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

  // Слайдер
  var newInItems = [
    {width: '270', height: '284', href: '#', src: './img/purple-gemstone-necklace.jpg', srcset: './img/purple-gemstone-necklace.jpg 1x, ./img/purple-gemstone-necklace@2x.jpg 2x', webp: './img/purple-gemstone-necklace.webp 1x, ./img/purple-gemstone-necklace@2x.webp 2x', alt: 'Necklace with amethyst', title: 'Necklace with amethyst', price: '$ 145'},
    {width: '270', height: '284', href: '#', src: './img/layered-choker-necklace.jpg', srcset: './img/layered-choker-necklace.jpg 1x, ./img/layered-choker-necklace@2x.jpg 2x', webp: './img/layered-choker-necklace.webp 1x, ./img/layered-choker-necklace@2x.webp 2x', alt: 'Layered choker', title: 'Layered choker', price: '$ 115'},
    {width: '270', height: '284', href: '#', src: './img/dainty-gold-necklace.jpg', srcset: './img/dainty-gold-necklace.jpg 1x, ./img/dainty-gold-necklace@2x.jpg 2x', webp: './img/dainty-gold-necklace.webp 1x, ./img/dainty-gold-necklace@2x.webp 2x', alt: 'Gold chain', title: 'Gold chain', price: '$ 215'},
    {width: '270', height: '284', href: '#', src: './img/galaxy-earrings.jpg', srcset: './img/galaxy-earrings.jpg 1x, ./img/galaxy-earrings@2x.jpg 2x', webp: './img/galaxy-earrings.webp 1x, ./img/galaxy-earrings@2x.webp 2x', alt: 'Galaxy earrings', title: 'Galaxy earrings', price: '$ 95'},

    {width: '270', height: '284', href: '#', src: './img/purple-gemstone-necklace.jpg', srcset: './img/purple-gemstone-necklace.jpg 1x, ./img/purple-gemstone-necklace@2x.jpg 2x', webp: './img/purple-gemstone-necklace.webp 1x, ./img/purple-gemstone-necklace@2x.webp 2x', alt: 'Necklace with amethyst', title: 'Necklace with amethyst', price: '$ 145'},
    {width: '270', height: '284', href: '#', src: './img/layered-choker-necklace.jpg', srcset: './img/layered-choker-necklace.jpg 1x, ./img/layered-choker-necklace@2x.jpg 2x', webp: './img/layered-choker-necklace.webp 1x, ./img/layered-choker-necklace@2x.webp 2x', alt: 'Layered choker', title: 'Layered choker', price: '$ 115'},
    {width: '270', height: '284', href: '#', src: './img/purple-gemstone-necklace.jpg', srcset: './img/purple-gemstone-necklace.jpg 1x, ./img/purple-gemstone-necklace@2x.jpg 2x', webp: './img/purple-gemstone-necklace.webp 1x, ./img/purple-gemstone-necklace@2x.webp 2x', alt: 'Necklace with amethyst', title: 'Necklace with amethyst', price: '$ 145'},
    {width: '270', height: '284', href: '#', src: './img/galaxy-earrings.jpg', srcset: './img/galaxy-earrings.jpg 1x, ./img/galaxy-earrings@2x.jpg 2x', webp: './img/galaxy-earrings.webp 1x, ./img/galaxy-earrings@2x.webp 2x', alt: 'Galaxy earrings', title: 'Galaxy earrings', price: '$ 95'},
    {width: '270', height: '284', href: '#', src: './img/galaxy-earrings.jpg', srcset: './img/galaxy-earrings.jpg 1x, ./img/galaxy-earrings@2x.jpg 2x', webp: './img/galaxy-earrings.webp 1x, ./img/galaxy-earrings@2x.webp 2x', alt: 'Galaxy earrings', title: 'Galaxy earrings', price: '$ 95'},
    {width: '270', height: '284', href: '#', src: './img/dainty-gold-necklace.jpg', srcset: './img/dainty-gold-necklace.jpg 1x, ./img/dainty-gold-necklace@2x.jpg 2x', webp: './img/dainty-gold-necklace.webp 1x, ./img/dainty-gold-necklace@2x.webp 2x', alt: 'Gold chain', title: 'Gold chain', price: '$ 215'},
    {width: '270', height: '284', href: '#', src: './img/galaxy-earrings.jpg', srcset: './img/galaxy-earrings.jpg 1x, ./img/galaxy-earrings@2x.jpg 2x', webp: './img/galaxy-earrings.webp 1x, ./img/galaxy-earrings@2x.webp 2x', alt: 'Galaxy earrings', title: 'Galaxy earrings', price: '$ 95'},
  ];

  function createSlider() {
    var currentPage = 1;
    var ITEM_PER_SLIDE_DESKTOP = 4;
    var ITEM_PER_SLIDE_MOBILE = 2;
    var pages = [];
    var currentMode = window.outerWidth <= 1023 ? 'mobile' : 'desktop';
    createPagination();

    function scrollNext() {
      scrollToPage(currentPage + 1);
    }

    function scrollPrev() {
      scrollToPage(currentPage - 1);
    }

    function scrollToPage(pageNum) {
      if (pageNum < 1 || pageNum > pages.length) {
        return;
      }

      slidesRack.scrollLeft = (pageNum - 1) * (slidesRack.clientWidth + 30);

      if (pages[currentPage - 1]) {
        pages[currentPage - 1].classList.remove('active');
      }
      currentPage = pageNum;
      pages[currentPage - 1].classList.add('active');
    }

    disableSliderButton();

    prevSlideButton.addEventListener('click', scrollPrev);
    nextSlideButton.addEventListener('click', function () {
      scrollNext();
      disableSliderButton();
    });


    function disableSliderButton() {
      if (currentPage === 1) {
        prevSlideButton.classList.add('button-disabled');
      } else {
        prevSlideButton.classList.remove('button-disabled');
      }

      if (currentPage === pages.length) {
        nextSlideButton.classList.add('button-disabled');
      } else {
        nextSlideButton.classList.remove('button-disabled');
      }
    }

    function createPagination() {
      var itemsPerSlide = currentMode === 'mobile' ? ITEM_PER_SLIDE_MOBILE : ITEM_PER_SLIDE_DESKTOP;
      var pagesQuantity = Math.ceil(slidesRack.children.length / itemsPerSlide);

      for (var i = 1; i <= pagesQuantity; i++) {
        var button = document.createElement('button');
        button.classList.add('js-breadcrumbs-button');
        button.setAttribute('type', 'button');
        button.textContent = i;

        if (window.outerWidth >= 768) {
          button.addEventListener('click', onPageNumClick(i));
        }

        pages.push(button);
        sliderPagination.appendChild(button);
      }

      scrollToPage(1);
    }

    function onPageNumClick(pageNum) {
      return function () {
        scrollToPage(pageNum);
      };
    }

    function destroyPagination() {
      sliderPagination.innerHTML = '';
      pages = [];
    }

    function onResize() {
      var newMode = window.outerWidth <= 1023 ? 'mobile' : 'desktop';

      if (newMode !== currentMode) {
        currentMode = newMode;
        destroyPagination();
        createPagination();
      }
    }

    window.addEventListener('resize', onResize);

    // MOBILE
    var startTouchEventX = null;
    var direction = null;
    var startScrollLeft = 0;

    function onTouchStart(e) {
      slidesRack.style.scrollBehavior = 'unset';
      startScrollLeft = slidesRack.scrollLeft;
      startTouchEventX = e.changedTouches[0].clientX;
    }

    function onTouchEnd(e) {
      if (startTouchEventX === null) {
        return;
      }

      slidesRack.style.scrollBehavior = 'smooth';

      if (e.changedTouches[0].clientX - startTouchEventX > 0) {
        direction = 'right';
      } else {
        direction = 'left';
      }

      if (direction === 'left') {
        scrollNext();
      }

      if (direction === 'right') {
        scrollPrev();
      }
    }

    function onTouchMove(e) {
      var delta = e.changedTouches[0].clientX - startTouchEventX;
      slidesRack.scrollLeft = startScrollLeft - delta;
    }

    if (currentMode === 'mobile') {
      slidesRack.addEventListener('touchstart', onTouchStart);
      slidesRack.addEventListener('touchend', onTouchEnd);
      slidesRack.addEventListener('touchmove', onTouchMove);
    }
  }

  function renderSlides(array) {
    array.forEach(function (v) {
      var newSlide = createListEl(v.href, v.webp, v.src, v.srcset, v.title, v.price, v.width, v.height, v.alt);
      slidesRack.appendChild(newSlide);
    });
  }

  if (slidesRack) {
    renderSlides(newInItems);
  }

  function createListEl(href, webp, src, srcset, title, price, width, height, alt) {
    var liEl = document.createElement('li');
    var linkEl = document.createElement('a');
    var pictureEl = document.createElement('picture');
    var imgEl = document.createElement('img');
    var sourceElWebp = document.createElement('source');
    var sourceElJpeg = document.createElement('source');
    var titleEl = document.createElement('h3');
    var priceEl = document.createElement('p');

    linkEl.setAttribute('href', href);

    sourceElWebp.setAttribute('srcset', webp);
    sourceElWebp.setAttribute('type', 'image/webp');
    sourceElJpeg.setAttribute('srcset', srcset);
    sourceElJpeg.setAttribute('type', 'image/lpeg');

    imgEl.setAttribute('src', src);
    imgEl.setAttribute('alt', alt);
    imgEl.setAttribute('width', width);
    imgEl.setAttribute('height', height);
    titleEl.textContent = title;
    priceEl.textContent = price;

    liEl.appendChild(linkEl);
    linkEl.appendChild(pictureEl);
    linkEl.appendChild(titleEl);
    linkEl.appendChild(priceEl);
    pictureEl.appendChild(sourceElWebp);
    pictureEl.appendChild(sourceElJpeg);
    pictureEl.appendChild(imgEl);
    return liEl;
  }

  if (prevSlideButton && nextSlideButton && slidesRack && sliderPagination) {
    createSlider();
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

  // function localStorageFooter(data) {
  //   localStorage.setItem('email', data.subEmail);
  // }

  function showSubsciptionResult() {
    subscriptionResult.style.display = 'flex';
  }

  function validationFooter(subEmail) {
    var valid = true;
    var newLocal = subEmail.trim() === 0;

    if (newLocal) {
      valid = false;
    } else {
      submitSubscription.addEventListener('click', showSubsciptionResult);
    }

    return valid;
  }

  function localStorageData(data) {
    localStorage.setItem('email', data.userEmail);
  }

  function onSubmitFormFooter(e) {
    e.preventDefault();
    var subEmail = emailFooter.value;

    if (validationFooter(subEmail)) {
      subscriptionResult.style.display = 'flex';
    }
  }

  if (pageFooterForm) {
    pageFooterForm.addEventListener('submit', onSubmitFormFooter);
  }

  // Закрывает модалки при нажатии esc
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      onClickCloseFilter();
    }
  });
})();
