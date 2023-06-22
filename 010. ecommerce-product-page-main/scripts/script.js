const cartQuantityElement = document.querySelector(".quantity");
const addQuantityButton = document.querySelector(".icon-plus");
const removeQuantityButton = document.querySelector(".icon-minus");

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