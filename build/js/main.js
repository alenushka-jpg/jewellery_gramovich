'use strict';

(function () {
  var loginButtons = document.querySelectorAll('.js-open-login');
  var loginModal = document.querySelector('.login-modal');
  var closeLogin = document.querySelector('.js-close-login');
  var name = document.querySelector('[name=email-name]');
  var overlay = document.querySelectorAll('.overlay');

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


  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      onCloseClick();
    }
  });

  overlay.forEach(function (v) {
    v.addEventListener('click', function () {
      onCloseClick();
    });
  });

  closeLogin.addEventListener('click', onCloseClick);
})();
