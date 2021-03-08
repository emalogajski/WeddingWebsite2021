let navigationMenu;
const dresscodeInstructions = document.getElementById('how-to-dress');
const dresscodeImage = document.getElementById('comfy-shoes-img');

function stickyHeader () {
  navigationMenu = document.getElementById('nav-list');
  sticky = navigationMenu.offsetTop;

  if(window.pageYOffset > sticky) {
    navigationMenu.classList.add('sticky');
  } else {
    navigationMenu.classList.remove('sticky');
  }
}

function showHideDresscode () {
  dresscodeInstructions.classList.toggle('how-to-dress');
  dresscodeImage.classList.toggle('how-to-dress-img');
}

function init () {
  //Function for making header sticky
  window.addEventListener('scroll', stickyHeader);
}

window.onload = init;

//Function for showing dress code on hover
dresscodeImage.addEventListener('mouseover', showHideDresscode);