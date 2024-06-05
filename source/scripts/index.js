/* в этот файл добавляет скрипты*/
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('page__body--nojs');

  const navMain = document.querySelector('.main-nav');
  if(navMain) {
    const navToggle = navMain.querySelector('.main-nav__toggle');
    navToggle.addEventListener('click', () => navMain.classList.toggle('main-nav--open'));
  }
});
