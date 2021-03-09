let navigationMenu;
const dresscodeInstructions = document.getElementById('how-to-dress');
const dresscodeDiv = document.getElementById('dress-code');
const dresscodeTitle = document.getElementById('dress-code-title');
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

// function showHideDresscode () {
//   dresscodeInstructions.classList.toggle('how-to-dress');
//   dresscodeImage.classList.toggle('how-to-dress-img');
//   dresscodeTitle.classList.toggle('alternate');
// }

function showDresscode () {
  dresscodeInstructions.classList.add('how-to-dress');
  dresscodeImage.classList.add('how-to-dress-img');
  dresscodeTitle.classList.add('alternate');
  dresscodeTitle.classList.remove('dress-code-title');
}

function hideDresscode () {
  dresscodeInstructions.classList.remove('how-to-dress');
  dresscodeImage.classList.remove('how-to-dress-img');
  dresscodeTitle.classList.remove('alternate');
  dresscodeTitle.classList.add('dress-code-title');
}

function init () {
  //Function for making header sticky
  window.addEventListener('scroll', stickyHeader);
  
  //Function for showing dress code on hover
  dresscodeImage.addEventListener('mouseenter', showDresscode);
  dresscodeImage.addEventListener('mouseout', hideDresscode);
}

window.onload = init;


