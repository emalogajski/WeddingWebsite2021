let navigationMenu;

function stickyHeader () {
  navigationMenu = document.getElementById('nav-list');
  sticky = navigationMenu.offsetTop;

  if(window.pageYOffset > sticky) {
    navigationMenu.classList.add('sticky');
  } else {
    navigationMenu.classList.remove('sticky');
  }
}

function init () {
  //Function for making header sticky
  window.addEventListener('scroll', stickyHeader);
  
}

window.onload = init;