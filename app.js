const navigationMenu = document.getElementById('nav-list');
const frontPageWrapper = document.getElementById('front-page');
const dressCodeSection = document.getElementById('dress-code');
const dressCodeForSmallScreens = document.getElementById('dress-code-for-small-screens');
const dressCodeInsideDiv = document.getElementById('dress-code-inside-div');
const separatorBeforeDressCode = document.getElementById('separator-before-dress-code');
const closeButton = document.getElementById('close-button');
const coronaUpdateDiv = document.getElementById('corona-update');

//TODO: check if the screen is small (aka in smallest media query)
function showDressCode () {
  if(window.pageYOffset > separatorBeforeDressCode.offsetTop) {
    dressCodeInsideDiv.classList.add('small-screens');
  } else {
    dressCodeInsideDiv.classList.remove('small-screens');
  }
}

function stickyHeader () {
  let sticky = navigationMenu.offsetTop;

  if(window.pageYOffset > sticky) {
    navigationMenu.classList.add('sticky');
  } else {
    navigationMenu.classList.remove('sticky');
  }
}

// function setWidth () {
//   const frontPageWrapperWidth = frontPageWrapper.offsetWidth;
//   frontPageWrapperWidth = window.innerWidth;
// }

closeButton.addEventListener('click', () => coronaUpdateDiv.classList.add('dissappear'));

function init () {
  window.addEventListener('scroll', stickyHeader);
  // setWidth();
  window.addEventListener('scroll', showDressCode);

}

window.onload = init;
