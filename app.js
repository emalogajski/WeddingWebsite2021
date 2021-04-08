let sticky;
let separatorBeforeDressCodeOffSetTop;
const navigationMenu = document.getElementById('nav-list');
const frontPageWrapper = document.getElementById('front-page');
const dressCodeSection = document.getElementById('dress-code');
const dressCodeForSmallScreens = document.getElementById('dress-code-for-small-screens');
const dressCodeInsideDiv = document.getElementById('dress-code-inside-div');
const separatorBeforeDressCode = document.getElementById('separator-before-dress-code');

function showDressCode () {
  separatorBeforeDressCodeOffSetTop = separatorBeforeDressCode.offsetTop;
  if(window.pageYOffset > separatorBeforeDressCodeOffSetTop) {
    dressCodeInsideDiv.classList.add('small-screens');
  } else {
    dressCodeInsideDiv.classList.remove('small-screens');
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
