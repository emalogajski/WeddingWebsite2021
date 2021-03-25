let sticky;
let home;
const navigationMenu = document.getElementById('nav-list');
const frontPageWrapper = document.getElementById('front-page');

function stickyHeader () {
  sticky = navigationMenu.offsetTop;

  if(window.pageYOffset > sticky) {
    navigationMenu.classList.add('sticky');
  } else {
    navigationMenu.classList.remove('sticky');
  }
}

function setWidth () {
  const frontPageWrapperWidth = frontPageWrapper.offsetWidth;
  window.innerWidth = frontPageWrapperWidth;
}

function init () {
  //Function for making header sticky
  window.addEventListener('scroll', stickyHeader);
  setWidth();
}

window.onload = init;