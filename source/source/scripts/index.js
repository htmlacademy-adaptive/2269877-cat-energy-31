/* в этот файл добавляет скрипты*/
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('pagebody--nojs');

  const navMain = document.querySelector('.main-nav');
  if(navMain) {
    const navToggle = navMain.querySelector('.main-nav__toggle');
   // const navWrapper = navMain.querySelector('.main-nav__wrapper');
    navToggle.addEventListener('click', () => navMain.classList.toggle('main-nav--open'));
  }
});
