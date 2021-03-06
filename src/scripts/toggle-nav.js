(function () {
  var page = document.querySelector('.page');
  var menuButton = document.querySelector('.header__menu-button');
  var headerSide = document.querySelector('.header__side');

  var onMenuButtonClick = function (evt) {
    evt.preventDefault();
    page.classList.toggle('js-disabled');
    page.classList.toggle('js-opened');

    if (document.documentElement.style.overflow === 'hidden') {
      document.documentElement.style.overflow = 'auto';
    } else {
      document.documentElement.style.overflow = 'hidden';
    }
  }

  menuButton.addEventListener('click', onMenuButtonClick);
})();
