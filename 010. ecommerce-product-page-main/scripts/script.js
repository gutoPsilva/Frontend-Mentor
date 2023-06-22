const cartQuantityElement = document.querySelector(".quantity");
const addQuantityButton = document.querySelector(".icon-plus");
const removeQuantityButton = document.querySelector(".icon-minus");
const menuElement = document.querySelector(".menu-icon");
const closeMenuElement = document.querySelector(".icon-close");
const menuOverlay = document.querySelector('.menu-overlay');

let cartQuantity = JSON.parse(localStorage.getItem("cartQnt")) || 0;

const saveStorageDisplay = () => {
  localStorage.setItem("cartQnt", JSON.stringify(cartQuantity));
  cartQuantityElement.textContent = cartQuantity;
};

saveStorageDisplay();

addQuantityButton.addEventListener('click', () => {
  cartQuantity += 1;
  saveStorageDisplay();
});

removeQuantityButton.addEventListener('click', () => {
  if(cartQuantity >= 1){
    cartQuantity -= 1;
    saveStorageDisplay();
  }else{
    alert("Cart quantity must be atleast 0!");
  }
});

menuElement.addEventListener('click', () => {
  menuOverlay.style.display = 'block';
  setTimeout(() => {
    menuOverlay.style.opacity = '1';
  }, 1);
});

closeMenuElement.addEventListener('click', () => {
  menuOverlay.style.opacity = '0';
  setTimeout(() => {
    menuOverlay.style.display = 'none';
  }, 350); // .35s transition
});