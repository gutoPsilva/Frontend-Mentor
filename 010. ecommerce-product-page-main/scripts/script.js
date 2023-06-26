const cartQuantityElement = document.querySelector(".quantity");
const addQuantityButton = document.querySelector(".icon-plus");
const removeQuantityButton = document.querySelector(".icon-minus");
const menuElement = document.querySelector(".menu-icon");
const closeMenuElement = document.querySelector(".icon-close");
const menuOverlay = document.querySelector('.menu-overlay');
const imageButtons = document.querySelectorAll("[data-carousel-button]");
const cartIconElement = document.querySelector(".cart-icon-container");
const cartPopup = document.querySelector('.cart-popup');
const productContainer = document.querySelector(".product-container");
const addToCartBtn = document.querySelector(".add-button");

let cartQuantity = JSON.parse(localStorage.getItem("cartQnt")) || 0;
let cartSpan = 0;
let inStock = 250;

const displayQuantity = () => {
  cartQuantityElement.textContent = cartSpan;
};

const saveStorage = () => {
  localStorage.setItem("cartQnt", JSON.stringify(cartQuantity));
};

const updateCart = () => {
  const cartNotification = document.querySelector(".cart-qnt-icon");
  if(cartQuantity > 0){
    cartNotification.textContent = cartQuantity;
    productContainer.style.justifyContent = 'space-between';
    productContainer.innerHTML = `
    <div class="product">
      <img class="checkout-image" src="images/image-product-1-thumbnail.jpg" alt="checkout-product">
      <div class="checkout-text">
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x ${cartQuantity} <span>$${(125.00 * cartQuantity).toFixed(2)}</span></p>
      </div>
      <img class="delete-button" src="images/icon-delete.svg" alt="icon-delete">
    </div>
    <button class="checkout-button">Checkout</button>
    `;
    const deleteButton = document.querySelector(".delete-button");
    deleteButton.addEventListener('click', () => {
      cartQuantity = 0;
      saveStorage();
      updateCart();
    });
  }
  else{
    cartNotification.textContent = '';
    productContainer.style.justifyContent = 'center';
    productContainer.textContent = 'Your cart is empty';
  }
};

displayQuantity();
updateCart();

addQuantityButton.addEventListener('click', () => {
  cartSpan += 1;
  displayQuantity();
});

removeQuantityButton.addEventListener('click', () => {
  if(cartSpan >= 1){
    cartSpan -= 1;
    displayQuantity();
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

// por alguma razão verificar o .style.display diretamente pelo CSS na primeira vez não funciona, então criei essa variável que vai 'agilizar' isso e ainda permite resetar o timer de 350ms caso a pessoa clique novamente
let shown = false;
let timeoutID;
cartIconElement.addEventListener('click', () => {
  if(!shown){
    cartPopup.style.display = "flex";
    setTimeout(() => cartPopup.style.opacity = '1', 1);
    clearInterval(timeoutID);
    shown = true;
  }else{
    cartPopup.style.opacity = "0";
    timeoutID = setTimeout(() => cartPopup.style.display = "none", 350); // .35s transition
    shown = false;
  }
});
    
addToCartBtn.addEventListener('click', () => {
  if((cartQuantity + cartSpan) <= inStock){
    cartQuantity += cartSpan;
  }else{
    alert(`We currently have only ${inStock} sneakers in stock :(`);
  }
  saveStorage();
  updateCart();
});

imageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
});