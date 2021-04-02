let sticky;
let dressCodeSectionTop;
const navigationMenu = document.getElementById('nav-list');
const frontPageWrapper = document.getElementById('front-page');
const dressCodeSection = document.getElementById('dress-code');
const dressCodeForSmallScreens = document.getElementById('dress-code-for-small-screens');

function showDressCode () {
  dressCodeSectionTop = dressCodeSection.offsetTop;
  if(window.pageYOffset <= dressCodeSectionTop) {
    dressCodeForSmallScreens.classList.add('dress-code-for-small-screens');
  } else {
    dressCodeForSmallScreens.classList.remove('dress-code-for-small-screens');
  }
}

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
  window.addEventListener('scroll', stickyHeader);
  setWidth();
  window.addEventListener('scroll', showDressCode);

}

window.onload = init;
