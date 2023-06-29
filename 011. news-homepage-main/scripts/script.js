const menuElement = document.querySelector("#menu");
const closeMenu = document.querySelector("#close-menu");
const menuOverlay = document.querySelector(".overlay-menu");
const navElement = document.querySelector("#nav-menu");

window.onresize = window.onload = () => {
  const width = window.innerWidth;
  width >= 600 ? closeMenu.style.display = 'none' : closeMenu.style.display = 'block';
};

// controller
menuElement.addEventListener('click', () => {
  menuOverlay.style.display = 'block';
  setTimeout(() => menuOverlay.style.opacity = '1', 10);
  navElement.style.right = '0';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menuOverlay.style.opacity = '0';

  setTimeout(() => {
    menuOverlay.style.display = 'none';
    closeMenu.style.display = 'none';
  } , 350); // .35s opacity transition

  navElement.style.right = '-67svw';
});